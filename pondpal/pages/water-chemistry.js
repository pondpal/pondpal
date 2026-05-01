import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

export default function WaterChemistry() {
  const [form, setForm] = useState({
    pH: '', ammonia: '', nitrite: '', nitrate: '',
    kh: '', gh: '', temp: '', do2: '', salt: '',
    gallons: '', lastChange: '1 week ago'
  })
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState('')

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }))

  const analyze = async () => {
    const filled = Object.entries(form).filter(([k, v]) => v !== '' && k !== 'lastChange').length
    if (filled < 2) {
      alert('Please enter at least 2 water readings to get a diagnosis.')
      return
    }
    setLoading(true)
    setResult('')
    try {
      const res = await fetch('/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'chemistry', data: form })
      })
      const json = await res.json()
      setResult(json.result)
    } catch (e) {
      setResult('Something went wrong — please try again!')
    }
    setLoading(false)
  }

  const fields = [
    { key: 'pH', label: 'pH', hint: '6.5–8.5', placeholder: '7.2', step: '0.1' },
    { key: 'ammonia', label: 'Ammonia', hint: 'ppm', placeholder: '0.0', step: '0.1' },
    { key: 'nitrite', label: 'Nitrite', hint: 'ppm', placeholder: '0.0', step: '0.1' },
    { key: 'nitrate', label: 'Nitrate', hint: 'ppm', placeholder: '20', step: '1' },
    { key: 'kh', label: 'KH', hint: 'dKH', placeholder: '6', step: '0.5' },
    { key: 'gh', label: 'GH', hint: 'dGH', placeholder: '8', step: '0.5' },
    { key: 'temp', label: 'Temperature', hint: '°F', placeholder: '72', step: '1' },
    { key: 'do2', label: 'Dissolved O₂', hint: 'ppm', placeholder: '8', step: '0.1' },
    { key: 'salt', label: 'Salt Level', hint: '%', placeholder: '0.1', step: '0.01' },
  ]

  return (
    <>
      <Head>
        <title>Water Chemistry Analyzer — Pond Pal</title>
        <meta name="description" content="Enter your koi pond or aquarium water test results and get instant AI-powered diagnosis and exact treatment recommendations." />
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
        <h1>🧪 Water Chemistry Analyzer</h1>
        <p>Enter your test kit readings and we'll diagnose any issues and tell you exactly how to fix them</p>
      </div>

      <div className="tool-form-section">
        <div className="tool-form-inner">
          <div className="form-card">
            <h2>Your Water Readings</h2>
            <p style={{ fontSize: '13px', color: '#5a7a82', marginBottom: '1.25rem' }}>
              Enter as many or as few readings as you have — just leave blank what you haven't tested yet.
            </p>
            <div className="form-grid-3">
              {fields.map(f => (
                <div className="fg" key={f.key}>
                  <label>{f.label} <span style={{ textTransform: 'none', fontWeight: 400 }}>({f.hint})</span></label>
                  <input
                    type="number"
                    placeholder={f.placeholder}
                    step={f.step}
                    value={form[f.key]}
                    onChange={e => set(f.key, e.target.value)}
                  />
                </div>
              ))}
            </div>
            <div className="form-grid-2" style={{ marginTop: '0.5rem' }}>
              <div className="fg">
                <label>Tank Volume (gallons)</label>
                <input type="number" placeholder="e.g. 500" value={form.gallons} onChange={e => set('gallons', e.target.value)} />
              </div>
              <div className="fg">
                <label>Last Water Change</label>
                <select value={form.lastChange} onChange={e => set('lastChange', e.target.value)}>
                  <option>Today</option>
                  <option>3 days ago</option>
                  <option>1 week ago</option>
                  <option>2 weeks ago</option>
                  <option>1+ month ago</option>
                </select>
              </div>
            </div>
            <button className="submit-btn" onClick={analyze} disabled={loading}>
              {loading ? 'Diagnosing your water...' : 'Analyze My Water 🧪'}
            </button>
            <p style={{ fontSize: '11px', color: '#5a7a82', textAlign: 'center', marginTop: '0.75rem' }}>
              Always verify with a physical test kit. This is guidance only, not veterinary advice.
            </p>
          </div>

          {(loading || result) && (
            <div className={`result-area ${loading ? 'loading' : ''} visible`}>
              {loading
                ? '🧪 Pond Pal is analyzing your water chemistry...'
                : <div dangerouslySetInnerHTML={{ __html: result.replace(/\n/g, '<br/>') }} />
              }
            </div>
          )}

          <div style={{ marginTop: '2rem', padding: '1.25rem', background: '#fff', borderRadius: '14px', border: '1px solid rgba(0,0,0,0.07)', fontSize: '13px', color: '#5a7a82' }}>
            <strong style={{ color: '#1a2e35' }}>🧪 New to water testing?</strong> We recommend the <strong>API Master Test Kit</strong> — it tests pH, ammonia, nitrite, and nitrate all in one box and is the most trusted kit among koi keepers. Available at most pet stores or online.
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
