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
    await handler(mockReq({ ip: 'zone-no-key', body: { location: '90210' } }), res)
    expect(res.status).toHaveBeenCalledWith(500)
    expect(res.json).toHaveBeenCalledWith({ result: 'Error: API key not found.' })
  })

  test('rejects a location containing disallowed characters', async () => {
    const res = mockRes()
    await handler(mockReq({ ip: 'zone-bad-location', body: { location: '<script>alert(1)</script>' } }), res)
    expect(res.status).toHaveBeenCalledWith(400)
  })

  test('rejects a missing location', async () => {
    const res = mockRes()
    await handler(mockReq({ ip: 'zone-missing-location', body: {} }), res)
    expect(res.status).toHaveBeenCalledWith(400)
  })

  test('accepts a plain US ZIP code', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ content: [{ text: '7' }] })
    })
    const res = mockRes()
    await handler(mockReq({ ip: 'zone-us-zip', body: { location: '90210' } }), res)
    expect(res.status).toHaveBeenCalledWith(200)
    expect(res.json).toHaveBeenCalledWith({ zone: 7 })
  })

  test('accepts an international postal code with letters and a country name', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ content: [{ text: '8' }] })
    })
    const res = mockRes()
    await handler(mockReq({ ip: 'zone-intl', body: { location: 'SW1A 1AA, UK' } }), res)
    expect(res.status).toHaveBeenCalledWith(200)
    expect(res.json).toHaveBeenCalledWith({ zone: 8 })

    const sentBody = JSON.parse(global.fetch.mock.calls[0][1].body)
    expect(sentBody.messages[0].content).toContain('SW1A 1AA, UK')
  })

  test('clamps an out-of-range zone into the supported 3-11 range', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ content: [{ text: '2' }] })
    })
    const res = mockRes()
    await handler(mockReq({ ip: 'zone-clamp', body: { location: '99701' } }), res)
    expect(res.json).toHaveBeenCalledWith({ zone: 3 })
  })

  test('handles an unparseable AI response gracefully', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ content: [{ text: 'I am not sure' }] })
    })
    const res = mockRes()
    await handler(mockReq({ ip: 'zone-unparseable', body: { location: '90210' } }), res)
    expect(res.status).toHaveBeenCalledWith(200)
    expect(res.json).toHaveBeenCalledWith({ result: 'Could not determine a zone for that location — please select your zone manually below.' })
  })

  test('surfaces the Anthropic API error message', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: false,
      status: 401,
      json: async () => ({ error: { message: 'invalid x-api-key' } })
    })
    const res = mockRes()
    await handler(mockReq({ ip: 'zone-api-error', body: { location: '90210' } }), res)
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
      await handler(mockReq({ ip, body: { location: '90210' } }), mockRes())
    }
    const res = mockRes()
    await handler(mockReq({ ip, body: { location: '90210' } }), res)
    expect(res.status).toHaveBeenCalledWith(429)
  })
})
