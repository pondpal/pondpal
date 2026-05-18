export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()

  const apiKey = process.env.anthr_key
  if (!apiKey) {
    return res.status(500).json({ result: 'Error: API key not found.' })
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
    const labels = {
      pH: 'pH',
      ammonia: 'Ammonia (ppm)',
      nitrite: 'Nitrite (ppm)',
      nitrate: 'Nitrate (ppm)',
      kh: 'KH (dKH)',
      gh: 'GH (dGH)',
      temp: 'Tem
