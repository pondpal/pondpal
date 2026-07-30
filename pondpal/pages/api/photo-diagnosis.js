import { getClientIp, isRateLimited } from '../../lib/rateLimit'

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '4mb',
    },
  },
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()

  if (isRateLimited(getClientIp(req))) {
    return res.status(429).json({ result: "You're asking a lot of questions! Please wait a minute and try again." })
  }

  const apiKey = process.env.pp_api
  if (!apiKey) {
    return res.status(500).json({ result: 'Error: API key not found.' })
  }

  const { image, mimeType, fishType, notes } = req.body

  if (!image || typeof image !== 'string') {
    return res.status(400).json({ result: 'Please upload a photo to analyze.' })
  }

  const allowedMimeTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif']
  const safeMimeType = allowedMimeTypes.includes(mimeType) ? mimeType : 'image/jpeg'

  const contextLines = []
  if (fishType) contextLines.push('Fish type: ' + fishType)
  if (notes) contextLines.push("Additional details from the owner: " + notes)
  const contextText = contextLines.length ? contextLines.join('\n') + '\n\n' : ''

  const promptText = 'You are Pond Pal, a friendly fish and aquarium care assistant. Look closely at this photo of a fish and identify any visible signs of illness or distress — things like white spots, red streaks, clamped or frayed fins, unusual growths or lesions, cloudy eyes, discoloration, abnormal swimming posture, or excess mucus.\n\n'
    + contextText
    + 'Based on what you can see: 1) Describe what you observe in the photo, being specific about location and appearance. 2) Suggest the most likely condition(s) this could be, if any visible symptoms are present. 3) Recommend next steps and general treatment guidance where applicable. 4) Note if the photo quality or angle limits your ability to assess certain things, and what a clearer photo would show.\n\n'
    + "Be warm and reassuring, but clear and specific — don't hedge excessively. If the fish looks healthy, say so plainly. Always make clear this is general guidance only and a vet or aquatic health specialist should be consulted for a definitive diagnosis, especially for anything serious."

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
        max_tokens: 1024,
        messages: [{
          role: 'user',
          content: [
            { type: 'image', source: { type: 'base64', media_type: safeMimeType, data: image } },
            { type: 'text', text: promptText }
          ]
        }]
      })
    })

    const json = await response.json()

    if (!response.ok) {
      return res.status(200).json({
        result: 'API Error ' + response.status + ': ' + (json.error ? json.error.message : JSON.stringify(json))
      })
    }

    const result = json.content && json.content[0] && json.content[0].text
      ? json.content[0].text : 'No response received, please try again!'

    res.status(200).json({ result })

  } catch (e) {
    res.status(200).json({ result: 'Connection error: ' + e.message })
  }
}
