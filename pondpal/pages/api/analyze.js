export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()

  const apiKey = process.env.anthr_key
  if (!apiKey) {
    return res.status(500).json({ result: 'Error: API key not found.' })
  }

  const { type, data } = req.body
  let prompt = ''

  if (type === 'tank') {
    const fishType = data.fishType || 'koi'

    const guidelines = {
      'koi': 'Use the 250 gallon per koi rule and the 10x body length swimming space guideline.',
      'goldfish': 'Use the 20-30 gallons per goldfish rule for fancy goldfish and 30-40 gallons for common goldfish.',
      'betta': 'Bettas need a minimum of 5 gallons alone. They should not be kept with other bettas.',
      'tropical freshwater': 'Use the 1 inch of fish per gallon rule as a starting guideline, adjusted for bioload.',
      'cichlid': 'Cichlids need more space than their size suggests due to aggression. Use species-specific guidelines.',
      'saltwater marine': 'Marine fish need larger tanks than freshwater equivalents. Use species-specific minimum tank sizes.',
      'other freshwater': 'Apply appropriate stocking guidelines for the specific species.',
    }

    const fishGuideline = guidelines[fishType] || guidelines['other freshwater']

    prompt = 'You are Pond Pal, a friendly fish and aquarium care assistant.\n\n'
      + 'Setup details:\n'
      + '- Fish type: ' + fishType + '\n'
      + '- Tank type: ' + data.tankType + '\n'
      + '- Volume: ' + data.gallons + ' gallons\n'
      + '- Number of fish: ' + data.fishCount + '\n'
      + '- Average fish size: ' + data.fishSize + ' inches\n'
      + '- Filtration: ' + data.filtration + '\n'
      + '- Plants: ' + data.planted + '\n\n'
      + 'Stocking guideline for this fish type: ' + fishGuideline + '\n\n'
      + 'Please analyze: 1) Is the tank big enough for these fish? Show the math using appropriate guidelines for this species. 2) Is filtration adequate for this fish type? 3) What improvements are needed? 4) What is the ideal setup long term?\n\n'
      + 'Be friendly and encouraging. Use checkmark for good, warning for caution, X for problems. Give specific numbers and tailor advice to the specific fish type.'
  }

  if (type === 'chemistry') {
    const labels = {
      pH: 'pH', ammonia: 'Ammonia (ppm)', nitrite: 'Nitrite (ppm)', nitrate: 'Nitrate (ppm)',
      kh: 'KH (dKH)', gh: 'GH (dGH)', temp: 'Temperature (F)', do2: 'Dissolved O2 (ppm)',
      salt: 'Specific Gravity', salinity: 'Salinity (ppt)', calcium: 'Calcium (ppm)', magnesium: 'Magnesium (ppm)'
    }

    const readings = Object.entries(data)
      .filter(function(entry) {
        return entry[1] !== '' && entry[0] !== 'lastChange' && entry[0] !== 'gallons' && entry[0] !== 'tankType'
      })
      .map(function(entry) {
        return '- ' + (labels[entry[0]] || entry[0]) + ': ' + entry[1]
      })
      .join('\n')

    const gallonsLine = data.gallons ? '- Tank volume: ' + data.gallons + ' gallons\n' : ''
    const tankTypeLabel = data.tankType === 'saltwater' ? 'saltwater/marine' : data.tankType === 'pond' ? 'outdoor koi pond' : 'freshwater'

    prompt = 'You are Pond Pal, a friendly fish and aquarium care assistant. This is a ' + tankTypeLabel + ' setup.\n\n'
      + 'Water readings provided:\n'
      + readings + '\n'
      + gallonsLine
      + '- Last water change: ' + data.lastChange + '\n\n'
      + 'For each parameter provided: state the ideal range for a ' + tankTypeLabel + ' aquarium or pond, flag if it is off, explain the health risk to the fish, and give the exact fix with specific product names and dosing amounts. If only a few parameters were provided, note which other tests would be helpful to run next. Prioritize the most urgent issues first.\n\n'
      + 'Be warm and encouraging. Use checkmark for good, warning symbol for slightly off, X for dangerous. Keep it clear for all experience levels.'
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
        messages: [{ role: 'user', content: prompt }]
      })
    })

    const json = await response.json()

    if (!response.ok) {
      return res.status(200).json({
        result: 'API Error ' + response.status + ': ' + (json.error ? json.error.message : JSON.stringify(json))
      })
    }

    const result = json.content && json.content[0] && json.content[0].text
      ? json.content[0].text
      : 'No response received, please try again!'

    res.status(200).json({ result: result })

  } catch (e) {
    res.status(200).json({ result: 'Connection error: ' + e.message })
  }
}
