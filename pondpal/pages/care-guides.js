import Head from 'next/head'
import Link from 'next/link'

const guides = [
  {
    emoji: '🐣',
    title: 'Getting Started with Koi',
    desc: 'Everything a first-time koi keeper needs to know — choosing your first fish, setting up your pond, and what to expect in year one.',
    level: 'Beginner',
    color: '#d4f0ec',
    textColor: '#0e6b6b'
  },
  {
    emoji: '💧',
    title: 'Understanding Water Chemistry',
    desc: 'A plain-English guide to pH, ammonia, nitrite, nitrate, KH and GH — what they mean, why they matter, and how to keep them in check.',
    level: 'Beginner',
    color: '#d4f0ec',
    textColor: '#0e6b6b'
  },
  {
    emoji: '🌡️',
    title: 'Seasonal Pond Care',
    desc: 'How to care for your koi through spring, summer, fall, and winter — including when to stop feeding and how to winterize your pond.',
    level: 'Intermediate',
    color: '#ffdcc9',
    textColor: '#c04a10'
  },
  {
    emoji: '🏥',
    title: 'Common Koi Diseases',
    desc: 'How to spot fin rot, ich, parasites, ulcers and more — plus what to do about each one before it becomes a bigger problem.',
    level: 'Intermediate',
    color: '#ffdcc9',
    textColor: '#c04a10'
  },
  {
    emoji: '🍽️',
    title: 'Feeding Your Koi Right',
    desc: 'What to feed, how much, how often, and how feeding changes with the seasons. Plus what foods to absolutely avoid.',
    level: 'Beginner',
    color: '#d4f0ec',
    textColor: '#0e6b6b'
  },
  {
    emoji: '🔬',
    title: 'Advanced Filtration Systems',
    desc: 'A deep dive into multi-chamber gravity filters, bead filters, moving bed biofilm reactors, and UV sterilizers for serious keepers.',
    level: 'Advanced',
    color: '#e8e4f8',
    textColor: '#4a3d8f'
  },
  {
    emoji: '🐠',
    title: 'Koi Varieties & Breeds',
    desc: 'From Kohaku to Showa, Tancho to Butterfly koi — a friendly introduction to the most popular varieties and what makes each one special.',
    level: 'Beginner',
    color: '#d4f0ec',
    textColor: '#0e6b6b'
  },
  {
    emoji: '🌱',
    title: 'Pond Plants That Help',
    desc: 'The best aquatic plants for koi ponds — which ones absorb nitrates, provide shade, and actually survive being nibbled by curious koi.',
    level: 'Intermediate',
    color: '#ffdcc9',
    textColor: '#c04a10'
  },
]

export default function CareGuides() {
  return (
    <>
      <Head>
        <title>Koi & Pond Care Guides — Pond Pal</title>
        <meta name="description" content="Friendly, easy-to-understand guides for koi and pond care — from beginner basics to advanced techniques. All free on Pond Pal." />
      </Head>

      <nav className="nav">
        <Link href="/" className="nav-logo">🐟 Pond<span style={{color:'#f4833d'}}>Pal</span></Link>
        <ul className="nav-links">
          <li><Link href="/tank-checker">Tank Checker</Link></li>
          <li><Link href="/water-chemistry">Water Chemistry</Link></li>
          <li><Link href="/care-guides">Care Guides</Link></li>
        </ul>
      </nav>

      <div className="tool-hero">
        <h1>📖 Care Guides</h1>
        <p>Friendly guides for every stage of your fish keeping journey — beginner to expert</p>
      </div>

      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="section-inner">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem' }}>
            {guides.map((g, i) => (
              <div key={i} className="tool-card" style={{ cursor: 'default' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                  <span style={{ fontSize: '32px' }}>{g.emoji}</span>
                  <span style={{ fontSize: '11px', fontWeight: 500, padding: '3px 10px', borderRadius: '20px', background: g.color, color: g.textColor }}>
                    {g.level}
                  </span>
                </div>
                <h3 style={{ marginBottom: '0.5rem' }}>{g.title}</h3>
                <p style={{ fontSize: '14px', color: '#5a7a82', lineHeight: '1.6' }}>{g.desc}</p>
                <span className="tool-link" style={{ marginTop: '1rem' }}>Coming soon →</span>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '3rem', background: 'var(--deep)', borderRadius: '14px', padding: '2.5rem', textAlign: 'center' }}>
            <h2 style={{ color: '#fff', marginBottom: '0.75rem' }}>Want a guide on a specific topic?</h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '1.5rem' }}>
              Use our AI tools to get instant, personalized advice while we work on expanding our guide library.
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
        <p style={{ marginTop: '1rem', fontSize: '11px', opacity: 0.6 }}>General guidance only. Always consult a vet for health concerns.</p>
      </footer>
    </>
  )
}
