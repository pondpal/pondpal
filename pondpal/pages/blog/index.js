import Head from 'next/head'
import Link from 'next/link'

const posts = [
  {
    slug: 'how-many-koi-1000-gallon-pond',
    title: 'How Many Koi Can I Put in a 1000 Gallon Pond?',
    desc: 'The honest answer to one of the most common koi keeping questions — with the math, the rules, and what most beginners get wrong.',
    date: 'May 2026',
    readTime: '8 min read',
    emoji: '🐟',
    category: 'Pond Setup'
  },
  {
    slug: 'koi-ammonia-spike',
    title: 'Koi Pond Ammonia Spike — Causes, Dangers and How to Fix It Fast',
    desc: 'Ammonia is the number one killer in koi ponds. Here is everything you need to know to identify it, fix it fast, and stop it coming back.',
    date: 'May 2026',
    readTime: '10 min read',
    emoji: '⚠️',
    category: 'Water Quality'
  },
  {
    slug: 'best-koi-food-every-season',
    title: 'Best Koi Food for Every Season — Complete Feeding Guide',
    desc: 'What to feed your koi in spring, summer, autumn and winter — including our top product picks and the one feeding mistake that can kill your fish.',
    date: 'May 2026',
    readTime: '10 min read',
    emoji: '🍽️',
    category: 'Feeding'
  },
]

export default function Blog() {
  return (
    <>
      <Head>
        <title>Koi and Pond Care Blog — Pond Pal</title>
        <meta name="description" content="Expert koi and pond care articles — stocking levels, water quality, feeding guides, and more. Written in plain English for all experience levels." />
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
        <h1>Pond Pal Blog</h1>
        <p>In-depth articles on koi keeping, pond care, and everything in between</p>
      </div>

      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="section-inner" style={{ maxWidth: '860px' }}>
          <div style={{ display: 'grid', gap: '1.5rem' }}>
            {posts.map((p, i) => (
              <Link key={i} href={'/blog/' + p.slug} style={{ textDecoration: 'none' }}>
                <div className="tool-card" style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                  <div style={{ fontSize: '40px', flexShrink: 0 }}>{p.emoji}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', gap: '8px', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                      <span style={{ fontSize: '11px', fontWeight: 500, padding: '2px 10px', borderRadius: '20px', background: '#d4f0ec', color: '#0e6b6b' }}>{p.category}</span>
                      <span style={{ fontSize: '11px', color: '#5a7a82' }}>{p.date}</span>
                      <span style={{ fontSize: '11px', color: '#5a7a82' }}>{p.readTime}</span>
                    </div>
                    <h2 style={{ fontSize: '1.15rem', marginBottom: '0.5rem', color: '#1a2e35' }}>{p.title}</h2>
                    <p style={{ fontSize: '14px', color: '#5a7a82', lineHeight: '1.6' }}>{p.desc}</p>
                    <span className="tool-link" style={{ marginTop: '0.75rem', display: 'inline-block' }}>Read article →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div style={{ marginTop: '3rem', background: 'var(--deep)', borderRadius: '14px', padding: '2rem', textAlign: 'center' }}>
            <h2 style={{ color: '#fff', marginBottom: '0.75rem' }}>Get instant answers for your specific setup</h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '1.5rem', fontSize: '14px' }}>Our free AI tools give personalized advice tailored to your exact tank or pond.</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/tank-checker" className="btn-primary">Check My Tank</Link>
              <Link href="/water-chemistry" className="btn-outline">Test My Water</Link>
            </div>
          </div>
        </div>
      </section>

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
