import Head from 'next/head'
import Link from 'next/link'

function ProductGrid({ items, title }) {
  return (
    <div style={{ background: '#fff', borderRadius: '14px', padding: '1.5rem', border: '1px solid rgba(0,0,0,0.07)', margin: '1.5rem 0' }}>
      <p style={{ fontSize: '13px', fontWeight: 500, color: '#1a2e35', marginBottom: '1rem' }}>🛒 {title}</p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
        {items.map((p, i) => (
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
  )
}

const sections = [
  { emoji: '💧', title: 'Why water chemistry matters', content: `Koi live entirely in the water around them. They breathe it, absorb it through their skin, and rely on it to regulate their body temperature. When the chemistry is off, even slightly, fish feel it immediately — even if you can't see anything wrong yet.\n\nThe good news is that water chemistry follows predictable rules. Once you understand the key parameters and what they mean, keeping your pond healthy becomes much more intuitive. You don't need to be a scientist — you just need to know what to test, what the numbers mean, and what to do when something is off.` },
  { emoji: '⚗️', title: 'pH — the foundation of everything', content: `pH measures how acidic or alkaline your water is on a scale of 0–14. Pure neutral water sits at 7.0. For koi, the ideal range is 7.0–8.0, with 7.2–7.6 being the sweet spot.\n\npH that's too low (acidic) stresses koi and can cause their protective slime coat to break down, making them vulnerable to disease. pH that's too high (alkaline) makes ammonia far more toxic — a reading that's manageable at pH 7.0 can become deadly at pH 8.5.\n\nWhat affects pH: decaying organic matter like leaves and uneaten food drives pH down over time. Limestone rocks, certain gravels, and tap water often push pH up. pH also naturally rises during the day as plants photosynthesize and falls overnight — a swing of 0.5 or more in 24 hours is stressful for fish.\n\nTo raise pH: add crushed coral or oyster shell to your filter. To lower pH: perform a partial water change, remove organic debris, and reduce plant mass.` },
  { emoji: '☠️', title: 'Ammonia — the number one killer', content: `Ammonia is produced constantly by your koi through their gills, urine, and decomposing waste. In a healthy, cycled pond, beneficial bacteria convert ammonia into less harmful compounds almost as fast as it's produced. In a new pond or an overstocked one, ammonia can build to dangerous levels quickly.\n\nThe safe level for koi is 0 ppm. Any detectable ammonia is a cause for concern. At 0.5 ppm, koi will show signs of stress — clamped fins, hovering near the surface, reduced appetite. At 2 ppm and above, gill damage occurs. At high levels, ammonia is rapidly fatal.\n\nIf you detect ammonia: do a 25–30% water change immediately using dechlorinated water. Reduce or stop feeding — unprocessed food adds more ammonia. Check your filter is running correctly and hasn't been cleaned too aggressively, which can wipe out your beneficial bacteria.` },
  { emoji: '⚠️', title: 'Nitrite — the cycling spike', content: `Nitrite is produced when beneficial bacteria convert ammonia. It's less immediately toxic than ammonia but still very harmful. Nitrite interferes with the ability of koi blood to carry oxygen — even with plenty of dissolved oxygen in the water, fish with nitrite poisoning effectively suffocate.\n\nSafe level: 0 ppm. Anything above 0.25 ppm warrants action.\n\nNitrite spikes are most common in new ponds during the cycling process, after a filter crash, or after adding too many fish too quickly. Signs of nitrite poisoning look similar to ammonia toxicity — gasping at the surface, lethargy, and pale gills.\n\nEmergency treatment: add pond salt at 0.1–0.3% concentration. Salt temporarily blocks nitrite uptake through the gills and buys you time while you do water changes and investigate the root cause.` },
  { emoji: '📊', title: 'Nitrate — the slow build', content: `Nitrate is the end product of the nitrogen cycle and is far less toxic than ammonia or nitrite. Koi can tolerate nitrate levels up to around 40–80 ppm without obvious distress, but chronic high nitrate suppresses immune function and makes fish more susceptible to disease over time.\n\nIdeal level: below 40 ppm. Many experienced keepers aim for below 20 ppm.\n\nNitrate accumulates gradually and the only way to remove it is through water changes and plant uptake. This is why regular partial water changes are so important — not just to dilute ammonia, but to keep nitrate in check over the long term.` },
  { emoji: '🪨', title: 'KH and GH — hardness explained', content: `KH (carbonate hardness) and GH (general hardness) are the parameters that confuse most beginners, but they're actually straightforward once you understand their roles.\n\nKH, also called alkalinity, measures the buffering capacity of your water — its ability to resist pH swings. This is critically important for koi ponds. A low KH means your pH can crash suddenly, which is extremely dangerous. Ideal KH for koi is 80–120 ppm, or around 4.5–6.7 dKH. If your KH is below 4 dKH, your pH is at risk of crashing, especially overnight.\n\nGH measures the total concentration of dissolved minerals — primarily calcium and magnesium. These minerals are essential for koi health, proper scale development, and mucus coat integrity. Ideal GH for koi is 100–200 ppm, or 5.6–11.2 dGH.` },
  { emoji: '🌡️', title: 'Temperature — more important than you think', content: `Koi are cold-blooded, meaning their metabolism, immune system, and digestion all run at different speeds depending on water temperature. Temperature isn't just a comfort issue — it dictates almost everything about how you care for your fish.\n\nAt 65–75°F: koi are in their prime zone. Active, hungry, and their immune systems are fully functional. Feed a quality staple food 2–3 times daily.\n\nAt 55–65°F: metabolism slows. Switch to a wheat germ based food which is easier to digest at lower temperatures. Feed once daily.\n\nBelow 55°F: reduce feeding to every few days, very small amounts. Below 50°F, stop feeding entirely. Undigested food in a koi's gut at cold temperatures can cause serious internal problems.` },
  { emoji: '🫧', title: 'Dissolved oxygen — the invisible essential', content: `Fish breathe oxygen dissolved in water, and koi are no different. Healthy koi ponds should maintain dissolved oxygen levels above 6 ppm, with 8 ppm or higher being ideal.\n\nOxygen enters pond water through surface agitation — waterfalls, fountains, and air stones all help. Warmer water holds less oxygen than cooler water, which is why summer nights can be particularly dangerous. If all your fish are gasping at the surface first thing in the morning, low dissolved oxygen is the most likely cause.\n\nAlgae can cause oxygen crashes overnight — during the day algae produces oxygen, but at night it consumes it. A heavy algae bloom combined with warm temperatures is a recipe for a sudden overnight oxygen crash.` },
]

export default function WaterChemistryGuide() {
  return (
    <>
      <Head>
        <title>Understanding Water Chemistry — Pond Pal</title>
        <meta name="description" content="A plain-English guide to koi pond water chemistry — pH, ammonia, nitrite, nitrate, KH, GH, temperature and dissolved oxygen explained clearly." />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>

      <div className="tool-hero">
        <h1>Understanding Water Chemistry</h1>
        <p>What the numbers on your test kit actually mean — and what to do about them</p>
      </div>

      <div style={{ maxWidth: '780px', margin: '0 auto', padding: '3rem 2rem' }}>
        <div style={{ background: '#faeeda', borderRadius: '12px', padding: '1rem 1.25rem', marginBottom: '2rem', fontSize: '14px', color: '#854F0B' }}>
          <strong>Quick reference:</strong> Safe levels for koi — pH 7.0–8.0, Ammonia 0 ppm, Nitrite 0 ppm, Nitrate below 40 ppm, KH 4.5–6.7 dKH, GH 5.6–11.2 dGH, Temp 65–75°F, Dissolved O₂ above 6 ppm
        </div>

        <div style={{ display: 'flex', gap: '8px', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '11px', fontWeight: 500, padding: '4px 12px', borderRadius: '20px', background: '#d4f0ec', color: '#0e6b6b' }}>Beginner</span>
          <span style={{ fontSize: '11px', color: '#5a7a82', padding: '4px 0' }}>12 min read</span>
        </div>

        {sections.map((s, i) => (
          <div key={i} style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span>{s.emoji}</span> {s.title}
            </h2>
            {s.content.split('\n\n').map((para, j) => (
              <p key={j} style={{ fontSize: '15px', color: '#2a3f47', lineHeight: '1.8', marginBottom: '1rem' }}>{para}</p>
            ))}
            {i < sections.length - 1 && <hr style={{ border: 'none', borderTop: '1px solid rgba(0,0,0,0.08)', marginTop: '2rem' }} />}
          </div>
        ))}

        <ProductGrid
          title="Essential water testing kit — start here"
          items={[
            { name: 'API Pond Master Test Kit', desc: 'Tests pH, ammonia, nitrite and nitrate for ponds', url: 'https://www.amazon.com/dp/B0002DJNN0?tag=pondpal20-20' },
            { name: 'API Freshwater Master Test Kit', desc: 'Most trusted freshwater test kit', url: 'https://www.amazon.com/dp/B000255NCI?tag=pondpal20-20' },
            { name: 'Seachem Prime', desc: 'Detoxifies ammonia while you fix the problem', url: 'https://www.amazon.com/dp/B00025694O?tag=pondpal20-20' },
            { name: 'API Ammo Lock', desc: 'Emergency ammonia detoxifier', url: 'https://www.amazon.com/dp/B0002APNI8?tag=pondpal20-20' },
          ]}
        />

        <div style={{ background: '#062d3a', borderRadius: '14px', padding: '2rem', textAlign: 'center' }}>
          <h3 style={{ color: '#fff', marginBottom: '0.75rem', fontSize: '1.2rem' }}>Get an instant diagnosis of your water</h3>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', marginBottom: '1.5rem' }}>Enter your test kit readings and our AI will tell you exactly what to do.</p>
          <Link href="/water-chemistry" className="btn-primary">Analyze My Water Now</Link>
        </div>

        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <Link href="/care-guides" style={{ color: '#1a9e8e', fontSize: '14px' }}>← Back to all guides</Link>
        </div>
      </div>

      <footer className="footer">
        <p>🐟 Pond Pal — Friendly fish & aquarium care, powered by AI</p>
        <p style={{ marginTop: '0.75rem' }}>
          <Link href="/tank-checker" style={{ color: 'rgba(255,255,255,0.6)' }}>Tank Checker</Link>{' · '}
          <Link href="/water-chemistry" style={{ color: 'rgba(255,255,255,0.6)' }}>Water Testing</Link>{' · '}
          <Link href="/care-guides" style={{ color: 'rgba(255,255,255,0.6)' }}>Care Guides</Link>{' · '}
          <Link href="/blog" style={{ color: 'rgba(255,255,255,0.6)' }}>Blog</Link>
        </p>
        <p style={{ marginTop: '0.75rem' }}>
          <Link href="/privacy-policy" style={{ color: '#f4833d' }}>Privacy Policy</Link>{' · '}
          <Link href="/terms" style={{ color: '#f4833d' }}>Terms of Use</Link>{' · '}
          <Link href="/disclaimer" style={{ color: '#f4833d' }}>Disclaimer</Link>
        </p>
        <p style={{ marginTop: '1rem', fontSize: '11px', opacity: 0.5 }}>General guidance only. Always consult a vet for health concerns. As an Amazon Associate, Pond Pal earns from qualifying purchases.</p>
      </footer>
    </>
  )
}
