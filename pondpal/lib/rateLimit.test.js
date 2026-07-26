import { getClientIp, isRateLimited } from './rateLimit'

describe('isRateLimited', () => {
  test('allows the first 10 requests then blocks the 11th', () => {
    const ip = 'ip-basic'
    for (let i = 0; i < 10; i++) {
      expect(isRateLimited(ip)).toBe(false)
    }
    expect(isRateLimited(ip)).toBe(true)
  })

  test('tracks different IPs independently', () => {
    for (let i = 0; i < 10; i++) isRateLimited('ip-a')
    expect(isRateLimited('ip-a')).toBe(true)
    expect(isRateLimited('ip-b')).toBe(false)
  })

  test('resets once the window passes', () => {
    const ip = 'ip-reset'
    const realNow = Date.now
    let now = 1000000
    Date.now = () => now

    for (let i = 0; i < 10; i++) isRateLimited(ip)
    expect(isRateLimited(ip)).toBe(true)

    now += 61 * 1000
    expect(isRateLimited(ip)).toBe(false)

    Date.now = realNow
  })
})

describe('getClientIp', () => {
  test('reads the first address from x-forwarded-for', () => {
    const req = { headers: { 'x-forwarded-for': '1.2.3.4, 5.6.7.8' }, socket: {} }
    expect(getClientIp(req)).toBe('1.2.3.4')
  })

  test('falls back to socket.remoteAddress when no header is present', () => {
    const req = { headers: {}, socket: { remoteAddress: '9.9.9.9' } }
    expect(getClientIp(req)).toBe('9.9.9.9')
  })

  test('falls back to "unknown" when neither is available', () => {
    const req = { headers: {}, socket: {} }
    expect(getClientIp(req)).toBe('unknown')
  })
})
