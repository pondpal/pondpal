import handler from '../../pages/api/zone-lookup'

function mockRes() {
  const res = {}
  res.status = jest.fn().mockReturnValue(res)
  res.json = jest.fn().mockReturnValue(res)
  res.end = jest.fn().mockReturnValue(res)
  return res
}

function mockReq({ method = 'POST', ip = 'zone-test-ip', body = {} } = {}) {
  return { method, headers: { 'x-forwarded-for': ip }, socket: {}, body }
}

describe('/api/zone-lookup', () => {
  const originalFetch = global.fetch
  const originalKey = process.env.pp_api

  beforeEach(() => {
    process.env.pp_api = 'test-key'
  })

  afterEach(() => {
    global.fetch = originalFetch
    process.env.pp_api = originalKey
  })

  test('rejects non-POST requests', async () => {
    const res = mockRes()
    await handler(mockReq({ method: 'GET' }), res)
    expect(res.status).toHaveBeenCalledWith(405)
    expect(res.end).toHaveBeenCalled()
  })

  test('returns 500 when the API key is missing', async () => {
    delete process.env.pp_api
    const res = mockRes()
    await handler(mockReq({ ip: 'zone-no-key', body: { zip: '90210' } }), res)
    expect(res.status).toHaveBeenCalledWith(500)
    expect(res.json).toHaveBeenCalledWith({ result: 'Error: API key not found.' })
  })

  test('rejects a malformed ZIP code', async () => {
    const res = mockRes()
    await handler(mockReq({ ip: 'zone-bad-zip', body: { zip: 'abcde' } }), res)
    expect(res.status).toHaveBeenCalledWith(400)
  })

  test('rejects a missing ZIP code', async () => {
    const res = mockRes()
    await handler(mockReq({ ip: 'zone-missing-zip', body: {} }), res)
    expect(res.status).toHaveBeenCalledWith(400)
  })

  test('returns the parsed zone on success', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ content: [{ text: '7' }] })
    })
    const res = mockRes()
    await handler(mockReq({ ip: 'zone-success', body: { zip: '90210' } }), res)
    expect(res.status).toHaveBeenCalledWith(200)
    expect(res.json).toHaveBeenCalledWith({ zone: 7 })
  })

  test('clamps an out-of-range zone into the supported 3-11 range', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ content: [{ text: '2' }] })
    })
    const res = mockRes()
    await handler(mockReq({ ip: 'zone-clamp', body: { zip: '99701' } }), res)
    expect(res.json).toHaveBeenCalledWith({ zone: 3 })
  })

  test('handles an unparseable AI response gracefully', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ content: [{ text: 'I am not sure' }] })
    })
    const res = mockRes()
    await handler(mockReq({ ip: 'zone-unparseable', body: { zip: '90210' } }), res)
    expect(res.status).toHaveBeenCalledWith(200)
    expect(res.json).toHaveBeenCalledWith({ result: 'Could not determine a zone for that ZIP code — please select your zone manually below.' })
  })

  test('surfaces the Anthropic API error message', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: false,
      status: 401,
      json: async () => ({ error: { message: 'invalid x-api-key' } })
    })
    const res = mockRes()
    await handler(mockReq({ ip: 'zone-api-error', body: { zip: '90210' } }), res)
    expect(res.status).toHaveBeenCalledWith(500)
    expect(res.json).toHaveBeenCalledWith({ result: 'API Error 401: invalid x-api-key' })
  })

  test('blocks the 11th request from the same IP within a minute', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ content: [{ text: '6' }] })
    })
    const ip = 'zone-rate-limited'
    for (let i = 0; i < 10; i++) {
      await handler(mockReq({ ip, body: { zip: '90210' } }), mockRes())
    }
    const res = mockRes()
    await handler(mockReq({ ip, body: { zip: '90210' } }), res)
    expect(res.status).toHaveBeenCalledWith(429)
  })
})
