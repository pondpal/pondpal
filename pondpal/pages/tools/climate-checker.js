import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import { getVerdict } from '../../lib/climateVerdict'

const zones = [
  { value: 3, label: 'Zone 3 (-40°F to -30°F)' },
  { value: 4, label: 'Zone 4 (-30°F to -20°F)' },
  { value: 5, label: 'Zone 5 (-20°F to -10°F)' },
  { value: 6, label: 'Zone 6 (-10°F to 0°F)' },
  { value: 7, label: 'Zone 7 (0°F to 10°F)' },
  { value: 8, label: 'Zone 8 (10°F to 20°F)' },
  { value: 9, label: 'Zone 9 (20°F to 30°F)' },
  { value: 10, label: 'Zone 10 (30°F to 40°F)' },
  { value: 11, label: 'Zone 11+ (40°F and up)' },
]

const fishTypes = [
  { value: 'koi', label: 'Koi', emoji: '🐟' },
  { value: 'common-goldfish', label: 'Common / Comet Goldfish', emoji: '🐡' },
  { value: 'fancy-goldfish', label: 'Fancy Goldfish (Oranda, Ryukin, etc.)', emoji: '🎏' },
  { value: 'tropical', label: 'Tropical Fish (bettas, cichlids, tetras, and most others)', emoji: '🌴' },
]

const levelStyles = {
  yes: { bg: '#d4f0ec', text: '#0e6b6b', emoji: '✅' },
  caution: { bg: '#faeeda', text: '#854F0B', emoji: '⚠️' },
  no: { bg: '#FCEBEB', text: '#A32D2D', emoji: '❌' },
}

