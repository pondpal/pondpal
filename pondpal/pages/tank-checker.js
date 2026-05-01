import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

export default function TankChecker() {
  const [form, setForm] = useState({
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

  return (
    <>
      <Head>
        <title>Tank Size Checker — Pond Pal</title>
        <meta name="description" content="Is your tank big enough for your koi? Find out instantly with Pond Pal's free AI-powered tank size checker." />
      </Head>

      <nav className="nav">
        <Link href="/" className="nav-logo">🐟 Pond<span style={{color:'#f4833d'}}>Pal</span></Link>
        <ul className="nav-links">
          <li><Link href="/tank-checker">Tank Checker</Link></li>
          <li><Link href="/water-chemistry">Water Chemistry</Link></li>
          <li><Link href="/care-guides">Care Guides</Link></li>
        </ul>
      </nav>

      <div className="tool-hero">
        <h1>🏠 Tank Size Checker</h1>
        <p>Tell us about your setup and we'll let you know if your fish have enough room to thrive</p>
      </div>

      <div className="tool-form-section">
        <div className="tool-form-inner">
          <div className="form-card">
            <h2>Your Tank or Pond</h2>
            <div className="form-grid-2">
              <div className="fg">
                <label>Tank Type</label>
                <select value={form.tankType} onChange={e => set('tankType', e.target.value)}>
                  <option>Outdoor Pond</option>
                  <option>Indoor Aquarium</option>
                  <option>Stock Tank / Tub</option>
                  <option>Raised Bed Pond</option>
                </select>
              </div>
              <div className="fg">
                <label>Volume (gallons)</label>
                <input type="number" placeholder="e.g. 500" value={form.gallons} onChange={e => set('gallons', e.target.value)} />
              </div>
              <div className="fg">
                <label>Number of Koi</label>
                <input type="number" placeholder="e.g. 5" value={form.fishCount} onChange={e => set('fishCount', e.target.value)} />
              </div>
              <div className="fg">
                <label>Average Fish Size (inches)</label>
                <input type="number" placeholder="e.g. 12" value={form.fishSize} onChange={e => set('fishSize', e.target.value)} />
              </div>
              <div className="fg">
                <label>Filtration Type</label>
                <select value={form.filtration} onChange={e => set('filtration', e.target.value)}>
                  <option>Biological + Mechanical</option>
                  <option>Basic Mechanical Only</option>
                  <option>Pressurized Canister</option>
                  <option>Pressurized Bead Filter</option>
                  <option>None / Natural</option>
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
                ? '🐟 Pond Pal is analyzing your setup...'
                : <div dangerouslySetInnerHTML={{ __html: result.replace(/\n/g, '<br/>') }} />
              }
            </div>
          )}

          <div style={{ marginTop: '2rem', padding: '1.25rem', background: '#fff', borderRadius: '14px', border: '1px solid rgba(0,0,0,0.07)', fontSize: '13px', color: '#5a7a82' }}>
            <strong style={{ color: '#1a2e35' }}>💡 Did you know?</strong> The standard rule of thumb for koi is 250 gallons per fish — but that's really a minimum. A well-filtered pond with good aeration can support slightly higher stocking, while a basic setup may need more space per fish. Pond Pal takes all of this into account!
          </div>
        </div>
      </div>

      <footer className="footer">
        <p>🐟 Pond Pal — Friendly fish care, powered by AI</p>
        <p style={{ marginTop: '1rem', fontSize: '11px', opacity: 0.6 }}>General guidance only. Always consult a vet for health concerns.</p>
      </footer>
    </>
  )
}
