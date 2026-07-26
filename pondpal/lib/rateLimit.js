const WINDOW_MS = 60 * 1000
const MAX_REQUESTS = 10

const hits = new Map()

export function getClientIp(req) {
  const forwarded = req.headers['x-forwarded-for']
  if (forwarded) return forwarded.split(',')[0].trim()
  return req.socket.remoteAddress || 'unknown'
}

export function isRateLimited(ip) {
  const now = Date.now()
  const entry = hits.get(ip)

  if (!entry || now - entry.windowStart > WINDOW_MS) {
    hits.set(ip, { windowStart: now, count: 1 })
    return false
  }

  entry.count += 1
  return entry.count > MAX_REQUESTS
}
