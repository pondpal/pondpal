import Head from 'next/head'
import Link from 'next/link'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact — Pond Pal</title>
        <meta name="description" content="Get in touch with Pond Pal — we love hearing from fish keepers of all experience levels." />
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
        <h1>Get in Touch</h1>
        <p>We love hearing from fellow fish enthusiasts!</p>
      </div>

      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '3rem 2rem', textAlign: 'center' }}>

        <div style={{ fontSize: '56px', marginBottom: '1.5rem' }}>💌</div>

        <p style={{ fontSize: '1.05rem', color: '#2a3f47', lineHeight: '1.8', marginBottom: '2rem' }}>
          Whether you have a question about one of our tools, a suggestion for a new guide topic, spotted an error, or just want to share a photo of your fish — we genuinely want to hear from you.
        </p>

        <div style={{ background: '#fff', borderRadius: '14px', padding: '2rem', border: '1px solid rgba(0,0,0,0.07)', marginBottom: '2rem' }}>
          <p style={{ fontSize: '13px', color: '#5a7a82', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: 500 }}>Email us at</p>
          <a href="mailto:hello@pondpal.space" style={{ fontSize: '1.3rem', color: '#1a9e8e', fontWeight: 500 }}>
            hello@pondpal.space
          </a>
          <p style={{ fontSize: '13px', color: '#5a7a82', marginTop: '0.75rem' }}>
            We aim to respond within 1–2 business days.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
          {[
            { emoji: '🐟', title: 'Tool feedback', desc: 'Suggestions to improve our Tank Checker or Water Chemistry Analyzer' },
            { emoji: '📖', title: 'Guide requests', desc: 'A topic you would love to see covered in our care guides' },
            { emoji: '🐛', title: 'Report an error', desc: 'Spotted something incorrect? We want to know and fix it fast' },
            { emoji: '📸', title: 'Share your fish', desc: 'We love seeing your ponds and tanks — send us a photo!' },
          ].map((item, i) => (
            <div key={i} style={{ background: '#fff', borderRadius: '12px', padding: '1.25rem', border: '1px solid rgba(0,0,0,0.07)', textAlign: 'left' }}>
              <div style={{ fontSize: '24px', marginBottom: '6px' }}>{item.emoji}</div>
              <p style={{ fontSize: '13px', fontWeight: 500, color: '#1a2e35', marginBottom: '4px' }}>{item.title}</p>
              <p style={{ fontSize: '12px', color: '#5a7a82', lineHeight: '1.5' }}>{item.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ background: '#062d3a', borderRadius: '14px', padding: '1.75rem' }}>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '14px', lineHeight: '1.7' }}>
            While you wait for a response, our AI tools are available 24/7 for instant fish care advice — no email required!
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1rem' }}>
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
