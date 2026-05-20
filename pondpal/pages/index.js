import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Pond Pal — Friendly Koi & Aquarium Care, Powered by AI</title>
        <meta name="description" content="Pond Pal helps koi and fish owners of all experience levels keep their fish healthy and their water perfect. Free AI-powered tank checker and water testing analyzer." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
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

      <section className="hero">
        <span className="hero-fish">🐟</span>
        <h1>Your friendly <span>pond & fish</span> companion</h1>
        <p className="hero-sub">
          Whether you're setting up your very first tank or you've been keeping koi for decades —
          Pond Pal is here to help. Free AI-powered tools, plain English advice, no jargon.
        </p>
        <div className="hero-btns">
          <Link href="/tank-checker" className="btn-primary">Check My Tank</Link>
          <Link href="/water-chemistry" className="btn-outline">Test My Water</Link>
        </div>
      </section>

      <section className="section" style={{ background: '#fff' }}>
        <div className="section-inner">
          <span className="section-tag">Free AI Tools</span>
          <h2>Everything your pond needs, in one place</h2>
          <p className="section-lead">Just answer a few questions and our AI gives you clear, friendly answers — no fish degree required!</p>
          <div className="tools-grid">
            <Link href="/tank-checker" style={{ textDecoration: 'none' }}>
              <div className="tool-card">
                <span className="tool-icon">🏠</span>
                <h3>Tank Size Checker</h3>
                <p>Tell us your tank size, how many fish you have, and what kind of filter you're running. We'll let you know if your setup is a happy home for your koi.</p>
                <span className="tool-link">Check my tank →</span>
              </div>
            </Link>
            <Link href="/water-chemistry" style={{ textDecoration: 'none' }}>
              <div className="tool-card">
                <span className="tool-icon">🧪</span>
                <h3>Water Testing Analyzer</h3>
                <p>Enter your test kit readings — pH, ammonia, nitrite, nitrate and more. Our AI diagnoses any issues and tells you exactly what to do to fix them.</p>
                <span className="tool-link">Test my water →</span>
              </div>
            </Link>
            <Link href="/care-guides" style={{ textDecoration: 'none' }}>
              <div className="tool-card">
                <span className="tool-icon">📖</span>
                <h3>Care Guides</h3>
                <p>From setting up your very first pond to advanced breeding tips — our friendly guides have you covered at every stage of your fish keeping journey.</p>
                <span className="tool-link">Read the guides →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: '#fff', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
        <div className="section-inner">
          <span className="section-tag teal">Recommended Gear</span>
          <h2>Tools every fish keeper needs</h2>
          <p className="section-lead">Our most recommended products — tried, trusted, and linked directly to Amazon for easy ordering.</p>
          <div className="tools-grid">
            <a href="https://www.amazon.com/dp/B000255NCI?tag=pondpal20-20" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <div className="tool-card">
                <span className="tool-icon">🧪</span>
                <h3>API Master Test Kit</h3>
                <p>The most trusted freshwater test kit among koi keepers. Tests pH, ammonia, nitrite, and nitrate accurately every time.</p>
                <span className="tool-link">View on Amazon →</span>
              </div>
            </a>
            <a href="https://www.amazon.com/dp/B00025694O?tag=pondpal20-20" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <div className="tool-card">
                <span className="tool-icon">💧</span>
                <h3>Seachem Prime</h3>
                <p>The gold standard water conditioner. Neutralizes chlorine, chloramines, and detoxifies ammonia in one easy dose.</p>
                <span className="tool-link">View on Amazon →</span>
              </div>
            </a>
            <a href="https://www.amazon.com/dp/B0002DHYDI?tag=pondpal20-20" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <div className="tool-card">
                <span className="tool-icon">🌿</span>
                <h3>Hikari Wheat Germ Koi Food</h3>
                <p>Perfect for spring and autumn feeding when water temperatures drop below 65°F. Easy to digest, highly nutritious.</p>
                <span className="tool-link">View on Amazon →</span>
              </div>
            </a>
          </div>
          <p style={{ fontSize: '11px', color: '#5a7a82', marginTop: '1rem', textAlign: 'center' }}>
            As an Amazon Associate, Pond Pal earns from qualifying purchases. This helps keep our tools free!
          </p>
        </div>
      </section>

      <section className="section how-section">
        <div className="section-inner">
          <span className="section-tag" style={{ background: 'rgba(244,131,61,0.2)', color: '#f4833d' }}>How It Works</span>
          <h2>Get answers in under a minute</h2>
          <p className="section-lead">No complicated forms, no confusing charts. Just simple, friendly guidance.</p>
          <div className="steps">
            <div className="step">
              <div className="step-num">1</div>
              <h3>Tell us about your setup</h3>
              <p>Enter your tank or pond details — we keep it simple and only ask what we need.</p>
            </div>
            <div className="step">
              <div className="step-num">2</div>
              <h3>Our AI gets to work</h3>
              <p>Pond Pal analyzes your info using proven fishkeeping guidelines and best practices.</p>
            </div>
            <div className="step">
              <div className="step-num">3</div>
              <h3>Get clear, friendly advice</h3>
              <p>Plain English results — what's good, what needs attention, and exactly what to do.</p>
            </div>
            <div className="step">
              <div className="step-num">4</div>
              <h3>Happy, healthy fish!</h3>
              <p>Follow the guidance, watch your fish thrive, and come back anytime you need help.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="section-inner">
          <span className="section-tag teal">Why Pond Pal?</span>
          <h2>Built for fish lovers, not fish scientists</h2>
          <p className="section-lead">We believe good fish care should be accessible to everyone — not just the experts.</p>
          <div className="info-grid">
            <div className="info-card">
              <h3>🌱 Perfect for beginners</h3>
              <p>We explain everything in plain English. No confusing acronyms, no overwhelming walls of text — just friendly, practical help.</p>
            </div>
            <div className="info-card">
              <h3>🏆 Trusted by enthusiasts</h3>
              <p>Our AI uses real fishkeeping standards like the 250-gallon-per-koi rule and proper water chemistry ranges that experienced keepers rely on.</p>
            </div>
            <div className="info-card">
              <h3>💚 Always free to use</h3>
              <p>Our core tools are completely free, forever. We keep the lights on through affiliate partnerships — so you get great advice at no cost.</p>
            </div>
            <div className="info-card">
              <h3>🔬 Specific, actionable advice</h3>
              <p>We don't just say your ammonia is high. We tell you exactly what percentage water change to do and which products to use.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--teal)', textAlign: 'center' }}>
        <div className="section-inner">
          <h2 style={{ color: '#fff', marginBottom: '1rem' }}>Ready to give your fish the best life possible?</h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '2rem', fontSize: '1.1rem' }}>Start with our free tank checker — it only takes a minute.</p>
          <Link href="/tank-checker" className="btn-primary" style={{ fontSize: '16px', padding: '16px 36px' }}>
            Get Started — It's Free 🐟
          </Link>
        </div>
      </section>

      <footer className="footer">
        <p>🐟 Pond Pal — Friendly fish care, powered by AI</p>
        <p style={{ marginTop: '0.75rem' }}>
          <Link href="/tank-checker" style={{ color: 'rgba(255,255,255,0.6)' }}>Tank Checker</Link>{' · '}
          <Link href="/water-chemistry" style={{ color: 'rgba(255,255,255,0.6)' }}>Water Testing</Link>{' · '}
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
          As an Amazon Associate, Pond Pal earns from qualifying purchases.
        </p>
      </footer>
    </>
  )
}
