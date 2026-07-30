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

  const { location } = req.body
  if (!location || !/^[A-Za-z0-9 ,.-]{2,40}$/.test(location)) {
    return res.status(400).json({ result: 'Please enter a valid ZIP or postal code.' })
  }

  const prompt = 'You are a geography and climate assistant. A user provided this location: "' + location + '". This may be a US ZIP code alone, or a postal code from any other country, optionally with a country or region name included. Many countries use similar-looking postal code formats (for example the US, Germany, and France all use 5 digits), so use any country/region name given, and otherwise make your best judgment about which country the format and any included context most likely indicates. Based on the most likely location, respond with ONLY a single whole number from 3 to 11 representing the closest equivalent USDA Plant Hardiness Zone for that climate (this scale is commonly used as a climate reference worldwide, not just in the US). Do not include any words, letters, punctuation, or explanation of any kind — just the number itself.'

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
      return res.status(200).json({ result: 'Could not determine a zone for that location — please select your zone manually below.' })
    }

    res.status(200).json({ zone })

  } catch (e) {
    res.status(500).json({ result: 'Connection error: ' + e.message })
  }
}
