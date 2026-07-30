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

  const { type, data } = req.body
  let prompt = ''

  const guidelines = {
    'koi': 'Use the 250 gallon per koi rule and the 10x body length swimming space guideline. Koi can reach 18-24 inches as adults.',
    'goldfish': 'Use 20-30 gallons per fancy goldfish. They produce high waste and need strong filtration.',
    'common goldfish': 'Use 30-40 gallons per fish. Common goldfish grow large and do best in ponds.',
    'comet goldfish': 'Use 40-45 gallons per fish. Comets have a long, deeply forked tail and are very active swimmers, so they need even more open swimming space than common goldfish. They grow large and do best in ponds.',
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
    'molly': 'Mollies do best with some room to swim and can tolerate slightly hard/brackish water. Keep in groups with more females than males to reduce mating stress.',
    'platy': 'Platies are easygoing livebearers, roughly 1-2 gallons per fish. They breed readily so expect fry if males and females are kept together.',
    'swordtail': 'Swordtails need a bit more swimming room than platies due to their size and tail. Keep more females than males to reduce chasing.',
    'zebra danio': 'Zebra danios are hardy, fast-swimming schoolers — keep in groups of 6+ with a tightly covered tank, as they jump.',
    'harlequin rasbora': 'Harlequin rasboras are peaceful schooling fish, best kept in groups of 6+ in a well-planted tank.',
    'dwarf gourami': 'Dwarf gouramis are semi-aggressive labyrinth fish that breathe surface air — keep one male per tank to avoid fighting.',
    'rainbowfish': 'Rainbowfish are active schoolers needing groups of 6+ and longer tanks for swimming space.',
    'clownfish': 'Clownfish can be kept in 20+ gallon marine tanks. A pair in an anemone setup needs 30+ gallons.',
    'chromis': 'Chromis are hardy schooling fish. Keep in groups of 5+ in 30+ gallon tanks.',
    'tang': 'Tangs are active swimmers needing 75+ gallons minimum. They need long tanks for swimming space.',
    'angelfish marine': 'Marine angelfish range from dwarf species (30 gallons) to large species needing 150+ gallons.',
    'blenny': 'Blennies and gobies are small and can thrive in nano tanks of 10-20 gallons.',
    'wrasse': 'Wrasses vary by species — most need 50-75+ gallon tanks with a tight-fitting lid as they jump.',
    'lionfish': 'Lionfish need 120+ gallons. They are predatory and incompatible with small fish.',
    'reef mixed': 'Reef tanks need generous space — minimum 40 gallons for a starter reef. Focus on water stability.',
    'firefish': 'Firefish are peaceful but notorious jumpers — a tight-fitting lid is essential. 20+ gallons is a good minimum.',
    'anthias': 'Anthias are schooling fish that need frequent small feedings throughout the day and 55+ gallons with strong water flow.',
    'butterflyfish': 'Butterflyfish vary by species — some are reef-safe generalists, others need specific coral-based diets. Check species requirements before adding to a reef.',
    'cardinalfish': 'Cardinalfish are peaceful, slow-moving schoolers that do well in groups in 20+ gallon tanks.',
    'other freshwater': 'Apply appropriate stocking guidelines for the specific species.',
    'other saltwater': 'Apply species-specific marine stocking guidelines.',
  }

  if (type === 'tank') {
    const waterType = data.waterType || 'freshwater'
    const fishList = Array.isArray(data.fish) && data.fish.length
      ? data.fish
      : [{ fishType: data.fishType || 'fish', fishCount: data.fishCount, fishSize: data.fishSize }]

    const fishLines = fishList.map(function(f) {
      const fishType = f.fishType || 'fish'
      const guideline = guidelines[fishType] || 'Apply appropriate stocking guidelines for this species.'
      return '- ' + f.fishCount + 'x ' + fishType + ', average size ' + f.fishSize + ' inches. Stocking guideline: ' + guideline
    }).join('\n')

    const isMixedTank = fishList.length > 1

    prompt = 'You are Pond Pal, a friendly fish and aquarium care assistant.\n\n'
      + 'Setup details:\n'
      + '- Water type: ' + waterType + '\n'
      + '- Tank type: ' + data.tankType + '\n'
      + '- Volume: ' + data.gallons + ' gallons\n'
      + '- Filtration: ' + data.filtration + '\n'
      + '- Plants: ' + data.planted + '\n\n'
      + 'Fish in this tank:\n' + fishLines + '\n\n'
      + (isMixedTank
        ? 'This is a mixed-species tank with more than one type of fish kept together. Please analyze: 1) Are these species actually compatible to keep together — consider water chemistry needs, temperament/aggression, and size differences? 2) Calculate the combined space requirement by working out the gallons needed for each species using its own guideline and count, then add them together and compare that total to the actual volume. Show this math clearly, species by species. 3) Is filtration adequate for the combined bioload of all these fish together? 4) What improvements are needed? 5) What is the ideal long-term setup for this specific combination of fish?\n\n'
        : 'Please analyze: 1) Is the tank big enough? Show the math using the guideline above. 2) Is filtration adequate for this fish type? 3) What improvements are needed? 4) What is the ideal setup long term?\n\n')
      + 'Be friendly and encouraging. Use checkmark for good, warning for caution, X for problems. Give specific numbers tailored to the fish in this tank.'
  }

  if (type === 'chemistry') {
    const labels = {
      pH: 'pH', ammonia: 'Ammonia (ppm)', nitrite: 'Nitrite (ppm)', nitrate: 'Nitrate (ppm)',
      kh: 'KH (dKH)', gh: 'GH (dGH)', temp: 'Temperature (F)', do2: 'Dissolved O2 (ppm)',
      phosphate: 'Phosphate (ppm)',
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

  if (type === 'compatibility') {
    const waterType = data.waterType || 'freshwater'
    const fishList = Array.isArray(data.fish) ? data.fish.filter(function(f) { return f.fishType }) : []

    const fishLines = fishList.map(function(f) {
      const fishType = f.fishType || 'fish'
      const guideline = guidelines[fishType] || 'Apply appropriate stocking guidelines for this species.'
      return '- ' + fishType + '. Care notes: ' + guideline
    }).join('\n')

    prompt = 'You are Pond Pal, a friendly fish and aquarium care assistant.\n\n'
      + 'A fish keeper is considering keeping these species together in the same ' + waterType + ' tank:\n' + fishLines + '\n\n'
      + 'Please analyze whether this combination works well together:\n'
      + '1) Give a clear overall verdict right at the start — COMPATIBLE, USE CAUTION, or NOT COMPATIBLE.\n'
      + '2) Temperament and aggression — will any of these species bully, nip fins, or prey on the others, especially considering adult size differences? Name the specific species involved in any conflict, don\'t just speak generally.\n'
      + '3) Water parameter compatibility — do these species need similar pH, hardness, and temperature ranges, or do any have conflicting requirements?\n'
      + '4) Any other considerations specific to this combination — territory, schooling needs, or tank size implications.\n\n'
      + 'Be friendly and encouraging where the combination works, but be direct and specific about any real problems rather than hedging. Use checkmark for good pairings, warning for caution, X for incompatible.'
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
