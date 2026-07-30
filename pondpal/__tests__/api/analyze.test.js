import handler from '../../pages/api/analyze'

function mockRes() {
  const res = {}
  res.status = jest.fn().mockReturnValue(res)
  res.json = jest.fn().mockReturnValue(res)
  res.end = jest.fn().mockReturnValue(res)
  return res
}

function mockReq({ method = 'POST', ip = 'analyze-test-ip', body = {} } = {}) {
  return { method, headers: { 'x-forwarded-for': ip }, socket: {}, body }
}

describe('/api/analyze', () => {
  const originalFetch = global.fetch
  const originalKey = process.env.pp_api

  beforeEach(() => {
    process.env.pp_api = 'test-key'
  })

  afterEach(() => {
    global.fetch = originalFetch
    process.env.pp_api = originalKey
  })

  const tankBody = {
    type: 'tank',
    data: { waterType: 'freshwater', tankType: 'pond', gallons: '1000', filtration: 'yes', planted: 'no', fish: [{ fishType: 'koi', fishCount: '4', fishSize: '12' }] }
  }

  const mixedTankBody = {
    type: 'tank',
    data: {
      waterType: 'freshwater', tankType: 'pond', gallons: '1000', filtration: 'yes', planted: 'no',
      fish: [{ fishType: 'koi', fishCount: '2', fishSize: '12' }, { fishType: 'goldfish', fishCount: '2', fishSize: '6' }]
    }
  }

  const compatibilityBody = {
    type: 'compatibility',
    data: { waterType: 'freshwater', fish: [{ fishType: 'betta' }, { fishType: 'african cichlid' }] }
  }

  test('rejects non-POST requests', async () => {
    const res = mockRes()
    await handler(mockReq({ method: 'GET' }), res)
    expect(res.status).toHaveBeenCalledWith(405)
    expect(res.end).toHaveBeenCalled()
  })

  test('returns 500 when the API key is missing', async () => {
    delete process.env.pp_api
    const res = mockRes()
    await handler(mockReq({ ip: 'analyze-no-key', body: tankBody }), res)
    expect(res.status).toHaveBeenCalledWith(500)
    expect(res.json).toHaveBeenCalledWith({ result: 'Error: API key not found.' })
  })

  test('returns the AI response for a tank analysis on success', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ content: [{ text: 'Your pond looks great!' }] })
    })
    const res = mockRes()
    await handler(mockReq({ ip: 'analyze-success', body: tankBody }), res)
    expect(res.status).toHaveBeenCalledWith(200)
    expect(res.json).toHaveBeenCalledWith({ result: 'Your pond looks great!' })
  })

  test('builds a mixed-species compatibility prompt when multiple fish types are given', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ content: [{ text: 'Looks compatible!' }] })
    })
    const res = mockRes()
    await handler(mockReq({ ip: 'analyze-mixed', body: mixedTankBody }), res)
    expect(res.status).toHaveBeenCalledWith(200)

    const sentBody = JSON.parse(global.fetch.mock.calls[0][1].body)
    const prompt = sentBody.messages[0].content
    expect(prompt).toContain('mixed-species tank')
    expect(prompt).toContain('2x koi')
    expect(prompt).toContain('2x goldfish')
    expect(prompt).toContain('Are these species actually compatible')
  })

  test('builds a compatibility prompt naming both species and asking for a verdict', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ content: [{ text: 'NOT COMPATIBLE' }] })
    })
    const res = mockRes()
    await handler(mockReq({ ip: 'analyze-compat', body: compatibilityBody }), res)
    expect(res.status).toHaveBeenCalledWith(200)
    expect(res.json).toHaveBeenCalledWith({ result: 'NOT COMPATIBLE' })

    const sentBody = JSON.parse(global.fetch.mock.calls[0][1].body)
    const prompt = sentBody.messages[0].content
    expect(prompt).toContain('betta')
    expect(prompt).toContain('african cichlid')
    expect(prompt).toContain('COMPATIBLE, USE CAUTION, or NOT COMPATIBLE')
    expect(prompt).toContain('Temperament and aggression')
  })

  test('embeds the Anthropic API error in a 200 response', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: false,
      status: 401,
      json: async () => ({ error: { message: 'invalid x-api-key' } })
    })
    const res = mockRes()
    await handler(mockReq({ ip: 'analyze-api-error', body: tankBody }), res)
    expect(res.status).toHaveBeenCalledWith(200)
    expect(res.json).toHaveBeenCalledWith({ result: 'API Error 401: invalid x-api-key' })
  })

  test('blocks the 11th request from the same IP within a minute', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ content: [{ text: 'ok' }] })
    })
    const ip = 'analyze-rate-limited'
    for (let i = 0; i < 10; i++) {
      await handler(mockReq({ ip, body: tankBody }), mockRes())
    }
    const res = mockRes()
    await handler(mockReq({ ip, body: tankBody }), res)
    expect(res.status).toHaveBeenCalledWith(429)
  })
})