export default function ClimateChecker() {
  const [zone, setZone] = useState(6)
  const [fishType, setFishType] = useState('koi')
  const [depth, setDepth] = useState('')
  const [result, setResult] = useState(null)
  const [zip, setZip] = useState('')
  const [zipLoading, setZipLoading] = useState(false)
  const [zipMessage, setZipMessage] = useState('')

  const needsDepth = fishType !== 'tropical'

  const check = () => {
    setResult(getVerdict(zone, fishType, depth))
  }

  const lookupZone = async () => {
    if (!/^\d{5}$/.test(zip)) {
      setZipMessage('Please enter a valid 5-digit ZIP code.')
      return
    }
    setZipLoading(true)
    setZipMessage('')
    try {
      const res = await fetch('/api/zone-lookup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ zip })
      })
      const json = await res.json()
      if (json.zone) {
        setZone(json.zone)
        setResult(null)
        setZipMessage('✅ Set to Zone ' + json.zone + ' based on ZIP ' + zip + ' — adjust below if that doesn\'t look right.')
      } else {
        setZipMessage(json.result || 'Something went wrong — please select your zone manually below.')
      }
    } catch (e) {
      setZipMessage('Something went wrong — please select your zone manually below.')
    }
    setZipLoading(false)
  }

  const labelStyle = { display: 'block', fontSize: '11px', fontWeight: 500, color: '#5a7a82', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '5px' }
  const inputStyle = { width: '100%', height: '40px', padding: '0 12px', border: '1px solid rgba(0,0,0,0.15)', borderRadius: '8px', fontSize: '14px', fontFamily: 'inherit', color: '#1a2e35', background: '#faf7f2' }

  return (
    <>
      <Head>
        <title>Can My Fish Survive Outdoors? — Climate Checker — Pond Pal</title>
        <meta name="description" content="Find out if your koi, goldfish, or other fish can safely overwinter outdoors based on your USDA hardiness zone and pond depth." />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>

      <div className="tool-hero">
        <h1>❄️ Can My Fish Survive Outdoors?</h1>
        <p>Enter your climate zone and fish type to find out if they can safely overwinter in an outdoor pond</p>
      </div>

      <div className="tool-form-section">
        <div className="tool-form-inner">
          <div className="form-card">
            <h2>Your Climate & Fish</h2>

            <div style={{ background: '#f0faf8', borderRadius: '10px', padding: '1rem 1.25rem', marginBottom: '1.25rem', border: '1px solid rgba(26,158,142,0.2)' }}>
              <label style={labelStyle}>Not sure your zone? Look it up with your ZIP code</label>
              <div style={{ display: 'flex', gap: '10px', marginTop: '6px' }}>
                <input
                  type="text"
                  inputMode="numeric"
                  placeholder="e.g. 90210"
                  value={zip}
                  maxLength={5}
                  onChange={e => { setZip(e.target.value.replace(/\D/g, '')); setZipMessage('') }}
                  style={{ ...inputStyle, maxWidth: '160px' }}
                />
                <button
                  type="button"
                  onClick={lookupZone}
                  disabled={zipLoading}
                  className="submit-btn"
                  style={{ padding: '0 1.25rem', height: '40px', width: 'auto' }}
                >
                  {zipLoading ? 'Looking up...' : 'Find My Zone'}
                </button>
              </div>
              {zipMessage && (
                <p style={{ fontSize: '13px', color: '#0e6b6b', marginTop: '0.75rem' }}>{zipMessage}</p>
              )}
              <p style={{ fontSize: '11px', color: '#5a7a82', marginTop: '0.75rem' }}>
                This is an AI estimate — double check the zone selected below matches what you expect before relying on it.
              </p>
            </div>

            <div className="form-grid-2">
              <div className="fg">
                <label>USDA Hardiness Zone</label>
                <select value={zone} onChange={e => { setZone(parseInt(e.target.value, 10)); setResult(null) }}>
                  {zones.map(z => <option key={z.value} value={z.value}>{z.label}</option>)}
                </select>
              </div>
              <div className="fg">
                <label>Fish Type</label>
                <select value={fishType} onChange={e => { setFishType(e.target.value); setResult(null) }}>
                  {fishTypes.map(f => <option key={f.value} value={f.value}>{f.emoji} {f.label}</option>)}
                </select>
              </div>
              {needsDepth && (
                <div className="fg">
                  <label>Pond Depth (feet)</label>
                  <input type="number" placeholder="e.g. 3" value={depth} onChange={e => { setDepth(e.target.value); setResult(null) }} />
                </div>
              )}
            </div>

            <button className="submit-btn" onClick={check}>
              Check My Climate ❄️
            </button>
          </div>

          {result && (
            <div style={{ background: '#fff', borderRadius: '14px', padding: '2rem', border: '1px solid rgba(0,0,0,0.07)', marginBottom: '1rem' }}>
              <div style={{ background: levelStyles[result.level].bg, borderRadius: '10px', padding: '1.25rem', marginBottom: '1.25rem' }}>
                <p style={{ fontSize: '15px', fontWeight: 600, color: levelStyles[result.level].text, marginBottom: '0.5rem' }}>
                  {levelStyles[result.level].emoji} {result.title}
                </p>
                <p style={{ fontSize: '14px', color: levelStyles[result.level].text, lineHeight: '1.7' }}>{result.text}</p>
              </div>
              <Link href="/guides/seasonal-care" className="submit-btn" style={{ display: 'block', textAlign: 'center', textDecoration: 'none' }}>
                Read Our Full Seasonal Care Guide →
              </Link>
            </div>
          )}

          <div style={{ padding: '1.25rem', background: '#fff', borderRadius: '14px', border: '1px solid rgba(0,0,0,0.07)', fontSize: '13px', color: '#5a7a82' }}>
            <strong style={{ color: '#1a2e35' }}>💡 Why depth matters so much:</strong> Water below about 39°F is at its densest and sinks to the bottom, which is why a deep enough pond keeps a stable warmer layer at the bottom even when the surface freezes over. Shallow ponds don't have that buffer, which is why depth — not just your zone — decides whether cold-hardy fish like koi and goldfish make it through winter outdoors.
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
