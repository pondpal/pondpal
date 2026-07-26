export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()

  const apiKey = process.env.pp_api
  if (!apiKey) {
    return res.status(500).json({ result: 'Error: API key not found.' })
  }

  const { message } = req.body
  if (!message) {
    return res.status(400).json({ result: 'No message provided.' })
  }

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
        system: 'You are Pond Pal AI, a friendly and knowledgeable koi and aquarium fish care assistant. You help fish keepers of all experience levels with questions about koi, pond care, water chemistry, fish health, filtration, feeding, and all aspects of fish keeping. Be warm, encouraging, and specific. Use plain English — avoid jargon unless you explain it. When recommending products mention specific product names. Keep responses concise but thorough. Use line breaks to make responses easy to read.',
        messages: [{ role: 'user', content: message }]
      })
    })

    const json = await response.json()

    if (!response.ok) {
      return res.status(500).json({
        result: 'API Error ' + response.status + ': ' + (json.error ? json.error.message : JSON.stringify(json))
      })
    }

    const result = json.content && json.content[0] && json.content[0].text
      ? json.content[0].text
      : 'Sorry, I could not generate a response. Please try again!'

    res.status(200).json({ result })

  } catch (e) {
    res.status(500).json({ result: 'Connection error: ' + e.message })
  }
}
