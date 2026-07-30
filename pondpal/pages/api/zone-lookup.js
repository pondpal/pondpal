import { getClientIp, isRateLimited } from '../../lib/rateLimit'

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()

  if (isRateLimited(getClientIp(req))) {
    return res.status(429).json({ result: "You're asking a lot of questions! Please wait a minute and try again." })
  }

  const apiKey = process.env.pp_api
  if (!apiKey) {
    return res.status(500).json({ result: 'Error: API key not found.' })
  }

  const { zip } = req.body
  if (!zip || !/^\d{5}$/.test(zip)) {
    return res.status(400).json({ result: 'Please enter a valid 5-digit US ZIP code.' })
  }

  const prompt = 'You are a geography and climate assistant. For the US ZIP code ' + zip + ', respond with ONLY a single whole number from 3 to 11 representing the closest USDA Plant Hardiness Zone for that location. Do not include any words, letters, punctuation, or explanation of any kind — just the number itself.'

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 16,
        messages: [{ role: 'user', content: prompt }]
      })
    })

    const json = await response.json()

    if (!response.ok) {
      return res.status(500).json({
        result: 'API Error ' + response.status + ': ' + (json.error ? json.error.message : JSON.stringify(json))
      })
    }

    const text = json.content && json.content[0] && json.content[0].text ? json.content[0].text.trim() : ''
    const match = text.match(/\d+/)
    const zone = match ? Math.max(3, Math.min(11, parseInt(match[0], 10))) : null

    if (!zone) {
      return res.status(200).json({ result: 'Could not determine a zone for that ZIP code — please select your zone manually below.' })
    }

    res.status(200).json({ zone })

  } catch (e) {
    res.status(500).json({ result: 'Connection error: ' + e.message })
  }
}
