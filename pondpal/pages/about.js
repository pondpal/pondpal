import Head from 'next/head'
import Link from 'next/link'

export default function About() {
  return (
    <>
      <Head>
        <title>About Pond Pal — Friendly Koi and Fish Care</title>
        <meta name="description" content="Pond Pal is a free AI-powered resource for koi and aquarium fish owners of all experience levels. Learn about our mission and tools." />
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
        <h1>About Pond Pal</h1>
        <p>Why we built this and what we are trying to do</p>
      </div>

      <div style={{ maxWidth: '780px', margin: '0 auto', padding: '3rem 2rem' }}>

        <div style={{ fontSize: '64px', textAlign: 'center', marginBottom: '2rem' }}>🐟</div>

        <p style={{ fontSize: '1.1rem', color: '#2a3f47', lineHeight: '1.9', marginBottom: '1.5rem', textAlign: 'center', fontStyle: 'italic' }}>
          Good fish care should be accessible to everyone — not just the experts.
        </p>

        <hr style={{ border: 'none', borderTop: '1px solid rgba(0,0,0,0.08)', margin: '2rem 0' }} />

        {[
          {
            title: 'Our mission',
            content: 'Pond Pal exists to make koi and aquarium fish care approachable for everyone. Whether you are setting up your very first tank or you have been keeping koi for decades, finding clear and trustworthy answers to fish care questions can be surprisingly difficult.\n\nForums are full of conflicting advice. Pet store staff vary wildly in their knowledge. And the science behind water chemistry, while not complicated, is rarely explained in plain English.\n\nWe wanted to change that. Pond Pal gives every fish keeper — beginner or expert — access to accurate, friendly, and specific guidance whenever they need it.'
          },
          {
            title: 'How Pond Pal works',
            content: 'Our tools are powered by artificial intelligence that has been trained on established fishkeeping guidelines, water chemistry science, and best practices from the koi and aquarium hobby community.\n\nWhen you enter your tank details or water readings, our AI analyzes the information against proven standards — like the 250-gallon-per-koi rule for tank sizing, or the safe ranges for pH, ammonia, and nitrite — and gives you specific, actionable advice in plain English.\n\nWe pair these tools with in-depth care guides written to be genuinely useful at every experience level. No jargon walls. No condescension. Just helpful information, clearly explained.'
          },
          {
            title: 'What we recommend and why',
            content: 'When Pond Pal recommends a product — a test kit, a treatment, a piece of equipment — it is because that product is genuinely well-regarded in the fishkeeping community, not because of advertising relationships.\n\nWe do participate in affiliate programs including Amazon Associates, which means we may earn a small commission when you purchase something through our links. This helps keep Pond Pal free for everyone. But our recommendations always come first — the affiliate relationship follows, not the other way around.'
          },
          {
            title: 'Always improving',
            content: 'Pond Pal is continuously growing. We are regularly adding new care guides, expanding our tools, and working on features like disease identification, tank journals, and a community space for fish keepers to connect.\n\nIf you have a suggestion, a question, or just want to share a photo of your fish, we would love to hear from you at hello@pondpal.space.'
          },
        ].map((s, i) => (
          <div key={i} style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: '#062d3a' }}>{s.title}</h2>
            {s.content.split('\n\n').map((para, j) => (
              <p key={j} style={{ fontSize: '15px', color: '#2a3f47', lineHeight: '1.8', marginBottom: '1rem' }}>{para}</p>
            ))}
            {i < 3 && <hr style={{ border: 'none', borderTop: '1px solid rgba(0,0,0,0.08)', marginTop: '2rem' }} />}
          </div>
        ))}

        <div style={{ background: '#062d3a', borderRadius: '14px', padding: '2rem', textAlign: 'center' }}>
          <h3 style={{ color: '#fff', marginBottom: '0.75rem', fontSize: '1.2rem' }}>Ready to get started?</h3>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', marginBottom: '1.5rem' }}>Try our free tools — no account needed.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/tank-checker" className="btn-primary">Check My Tank</Link>
            <Link href="/water-chemistry" className="btn-outline">Analyze My Water</Link>
          </div>
        </div>
      </div>

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
