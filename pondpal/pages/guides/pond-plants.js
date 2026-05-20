import Head from 'next/head'
import Link from 'next/link'

const plants = [
  { name: 'Water Hyacinth', emoji: '💜', type: 'Floating', difficulty: 'Easy', desc: 'One of the best plants for a koi pond. Water hyacinth floats freely on the surface, trailing long roots that absorb nitrates and phosphates directly from the water — making it a natural filter. It grows rapidly in summer and produces beautiful purple flowers. Koi will nibble the roots but rarely destroy the plant entirely. Note: water hyacinth is invasive in warm climates and should never be released into natural waterways.' },
  { name: 'Water Lettuce', emoji: '🥬', type: 'Floating', difficulty: 'Easy', desc: 'Similar to water hyacinth in its water-purifying abilities. Water lettuce forms rosettes of velvety pale green leaves and trailing roots that koi love to pick at. It provides excellent shade in summer, which helps reduce algae and keeps the pond cooler. Like water hyacinth, it is invasive in warm climates and should be disposed of responsibly.' },
  { name: 'Lotus', emoji: '🪷', type: 'Marginal', difficulty: 'Moderate', desc: 'The lotus is the crown jewel of pond plants. With enormous round leaves that repel water and stunning flowers in pink, white, and yellow, a lotus in full bloom is breathtaking. Koi generally leave lotus roots alone once established, though they may nibble young shoots. Lotus need full sun and warm temperatures to bloom and go dormant in winter in cooler climates.' },
  { name: 'Water Lily', emoji: '🌸', type: 'Submerged/Marginal', difficulty: 'Easy', desc: 'Water lilies are the most practical plant for koi ponds — their floating pads shade the water, reducing algae and providing shelter for fish. Available in hardy varieties that survive freezing winters and tropical varieties for warmer climates. Koi will eat water lily pads, which can frustrate keepers, but established plants usually produce leaves faster than the fish can consume them.' },
  { name: 'Hornwort', emoji: '🌿', type: 'Submerged', difficulty: 'Very Easy', desc: 'Hornwort is a fully submerged oxygenating plant that grows rapidly and absorbs nutrients from the water column. It provides excellent cover for small fish and a natural surface for beneficial bacteria. Koi may nibble hornwort but rarely eradicate it due to its fast growth rate. Simply drop bunches into the pond — no planting required.' },
  { name: 'Iris', emoji: '🌺', type: 'Marginal', difficulty: 'Easy', desc: 'Marginal irises planted around the edge or in shallow areas of the pond add height, structure, and seasonal color. Yellow flag iris and Louisiana iris are particularly well-suited to pond margins. Most iris varieties are unpalatable to koi, making them one of the more reliably unkibbled pond plants.' },
]

const tips = [
  'Plant in mesh baskets filled with heavy clay-based aquatic compost — never regular garden soil which will cloud your water.',
  "Top baskets with pea gravel to stop koi rooting in the compost and disturbing the soil.",
  "Aim for floating plants to cover 30–50% of the pond surface in summer — this shades the water, reduces algae, and provides refuge for fish.",
  'Remove fading leaves and flowers promptly to prevent decomposition from adding nutrients back to the water.',
  'Divide plants every 2–3 years to keep them vigorous and prevent overcrowding.',
]

