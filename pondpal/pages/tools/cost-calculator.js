import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import { costCategories, estimateCost } from '../../lib/costEstimate'

const categoryOptions = Object.entries(costCategories).map(([value, c]) => ({ value, label: c.label }))

export default function CostCalculator() {
  const [category, setCategory] = useState('koi')
  const [fishCount, setFishCount] = useState('')
  const [electricityRate, setElectricityRate] = useState('0.16')
  const [result, setResult] = useState(null)

  const calculate = () => {
    const count = parseInt(fishCount, 10)
    if (!count || count < 1) {
      alert('Please enter how many fish you plan to keep.')
      return
    }
    setResult(estimateCost(category, count, parseFloat(electricityRate)))
  }

  const labelStyle = { display: 'block', fontSize: '11px', fontWeight: 500, color: '#5a7a82', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '5px' }
  const inputStyle = { width: '100%', height: '40px', padding: '0 12px', border: '1px solid rgba(0,0,0,0.15)', borderRadius: '8px', fontSize: '14px', fontFamily: 'inherit', color: '#1a2e35', background: '#faf7f2' }
  const money = (n) => '$' + n.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })

  return (
    <>
      <Head>
        <title>True Cost of Keeping Fish Calculator — Pond Pal</title>
        <meta name="description" content="Find out the real upfront and ongoing cost of keeping koi, goldfish, tropical fish, or a saltwater tank — including equipment, food, and electricity most calculators leave out." />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>

      <div className="tool-hero">
        <h1>💰 True Cost of Keeping Fish</h1>
        <p>Upfront setup cost plus real ongoing expenses — including the electricity bill most people never think about</p>
      </div>

      <div className="tool-form-section">
        <div className="tool-form-inner">
          <div className="form-card">
            <h2>Your Planned Setup</h2>
            <p style={{ fontSize: '13px', color: '#5a7a82', marginBottom: '1.25rem' }}>
              We'll recommend an appropriate tank or pond size based on your fish type and count, then estimate the real cost of setting it up and keeping it running.
            </p>

            <div className="form-grid-2">
              <div className="fg">
                <label>Fish Type</label>
                <select value={category} onChange={e => { setCategory(e.target.value); setResult(null) }}>
                  {categoryOptions.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                </select>
              </div>
              <div className="fg">
                <label>How Many Fish?</label>
                <input type="number" placeholder="e.g. 4" value={fishCount} onChange={e => { setFishCount(e.target.value); setResult(null) }} />
              </div>
              <div className="fg">
                <label>Your Electricity Rate ($/kWh)</label>
                <input type="number" step="0.01" placeholder="0.16" value={electricityRate} onChange={e => { setElectricityRate(e.target.value); setResult(null) }} />
              </div>
            </div>
            <p style={{ fontSize: '11px', color: '#5a7a82', marginBottom: '1rem' }}>
              Not sure your rate? The US average is around $0.16/kWh — check a recent electric bill for your exact rate, since it varies a lot by region.
            </p>

            <button className="submit-btn" onClick={calculate}>
              Calculate My Real Cost 💰
            </button>
          </div>

          {result && (
            <>
              <div style={{ background: '#fff', borderRadius: '14px', padding: '2rem', border: '1px solid rgba(0,0,0,0.07)', marginBottom: '1rem' }}>
                <h2 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#062d3a' }}>Your Estimate</h2>
                <p style={{ fontSize: '13px', color: '#5a7a82', marginBottom: '1.5rem' }}>
                  Based on {result.category}, recommended setup size: <strong style={{ color: '#1a2e35' }}>{result.recommendedGallons.toLocaleString()} gallons</strong>
                </p>

                <h3 style={{ fontSize: '1rem', marginBottom: '0.75rem', color: '#1a2e35' }}>💵 Upfront Setup Cost</h3>
                <div style={{ display: 'grid', gap: '0.5rem', marginBottom: '1rem', fontSize: '13px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: '#5a7a82' }}>Fish</span><span>{money(result.upfront.fish)}</span></div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: '#5a7a82' }}>Tank / pond structure</span><span>{money(result.upfront.structure)}</span></div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: '#5a7a82' }}>Filter & pump</span><span>{money(result.upfront.filterPump)}</span></div>
                  {result.upfront.heater > 0 && (
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: '#5a7a82' }}>Heater</span><span>{money(result.upfront.heater)}</span></div>
                  )}
                  {result.upfront.saltwaterExtra > 0 && (
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: '#5a7a82' }}>Marine equipment (skimmer, salt mix, etc.)</span><span>{money(result.upfront.saltwaterExtra)}</span></div>
                  )}
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: '#5a7a82' }}>Test kit, conditioner & basic accessories</span><span>{money(result.upfront.testKitMisc)}</span></div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '0.5rem', borderTop: '1px solid rgba(0,0,0,0.08)', fontWeight: 600 }}><span>Total Upfront</span><span>{money(result.upfront.total)}</span></div>
                </div>

                <h3 style={{ fontSize: '1rem', marginBottom: '0.75rem', color: '#1a2e35' }}>📅 Monthly Ongoing Cost</h3>
                <div style={{ display: 'grid', gap: '0.5rem', marginBottom: '1rem', fontSize: '13px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: '#5a7a82' }}>Food</span><span>{money(result.monthly.food)}</span></div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: '#5a7a82' }}>⚡ Electricity (pump/filter{result.monthly.electricity > 0 && result.upfront.heater > 0 ? ' & heater' : ''})</span><span>{money(result.monthly.electricity)}</span></div>
                  {result.monthly.saltwaterExtra > 0 && (
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: '#5a7a82' }}>Salt mix replenishment</span><span>{money(result.monthly.saltwaterExtra)}</span></div>
                  )}
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: '#5a7a82' }}>Consumables (test strips, conditioner)</span><span>{money(result.monthly.consumables)}</span></div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '0.5rem', borderTop: '1px solid rgba(0,0,0,0.08)', fontWeight: 600 }}><span>Total Monthly</span><span>{money(result.monthly.total)}</span></div>
                </div>

                <div style={{ background: '#f0faf8', borderRadius: '10px', padding: '1.25rem', border: '1px solid rgba(26,158,142,0.2)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span style={{ fontSize: '13px', color: '#0e6b6b' }}>Emergency/vet fund (recommended, annual)</span>
                    <span style={{ fontSize: '13px', color: '#0e6b6b' }}>{money(result.annual.emergencyFund)}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontWeight: 600 }}>
                    <span style={{ color: '#0e6b6b' }}>Total First Year</span>
                    <span style={{ color: '#0e6b6b' }}>{money(result.annual.firstYearTotal)}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
                    <span style={{ color: '#0e6b6b' }}>Every Year After</span>
                    <span style={{ color: '#0e6b6b' }}>{money(result.annual.ongoingYearTotal)}</span>
                  </div>
                </div>
              </div>

              <div style={{ background: '#062d3a', borderRadius: '14px', padding: '2rem', textAlign: 'center', marginBottom: '1rem' }}>
                <h3 style={{ color: '#fff', marginBottom: '0.75rem', fontSize: '1.1rem' }}>Ready to size the actual tank or pond?</h3>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', marginBottom: '1.5rem' }}>Get a full AI analysis of your specific setup, including filtration recommendations.</p>
                <Link href="/tank-checker" className="submit-btn" style={{ display: 'inline-block', width: 'auto', padding: '0 1.5rem', textDecoration: 'none' }}>
                  Check My Tank Size →
                </Link>
              </div>
            </>
          )}

          <div style={{ marginTop: '1.5rem', padding: '1.25rem', background: '#fff', borderRadius: '14px', border: '1px solid rgba(0,0,0,0.07)', fontSize: '13px', color: '#5a7a82' }}>
            <strong style={{ color: '#1a2e35' }}>💡 About these estimates:</strong> These are typical planning estimates based on common equipment and average prices — actual costs vary by region, brand choices, and whether you buy new or secondhand equipment. Electricity cost assumes your pump/filter (and heater, where relevant) run continuously, which is normal for fish keeping. Use this as a realistic starting budget, not an exact quote.
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
