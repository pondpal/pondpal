import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import { costCategories } from '../../lib/costEstimate'

const allFishSorted = Object.entries(costCategories)
  .map(([value, c]) => ({ value, label: c.label, isPond: c.isPond }))
  .sort((a, b) => a.label.localeCompare(b.label))

// Weather Loach, Golden Tench, and Sturgeon are bottom feeders — standard floating
// koi/goldfish pellets aren't a good fit, so they get their own food-type guidance
// and skip the floating-food Amazon recommendations below.
const bottomFeederPond = ['weather-loach', 'golden-tench', 'sturgeon']

// Feeding guidance for anything that isn't an outdoor pond fish (indoor tanks are
// heated and don't have the seasonal temperature swings pond fish experience, so
// there's no winter shutdown here — just steady year-round feeding).
const nonPondProfiles = {
  'goldfish-tank': { pct: 2, food: 'Goldfish pellets or flake', freq: '1–2 times daily', guide: { href: '/guides/goldfish', label: 'Goldfish Care Guide' } },
  'betta': { pct: 2.5, food: 'High-quality betta pellets', freq: 'Once daily, a few pellets', guide: { href: '/guides/betta', label: 'Betta Fish Care Guide' } },
  'african-cichlid': { pct: 2, food: 'Cichlid pellets', freq: '1–2 times daily', guide: { href: '/guides/cichlids', label: 'Cichlid Care Guide' } },
  'south-american-cichlid': { pct: 2, food: 'Cichlid pellets', freq: '1–2 times daily', guide: { href: '/guides/cichlids', label: 'Cichlid Care Guide' } },
  'oscar': { pct: 2, food: 'Cichlid pellets or sticks', freq: '1–2 times daily', guide: { href: '/guides/cichlids', label: 'Cichlid Care Guide' } },
  'tropical': { pct: 2.5, food: 'Tropical flake or micro-pellet food', freq: '1–2 times daily', guide: { href: '/guides/tropical', label: 'Community Tropical Tank Guide' } },
  'guppies': { pct: 3, food: 'Tropical flake or micro-pellet food', freq: '1–2 times daily', guide: { href: '/guides/tropical', label: 'Community Tropical Tank Guide' } },
  'tetras': { pct: 3, food: 'Tropical flake or micro-pellet food', freq: '1–2 times daily', guide: { href: '/guides/tropical', label: 'Community Tropical Tank Guide' } },
  'angelfish': { pct: 2, food: 'Tropical flake or pellet food', freq: '1–2 times daily', guide: { href: '/guides/tropical', label: 'Community Tropical Tank Guide' } },
  'discus': { pct: 2, food: 'High-protein discus pellets or flake', freq: '2 times daily', guide: { href: '/guides/tropical', label: 'Community Tropical Tank Guide' } },
  'corydoras': { pct: 2.5, food: 'Sinking wafers or pellets', freq: 'Once daily', guide: { href: '/guides/tropical', label: 'Community Tropical Tank Guide' } },
  'pleco': { pct: 1.5, food: 'Algae wafers or sinking pellets', freq: 'Once daily (evening)', guide: { href: '/guides/tropical', label: 'Community Tropical Tank Guide' } },
  'other-freshwater': { pct: 2.5, food: 'Tropical flake or pellet food', freq: '1–2 times daily', guide: { href: '/guides/tropical', label: 'Community Tropical Tank Guide' } },
  'clownfish': { pct: 2, food: 'Marine flake, pellet, or frozen foods (mysis/brine shrimp)', freq: '1–2 times daily', guide: { href: '/guides/saltwater', label: 'Saltwater Aquarium Guide' } },
  'chromis': { pct: 2, food: 'Marine flake, pellet, or frozen foods (mysis/brine shrimp)', freq: '1–2 times daily', guide: { href: '/guides/saltwater', label: 'Saltwater Aquarium Guide' } },
  'tang': { pct: 1.5, food: 'Marine algae sheets and herbivore pellets', freq: '1–2 times daily', guide: { href: '/guides/saltwater', label: 'Saltwater Aquarium Guide' } },
  'marine-angelfish': { pct: 1.5, food: 'Marine flake, pellet, or frozen foods (mysis/brine shrimp)', freq: '1–2 times daily', guide: { href: '/guides/saltwater', label: 'Saltwater Aquarium Guide' } },
  'blenny': { pct: 2, food: 'Marine flake, pellet, or frozen foods (mysis/brine shrimp)', freq: '1–2 times daily', guide: { href: '/guides/saltwater', label: 'Saltwater Aquarium Guide' } },
  'wrasse': { pct: 1.5, food: 'Marine flake, pellet, or frozen foods (mysis/brine shrimp)', freq: '1–2 times daily', guide: { href: '/guides/saltwater', label: 'Saltwater Aquarium Guide' } },
  'lionfish': { pct: 1.5, food: 'Frozen or live meaty foods (shrimp, silversides)', freq: '2–3 times weekly', guide: { href: '/guides/saltwater', label: 'Saltwater Aquarium Guide' } },
  'reef-mixed': { pct: 1.5, food: 'Marine flake, pellet, or frozen foods (mysis/brine shrimp)', freq: '1–2 times daily', guide: { href: '/guides/saltwater', label: 'Saltwater Aquarium Guide' } },
  'saltwater': { pct: 1.5, food: 'Marine flake, pellet, or frozen foods (mysis/brine shrimp)', freq: '1–2 times daily', guide: { href: '/guides/saltwater', label: 'Saltwater Aquarium Guide' } },
}