export default function PondPlants() {
  return (
    <>
      <Head>
        <title>Pond Plants That Help — Pond Pal</title>
        <meta name="description" content="The best plants for koi ponds — water hyacinth, lotus, water lily, and more. Which plants absorb nitrates, survive koi nibbling, and thrive in your pond." />
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
        <h1>Pond Plants That Help</h1>
        <p>The best aquatic plants for koi ponds — and how to keep them alive alongside your fish</p>
      </div>

      <div style={{ maxWidth: '780px', margin: '0 auto', padding: '3rem 2rem' }}>
        <div style={{ display: 'flex', gap: '8px', marginBottom: '1rem', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '11px', fontWeight: 500, padding: '4px 12px', borderRadius: '20px', background: '#ffdcc9', color: '#c04a10' }}>Intermediate</span>
          <span style={{ fontSize: '11px', color: '#5a7a82', padding: '4px 0' }}>10 min read</span>
        </div>

        <p style={{ fontSize: '15px', color: '#2a3f47', lineHeight: '1.8', marginBottom: '2.5rem' }}>
          Koi and plants have a complicated relationship. Koi are omnivores who enjoy nibbling on soft plant material, uprooting anything in a basket, and generally treating your carefully arranged aquatic garden as a salad bar. That said, the right plants in the right positions can coexist beautifully with koi — and they provide real benefits to water quality and fish health in return.
        </p>

        <h2 style={{ fontSize: '1.4rem', marginBottom: '1.5rem' }}>Recommended plants for koi ponds</h2>
        <div style={{ display: 'grid', gap: '1.25rem', marginBottom: '3rem' }}>
          {plants.map((p, i) => (
            <div key={i} style={{ background: '#fff', borderRadius: '14px', padding: '1.5rem', border: '1px solid rgba(0,0,0,0.07)' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                <h3 style={{ fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span>{p.emoji}</span> {p.name}
                </h3>
                <div style={{ display: 'flex', gap: '6px' }}>
                  <span style={{ fontSize: '10px', fontWeight: 500, padding: '2px 8px', borderRadius: '10px', background: '#E1F5EE', color: '#0F6E56' }}>{p.type}</span>
                  <span style={{ fontSize: '10px', fontWeight: 500, padding: '2px 8px', borderRadius: '10px', background: '#faeeda', color: '#854F0B' }}>{p.difficulty}</span>
                </div>
              </div>
              <p style={{ fontSize: '14px', color: '#2a3f47', lineHeight: '1.7' }}>{p.desc}</p>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>🌱 Tips for success with koi and plants</h2>
        <div style={{ display: 'grid', gap: '0.75rem', marginBottom: '2.5rem' }}>
          {tips.map((tip, i) => (
            <div key={i} style={{ display: 'flex', gap: '12px', padding: '0.875rem 1rem', background: '#fff', borderRadius: '10px', border: '1px solid rgba(0,0,0,0.07)' }}>
              <span style={{ color: '#1a9e8e', fontWeight: 500, flexShrink: 0 }}>{i + 1}.</span>
              <p style={{ fontSize: '14px', color: '#2a3f47', lineHeight: '1.6' }}>{tip}</p>
            </div>
          ))}
        </div>

        <div style={{ background: '#fff', borderRadius: '14px', padding: '1.5rem', border: '1px solid rgba(0,0,0,0.07)', marginBottom: '2rem' }}>
          <p style={{ fontSize: '13px', fontWeight: 500, color: '#1a2e35', marginBottom: '1rem' }}>🛒 Recommended products for this guide</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
            {[
              { name: 'API Pond Master Test Kit', desc: 'See how plants improve your water quality', url: 'https://www.amazon.com/dp/B0002IHNUO?tag=pondpal20-20' },
              { name: 'Seachem Prime', desc: 'Safe for fish and aquatic plants', url: 'https://www.amazon.com/dp/B00025694O?tag=pondpal20-20' },
              { name: 'Hikari Staple Koi Food', desc: 'Less overfeeding means healthier plants', url: 'https://www.amazon.com/dp/B0002562MK?tag=pondpal20-20' },
              { name: 'Hikari Wheat Germ Koi Food', desc: 'Cool weather feeding reduces waste', url: 'https://www.amazon.com/dp/B0002DHYDI?tag=pondpal20-20' },
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
          <h3 style={{ color: '#fff', marginBottom: '0.75rem', fontSize: '1.2rem' }}>Adding plants to improve water quality?</h3>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', marginBottom: '1.5rem' }}>Check your nitrate levels before and after — plants make a measurable difference!</p>
          <Link href="/water-chemistry" className="btn-primary">Analyze My Water</Link>
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
