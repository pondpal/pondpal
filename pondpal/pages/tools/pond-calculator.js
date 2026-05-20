import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

export default function PondCalculator() {
  const [shape, setShape] = useState('rectangle')
  const [form, setForm] = useState({
    length: '', width: '', depth: '',
    diameter: '',
    topDiameter: '', bottomDiameter: '', coneDepth: '',
  })
  const [result, setResult] = useState(null)

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }))

  const calculate = () => {
    const l = parseFloat(form.length)
    const w = parseFloat(form.width)
    const d = parseFloat(form.depth)
    const dia = parseFloat(form.diameter)
    const topD = parseFloat(form.topDiameter)
    const botD = parseFloat(form.bottomDiameter)
    const cD = parseFloat(form.coneDepth)

    let cubicFeet = 0
    let valid = true

    if (shape === 'rectangle') {
      if (!l || !w || !d) { valid = false }
      else cubicFeet = l * w * d
    } else if (shape === 'circle') {
      if (!dia || !d) { valid = false }
      else cubicFeet = Math.PI * Math.pow(dia / 2, 2) * d
    } else if (shape === 'oval') {
      if (!l || !w || !d) { valid = false }
      else cubicFeet = Math.PI * (l / 2) * (w / 2) * d
    } else if (shape === 'kidney') {
      if (!l || !w || !d) { valid = false }
      else cubicFeet = l * w * d * 0.75
    }

    if (!valid) {
      alert('Please fill in all required measurements.')
      return
    }

    const gallons = Math.round(cubicFeet * 7.48)
    const liters = Math.round(cubicFeet * 28.32)
    const maxKoi = Math.floor(gallons / 250)
    const maxGoldfish = Math.floor(gallons / 25)

    setResult({ gallons, liters, maxKoi, maxGoldfish })
  }

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

  const shapes = [
    { value: 'rectangle', emoji: '▭', label: 'Rectangle' },
    { value: 'circle', emoji: '○', label: 'Circle' },
    { value: 'oval', emoji: '⬭', label: 'Oval' },
    { value: 'kidney', emoji: '🫘', label: 'Kidney' },
  ]

  return (
    <>
      <Head>
        <title>Pond Volume Calculator — How Many Gallons is My Pond? — Pond Pal</title>
        <meta name="description" content="Calculate your pond volume in gallons instantly. Enter your pond dimensions and get gallons, liters, and how many koi your pond can support." />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>

      <nav className="nav">
        <Link href="/" className="nav-logo">🐟 Pond<span style={{ color: '#f4833d' }}>Pal</span></Link>
        <ul className="nav-links">
          <li><Link href="/tank-checker">Tank Checker</Link></li>
          <li><Link href="/water-chemistry">Water Testing</Link></li>
          <li><Link href="/care-guides">Care Guides</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>

      <div className="tool-hero">
        <h1>🏊 Pond Volume Calculator</h1>
        <p>Enter your pond dimensions and instantly find out how many gallons you have</p>
      </div>

      <div className="tool-form-section">
        <div className="tool-form-inner">

          <div className="form-card">
            <h2>What shape is your pond?</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px', marginTop: '1rem' }}>
              {shapes.map(s => (
                <div
                  key={s.value}
                  onClick={() => { setShape(s.value); setResult(null) }}
                  style={{
                    padding: '0.875rem', borderRadius: '10px', textAlign: 'center', cursor: 'pointer',
                    border: shape === s.value ? '2px solid #1a9e8e' : '1px solid rgba(0,0,0,0.12)',
                    background: shape === s.value ? '#d4f0ec' : '#faf7f2',
                    transition: 'all 0.2s'
                  }}
                >
                  <div style={{ fontSize: '22px', marginBottom: '4px' }}>{s.emoji}</div>
                  <div style={{ fontSize: '12px', fontWeight: 500, color: '#1a2e35' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="form-card">
            <h2>Pond Dimensions (in feet)</h2>
            <p style={{ fontSize: '13px', color: '#5a7a82', marginBottom: '1.25rem' }}>
              Measure your pond at its longest, widest, and deepest points. For irregular ponds use your best average measurements.
            </p>

            {shape === 'circle' ? (
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '1rem' }}>
                <div>
                  <label style={labelStyle}>Diameter (feet)</label>
                  <input type="number" placeholder="e.g. 10" value={form.diameter} onChange={e => set('diameter', e.target.value)} style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Depth (feet)</label>
                  <input type="number" placeholder="e.g. 4" value={form.depth} onChange={e => set('depth', e.target.value)} style={inputStyle} />
                </div>
              </div>
            ) : (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '1rem' }}>
                <div>
                  <label style={labelStyle}>{shape === 'oval' ? 'Length (feet)' : 'Length (feet)'}</label>
                  <input type="number" placeholder="e.g. 12" value={form.length} onChange={e => set('length', e.target.value)} style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Width (feet)</label>
                  <input type="number" placeholder="e.g. 8" value={form.width} onChange={e => set('width', e.target.value)} style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Depth (feet)</label>
                  <input type="number" placeholder="e.g. 4" value={form.depth} onChange={e => set('depth', e.target.value)} style={inputStyle} />
                </div>
              </div>
            )}

            {shape === 'kidney' && (
              <div style={{ background: '#faeeda', borderRadius: '8px', padding: '0.75rem 1rem', marginBottom: '1rem', fontSize: '13px', color: '#854F0B' }}>
                💡 Kidney ponds are estimated at 75% of their rectangular bounding box. For a more accurate reading measure the actual surface area if possible.
              </div>
            )}

            <button className="submit-btn" onClick={calculate}>
              Calculate My Pond Volume 🏊
            </button>
          </div>

          {result && (
            <>
              <div style={{ background: '#fff', borderRadius: '14px', padding: '2rem', border: '1px solid rgba(0,0,0,0.07)', marginBottom: '1rem' }}>
                <h2 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: '#062d3a' }}>Your Pond Results</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginBottom: '1.5rem' }}>
                  {[
                    { label: 'Pond Volume', value: result.gallons.toLocaleString(), unit: 'gallons', color: '#d4f0ec', textColor: '#0e6b6b' },
                    { label: 'Pond Volume', value: result.liters.toLocaleString(), unit: 'liters', color: '#E6F1FB', textColor: '#185FA5' },
                    { label: 'Max Koi', value: result.maxKoi, unit: 'koi (250 gal rule)', color: result.maxKoi < 2 ? '#FCEBEB' : '#faeeda', textColor: result.maxKoi < 2 ? '#A32D2D' : '#854F0B' },
                    { label: 'Max Goldfish', value: result.maxGoldfish, unit: 'goldfish', color: '#d4f0ec', textColor: '#0e6b6b' },
                  ].map((m, i) => (
                    <div key={i} style={{ background: m.color, borderRadius: '10px', padding: '1rem', textAlign: 'center' }}>
                      <p style={{ fontSize: '11px', fontWeight: 500, color: m.textColor, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px' }}>{m.label}</p>
                      <p style={{ fontSize: '28px', fontWeight: 600, color: m.textColor, fontFamily: 'Lora, serif' }}>{m.value}</p>
                      <p style={{ fontSize: '11px', color: m.textColor, opacity: 0.8 }}>{m.unit}</p>
                    </div>
                  ))}
                </div>

                {result.maxKoi < 2 && (
                  <div style={{ background: '#FCEBEB', borderRadius: '8px', padding: '0.875rem 1rem', marginBottom: '1rem', fontSize: '13px', color: '#A32D2D' }}>
                    ⚠️ Your pond may be too small for koi. Koi need a minimum of 250 gallons each and do best in ponds of 500 gallons or more. Consider goldfish as an alternative for smaller ponds.
                  </div>
                )}

                {result.maxKoi >= 2 && (
                  <div style={{ background: '#d4f0ec', borderRadius: '8px', padding: '0.875rem 1rem', marginBottom: '1rem', fontSize: '13px', color: '#0e6b6b' }}>
                    ✅ Great news! Your pond can support up to {result.maxKoi} koi. Use our AI Tank Checker below for a more detailed analysis including filtration recommendations.
                  </div>
                )}

                <Link href="/tank-checker" className="submit-btn" style={{ display: 'block', textAlign: 'center', textDecoration: 'none' }}>
                  Get Full AI Analysis of My Setup →
                </Link>
              </div>

              <div style={{ background: '#fff', borderRadius: '14px', padding: '1.5rem', border: '1px solid rgba(0,0,0,0.07)', marginBottom: '1rem' }}>
                <p style={{ fontSize: '13px', fontWeight: 500, color: '#1a2e35', marginBottom: '1rem' }}>🛒 Essential gear for your {result.gallons.toLocaleString()} gallon pond</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                  {[
                    { name: 'API Pond Master Test Kit', desc: 'Test your water regularly', url: 'https://www.amazon.com/dp/B0002IHNUO?tag=pondpal20-20' },
                    { name: 'Seachem Prime', desc: 'Essential water conditioner', url: 'https://www.amazon.com/dp/B00025694O?tag=pondpal20-20' },
                    { name: 'Hikari Staple Koi Food', desc: 'Quality everyday koi food', url: 'https://www.amazon.com/dp/B0002562MK?tag=pondpal20-20' },
                    { name: 'Hikari Wheat Germ Food', desc: 'Cool weather feeding formula', url: 'https://www.amazon.com/dp/B0002DHYDI?tag=pondpal20-20' },
                  ].map((p, i) => (
                    <a key={i} href={p.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', padding: '0.75rem', background: '#f8fffe', borderRadius: '8px', border: '1px solid rgba(26,158,142,0.2)', display: 'block' }}>
                      <p style={{ fontSize: '13px', fontWeight: 500, color: '#1a2e35', marginBottom: '2px' }}>{p.name}</p>
                      <p style={{ fontSize: '11px', color: '#5a7a82' }}>{p.desc}</p>
                      <p style={{ fontSize: '11px', color: '#1a9e8e', marginTop: '4px' }}>View on Amazon →</p>
                    </a>
                  ))}
                </div>
                <p style={{ fontSize: '10px', color: '#5a7a82', marginTop: '0.75rem' }}>As an Amazon Associate, Pond Pal earns from qualifying purchases.</p>
              </div>
            </>
          )}

          <div style={{ padding: '1.25rem', background: '#fff', borderRadius: '14px', border: '1px solid rgba(0,0,0,0.07)', fontSize: '13px', color: '#5a7a82' }}>
            <strong style={{ color: '#1a2e35' }}>💡 Pro tip:</strong> These calculations assume flat-bottomed ponds. Most garden ponds have sloped sides, so your actual volume is typically 20-30% less than the calculated figure. When in doubt, stock conservatively!
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
