export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()

  const apiKey = process.env.anthr_key

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
        messages: [{ role: 'user', content: 'Say hello in one sentence.' }]
      })
    })

    const json = await response.json()
    return res.status(200).json({ 
      result: 'DEBUG: Status ' + response.status + ' — ' + JSON.stringify(json).substring(0, 300)
    })

  } catch (e) {
    return res.status(200).json({ result: 'DEBUG: Fetch error — ' + e.message })
  }
}
