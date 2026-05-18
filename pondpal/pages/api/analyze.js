export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()

  const apiKey = process.env.anthr_key

  if (!apiKey) {
    return res.status(200).json({ result: 'DEBUG: API key not found in environment variables.' })
  }

  return res.status(200).json({ result: 'DEBUG: API key found. Key starts with: ' + apiKey.substring(0, 10) + '...' })
}
