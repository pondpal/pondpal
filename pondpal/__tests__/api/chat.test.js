import handler from '../../pages/api/chat'

function mockRes() {
  const res = {}
  res.status = jest.fn().mockReturnValue(res)
  res.json = jest.fn().mockReturnValue(res)
  res.end = jest.fn().mockReturnValue(res)
  return res
}

function mockReq({ method = 'POST', ip = 'chat-test-ip', body = {} } = {}) {
  return { method, headers: { 'x-forwarded-for': ip }, socket: {}, body }
}

describe('/api/chat', () => {
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
    await handler(mockReq({ ip: 'chat-no-key', body: { message: 'hi' } }), res)
    expect(res.status).toHaveBeenCalledWith(500)
    expect(res.json).toHaveBeenCalledWith({ result: 'Error: API key not found.' })
  })

  test('returns 400 when no message is provided', async () => {
    const res = mockRes()
    await handler(mockReq({ ip: 'chat-no-message', body: {} }), res)
    expect(res.status).toHaveBeenCalledWith(400)
  })

  test('returns the AI response on success', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ content: [{ text: 'Hello there!' }] })
    })
    const res = mockRes()
    await handler(mockReq({ ip: 'chat-success', body: { message: 'hi' } }), res)
    expect(res.status).toHaveBeenCalledWith(200)
    expect(res.json).toHaveBeenCalledWith({ result: 'Hello there!' })
  })

  test('surfaces the Anthropic API error message', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: false,
      status: 401,
      json: async () => ({ error: { message: 'invalid x-api-key' } })
    })
    const res = mockRes()
    await handler(mockReq({ ip: 'chat-api-error', body: { message: 'hi' } }), res)
    expect(res.status).toHaveBeenCalledWith(500)
    expect(res.json).toHaveBeenCalledWith({ result: 'API Error 401: invalid x-api-key' })
  })

  test('blocks the 11th request from the same IP within a minute', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ content: [{ text: 'ok' }] })
    })
    const ip = 'chat-rate-limited'
    for (let i = 0; i < 10; i++) {
      await handler(mockReq({ ip, body: { message: 'hi' } }), mockRes())
    }
    const res = mockRes()
    await handler(mockReq({ ip, body: { message: 'hi' } }), res)
    expect(res.status).toHaveBeenCalledWith(429)
  })
})