export default function FeedingCalculator() {
  const [fishType, setFishType] = useState('koi')
  const [fish, setFish] = useState([{ count: '', size: '' }])
  const [nonPondCount, setNonPondCount] = useState('')
  const [season, setSeason] = useState('summer')
  const [result, setResult] = useState(null)

  const isPondFish = costCategories[fishType].isPond

  const addFish = () => setFish(f => [...f, { count: '', size: '' }])
  const removeFish = (i) => setFish(f => f.filter((_, idx) => idx !== i))
  const updateFish = (i, k, v) => setFish(f => f.map((item, idx) => idx === i ? { ...item, [k]: v } : item))

  const seasons = [
    { value: 'summer', label: '☀️ Summer', temp: 'Above 65°F', desc: 'Feed 2-3x daily' },
    { value: 'spring', label: '🌸 Spring', temp: '50–65°F', desc: 'Feed once daily' },
    { value: 'autumn', label: '🍂 Autumn', temp: '50–65°F', desc: 'Feed once daily' },
    { value: 'winter', label: '❄️ Winter', temp: 'Below 50°F', desc: 'Do not feed' },
  ]

  const foodRecommendations = {
    summer: { food: 'High-protein staple or growth food', freq: '2–3 times daily', pct: 2, warning: null },
    spring: { food: 'Wheat germ food', freq: 'Once daily, small amounts', pct: 1, warning: 'Transition slowly from wheat germ to staple as temperatures rise above 65°F.' },
    autumn: { food: 'Wheat germ food', freq: 'Once daily, decreasing as temps drop', pct: 1, warning: 'Stop feeding entirely once water temperature drops below 50°F.' },
    winter: { food: null, freq: null, pct: 0, warning: 'Do not feed below 50°F. Fish digestive systems cannot process food in cold water and feeding can cause serious harm.' },
  }

  const calculatePond = () => {
    if (season === 'winter') {
      setResult({ pond: true, winter: true })
      return
    }

    const validFish = fish.filter(f => f.count && f.size)
    if (validFish.length === 0) {
      alert('Please enter at least one group of fish with count and size.')
      return
    }

    const rec = foodRecommendations[season]
    const isBottomFeeder = bottomFeederPond.includes(fishType)

    let totalWeightLbs = 0
    validFish.forEach(f => {
      const count = parseInt(f.count)
      const sizeInches = parseFloat(f.size)
      const weightPerFishLbs = Math.pow(sizeInches / 12, 3) * 2.5
      totalWeightLbs += count * weightPerFishLbs
    })

    const dailyOzMin = (totalWeightLbs * (rec.pct / 100)) * 16
    const dailyOzMax = (totalWeightLbs * ((rec.pct + 1) / 100)) * 16
    const perMealOzMin = dailyOzMin / (season === 'summer' ? 2.5 : 1)
    const perMealOzMax = dailyOzMax / (season === 'summer' ? 2.5 : 1)

    setResult({
      pond: true,
      winter: false,
      totalWeightLbs: totalWeightLbs.toFixed(1),
      dailyMin: dailyOzMin.toFixed(1),
      dailyMax: dailyOzMax.toFixed(1),
      perMealMin: perMealOzMin.toFixed(1),
      perMealMax: perMealOzMax.toFixed(1),
      food: isBottomFeeder ? `Sinking wafers or pellets — this is a bottom feeder, so standard floating ${rec.food.toLowerCase()} isn't a great fit` : rec.food,
      freq: rec.freq,
      warning: rec.warning,
      isBottomFeeder,
      fishCount: validFish.reduce((sum, f) => sum + parseInt(f.count), 0),
    })
  }

  const calculateNonPond = () => {
    const count = parseInt(nonPondCount, 10)
    if (!count || count < 1) {
      alert('Please enter how many fish you have.')
      return
    }
    const profile = nonPondProfiles[fishType]
    setResult({
      pond: false,
      food: profile.food,
      freq: profile.freq,
      guide: profile.guide,
      fishCount: count,
    })
  }

  const calculate = () => {
    if (isPondFish) calculatePond()
    else calculateNonPond()
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

  const products = {
    summer: [
      { name: 'Hikari Staple Koi Food', desc: 'Best everyday summer staple', url: 'https://www.amazon.com/dp/B0002562MK?tag=pondpal20-20' },
      { name: 'Hikari Gold Koi Food', desc: 'Premium color enhancing food', url: 'https://www.amazon.com/dp/B0002562OY?tag=pondpal20-20' },
    ],
    spring: [
      { name: 'The Pond Guy Wheat Germ Fish Food', desc: 'Best cool weather formula', url: 'https://www.amazon.com/dp/B00S6R0OZ0?tag=pondpal20-20' },
      { name: 'Blue Ridge Wheat Germ', desc: 'Great value wheat germ food', url: 'https://www.amazon.com/dp/B002C026OY?tag=pondpal20-20' },
    ],
    autumn: [
      { name: 'The Pond Guy Wheat Germ Fish Food', desc: 'Best cool weather formula', url: 'https://www.amazon.com/dp/B00S6R0OZ0?tag=pondpal20-20' },
      { name: 'Blue Ridge Wheat Germ', desc: 'Great value wheat germ food', url: 'https://www.amazon.com/dp/B002C026OY?tag=pondpal20-20' },
    ],
  }

  return (
    <>
      <Head>
        <title>Fish Feeding Calculator — How Much to Feed Your Fish — Pond Pal</title>
        <meta name="description" content="Calculate exactly how much to feed any fish — koi, goldfish, tropical fish, cichlids, saltwater, and more — based on fish size, number, and season." />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>

      <div className="tool-hero">
        <h1>🍽️ Fish Feeding Calculator</h1>
        <p>Find out exactly how much to feed your fish — works for koi, goldfish, tropical fish, cichlids, saltwater, and more</p>
      </div>

      <div className="tool-form-section">
        <div className="tool-form-inner">

          <div className="form-card">
            <h2>What fish are you feeding?</h2>
            <div style={{ marginTop: '1rem' }}>
              <label style={labelStyle}>Fish Type</label>
              <select value={fishType} onChange={e => { setFishType(e.target.value); setResult(null) }} style={inputStyle}>
                {allFishSorted.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
              </select>
            </div>
          </div>

          {isPondFish && (
            <div className="form-card">
              <h2>What season is it?</h2>
              <p style={{ fontSize: '13px', color: '#5a7a82', marginTop: '0.5rem', marginBottom: '0.5rem' }}>
                Outdoor pond fish slow down and stop eating as water temperature drops — this applies regardless of species.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px', marginTop: '1rem' }}>
                {seasons.map(s => (
                  <div
                    key={s.value}
                    onClick={() => { setSeason(s.value); setResult(null) }}
                    style={{
                      padding: '0.875rem', borderRadius: '10px', cursor: 'pointer',
                      border: season === s.value ? '2px solid #1a9e8e' : '1px solid rgba(0,0,0,0.12)',
                      background: season === s.value ? '#d4f0ec' : '#faf7f2',
                      transition: 'all 0.2s'
                    }}
                  >
                    <div style={{ fontSize: '15px', fontWeight: 500, color: '#1a2e35', marginBottom: '2px' }}>{s.label}</div>
                    <div style={{ fontSize: '11px', color: '#5a7a82' }}>{s.temp} · {s.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {!isPondFish && (
            <div style={{ background: '#f0faf8', borderRadius: '14px', padding: '1.25rem', border: '1px solid rgba(26,158,142,0.2)', fontSize: '13px', color: '#0e6b6b' }}>
              💡 Indoor and saltwater tanks stay heated year-round, so there's no seasonal feeding adjustment needed — just feed consistently.
            </div>
          )}

          {isPondFish && season !== 'winter' && (
            <div className="form-card">
              <h2>Your Fish</h2>
              <p style={{ fontSize: '13px', color: '#5a7a82', marginBottom: '1.25rem' }}>
                Add a row for each group of similar-sized fish. You can add multiple groups if you have a mix of sizes.
              </p>

              {fish.map((f, i) => (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr auto', gap: '10px', marginBottom: '10px', alignItems: 'end' }}>
                  <div>
                    <label style={labelStyle}>Number of fish</label>
                    <input type="number" placeholder="e.g. 4" value={f.count}
                      onChange={e => updateFish(i, 'count', e.target.value)} style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Average size (inches)</label>
                    <input type="number" placeholder="e.g. 12" value={f.size}
                      onChange={e => updateFish(i, 'size', e.target.value)} style={inputStyle} />
                  </div>
                  {fish.length > 1 && (
                    <button onClick={() => removeFish(i)} style={{ height: '40px', padding: '0 12px', background: '#FCEBEB', color: '#A32D2D', border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '16px' }}>×</button>
                  )}
                </div>
              ))}

              <button
                onClick={addFish}
                style={{ background: 'none', border: '1px dashed #1a9e8e', color: '#1a9e8e', padding: '8px 16px', borderRadius: '8px', cursor: 'pointer', fontSize: '13px', marginBottom: '1rem', fontFamily: 'inherit' }}
              >
                + Add another group of fish
              </button>

              <button className="submit-btn" onClick={calculate}>
                Calculate Feeding Amount 🍽️
              </button>
            </div>
          )}

          {!isPondFish && (
            <div className="form-card">
              <h2>Your Fish</h2>
              <div style={{ marginTop: '1rem', marginBottom: '1.25rem' }}>
                <label style={labelStyle}>How many fish?</label>
                <input type="number" placeholder="e.g. 6" value={nonPondCount}
                  onChange={e => setNonPondCount(e.target.value)} style={inputStyle} />
              </div>
              <button className="submit-btn" onClick={calculate}>
                Get Feeding Guidance 🍽️
              </button>
            </div>
          )}

          {isPondFish && season === 'winter' && !result && (
            <div style={{ background: '#E6F1FB', borderRadius: '14px', padding: '2rem', border: '1px solid rgba(24,95,165,0.2)', textAlign: 'center' }}>
              <div style={{ fontSize: '48px', marginBottom: '1rem' }}>❄️</div>
              <h2 style={{ fontSize: '1.2rem', color: '#185FA5', marginBottom: '0.75rem' }}>Don't feed in winter!</h2>
              <p style={{ fontSize: '14px', color: '#2a3f47', lineHeight: '1.7' }}>
                Below 50°F, pond fish digestive systems slow to a near halt. Feeding them in cold water causes undigested food to sit and rot in their gut, which can be fatal. Your fish will survive winter perfectly well on their stored body fat — they don't need food until spring.
              </p>
              <p style={{ fontSize: '13px', color: '#185FA5', marginTop: '1rem', fontWeight: 500 }}>
                Resume feeding with wheat germ food when water temperatures reliably reach 50°F in spring.
              </p>
            </div>
          )}

          {result && result.pond && !result.winter && (
            <>
              <div style={{ background: '#fff', borderRadius: '14px', padding: '2rem', border: '1px solid rgba(0,0,0,0.07)', marginBottom: '1rem' }}>
                <h2 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: '#062d3a' }}>Feeding Results for {result.fishCount} Fish</h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginBottom: '1.5rem' }}>
                  {[
                    { label: 'Daily Total', value: result.dailyMin + '–' + result.dailyMax, unit: 'ounces per day', color: '#d4f0ec', textColor: '#0e6b6b' },
                    { label: 'Per Meal', value: result.perMealMin + '–' + result.perMealMax, unit: 'ounces per feeding', color: '#faeeda', textColor: '#854F0B' },
                    { label: 'Feeding Frequency', value: result.freq, unit: '', color: '#E6F1FB', textColor: '#185FA5' },
                    { label: 'Food Type', value: result.food, unit: '', color: '#e8e4f8', textColor: '#4a3d8f' },
                  ].map((m, i) => (
                    <div key={i} style={{ background: m.color, borderRadius: '10px', padding: '1rem', textAlign: 'center' }}>
                      <p style={{ fontSize: '11px', fontWeight: 500, color: m.textColor, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px' }}>{m.label}</p>
                      <p style={{ fontSize: i < 2 ? '24px' : '14px', fontWeight: 600, color: m.textColor, fontFamily: i < 2 ? 'Lora, serif' : 'inherit', lineHeight: 1.3 }}>{m.value}</p>
                      {m.unit && <p style={{ fontSize: '11px', color: m.textColor, opacity: 0.8, marginTop: '2px' }}>{m.unit}</p>}
                    </div>
                  ))}
                </div>

                {result.warning && (
                  <div style={{ background: '#faeeda', borderRadius: '8px', padding: '0.875rem 1rem', marginBottom: '1rem', fontSize: '13px', color: '#854F0B' }}>
                    ⚠️ {result.warning}
                  </div>
                )}

                <div style={{ background: '#f0faf8', borderRadius: '8px', padding: '0.875rem 1rem', fontSize: '13px', color: '#0e6b6b' }}>
                  <strong>5 minute rule:</strong> These are calculated estimates. In practice, offer a moderate amount and remove anything uneaten after 5 minutes. Your fish's appetite is the best guide — feed less if food is being ignored.
                </div>
              </div>

              {products[season] && !result.isBottomFeeder && (
                <div style={{ background: '#fff', borderRadius: '14px', padding: '1.5rem', border: '1px solid rgba(0,0,0,0.07)', marginBottom: '1rem' }}>
                  <p style={{ fontSize: '13px', fontWeight: 500, color: '#1a2e35', marginBottom: '1rem' }}>🛒 Recommended food for this season</p>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                    {products[season].map((p, i) => (
                      <a key={i} href={p.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', padding: '0.75rem', background: '#f8fffe', borderRadius: '8px', border: '1px solid rgba(26,158,142,0.2)', display: 'block' }}>
                        <p style={{ fontSize: '13px', fontWeight: 500, color: '#1a2e35', marginBottom: '2px' }}>{p.name}</p>
                        <p style={{ fontSize: '11px', color: '#5a7a82' }}>{p.desc}</p>
                        <p style={{ fontSize: '11px', color: '#1a9e8e', marginTop: '4px' }}>View on Amazon →</p>
                      </a>
                    ))}
                  </div>
                  <p style={{ fontSize: '10px', color: '#5a7a82', marginTop: '0.75rem' }}>As an Amazon Associate, Pond Pal earns from qualifying purchases.</p>
                </div>
              )}
            </>
          )}

          {result && !result.pond && (
            <div style={{ background: '#fff', borderRadius: '14px', padding: '2rem', border: '1px solid rgba(0,0,0,0.07)', marginBottom: '1rem' }}>
              <h2 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: '#062d3a' }}>Feeding Guidance for {result.fishCount} Fish</h2>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ background: '#E6F1FB', borderRadius: '10px', padding: '1rem', textAlign: 'center' }}>
                  <p style={{ fontSize: '11px', fontWeight: 500, color: '#185FA5', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px' }}>Feeding Frequency</p>
                  <p style={{ fontSize: '14px', fontWeight: 600, color: '#185FA5' }}>{result.freq}</p>
                </div>
                <div style={{ background: '#e8e4f8', borderRadius: '10px', padding: '1rem', textAlign: 'center' }}>
                  <p style={{ fontSize: '11px', fontWeight: 500, color: '#4a3d8f', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px' }}>Food Type</p>
                  <p style={{ fontSize: '14px', fontWeight: 600, color: '#4a3d8f' }}>{result.food}</p>
                </div>
              </div>

              <div style={{ background: '#f0faf8', borderRadius: '8px', padding: '0.875rem 1rem', fontSize: '13px', color: '#0e6b6b', marginBottom: result.guide ? '1rem' : 0 }}>
                <strong>2–3 minute rule:</strong> For indoor and saltwater tanks, feed only what your fish can finish in 2–3 minutes. It's much easier to overfeed a small tank than an outdoor pond, and leftover food quickly fouls the water.
              </div>

              {result.guide && (
                <p style={{ fontSize: '13px' }}>
                  <Link href={result.guide.href} style={{ color: '#1a9e8e', fontWeight: 500 }}>Read the {result.guide.label} →</Link>
                </p>
              )}
            </div>
          )}

          <div style={{ padding: '1.25rem', background: '#fff', borderRadius: '14px', border: '1px solid rgba(0,0,0,0.07)', fontSize: '13px', color: '#5a7a82' }}>
            <strong style={{ color: '#1a2e35' }}>💡 About these calculations:</strong> Pond fish amounts are estimated at 1–2% of total body weight, the standard guideline for outdoor pond fish. Indoor/saltwater guidance is qualitative rather than weight-based, since body shape varies too much between species (a betta and a tang of the same length weigh very differently) for a single formula to stay accurate. Individual fish appetites vary — always observe your fish and adjust accordingly.
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
