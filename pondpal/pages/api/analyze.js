export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()

  const apiKey = process.env.anthr_key
  if (!apiKey) {
    return res.status(500).json({ result: 'Error: API key not found.' })
  }

  const { type, data } = req.body
  let prompt = ''

  if (type === 'tank') {
    const fishType = data.fishType || 'fish'
    const waterType = data.waterType || 'freshwater'

    const guidelines = {
      'koi': 'Use the 250 gallon per koi rule and the 10x body length swimming space guideline. Koi can reach 18-24 inches as adults.',
      'goldfish': 'Use 20-30 gallons per fancy goldfish. They produce high waste and need strong filtration.',
      'common goldfish': 'Use 30-40 gallons per fish. Common and comet goldfish grow large and do best in ponds.',
      'betta': 'Minimum 5 gallons for one betta alone. Bettas need gentle filtration and should not be kept with other bettas.',
      'african cichlid': 'African Rift Lake cichlids need 55+ gallons minimum. Overcrowding is often used deliberately to spread aggression. Hard alkaline water pH 7.8-8.5 is essential.',
      'south american cichlid': 'South American cichlids vary widely by species. Most prefer soft acidic water pH 6.0-7.5. Check species-specific requirements.',
      'oscar': 'Oscars need 75 gallons minimum for one fish, 125+ gallons for a pair. They grow to 12-14 inches.',
      'tropical community fish': 'Use the 1 inch of fish per gallon rule as a starting point, adjusted for bioload and adult size.',
      'guppies': 'Guppies can be kept at roughly 1 gallon per fish but do best with more space. They breed prolifically.',
      'tetras': 'Tetras are schooling fish and need groups of 6+. A 20-gallon tank is a good minimum for a tetra school.',
      'angelfish': 'Angelfish need tall tanks — minimum 29 gallons for a pair, 55+ for a group. They reach 6 inches tall.',
      'discus': 'Discus need 50+ gallons, warm soft acidic water (82-86F, pH 6.0-7.0), and pristine water quality.',
      'corydoras': 'Corydoras are schooling bottom dwellers. Keep in groups of 6+, minimum 20 gallons.',
      'pleco': 'Plecos vary hugely by species — common plecos reach 18+ inches and need 100+ gallon tanks. Check species size.',
      'clownfish': 'Clownfish can be kept in 20+ gallon marine tanks. A pair in an anemone setup needs 30+ gallons.',
      'chromis': 'Chromis are hardy schooling fish. Keep in groups of 5+ in 30+ gallon tanks.',
      'tang': 'Tangs are active swimmers needing 75+ gallons minimum. They need long tanks for swimming space.',
      'angelfish marine': 'Marine angelfish range from dwarf species (30 gallons) to large species needing 150+ gallons.',
      'blenny': 'Blennies and gobies are small and can thrive in nano tanks of 10-20 gallons.',
      'wrasse': 'Wrasses vary by species — most need 50-75+ gallon tanks with a tight-fitting lid as they jump.',
      'lionfish': 'Lionfish need 120+ gallons. They are predatory and incompatible with small fish.',
      'reef mixed': 'Reef tanks need generous space — minimum 40 gallons for a starter reef. Focus on water stability.',
      'other freshwater': 'Apply appropriate stocking guidelines for the specific species.',
      'other saltwater': 'Apply species-specific marine stocking guidelines.',
    }

    const fishGuideline = guidelines[fishType] || 'Apply appropriate stocking guidelines for this species.'

    prompt = 'You are Pond Pal, a friendly fish and aquarium care assistant.\n\n'
      + 'Setup details:\n'
      + '- Water type: ' + waterType + '\n'
      + '- Fish type: ' + fishType + '\n'
      + '- Tank type: ' + data.tankType + '\n'
      + '- Volume: ' + data.gallons + ' gallons\n'
      + '- Number of fish: ' + data.fishCount + '\n'
      + '- Average fish size: ' + data.fishSize + ' inches\n'
      + '- Filtration: ' + data.filtration + '\n'
      + '- Plants: ' + data.planted + '\n\n'
      + 'Stocking guideline for ' + fishType + ': ' + fishGuideline + '\n\n'
      + 'Please analyze: 1) Is the tank big enough? Show the math using appropriate guidelines. 2) Is filtration adequate for this fish type? 3) What improvements are needed? 4) What is the ideal setup long term?\n\n'
      + 'Be friendly and encouraging. Use checkmark for good, warning for caution, X for problems. Give specific numbers tailored to the fish type.'
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
      }).join('\n')

    const gallonsLine = data.gallons ? '- Tank volume: ' + data.gallons + ' gallons\n' : ''
    const tankTypeLabel = data.tankType === 'saltwater' ? 'saltwater/marine' : data.tankType === 'pond' ? 'outdoor pond' : 'freshwater'

    prompt = 'You are Pond Pal, a friendly fish and aquarium care assistant. This is a ' + tankTypeLabel + ' setup.\n\n'
      + 'Water readings provided:\n'
      + readings + '\n'
      + gallonsLine
      + '- Last water change: ' + data.lastChange + '\n\n'
      + 'For each parameter: state the ideal range for a ' + tankTypeLabel + ', flag if off, explain the health risk, and give the exact fix with product names and dosing amounts. Note which other tests would be helpful. Prioritize most urgent issues first.\n\n'
      + 'Be warm and encouraging. Use checkmark for good, warning for slightly off, X for dangerous. Clear for all experience levels.'
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
      ? json.content[0].text : 'No response received, please try again!'

    res.status(200).json({ result: result })

  } catch (e) {
    res.status(200).json({ result: 'Connection error: ' + e.message })
  }
}
