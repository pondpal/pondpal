import Head from 'next/head'
import Link from 'next/link'

const sections = [
  {
    emoji: '🪸',
    title: 'Saltwater aquariums — rewarding but demanding',
    content: `Saltwater aquariums are among the most visually stunning setups in the hobby. Brilliantly colored fish, living corals, and a slice of the ocean reef in your home — the appeal is obvious. They're also significantly more demanding than freshwater tanks, and going in with realistic expectations is essential.\n\nThe biggest differences from freshwater keeping are cost, complexity, and the consequences of mistakes. Marine fish are more expensive, the equipment requirements are greater, and water parameters need to be maintained within tighter tolerances. A parameter crash that might stress freshwater fish can kill marine life within hours.\n\nThat said, saltwater keeping is absolutely achievable for motivated beginners who are willing to learn, invest in quality equipment, and take the time to set things up correctly from the start.`
  },
  {
    emoji: '📐',
    title: 'Tank size — bigger is more stable',
    content: `For saltwater fish keeping, bigger is always better — and not just for stocking purposes. Larger water volumes are dramatically more stable chemically. Small fluctuations in salinity, pH, or temperature that might be harmless in a large tank can become critical in a small one.\n\nThe recommended minimum for a beginner saltwater fish-only tank is 30 gallons. Anything smaller is very difficult to keep stable and is not recommended for beginners. For a reef tank with corals, 40 gallons or more is strongly advised.\n\nNano reef tanks of 10 to 20 gallons exist and can be beautiful, but they require daily attention, precise equipment, and are genuinely not suitable for beginners. The learning curve on a nano reef is steep.\n\nConsider the footprint as well as the volume. A long, shallow tank is better for gas exchange and allows more swimming space for fish than a tall, narrow tank of the same volume.`
  },
  {
    emoji: '🧂',
    title: 'Salinity and specific gravity',
    content: `Getting salinity right is fundamental to saltwater keeping. Marine fish and invertebrates require salinity levels that mimic natural seawater — too high or too low and the osmotic stress causes rapid decline.\n\nIdeal salinity: 1.023 to 1.026 specific gravity, or 33 to 35 parts per thousand (ppt). For reef tanks with corals and invertebrates, maintain the higher end of this range at 1.025 to 1.026.\n\nYou'll need a refractometer or a quality electronic salinity meter to measure accurately. The cheap plastic swing-arm hydrometers are notoriously inaccurate and are not recommended for serious saltwater keeping.\n\nEvaporation is a constant factor in saltwater tanks. As water evaporates, salt stays behind and salinity rises. You need to top off with fresh RO/DI water (not saltwater) daily to compensate. Auto top-off systems automate this and are worth the investment.\n\nUse a quality marine salt mix — Instant Ocean, Red Sea, and Aqua Forest are well-regarded brands. Never use table salt or pool salt.`
  },
  {
    emoji: '💧',
    title: 'Water parameters for marine fish',
    content: `Saltwater chemistry involves more parameters than freshwater, and all of them matter. Here are the key values to maintain:\n\npH: 8.1 to 8.4. Marine fish require alkaline water and pH that dips below 8.0 causes significant stress. pH tends to drop overnight as CO2 builds up — good surface agitation helps maintain stable pH.\n\nAmmonia: 0 ppm. As with freshwater, any detectable ammonia is dangerous.\n\nNitrite: 0 ppm.\n\nNitrate: below 20 ppm for fish-only tanks, below 5 ppm for reef tanks with corals. Corals and invertebrates are far more sensitive to nitrate than fish.\n\nAlkalinity (dKH): 8 to 12 dKH. This is the marine equivalent of KH in freshwater and buffers pH.\n\nCalcium: 380 to 450 ppm. Essential for coral skeleton growth in reef tanks.\n\nMagnesium: 1250 to 1350 ppm. Maintains the balance between calcium and alkalinity.\n\nTemperature: 75 to 80°F. Stability is more important than hitting a precise number — fluctuations stress marine life more than being slightly outside the ideal range.`
  },
  {
    emoji: '🔄',
    title: 'Filtration and equipment',
    content: `Marine tanks require more sophisticated filtration than freshwater setups. The core of a good marine filtration system includes mechanical filtration, biological filtration, and protein skimming.\n\nA protein skimmer is essentially mandatory for a marine tank. It removes dissolved organic compounds before they break down into ammonia, significantly reducing the biological load on your filter and improving water clarity. Size your skimmer for larger than your actual tank volume.\n\nLive rock is the cornerstone of biological filtration in marine tanks. It's porous rock colonized by beneficial bacteria, micro-organisms, and often small invertebrates. 1 to 1.5 pounds of quality live rock per gallon is a common guideline. Live rock also provides natural hiding places and visual interest.\n\nA sump — a secondary tank below the main display tank — greatly increases your total water volume and provides a place to house equipment out of sight. Not essential for beginners but a significant upgrade for system stability.\n\nPowerheads create the random, multi-directional flow that reef fish are accustomed to and that corals need to receive nutrients. Aim for 10 to 20 times the tank volume in flow per hour for reef tanks.`
  },
  {
    emoji: '🐠',
    title: 'Choosing your first marine fish',
    content: `Marine fish vary enormously in hardiness, aggression, and compatibility. Choosing the right first fish significantly impacts your success.\n\nGood beginner choices: Ocellaris or Percula Clownfish are the quintessential beginner marine fish — hardy, adaptable, and captivating. Chromis (especially blue-green chromis) are peaceful schooling fish that handle imperfect water better than many marine species. Royal Grammas are beautiful, relatively hardy, and stay small. Tailspot Blennies are entertaining, algae-eating bottom dwellers.\n\nFish to avoid as a beginner: Mandarin Dragonets require a mature tank with a thriving copepod population — they rarely accept prepared foods and slowly starve in most home tanks. Most large angelfish need huge tanks and are sensitive. Seahorses have very specific care requirements and are not suitable for beginners.\n\nStock slowly and stock lightly. Add one or two fish at a time and wait several weeks between additions to allow your biological filtration to adapt. Overstocking is the most common beginner mistake in marine keeping.\n\nResearch compatibility before purchasing. Some marine fish are territorial or aggressive toward specific species. A Dottyback will terrorize smaller fish. Many larger angelfish and triggers are simply incompatible with reef tanks.`
  },
  {
    emoji: '🔬',
    title: 'Cycling a marine tank',
    content: `A marine tank must be fully cycled before adding fish — no shortcuts. The nitrogen cycle in a saltwater tank works identically to freshwater but takes longer to establish, typically 6 to 8 weeks.\n\nThe most popular method for cycling a marine tank is using live rock. Add your live rock, add an ammonia source (a small piece of raw shrimp works well), and test every few days. You'll see ammonia rise, then nitrite rise as ammonia-processing bacteria establish, then both fall as the full cycle completes.\n\nDo not add fish until ammonia and nitrite have both spiked and returned to 0 ppm and remain there for at least a week.\n\nSeeding your tank with bacteria from an established tank — adding a piece of live rock, some filter media, or a cup of sand from a healthy marine tank — can significantly speed up the cycle. Bottled bacteria products like Dr. Tim's One and Only are also effective for marine tanks.\n\nPatience during cycling is not optional. Adding fish to an uncycled tank is the single most common cause of early marine fish death.`
  },
]

