export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()

  const { type, data } = req.body

  let prompt = ''

  if (type === 'tank') {
    prompt = `You are Pond Pal, a friendly and knowledgeable koi and aquarium care assistant. A fish keeper has shared their setup with you. Give them warm, encouraging, and specific advice.

Setup details:
- Tank type: ${data.tankType}
- Volume: ${data.gallons} gallons
- Number of koi: ${data.fishCount}
- Average fish size: ${data.fishSize} inches
- Filtration: ${data.filtration}
- Plants: ${data.planted}

Please analyze:
1. Is the tank big enough? Use the 250-gallon-per-koi rule and the 10x body length swimming space guideline. Show the math clearly.
2. Is the filtration adequate for koi?
3. What specific improvements or changes would you recommend?
4. What size setup would be ideal for these fish long-term?

Be friendly and encouraging. Use ✅ for things that are good, ⚠️ for things to watch, and ❌ for things that need attention. Give specific numbers and product types where helpful. Keep it clear and easy to understand for any experience level.`
  }

  if (type === 'chemistry') {
    const readings = Object.entries(data)
      .filter(([k, v]) => v !== '' && k !== 'lastChange' && k !== 'gallons')
      .map(([k, v]) => {
        const labels = { pH: 'pH', ammonia: 'Ammonia (ppm)', nitrite: 'Nitrite (ppm)', nitrate: 'Nitrate (ppm)', kh: 'KH (dKH)', gh: 'GH (dGH)', temp: 'Temperature (°F)', do2: 'Dissolved O₂ (ppm)', salt: 'Salt (%)' }
        return `- ${labels[k] || k}: ${v}`
      }).join('\n')

    prompt = `You are Pond Pal, a friendly and knowledgeable koi and aquarium care assistant. A fish keeper has shared their water test results with you. Give them warm, specific, and actionable advice.

Water readings:
${readings}
${data.gallons ? `- Tank/pond volume: ${data.gallons} gallons` : ''}
- Last water change: ${data.lastChange}

For each parameter provided:
1. Is it in the ideal range for koi? (state the ideal range)
2. If it's off — what is the problem and what health risk does it pose to the fish?
3. Exactly how to fix it — specific water change percentage, specific product names, and dosing amounts per gallon or per 100 gallons.
4. What order to tackle fixes in (prioritize the most urgent first).

Be friendly and encouraging. Use ✅ for parameters in range, ⚠️ for slightly off, and ❌ for dangerous levels. Give specific, actionable steps. Keep it warm and clear — suitable for beginners and experienced keepers alike.`
  }

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.anthr_key,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1024,
        messages: [{ role: 'user', content: prompt }]
      })
    })

    const json = await response.json()
    const result = json.content?.[0]?.text || 'Sorry, something went wrong. Please try again!'
    res.status(200).json({ result })
  } catch (e) {
    res.status(500).json({ result: 'Unable to connect to Pond Pal AI — please try again in a moment!' })
  }
}
