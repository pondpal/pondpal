import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

const affiliateProducts = [
  { name: 'API Master Test Kit', url: 'https://www.amazon.com/dp/B000255NCI?tag=pondpal20-20', desc: 'Test your water after any tank change' },
  { name: 'Seachem Prime', url: 'https://www.amazon.com/dp/B00025694O?tag=pondpal20-20', desc: 'Essential water conditioner' },
]

export default function TankChecker() {
  const [form, setForm] = useState({
    waterType: 'freshwater',
    fishType: 'koi',
    tankType: 'Outdoor Pond',
    gallons: '',
    fishCount: '',
    fishSize: '',
    filtration: 'Biological + Mechanical',
    planted: 'Some plants'
  })
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState('')

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }))

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
    { value: 'reef mixed', label: 'Mixed Reef Tank' },
    { value: 'other saltwater', label: 'Other Saltwater Fish' },
  ]

  const fishOptions = form.waterType === 'saltwater' ? saltwaterFish : freshwaterFish

  const tankTypes = form.waterType === 'saltwater'
    ? ['Indoor Aquarium', 'Reef Tank', 'Nano Tank']
    : form.fishType === 'koi' || form.fishType === 'goldfish' || form.fishType === 'common goldfish'
      ? ['Outdoor Pond', 'Indoor Aquarium', 'Stock Tank / Tub', 'Raised Bed Pond']
      : ['Indoor Aquarium', 'Nano Tank', 'Planted Tank', 'Outdoor Pond']

  const filtrationOptions = form.waterType === 'saltwater'
    ? ['Sump + Protein Skimmer', 'Hang On Back + Skimmer', 'Canister + Skimmer', 'Basic Hang On Back']
    : ['Biological + Mechanical', 'Pressurized Canister', 'Hang On Back Filter', 'Sponge Filter', 'Pressurized Bead Filter', 'Basic Mechanical Only', 'None / Natural']

  const analyze = async () => {
    if (!form.gallons || !form.fishCount || !form.fishSize) {
      alert('Please fill in volume, number of fish, and average fish size.')
      return
    }
    setLoading(true)
    setResult('')
    try {
      const res = await fetch('/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'tank', data: form })
      })
      const json = await res.json()
      setResult(json.result)
    } catch (e) {
      setResult('Something went wrong — please try again!')
    }
    setLoading(false)
  }

  const labelStyle = { display: 'block', fontSize: '11px', fontWeight: 500, color: '#5a7a82', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '5px' }

  return (
    <>
      <Head>
        <title>Tank Size Checker — Is My Tank Big Enough? — Pond Pal</title>
        <meta name="description" content="Find out instantly if your tank or pond is big enough for your fish. Works for koi, goldfish, tropical fish, bettas, cichlids, saltwater setups and more." />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>

      <div className="tool-hero">
        <h1>🏠 Tank Size Checker</h1>
        <p>Tell us about your setup and we'll let you know if your fish have enough room to thrive</p>
      </div>

      <div className="tool-form-section">
        <div className="tool-form-inner">
          <div className="form-card">
            <h2>Your Setup</h2>
            <p style={{ fontSize: '13px', color: '#5a7a82', marginBottom: '1.25rem' }}>
              Tell us about your water type, fish, and tank — we'll do the rest!
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '1rem' }}>
              <div>
                <label style={labelStyle}>Water Type</label>
                <select
                  value={form.waterType}
                  onChange={e => {
                    const wt = e.target.value
                    const defaultFish = wt === 'saltwater' ? 'clownfish' : 'koi'
                    setForm(f => ({ ...f, waterType: wt, fishType: defaultFish }))
                    setResult('')
                  }}
                  className="fg"
                  style={{ width: '100%', height: '40px', padding: '0 12px', border: '1px solid rgba(0,0,0,0.15)', borderRadius: '8px', fontSize: '14px', fontFamily: 'inherit', color: '#1a2e35', background: '#faf7f2' }}
                >
                  <option value="freshwater">🌿 Freshwater</option>
                  <option value="saltwater">🪸 Saltwater / Marine</option>
                </select>
              </div>

              <div>
                <label style={labelStyle}>Fish Type</label>
                <select
                  value={form.fishType}
                  onChange={e => { set('fishType', e.target.value); setResult('') }}
                  style={{ width: '100%', height: '40px', padding: '0 12px', border: '1px solid rgba(0,0,0,0.15)', borderRadius: '8px', fontSize: '14px', fontFamily: 'inherit', color: '#1a2e35', background: '#faf7f2' }}
                >
                  {fishOptions.map(f => (
                    <option key={f.value} value={f.value}>{f.label}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-grid-2">
              <div className="fg">
                <label>Tank / Pond Type</label>
                <select value={form.tankType} onChange={e => set('tankType', e.target.value)}>
                  {tankTypes.map(t => <option key={t}>{t}</option>)}
                </select>
              </div>
              <div className="fg">
                <label>Volume (gallons)</label>
                <input type="number" placeholder="e.g. 55" value={form.gallons} onChange={e => set('gallons', e.target.value)} />
              </div>
              <div className="fg">
                <label>Number of Fish</label>
                <input type="number" placeholder="e.g. 5" value={form.fishCount} onChange={e => set('fishCount', e.target.value)} />
              </div>
              <div className="fg">
                <label>Average Fish Size (inches)</label>
                <input type="number" placeholder="e.g. 4" value={form.fishSize} onChange={e => set('fishSize', e.target.value)} />
              </div>
              <div className="fg">
                <label>Filtration Type</label>
                <select value={form.filtration} onChange={e => set('filtration', e.target.value)}>
                  {filtrationOptions.map(t => <option key={t}>{t}</option>)}
                </select>
              </div>
              <div className="fg">
                <label>Plants?</label>
                <select value={form.planted} onChange={e => set('planted', e.target.value)}>
                  <option>Heavy planting</option>
                  <option>Some plants</option>
                  <option>No plants</option>
                </select>
              </div>
            </div>

            <button className="submit-btn" onClick={analyze} disabled={loading}>
              {loading ? 'Pond Pal is thinking...' : 'Check My Tank 🐟'}
            </button>
          </div>

          {(loading || result) && (
            <div className={`result-area ${loading ? 'loading' : ''} visible`}>
              {loading
                ? '🐟 Analyzing your setup...'
                : <div dangerouslySetInnerHTML={{ __html: result.replace(/\n/g, '<br/>') }} />}
            </div>
          )}

          {result && (
            <div style={{ marginTop: '1.5rem', background: '#fff', borderRadius: '14px', padding: '1.5rem', border: '1px solid rgba(0,0,0,0.07)' }}>
              <p style={{ fontSize: '13px', fontWeight: 500, color: '#1a2e35', marginBottom: '1rem' }}>🛒 Products you might need</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                {affiliateProducts.map((p, i) => (
                  <a key={i} href={p.url} target="_blank" rel="noopener noreferrer"
                    style={{ textDecoration: 'none', padding: '0.75rem', background: '#f8fffe', borderRadius: '8px', border: '1px solid rgba(26,158,142,0.2)', display: 'block' }}>
                    <p style={{ fontSize: '13px', fontWeight: 500, color: '#1a2e35', marginBottom: '2px' }}>{p.name}</p>
                    <p style={{ fontSize: '11px', color: '#5a7a82' }}>{p.desc}</p>
                    <p style={{ fontSize: '11px', color: '#1a9e8e', marginTop: '4px' }}>View on Amazon →</p>
                  </a>
                ))}
              </div>
              <p style={{ fontSize: '10px', color: '#5a7a82', marginTop: '0.75rem' }}>As an Amazon Associate, Pond Pal earns from qualifying purchases.</p>
            </div>
          )}

          <div style={{ marginTop: '1.5rem', padding: '1.25rem', background: '#fff', borderRadius: '14px', border: '1px solid rgba(0,0,0,0.07)', fontSize: '13px', color: '#5a7a82' }}>
            <strong style={{ color: '#1a2e35' }}>💡 Stocking guidelines vary by species.</strong> Koi need 250 gallons each, fancy goldfish 20–30 gallons, bettas need at least 5 gallons alone, tropical fish roughly 1 inch per gallon, and marine fish need generous space. Our AI uses species-specific rules for every fish type!
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