export default function SaltwaterGuide() {
  return (
    <>
      <Head>
        <title>Saltwater Aquarium Beginner Guide — Pond Pal</title>
        <meta name="description" content="Complete beginner guide to saltwater aquariums — tank size, salinity, water parameters, filtration, cycling, and choosing your first marine fish." />
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
          <li><Link href="/search" style={{ fontSize: '18px' }}>🔍</Link></li>
        </ul>
      </nav>

      <div className="tool-hero">
        <h1>Saltwater Aquarium Guide</h1>
        <p>Everything you need to know to set up and maintain a thriving marine tank</p>
      </div>

      <div style={{ maxWidth: '780px', margin: '0 auto', padding: '3rem 2rem' }}>
        <div style={{ display: 'flex', gap: '8px', marginBottom: '2rem', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '11px', fontWeight: 500, padding: '4px 12px', borderRadius: '20px', background: '#ffdcc9', color: '#c04a10' }}>Intermediate</span>
          <span style={{ fontSize: '11px', color: '#5a7a82', padding: '4px 0' }}>15 min read</span>
        </div>

        <div style={{ background: '#faeeda', borderRadius: '12px', padding: '1rem 1.25rem', marginBottom: '2rem', fontSize: '14px', color: '#854F0B' }}>
          <strong>Quick reference:</strong> Minimum 30 gallons. Salinity 1.025–1.026 SG. Temperature 75–80°F. pH 8.1–8.4. Ammonia and nitrite 0 ppm. Nitrate below 20 ppm (below 5 ppm for reef). Cycle for 6–8 weeks before adding fish.
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

        <div style={{ background: '#fff', borderRadius: '14px', padding: '1.5rem', border: '1px solid rgba(0,0,0,0.07)', marginBottom: '2rem' }}>
          <p style={{ fontSize: '13px', fontWeight: 500, color: '#1a2e35', marginBottom: '1rem' }}>🛒 Recommended for saltwater keepers</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
            {[
              { name: 'Red Sea Marine Test Kit', desc: 'Best all-in-one saltwater test kit', url: 'https://www.amazon.com/dp/B001E4EWOE?tag=pondpal20-20' },
              { name: 'Instant Ocean Salt Mix', desc: 'Most trusted marine salt brand', url: 'https://www.amazon.com/dp/B0002AQCM0?tag=pondpal20-20' },
              { name: 'Milwaukee Refractometer', desc: 'Accurate salinity measurement', url: 'https://www.amazon.com/dp/B001E6QDDE?tag=pondpal20-20' },
              { name: 'Seachem Prime', desc: 'Essential water conditioner', url: 'https://www.amazon.com/dp/B00025694O?tag=pondpal20-20' },
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

        
        <div style={{ background: '#fff', borderRadius: '14px', padding: '1.5rem', border: '1px solid rgba(0,0,0,0.07)', marginBottom: '2rem' }}>
          <p style={{ fontSize: '13px', fontWeight: 500, color: '#1a2e35', marginBottom: '1rem' }}>🛒 Recommended products for this guide</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
            {[
              { name: 'Red Sea Marine Test Kit', desc: 'Best all-in-one saltwater test kit', url: 'https://www.amazon.com/dp/B001E4EWOE?tag=pondpal20-20' },
              { name: 'Instant Ocean Salt Mix', desc: 'Most trusted marine salt brand', url: 'https://www.amazon.com/dp/B0002AQCM0?tag=pondpal20-20' },
              { name: 'Milwaukee Refractometer', desc: 'Accurate salinity measurement', url: 'https://www.amazon.com/dp/B001E6QDDE?tag=pondpal20-20' },
              { name: 'Seachem Prime', desc: 'Essential water conditioner', url: 'https://www.amazon.com/dp/B00025694O?tag=pondpal20-20' },
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

        <div style={{ background: '#062d3a', borderRadius: '14px', padding: '2rem', textAlign: 'center', marginBottom: '2rem' }}>
          <h3 style={{ color: '#fff', marginBottom: '0.75rem', fontSize: '1.1rem' }}>Analyze your saltwater parameters</h3>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', marginBottom: '1.5rem' }}>Our Water Testing Analyzer supports saltwater parameters including salinity, calcium, and magnesium.</p>
          <Link href="/water-chemistry" className="btn-primary">Test My Saltwater</Link>
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
