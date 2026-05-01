export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()

  const apiKey = process.env.anthr_key

  if (!apiKey) {
    return res.status(500).json({ result: 'Error: API key not found. Check your Vercel environment variables.' })
  }

  const { type, data } = req.body
  let prompt = ''

  if (type === 'tank') {
    prompt = 'You are Pond Pal, a friendly koi and aquarium care assistant.\n\n'
      + 'Setup details:\n'
      + '- Tank type: ' + data.tankType + '\n'
      + '- Volume: ' + data.gallons + ' gallons\n'
      + '- Number of koi: ' + data.fishCount + '\n'
      + '- Average fish size: ' + data.fishSize + ' inches\n'
      + '- Filtration: ' + data.filtration + '\n'
      + '- Plants: ' + data.planted + '\n\n'
      + 'Please analyze: 1) Is the tank big enough? Use the 250-gallon-per-koi rule and 10x body length rule. Show the math. 2) Is filtration adequate? 3) What improvements are needed? 4) What is the ideal setup long term?\n\n'
      + 'Be friendly and encouraging. Use checkmark for good, warning for caution, X for problems. Give specific numbers.'
  }

  if (type === 'chemistry') {
    const labels = { pH: 'pH', ammonia: 'Ammonia (ppm)', nitrite: 'Nitrite (ppm)', nitrate: 'Nitrate (ppm)', kh: 'KH (dKH)', gh: 'GH (dGH)', temp: 'Temperature (°F)', do2: 'Dissolved O2 (ppm)', salt: 'Salt (%)' }
    const readings = Object.entries(data)
      .filter(function(entry) { return entry[1] !== '' && entry[0] !== 'lastChange' && entry[0] !== 'gallons' })
      .map(function(entry) { return '- ' + (labels[entry[0]] || entry[0]) + ': ' + entry[1] })
      .join('\n')

    const gallonsLine = data.gallons ? '- Tank volume: ' + data.gallons + ' gallons\n' : ''

    prompt = 'You are Pond Pal, a friendly koi and aquarium care assistant.\n\n'
      + 'Water readings:\n'
      + readings + '\n'
      + gallonsLine
      + '- Last water change: ' + data.lastChange + '\n\n'
      + 'For each parameter: state the ideal range, flag if off, explain the health risk, give the exact fix with product names and dosing amounts. Prioritize most urgent first.\n\n'
      + 'Be friendly. Use checkmark for good, warning for slightly off, X for dangerous.'
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
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1024,
        messages: [{ role: 'user', content: prompt }]
      })
    })

    const json = await response.json()

    if (!response.ok) {
      return res.status(500).json({
        result: 'API Error ' + response.status + ': ' + (json.error ? json.error.message : JSON.stringify(json))
      })
    }

    const result = (json.content && json.content[0] && json.content[0].text) ? json.content[0].text : 'No response received, please try again!'
    res.status(200).json({ result: result })

  } catch (e) {
    res.status(500).json({ result: 'Connection error: ' + e.message })
  }
}
