import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

export default function WaterChemistry() {
  const [tankType, setTankType] = useState('freshwater')
  const [showAdvanced, setShowAdvanced] = useState(false)
  const [form, setForm] = useState({
    pH: '', ammonia: '', nitrite: '', nitrate: '', temp: '',
    kh: '', gh: '', do2: '', salt: '', salinity: '', calcium: '', magnesium: '',
    gallons: '', lastChange: '1 week ago'
  })
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState('')

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }))

  const analyze = async () => {
    const filled = Object.entries(form).filter(([k, v]) => v !== '' && k !== 'lastChange' && k !== 'gallons').length
    if (filled < 1) {
      alert('Please enter at least one water reading to get a diagnosis.')
      return
    }
    setLoading(true)
    setResult('')
    try {
      const res = await fetch('/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'chemistry', data: { ...form, tankType } })
      })
      const json = await res.json()
      setResult(json.result)
    } catch (e) {
      setResult('Something went wrong — please try again!')
    }
    setLoading(false)
  }

  const coreFields = [
    { key: 'pH', label: 'pH', hint: tankType === 'saltwater' ? '8.1-8.4' : '6.5-8.5', placeholder: tankType === 'saltwater' ? '8.2' : '7.2', step: '0.1' },
    { key: 'ammonia', label: 'Ammonia', hint: 'ppm', placeholder: '0.0', step: '0.1' },
    { key: 'nitrite', label: 'Nitrite', hint: 'ppm', placeholder: '0.0', step: '0.1' },
    { key: 'nitrate', label: 'Nitrate', hint: 'ppm', placeholder: '20', step: '1' },
    { key: 'temp', label: 'Temperature', hint: 'F', placeholder: tankType === 'saltwater' ? '78' : '72', step: '1' },
  ]

  const freshwaterAdvanced = [
    { key: 'kh', label: 'KH (Carbonate Hardness)', hint: 'dKH', placeholder: '6', step: '0.5' },
    { key: 'gh', label: 'GH (General Hardness)', hint: 'dGH', placeholder: '8', step: '0.5' },
    { key: 'do2', label: 'Dissolved Oxygen', hint: 'ppm', placeholder: '8', step: '0.1' },
  ]

  const saltwaterAdvanced = [
    { key: 'salinity', label: 'Salinity', hint: 'ppt', placeholder: '35', step: '0.1' },
    { key: 'salt', label: 'Specific Gravity', hint: 'sg', placeholder: '1.025', step: '0.001' },
    { key: 'calcium', label: 'Calcium', hint: 'ppm', placeholder: '420', step: '1' },
    { key: 'magnesium', label: 'Magnesium', hint: 'ppm', placeholder: '1300', step: '1' },
    { key: 'do2', label: 'Dissolved Oxygen', hint: 'ppm', placeholder: '8', step: '0.1' },
  ]

  const advancedFields = tankType === 'saltwater' ? saltwaterAdvanced : freshwaterAdvanced

  const inputStyle = {
    width: '100%', height: '40px', padding: '0 12px',
    border: '1px solid rgba(0,0,0,0.15)', borderRadius: '8px',
    fontSize: '14px', fontFamily: 'inherit',
    color: '#1a2e35', background: '#faf7f2'
  }

  const labelStyle = {
    display: 'block', fontSize: '11px', fontWeight: 500,
    color: '#5a7a82', textTransform: 'uppercase',
    letterSpacing: '0.5px', marginBottom: '5px'
  }

  return (
    <>
      <Head>
        <title>Water Chemistry Analyzer - Pond Pal</title>
        <meta name="description" content="Enter your fish tank or pond water test results and get instant AI-powered diagnosis and exact treatment recommendations for freshwater and saltwater setups." />
      </Head>

      <nav className="nav">
        <Link href="/" className="nav-logo">🐟 Pond<span style={{ color: '#f4833d' }}>Pal</span></Link>
        <ul className="nav-links">
          <li><Link href="/tank-checker">Tank Checker</Link></li>
          <li><Link href="/water-chemistry">Water Chemistry</Link></li>
          <li><Link href="/care-guides">Care Guides</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>

      <div className="tool-hero">
        <h1>Water Chemistry Analyzer</h1>
        <p>Enter your test kit readings and we will diagnose any issues and tell you exactly how to fix them</p>
      </div>

      <div className="tool-form-section">
        <div className="tool-form-inner">

          <div className="form-card">
            <h2>What kind of tank do you have?</h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', marginTop: '1rem' }}>
              {[
                { value: 'freshwater', emoji: '🌿', label: 'Freshwater', desc: 'Koi, goldfish, tropical fish' },
                { value: 'pond', emoji: '🪷', label: 'Outdoor Pond', desc: 'Koi ponds, water gardens' },
                { value: 'saltwater', emoji: '🐠', label: 'Saltwater', desc: 'Marine and reef tanks' },
              ].map(t => (
                <div
                  key={t.value}
                  onClick={() => { setTankType(t.value); setShowAdvanced(false); }}
                  style={{
                    padding: '1rem', borderRadius: '10px', textAlign: 'center', cursor: 'pointer',
                    border: tankType === t.value ? '2px solid #1a9e8e' : '1px solid rgba(0,0,0,0.12)',
                    background: tankType === t.value ? '#d4f0ec' : '#faf7f2',
                    transition: 'all 0.2s'
                  }}
                >
                  <div style={{ fontSize: '28px', marginBottom: '6px' }}>{t.emoji}</div>
                  <div style={{ fontSize: '13px', fontWeight: 500, color: '#1a2e35' }}>{t.label}</div>
                  <div style={{ fontSize: '11px', color: '#5a7a82', marginTop: '3px' }}>{t.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="form-card">
            <h2>Your Water Readings</h2>
            <p style={{ fontSize: '13px', color: '#5a7a82', marginBottom: '1.25rem' }}>
              Enter whatever readings you have from your test kit. Leave anything blank that you have not tested yet. Even just one or two readings can help!
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '1rem' }}>
              {coreFields.map(f => (
                <div key={f.key}>
                  <label style={labelStyle}>{f.label} ({f.hint})</label>
                  <input type="number" placeholder={f.placeholder} step={f.step} value={form[f.key]}
                    onChange={e => set(f.key, e.target.value)} style={inputStyle} />
                </div>
              ))}
            </div>

            <div
              onClick={() => setShowAdvanced(!showAdvanced)}
              style={{
                display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer',
                padding: '10px 14px', borderRadius: '8px', marginBottom: showAdvanced ? '1rem' : '0',
                background: '#f0faf8', border: '1px dashed #1a9e8e', color: '#0e6b6b',
                fontSize: '13px', fontWeight: 500, userSelect: 'none'
              }}
            >
              <span>{showAdvanced ? 'v' : '>'}</span>
              {showAdvanced ? 'Hide advanced readings' : 'I have more readings to add (KH, GH, salinity, etc.)'}
            </div>

            {showAdvanced && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginTop: '1rem', marginBottom: '1rem', padding: '1rem', background: '#f8fffe', borderRadius: '8px', border: '1px solid rgba(26,158,142,0.2)' }}>
                <p style={{ gridColumn: '1 / -1', fontSize: '12px', color: '#5a7a82', marginBottom: '4px' }}>
                  These readings give us a more complete picture. Do not worry if you do not have them all!
                </p>
                {advancedFields.map(f => (
                  <div key={f.key}>
                    <label style={labelStyle}>{f.label} ({f.hint})</label>
                    <input type="number" placeholder={f.placeholder} step={f.step} value={form[f.key]}
                      onChange={e => set(f.key, e.target.value)} style={inputStyle} />
                  </div>
                ))}
              </div>
            )}

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginTop: '1rem', marginBottom: '1rem' }}>
              <div>
                <label style={labelStyle}>Tank Volume (gallons)</label>
                <input type="number" placeholder="e.g. 500" value={form.gallons}
                  onChange={e => set('gallons', e.target.value)} style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Last Water Change</label>
                <select value={form.lastChange} onChange={e => set('lastChange', e.target.value)}
                  style={{ ...inputStyle }}>
                  <option>Today</option>
                  <option>3 days ago</option>
                  <option>1 week ago</option>
                  <option>2 weeks ago</option>
                  <option>1+ month ago</option>
                </select>
              </div>
            </div>

            <button className="submit-btn" onClick={analyze} disabled={loading}>
              {loading ? 'Diagnosing your water...' : 'Analyze My Water'}
            </button>
            <p style={{ fontSize: '11px', color: '#5a7a82', textAlign: 'center', marginTop: '0.75rem' }}>
              Always verify with a physical test kit. This is guidance only, not veterinary advice.
            </p>
          </div>

          {(loading || result) && (
            <div className={'result-area ' + (loading ? 'loading ' : '') + 'visible'}>
              {loading
                ? 'Pond Pal is analyzing your water chemistry...'
                : <div dangerouslySetInnerHTML={{ __html: result.replace(/\n/g, '<br/>') }} />
              }
            </div>
          )}

          <div style={{ marginTop: '2rem', padding: '1.25rem', background: '#fff', borderRadius: '14px', border: '1px solid rgba(0,0,0,0.07)', fontSize: '13px', color: '#5a7a82' }}>
            <strong style={{ color: '#1a2e35' }}>New to water testing?</strong>
            {tankType === 'saltwater'
              ? ' For saltwater tanks we recommend the Red Sea Reef Foundation test kit — a great all-in-one solution covering the most important parameters.'
              : ' We recommend the API Master Test Kit — it covers pH, ammonia, nitrite, and nitrate all in one box and is the most trusted kit among freshwater and koi keepers. Available at most pet stores or online.'
            }
          </div>
        </div>
      </div>

      <footer className="footer">
        <p>🐟 Pond Pal — Friendly fish care, powered by AI</p>
        <p style={{ marginTop: '0.75rem' }}>
          <Link href="/tank-checker" style={{ color: 'rgba(255,255,255,0.6)' }}>Tank Checker</Link>{' · '}
          <Link href="/water-chemistry" style={{ color: 'rgba(255,255,255,0.6)' }}>Water Chemistry</Link>{' · '}
          <Link href="/care-guides" style={{ color: 'rgba(255,255,255,0.6)' }}>Care Guides</Link>{' · '}
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
          Some links may be affiliate links — this helps keep Pond Pal free!
        </p>
      </footer>
    </>
  )
}
