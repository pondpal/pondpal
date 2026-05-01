export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()

  const apiKey = process.env.anthr_key

  if (!apiKey) {
    return res.status(500).json({ result: 'Error: API key not found. Check your Vercel environment variables.' })
  }

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

Be friendly and encouraging. Use ✅ for things that are good, ⚠️ for things to watch, and ❌ for things that need attention. Give specific numbers and product types where helpful.`
  }

  if (type === 'chemistry') {
    const readings = Object.entries(data)
      .filter(([k, v]) => v !== '' && k !== 'lastChange' && k !== 'gallons')
      .map(([k, v]) => {
        const labels = { pH: 'pH', ammonia: 'Ammonia (ppm)', nitrite: 'Nitrite (ppm)', nitrate: 'Nitrate (ppm)', kh: 'KH (dKH)', gh: 'GH (dGH)', temp: 'Temperature (°F)', do2: 'Dissolved O₂ (ppm)', salt: 'Salt (%)' }
        return `- ${labels[k] || k}: ${v}`
      }).join('\n')

    prompt = `You are Pond Pal, a friendly and knowledgeable koi and aquarium care assistant. A fish keeper has shared their water test results with you.

Water readings:
${readings}
${data.gallons ? `- Tank/pond volume: ${data.gallons} gallons` : ''}
- Last water change: ${data.lastChange}

For each parameter: Is it in the ideal range? If off, what is the risk and exact fix including product names a
