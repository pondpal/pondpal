import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

const freshwaterFish = [
  { value: 'koi', label: 'Koi' },
  { value: 'goldfish', label: 'Goldfish — Fancy' },
  { value: 'common goldfish', label: 'Goldfish — Common / Comet' },
  { value: 'betta', label: 'Betta Fish' },
  { value: 'african cichlid', label: 'Cichlid — African (Malawi/Tanganyika)' },
  { value: 'south american cichlid', label: 'Cichlid — South American' },
  { value: 'oscar', label: 'Oscar' },
  { value: 'tropical community fish', label: 'Tropical Community Fish' },
  { value: 'guppies', label: 'Guppies / Livebearers' },
  { value: 'tetras', label: 'Tetras' },
  { value: 'angelfish', label: 'Angelfish' },
  { value: 'discus', label: 'Discus' },
  { value: 'corydoras', label: 'Corydoras / Bottom Dwellers' },
  { value: 'pleco', label: 'Pleco / Suckermouth Fish' },
  { value: 'molly', label: 'Molly' },
  { value: 'platy', label: 'Platy' },
  { value: 'swordtail', label: 'Swordtail' },
  { value: 'zebra danio', label: 'Zebra Danio' },
  { value: 'harlequin rasbora', label: 'Harlequin Rasbora' },
  { value: 'dwarf gourami', label: 'Dwarf Gourami' },
  { value: 'rainbowfish', label: 'Rainbowfish' },
  { value: 'other freshwater', label: 'Other Freshwater Fish' },
]

const saltwaterFish = [
  { value: 'clownfish', label: 'Clownfish' },
  { value: 'chromis', label: 'Chromis / Damselfish' },
  { value: 'tang', label: 'Tang / Surgeonfish' },
  { value: 'angelfish marine', label: 'Marine Angelfish' },
  { value: 'blenny', label: 'Blenny / Goby' },
  { value: 'wrasse', label: 'Wrasse' },
  { value: 'lionfish', label: 'Lionfish' },
  { value: 'firefish', label: 'Firefish' },
  { value: 'anthias', label: 'Anthias' },
  { value: 'butterflyfish', label: 'Butterflyfish' },
  { value: 'cardinalfish', label: 'Cardinalfish' },
  { value: 'reef mixed', label: 'Mixed Reef Tank' },
  { value: 'other saltwater', label: 'Other Saltwater Fish' },
]

