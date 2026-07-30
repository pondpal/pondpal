import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import { costCategories, environments, estimateSetupsCost } from '../../lib/costEstimate'

const categoriesByEnv = Object.keys(environments).reduce((acc, env) => {
  acc[env] = Object.entries(costCategories).filter(([, c]) => c.env === env).map(([value, c]) => ({ value, label: c.label }))
  return acc
}, {})

const defaultFishForEnv = (env) => categoriesByEnv[env][0].value
const newSetup = (env) => ({ env, fish: [{ category: defaultFishForEnv(env), count: '' }] })

const money = (n) => '$' + n.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })

export default function CostCalculator() {
  const [setups, setSetups] = useState([newSetup('pond')])
  const [electricityRate, setElectricityRate] = useState('0.16')
  const [result, setResult] = useState(null)

  const updateSetupEnv = (setupIndex, env) => setSetups(list => {
    const next = [...list]
    next[setupIndex] = newSetup(env)
    return next
  })

  const addSetup = () => setSetups(list => [...list, newSetup('indoor')])
  const removeSetup = (setupIndex) => setSetups(list => list.filter((_, i) => i !== setupIndex))

  const updateFish = (setupIndex, fishIndex, k, v) => setSetups(list => {
    const next = [...list]
    const fish = [...next[setupIndex].fish]
    fish[fishIndex] = { ...fish[fishIndex], [k]: v }
    next[setupIndex] = { ...next[setupIndex], fish }
    return next
  })

  const addFish = (setupIndex) => setSetups(list => {
    const next = [...list]
    const env = next[setupIndex].env
    next[setupIndex] = { ...next[setupIndex], fish: [...next[setupIndex].fish, { category: defaultFishForEnv(env), count: '' }] }
    return next
  })

  const removeFish = (setupIndex, fishIndex) => setSetups(list => {
    const next = [...list]
    next[setupIndex] = { ...next[setupIndex], fish: next[setupIndex].fish.filter((_, i) => i !== fishIndex) }
    return next
  })

  const calculate = () => {
    if (setups.some(s => s.fish.some(f => !f.count || parseInt(f.count, 10) < 1))) {
      alert('Please enter how many fish for each fish type in every tank/pond.')
      return
    }
    const payload = setups.map(s => ({ env: s.env, fish: s.fish.map(f => ({ category: f.category, count: parseInt(f.count, 10) })) }))
    setResult(estimateSetupsCost(payload, parseFloat(electricityRate)))
  }

  const labelStyle = { display: 'block', fontSize: '11px', fontWeight: 500, color: '#5a7a82', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '5px' }
  const inputStyle = { width: '100%', height: '40px', padding: '0 12px', border: '1px solid rgba(0,0,0,0.15)', borderRadius: '8px', fontSize: '14px', fontFamily: 'inherit', color: '#1a2e35', background: '#faf7f2' }
  const removeBtnStyle = { height: '40px', padding: '0 12px', border: '1px solid rgba(0,0,0,0.15)', borderRadius: '8px', background: '#fff', color: '#A32D2D', cursor: 'pointer', fontSize: '13px' }

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
              Add a tank or pond for each separate setup you have — say, an outdoor pond and two different indoor tanks. Each gets its own estimate, then we'll give you a combined total.
            </p>

            {setups.map((setup, si) => (
              <div key={si} style={{ border: '1px solid rgba(0,0,0,0.1)', borderRadius: '10px', padding: '1rem', marginBottom: '1rem', background: '#fdfcfa' }}>
                <div style={{ display: 'grid', gridTemplateColumns: setups.length > 1 ? '1fr auto' : '1fr', gap: '10px', alignItems: 'end', marginBottom: '1rem' }}>
                  <div>
                    <label style={labelStyle}>Tank / Pond #{si + 1} Type</label>
                    <select value={setup.env} onChange={e => { updateSetupEnv(si, e.target.value); setResult(null) }} style={inputStyle}>
                      {Object.entries(environments).map(([env, meta]) => (
                        <option key={env} value={env}>{meta.emoji} {meta.label}</option>
                      ))}
                    </select>
                  </div>
                  {setups.length > 1 && (
                    <button type="button" onClick={() => { removeSetup(si); setResult(null) }} style={removeBtnStyle}>
                      Remove This Setup
                    </button>
                  )}
                </div>

                <label style={labelStyle}>Fish in This {environments[setup.env].label}</label>
                <div style={{ display: 'grid', gap: '0.75rem', marginTop: '0.5rem' }}>
                  {setup.fish.map((f, fi) => (
                    <div key={fi} style={{ display: 'grid', gridTemplateColumns: setup.fish.length > 1 ? '2fr 1fr auto' : '2fr 1fr', gap: '10px' }}>
                      <select value={f.category} onChange={e => { updateFish(si, fi, 'category', e.target.value); setResult(null) }} style={inputStyle}>
                        {categoriesByEnv[setup.env].map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                      </select>
                      <input type="number" placeholder="e.g. 2" value={f.count}
                        onChange={e => { updateFish(si, fi, 'count', e.target.value); setResult(null) }}
                        style={inputStyle} />
                      {setup.fish.length > 1 && (
                        <button type="button" onClick={() => { removeFish(si, fi); setResult(null) }} style={removeBtnStyle}>
                          Remove
                        </button>
                      )}
                    </div>
                  ))}
                </div>
                <button type="button" onClick={() => addFish(si)}
                  style={{ marginTop: '0.75rem', padding: '8px 16px', border: '1px dashed #1a9e8e', borderRadius: '8px', background: '#f0faf8', color: '#0e6b6b', cursor: 'pointer', fontSize: '13px', fontWeight: 500 }}>
                  + Add Another Fish Type
                </button>
              </div>
            ))}

            <button type="button" onClick={addSetup}
              style={{ marginBottom: '1.25rem', padding: '8px 16px', border: '1px dashed #062d3a', borderRadius: '8px', background: '#f0f4f5', color: '#062d3a', cursor: 'pointer', fontSize: '13px', fontWeight: 500 }}>
              + Add Another Tank / Pond
            </button>

            <div className="form-grid-2">
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
              {result.sections.map(section => (
                <div key={section.env} style={{ background: '#fff', borderRadius: '14px', padding: '2rem', border: '1px solid rgba(0,0,0,0.07)', marginBottom: '1rem' }}>
                  <h2 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: '#062d3a' }}>{section.emoji} {section.label}</h2>
                  <p style={{ fontSize: '13px', color: '#5a7a82', marginBottom: '1.5rem' }}>
                    {section.category}, recommended setup size: <strong style={{ color: '#1a2e35' }}>{section.recommendedGallons.toLocaleString()} gallons</strong>
                  </p>

                  <h3 style={{ fontSize: '1rem', marginBottom: '0.75rem', color: '#1a2e35' }}>💵 Upfront Setup Cost</h3>
                  <div style={{ display: 'grid', gap: '0.5rem', marginBottom: '1rem', fontSize: '13px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: '#5a7a82' }}>Fish</span><span>{money(section.upfront.fish)}</span></div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: '#5a7a82' }}>Tank / pond structure</span><span>{money(section.upfront.structure)}</span></div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: '#5a7a82' }}>Filter & pump</span><span>{money(section.upfront.filterPump)}</span></div>
                    {section.upfront.heater > 0 && (
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: '#5a7a82' }}>Heater</span><span>{money(section.upfront.heater)}</span></div>
                    )}
                    {section.upfront.saltwaterExtra > 0 && (
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: '#5a7a82' }}>Marine equipment (skimmer, salt mix, etc.)</span><span>{money(section.upfront.saltwaterExtra)}</span></div>
                    )}
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: '#5a7a82' }}>Test kit, conditioner & basic accessories</span><span>{money(section.upfront.testKitMisc)}</span></div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '0.5rem', borderTop: '1px solid rgba(0,0,0,0.08)', fontWeight: 600 }}><span>Total Upfront</span><span>{money(section.upfront.total)}</span></div>
                  </div>

                  <h3 style={{ fontSize: '1rem', marginBottom: '0.75rem', color: '#1a2e35' }}>📅 Monthly Ongoing Cost</h3>
                  <div style={{ display: 'grid', gap: '0.5rem', marginBottom: '1rem', fontSize: '13px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: '#5a7a82' }}>Food</span><span>{money(section.monthly.food)}</span></div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: '#5a7a82' }}>⚡ Electricity (pump/filter{section.upfront.heater > 0 ? ' & heater' : ''})</span><span>{money(section.monthly.electricity)}</span></div>
                    {section.monthly.saltwaterExtra > 0 && (
                      <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: '#5a7a82' }}>Salt mix replenishment</span><span>{money(section.monthly.saltwaterExtra)}</span></div>
                    )}
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: '#5a7a82' }}>Consumables (test strips, conditioner)</span><span>{money(section.monthly.consumables)}</span></div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '0.5rem', borderTop: '1px solid rgba(0,0,0,0.08)', fontWeight: 600 }}><span>Total Monthly</span><span>{money(section.monthly.total)}</span></div>
                  </div>

                  <div style={{ background: '#f0faf8', borderRadius: '10px', padding: '1.25rem', border: '1px solid rgba(26,158,142,0.2)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                      <span style={{ fontSize: '13px', color: '#0e6b6b' }}>Emergency/vet fund (recommended, annual)</span>
                      <span style={{ fontSize: '13px', color: '#0e6b6b' }}>{money(section.annual.emergencyFund)}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontWeight: 600 }}>
                      <span style={{ color: '#0e6b6b' }}>Total First Year</span>
                      <span style={{ color: '#0e6b6b' }}>{money(section.annual.firstYearTotal)}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
                      <span style={{ color: '#0e6b6b' }}>Every Year After</span>
                      <span style={{ color: '#0e6b6b' }}>{money(section.annual.ongoingYearTotal)}</span>
                    </div>
                  </div>
                </div>
              ))}

              {result.sections.length > 1 && (
                <div style={{ background: '#062d3a', borderRadius: '14px', padding: '2rem', marginBottom: '1rem' }}>
                  <h2 style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '1rem' }}>🧮 Combined Total ({result.sections.length} setups)</h2>
                  <div style={{ display: 'grid', gap: '0.5rem', fontSize: '14px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: 'rgba(255,255,255,0.7)' }}>Total Upfront (all setups)</span><span style={{ color: '#fff' }}>{money(result.grandTotal.upfront)}</span></div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: 'rgba(255,255,255,0.7)' }}>Total Monthly (all setups)</span><span style={{ color: '#fff' }}>{money(result.grandTotal.monthly)}</span></div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '0.5rem', borderTop: '1px solid rgba(255,255,255,0.15)', fontWeight: 600 }}><span style={{ color: '#fff' }}>Total First Year</span><span style={{ color: '#fff' }}>{money(result.grandTotal.firstYear)}</span></div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}><span style={{ color: 'rgba(255,255,255,0.7)' }}>Every Year After</span><span style={{ color: '#fff' }}>{money(result.grandTotal.ongoingYear)}</span></div>
                  </div>
                </div>
              )}

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
            <strong style={{ color: '#1a2e35' }}>💡 About these estimates:</strong> These are typical planning estimates based on common equipment and average prices — actual costs vary by region, brand choices, and whether you buy new or secondhand equipment. Electricity cost assumes your pump/filter (and heater, where relevant) run continuously, which is normal for fish keeping. If you keep fish in more than one type of setup (say, an indoor tank and an outdoor pond), each gets its own estimate since they can't share equipment. Use this as a realistic starting budget, not an exact quote.
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
