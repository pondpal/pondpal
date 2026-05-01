import Head from 'next/head'
import Link from 'next/link'

const guides = [
  { emoji: '🐣', title: 'Getting Started with Koi', desc: 'Everything a first-time koi keeper needs to know — pond size, filtration, the nitrogen cycle, choosing fish, and what to expect in year one.', level: 'Beginner', levelColor: '#d4f0ec', levelText: '#0e6b6b', slug: '/guides/getting-started', time: '10 min read' },
  { emoji: '💧', title: 'Understanding Water Chemistry', desc: 'A plain-English guide to pH, ammonia, nitrite, nitrate, KH and GH — what they mean, why they matter, and what to do when readings are off.', level: 'Beginner', levelColor: '#d4f0ec', levelText: '#0e6b6b', slug: '/guides/water-chemistry', time: '12 min read' },
  { emoji: '🌡️', title: 'Seasonal Pond Care', desc: 'How to care for your koi through spring, summer, autumn, and winter — including when to stop feeding and how to winterize safely.', level: 'Intermediate', levelColor: '#ffdcc9', levelText: '#c04a10', slug: '/guides/seasonal-care', time: '12 min read' },
  { emoji: '🏥', title: 'Common Koi Diseases', desc: 'How to identify and treat fin rot, ich, anchor worm, ulcers, dropsy, flukes, and swim bladder issues before they become serious problems.', level: 'Intermediate', levelColor: '#ffdcc9', levelText: '#c04a10', slug: '/guides/koi-diseases', time: '15 min read' },
  { emoji: '🍽️', title: 'Feeding Your Koi Right', desc: 'What to feed, how much, how often, and how feeding changes with the seasons. Plus the foods you should never give your fish.', level: 'Beginner', levelColor: '#d4f0ec', levelText: '#0e6b6b', slug: '/guides/feeding', time: '10 min read' },
  { emoji: '🔬', title: 'Advanced Filtration Systems', desc: 'Gravity filters, bead filters, moving bed reactors, UV sterilizers, and bottom drains — what they do and which is right for your pond.', level: 'Advanced', levelColor: '#e8e4f8', levelText: '#4a3d8f', slug: '/guides/filtration', time: '12 min read' },
  { emoji: '🐠', title: 'Koi Varieties and Breeds', desc: 'From Kohaku to Showa, Tancho to Butterfly koi — a friendly introduction to the most popular varieties and what makes each one special.', level: 'Beginner', levelColor: '#d4f0ec', levelText: '#0e6b6b', slug: '/guides/koi-varieties', time: '10 min read' },
  { emoji: '🌱', title: 'Pond Plants That Help', desc: 'The best aquatic plants for koi ponds — which ones absorb nitrates, provide shade, and actually survive being nibbled by curious koi.', level: 'Intermediate', levelColor: '#ffdcc9', levelText: '#c04a10', slug: '/guides/pond-plants', time: '10 min read' },
]

export default function CareGuides() {
  return (
    <>
      <Head>
        <title>Koi and Pond Care Guides — Pond Pal</title>
        <meta name="description" content="Free koi and pond care guides for all experience levels — from beginner basics to advanced filtration. Written in plain English by Pond Pal." />
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
        <h1>Care Guides</h1>
        <p>Helpful guides for every stage of your fish keeping journey — beginner to expert</p>
      </div>

      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="section-inner">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem' }}>
            {guides.map((g, i) => (
              <Link key={i} href={g.slug} style={{ textDecoration: 'none' }}>
                <div className="tool-card" style={{ height: '100%' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                    <span style={{ fontSize: '32px' }}>{g.emoji}</span>
                    <span style={{ fontSize: '11px', fontWeight: 500, padding: '3px 10px', borderRadius: '20px', background: g.levelColor, color: g.levelText }}>
                      {g.level}
                    </span>
                  </div>
                  <h3 style={{ marginBottom: '0.5rem', fontSize: '1.05rem' }}>{g.title}</h3>
                  <p style={{ fontSize: '14px', color: '#5a7a82', lineHeight: '1.6' }}>{g.desc}</p>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '1.25rem' }}>
                    <span className="tool-link">Read guide →</span>
                    <span style={{ fontSize: '11px', color: '#5a7a82' }}>{g.time}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div style={{ marginTop: '3rem', background: 'var(--deep)', borderRadius: '14px', padding: '2.5rem', textAlign: 'center' }}>
            <h2 style={{ color: '#fff', marginBottom: '0.75rem' }}>Need a personalized answer right now?</h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '1.5rem' }}>
              Our free AI tools give you instant, specific advice tailored to your exact setup.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/tank-checker" className="btn-primary">Check My Tank</Link>
              <Link href="/water-chemistry" className="btn-outline">Analyze My Water</Link>
            </div>
          </div>
        </div>
      </section>

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