export default function CompatibilityChecker() {
  const [waterType, setWaterType] = useState('freshwater')
  const [fish, setFish] = useState([{ fishType: 'koi' }, { fishType: 'goldfish' }])
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState('')

  const fishOptions = waterType === 'saltwater' ? saltwaterFish : freshwaterFish

  const updateFish = (index, value) => setFish(f => {
    const next = [...f]
    next[index] = { fishType: value }
    return next
  })

  const addFish = () => setFish(f => [...f, { fishType: waterType === 'saltwater' ? 'clownfish' : 'koi' }])
  const removeFish = (index) => setFish(f => f.filter((_, i) => i !== index))

  const changeWaterType = (wt) => {
    setWaterType(wt)
    setFish(f => f.map(x => ({ fishType: wt === 'saltwater' ? 'clownfish' : 'koi' })))
    setResult('')
  }

  const check = async () => {
    if (fish.length < 2) {
      alert('Add at least 2 fish types to check compatibility.')
      return
    }
    setLoading(true)
    setResult('')
    try {
      const res = await fetch('/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'compatibility', data: { waterType, fish } })
      })
      const json = await res.json()
      setResult(json.result)
    } catch (e) {
      setResult('Something went wrong — please try again!')
    }
    setLoading(false)
  }

  const labelStyle = { display: 'block', fontSize: '11px', fontWeight: 500, color: '#5a7a82', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '5px' }
  const inputStyle = { width: '100%', height: '40px', padding: '0 12px', border: '1px solid rgba(0,0,0,0.15)', borderRadius: '8px', fontSize: '14px', fontFamily: 'inherit', color: '#1a2e35', background: '#faf7f2' }

  return (
    <>
      <Head>
        <title>Fish Compatibility Checker — Can These Fish Live Together? — Pond Pal</title>
        <meta name="description" content="Find out if your fish species are compatible before you buy — instant AI analysis of temperament, aggression, and water parameter conflicts for any combination of fish." />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>

      <div className="tool-hero">
        <h1>🤝 Fish Compatibility Checker</h1>
        <p>Planning a new tank mate? List the species you're considering and get an instant compatibility read — no tank details needed yet</p>
      </div>

      <div className="tool-form-section">
        <div className="tool-form-inner">
          <div className="form-card">
            <h2>Species You're Considering</h2>
            <p style={{ fontSize: '13px', color: '#5a7a82', marginBottom: '1.25rem' }}>
              Add every species you want to keep together — we'll check temperament, aggression, and water chemistry conflicts between all of them.
            </p>

            <div style={{ marginBottom: '1.25rem' }}>
              <label style={labelStyle}>Water Type</label>
              <select
                value={waterType}
                onChange={e => changeWaterType(e.target.value)}
                style={inputStyle}
              >
                <option value="freshwater">🌿 Freshwater</option>
                <option value="saltwater">🪸 Saltwater / Marine</option>
              </select>
            </div>

            <div style={{ marginBottom: '1.25rem' }}>
              <label style={labelStyle}>Fish Species</label>
              <div style={{ display: 'grid', gap: '0.75rem', marginTop: '6px' }}>
                {fish.map((f, i) => (
                  <div key={i} style={{ display: 'grid', gridTemplateColumns: fish.length > 2 ? '1fr auto' : '1fr', gap: '10px' }}>
                    <select
                      value={f.fishType}
                      onChange={e => { updateFish(i, e.target.value); setResult('') }}
                      style={inputStyle}
                    >
                      {fishOptions.map(o => (
                        <option key={o.value} value={o.value}>{o.label}</option>
                      ))}
                    </select>
                    {fish.length > 2 && (
                      <button type="button" onClick={() => removeFish(i)}
                        style={{ height: '40px', padding: '0 12px', border: '1px solid rgba(0,0,0,0.15)', borderRadius: '8px', background: '#fff', color: '#A32D2D', cursor: 'pointer', fontSize: '13px' }}>
                        Remove
                      </button>
                    )}
                  </div>
                ))}
              </div>
              <button type="button" onClick={addFish}
                style={{ marginTop: '0.75rem', padding: '8px 16px', border: '1px dashed #1a9e8e', borderRadius: '8px', background: '#f0faf8', color: '#0e6b6b', cursor: 'pointer', fontSize: '13px', fontWeight: 500 }}>
                + Add Another Species
              </button>
            </div>

            <button className="submit-btn" onClick={check} disabled={loading}>
              {loading ? 'Checking compatibility...' : 'Check Compatibility 🤝'}
            </button>
          </div>

          {(loading || result) && (
            <div className={`result-area ${loading ? 'loading' : ''} visible`}>
              {loading
                ? '🤝 Checking how these fish get along...'
                : <div dangerouslySetInnerHTML={{ __html: result.replace(/\n/g, '<br/>') }} />}
            </div>
          )}

          {result && (
            <div style={{ marginTop: '1.5rem', background: '#062d3a', borderRadius: '14px', padding: '2rem', textAlign: 'center' }}>
              <h3 style={{ color: '#fff', marginBottom: '0.75rem', fontSize: '1.1rem' }}>Ready to check if your tank is big enough for this combo?</h3>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', marginBottom: '1.5rem' }}>Our Tank Size Checker supports multiple species and calculates the combined space you'll need.</p>
              <Link href="/tank-checker" className="submit-btn" style={{ display: 'inline-block', width: 'auto', padding: '0 1.5rem', textDecoration: 'none' }}>
                Check My Tank Size →
              </Link>
            </div>
          )}

          <div style={{ marginTop: '1.5rem', padding: '1.25rem', background: '#fff', borderRadius: '14px', border: '1px solid rgba(0,0,0,0.07)', fontSize: '13px', color: '#5a7a82' }}>
            <strong style={{ color: '#1a2e35' }}>💡 Why compatibility matters beyond just space:</strong> Two species can each have plenty of room and still be a bad match — mismatched water chemistry needs, size differences that lead to bullying or predation, and conflicting temperaments are just as important as tank volume. Check compatibility first, then size your tank once you know which species will actually work together.
          </div>
        </div>
      </div>

      <footer className="footer">
        <p>🐟 Pond Pal — Friendly fish & aquarium care, powered by AI</p>
        <p style={{ marginTop: '0.75rem' }}>
          <Link href="/tank-checker" style={{ color: 'rgba(255,255,255,0.6)' }}>Tank Checker</Link>{' · '}
          <Link href="/water-chemistry" style={{ color: 'rgba(255,255,255,0.6)' }}>Water Testing</Link>{' · '}
          <Link href="/care-guides" style={{ color: 'rgba(255,255,255,0.6)' }}>Care Guides</Link>{' · '}
          <Link href="/blog" style={{ color: 'rgba(255,255,255,0.6)' }}>Blog</Link>{' · '}
          <Link href="/about" style={{ color: 'rgba(255,255,255,0.6)' }}>About</Link>{' · '}
          <Link href="/contact" style={{ color: 'rgba(255,255,255,0.6)' }}>Contact</Link>
        </p>
        <p style={{ marginTop: '0.75rem' }}>
          <Link href="/privacy-policy" style={{ color: '#f4833d' }}>Privacy Policy</Link>{' · '}
          <Link href="/terms" style={{ color: '#f4833d' }}>Terms of Use</Link>{' · '}
          <Link href="/disclaimer" style={{ color: '#f4833d' }}>Disclaimer</Link>
        </p>
        <p style={{ marginTop: '1rem', fontSize: '11px', opacity: 0.5 }}>
          General guidance only. Always consult a vet for health concerns.
          As an Amazon Associate, Pond Pal earns from qualifying purchases.
        </p>
      </footer>
    </>
  )
}
