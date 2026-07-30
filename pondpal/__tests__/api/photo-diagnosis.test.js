import handler from '../../pages/api/photo-diagnosis'

function mockRes() {
  const res = {}
  res.status = jest.fn().mockReturnValue(res)
  res.json = jest.fn().mockReturnValue(res)
  res.end = jest.fn().mockReturnValue(res)
  return res
}

function mockReq({ method = 'POST', ip = 'photo-test-ip', body = {} } = {}) {
  return { method, headers: { 'x-forwarded-for': ip }, socket: {}, body }
}

const fakeImage = 'ZmFrZWltYWdlZGF0YQ==' // base64 for "fakeimagedata"

describe('/api/photo-diagnosis', () => {
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
    await handler(mockReq({ ip: 'photo-no-key', body: { image: fakeImage, mimeType: 'image/jpeg' } }), res)
    expect(res.status).toHaveBeenCalledWith(500)
    expect(res.json).toHaveBeenCalledWith({ result: 'Error: API key not found.' })
  })

  test('rejects a missing image', async () => {
    const res = mockRes()
    await handler(mockReq({ ip: 'photo-no-image', body: {} }), res)
    expect(res.status).toHaveBeenCalledWith(400)
  })

  test('sends the image as a vision content block with a fallback mime type', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ content: [{ text: 'Looks healthy!' }] })
    })
    const res = mockRes()
    await handler(mockReq({ ip: 'photo-mimetype', body: { image: fakeImage, mimeType: 'application/octet-stream' } }), res)
    expect(res.status).toHaveBeenCalledWith(200)

    const sentBody = JSON.parse(global.fetch.mock.calls[0][1].body)
    const content = sentBody.messages[0].content
    expect(content[0].type).toBe('image')
    expect(content[0].source.type).toBe('base64')
    expect(content[0].source.media_type).toBe('image/jpeg')
    expect(content[0].source.data).toBe(fakeImage)
    expect(content[1].type).toBe('text')
  })

  test('preserves an allowed mime type and includes fish type / notes context', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ content: [{ text: 'ok' }] })
    })
    const res = mockRes()
    await handler(mockReq({
      ip: 'photo-context',
      body: { image: fakeImage, mimeType: 'image/png', fishType: 'koi', notes: 'not eating for 2 days' }
    }), res)

    const sentBody = JSON.parse(global.fetch.mock.calls[0][1].body)
    expect(sentBody.messages[0].content[0].source.media_type).toBe('image/png')
    const promptText = sentBody.messages[0].content[1].text
    expect(promptText).toContain('Fish type: koi')
    expect(promptText).toContain('not eating for 2 days')
  })

  test('returns the AI response on success', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ content: [{ text: 'I see a small white spot near the dorsal fin.' }] })
    })
    const res = mockRes()
    await handler(mockReq({ ip: 'photo-success', body: { image: fakeImage, mimeType: 'image/jpeg' } }), res)
    expect(res.status).toHaveBeenCalledWith(200)
    expect(res.json).toHaveBeenCalledWith({ result: 'I see a small white spot near the dorsal fin.' })
  })

  test('embeds the Anthropic API error in a 200 response', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: false,
      status: 401,
      json: async () => ({ error: { message: 'invalid x-api-key' } })
    })
    const res = mockRes()
    await handler(mockReq({ ip: 'photo-api-error', body: { image: fakeImage, mimeType: 'image/jpeg' } }), res)
    expect(res.status).toHaveBeenCalledWith(200)
    expect(res.json).toHaveBeenCalledWith({ result: 'API Error 401: invalid x-api-key' })
  })

  test('blocks the 11th request from the same IP within a minute', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ content: [{ text: 'ok' }] })
    })
    const ip = 'photo-rate-limited'
    for (let i = 0; i < 10; i++) {
      await handler(mockReq({ ip, body: { image: fakeImage, mimeType: 'image/jpeg' } }), mockRes())
    }
    const res = mockRes()
    await handler(mockReq({ ip, body: { image: fakeImage, mimeType: 'image/jpeg' } }), res)
    expect(res.status).toHaveBeenCalledWith(429)
  })
})
