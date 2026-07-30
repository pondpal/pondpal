import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Pond Pal — Friendly Fish & Aquarium Care, Powered by AI</title>
        <meta name="description" content="Pond Pal helps koi, goldfish, tropical fish, and aquarium owners of all experience levels keep their fish healthy and their water perfect. Free AI-powered tools and care guides." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>

      <section className="hero">
        <span className="hero-fish">🐟</span>
        <h1>Your friendly <span>fish & aquarium</span> companion</h1>
        <p className="hero-sub">
          Whether you keep koi, goldfish, tropical fish, or a saltwater reef —
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
          <h2>Everything your tank or pond needs, in one place</h2>
          <p className="section-lead">Just answer a few questions and our AI gives you clear, friendly answers — no fish degree required!</p>
          <div className="tools-grid">
            <Link href="/tank-checker" style={{ textDecoration: 'none' }}>
              <div className="tool-card">
                <span className="tool-icon">🏠</span>
                <h3>Tank Size Checker</h3>
                <p>Tell us your tank size, fish type, how many fish you have, and your filtration. We'll let you know if your setup is a happy home for your fish.</p>
                <span className="tool-link">Check my tank →</span>
              </div>
            </Link>
            <Link href="/water-chemistry" style={{ textDecoration: 'none' }}>
              <div className="tool-card">
                <span className="tool-icon">🧪</span>
                <h3>Water Testing Analyzer</h3>
                <p>Enter your test kit readings for freshwater, pond, or saltwater tanks. Our AI diagnoses any issues and tells you exactly what to do to fix them.</p>
                <span className="tool-link">Test my water →</span>
              </div>
            </Link>
            <Link href="/tools/pond-calculator" style={{ textDecoration: 'none' }}>
              <div className="tool-card">
                <span className="tool-icon">🏊</span>
                <h3>Tank & Pond Volume Calculator</h3>
                <p>Enter your tank or pond dimensions and instantly find out how many gallons you have — and how many fish your setup can support.</p>
                <span className="tool-link">Calculate my volume →</span>
              </div>
            </Link>
            <Link href="/tools/feeding-calculator" style={{ textDecoration: 'none' }}>
              <div className="tool-card">
                <span className="tool-icon">🍽️</span>
                <h3>Feeding Calculator</h3>
                <p>Tell us how many fish you have, their size, and the current season. We'll tell you exactly how much to feed and which food to use.</p>
                <span className="tool-link">Calculate feeding →</span>
              </div>
            </Link>
            <Link href="/tools/ask-pond-pal" style={{ textDecoration: 'none' }}>
              <div className="tool-card">
                <span className="tool-icon">💬</span>
                <h3>Ask Pond Pal</h3>
                <p>Have a question about any fish or aquarium topic? Ask our AI anything — koi, goldfish, tropical fish, bettas, saltwater reefs, and more.</p>
                <span className="tool-link">Ask a question →</span>
              </div>
            </Link>
            <Link href="/tools/climate-checker" style={{ textDecoration: 'none' }}>
              <div className="tool-card">
                <span className="tool-icon">❄️</span>
                <h3>Climate Checker</h3>
                <p>Enter your USDA hardiness zone and fish type to find out if they can safely overwinter outdoors, and how deep your pond needs to be.</p>
                <span className="tool-link">Check my climate →</span>
              </div>
            </Link>
            <Link href="/tools/compatibility-checker" style={{ textDecoration: 'none' }}>
              <div className="tool-card">
                <span className="tool-icon">🤝</span>
                <h3>Compatibility Checker</h3>
                <p>Planning a mixed tank? Check whether your species choices get along before you buy — temperament, aggression, and water chemistry conflicts.</p>
                <span className="tool-link">Check compatibility →</span>
              </div>
            </Link>
            <Link href="/tools/cost-calculator" style={{ textDecoration: 'none' }}>
              <div className="tool-card">
                <span className="tool-icon">💰</span>
                <h3>True Cost Calculator</h3>
                <p>Find the real upfront and ongoing cost of keeping your fish — including equipment, food, and the electricity bill most people forget about.</p>
                <span className="tool-link">Calculate my cost →</span>
              </div>
            </Link>
            <Link href="/care-guides" style={{ textDecoration: 'none' }}>
              <div className="tool-card">
                <span className="tool-icon">📖</span>
                <h3>Care Guides</h3>
                <p>From setting up your first tank to advanced pond filtration — our friendly guides cover koi, goldfish, tropical fish, and everything in between.</p>
                <span className="tool-link">Read the guides →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: '#f8f8f8', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
        <div className="section-inner">
          <span className="section-tag teal">What Fish Do You Keep?</span>
          <h2>Pond Pal works for every fish keeper</h2>
          <p className="section-lead">Whether you have a backyard koi pond or a living room aquarium, we've got you covered.</p>
          <div className="info-grid">
            <div className="info-card">
              <h3>🐠 Koi & Pond Fish</h3>
              <p>Full koi care support — tank sizing, water chemistry, seasonal feeding, disease identification, filtration systems, and pond plant guides.</p>
            </div>
            <div className="info-card">
              <h3>🐡 Goldfish</h3>
              <p>Fancy goldfish, common goldfish, and everything in between. Tank sizing, water quality, and feeding guidance tailored to goldfish needs.</p>
            </div>
            <div className="info-card">
              <h3>🌊 Tropical Fish</h3>
              <p>Bettas, cichlids, tetras, gouramis, and community tanks. Water chemistry guidance for all freshwater tropical species.</p>
            </div>
            <div className="info-card">
              <h3>🪸 Saltwater & Reef</h3>
              <p>Marine fish, reef tanks, and coral setups. Our water testing tool supports saltwater parameters including salinity, calcium, and magnesium.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: '#fff', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
        <div className="section-inner">
          <span className="section-tag teal">Recommended Gear</span>
          <h2>Products every fish keeper needs</h2>
          <p className="section-lead">Our most recommended products — tried, trusted, and linked directly to Amazon for easy ordering.</p>
          <div className="tools-grid">
            <a href="https://www.amazon.com/dp/B000255NCI?tag=pondpal20-20" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <div className="tool-card">
                <span className="tool-icon">🧪</span>
                <h3>API Master Test Kit</h3>
                <p>The most trusted freshwater test kit. Tests pH, ammonia, nitrite, and nitrate accurately — works for koi ponds, goldfish tanks, and tropical setups.</p>
                <span className="tool-link">View on Amazon →</span>
              </div>
            </a>
            <a href="https://www.amazon.com/dp/B00025694O?tag=pondpal20-20" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <div className="tool-card">
                <span className="tool-icon">💧</span>
                <h3>Seachem Prime</h3>
                <p>The gold standard water conditioner for all freshwater tanks and ponds. Neutralizes chlorine and detoxifies ammonia in one easy dose.</p>
                <span className="tool-link">View on Amazon →</span>
              </div>
            </a>
            <a href="https://www.amazon.com/dp/B0002DHYDI?tag=pondpal20-20" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <div className="tool-card">
                <span className="tool-icon">🌿</span>
                <h3>Hikari Wheat Germ Koi Food</h3>
                <p>Perfect for koi and goldfish in spring and autumn when water temperatures drop below 65°F. Easy to digest, highly nutritious.</p>
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
          <p className="section-lead">No complicated forms, no confusing charts. Just simple, friendly guidance for every fish keeper.</p>
          <div className="steps">
            <div className="step">
              <div className="step-num">1</div>
              <h3>Tell us about your setup</h3>
              <p>Enter your tank or pond details — fish type, size, filtration. We keep it simple.</p>
            </div>
            <div className="step">
              <div className="step-num">2</div>
              <h3>Our AI gets to work</h3>
              <p>Pond Pal analyzes your info using proven fishkeeping guidelines for your specific fish type.</p>
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
              <p>Our AI uses real fishkeeping standards and species-specific guidelines that experienced keepers rely on — for every type of fish.</p>
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
          <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '2rem', fontSize: '1.1rem' }}>Start with our free tank checker — works for any fish, any setup, takes one minute.</p>
          <Link href="/tank-checker" className="btn-primary" style={{ fontSize: '16px', padding: '16px 36px' }}>
            Get Started — It's Free 🐟
          </Link>
        </div>
      </section>

      <footer className="footer">
        <p>🐟 Pond Pal — Friendly fish & aquarium care, powered by AI</p>
        <p style={{ marginTop: '0.75rem' }}>
          <Link href="/tank-checker" style={{ color: 'rgba(255,255,255,0.6)' }}>Tank Checker</Link>{' · '}
          <Link href="/water-chemistry" style={{ color: 'rgba(255,255,255,0.6)' }}>Water Testing</Link>{' · '}
          <Link href="/tools/pond-calculator" style={{ color: 'rgba(255,255,255,0.6)' }}>Volume Calculator</Link>{' · '}
          <Link href="/tools/feeding-calculator" style={{ color: 'rgba(255,255,255,0.6)' }}>Feeding Calculator</Link>{' · '}
          <Link href="/tools/ask-pond-pal" style={{ color: 'rgba(255,255,255,0.6)' }}>Ask Pond Pal</Link>{' · '}
          <Link href="/tools/climate-checker" style={{ color: 'rgba(255,255,255,0.6)' }}>Climate Checker</Link>{' · '}
          <Link href="/tools/compatibility-checker" style={{ color: 'rgba(255,255,255,0.6)' }}>Compatibility Checker</Link>{' · '}
          <Link href="/tools/cost-calculator" style={{ color: 'rgba(255,255,255,0.6)' }}>Cost Calculator</Link>{' · '}
          <Link href="/care-guides" style={{ color: 'rgba(255,255,255,0.6)' }}>Care Guides</Link>{' · '}
          <Link href="/blog" style={{ color: 'rgba(255,255,255,0.6)' }}>Blog</Link>
        </p>
        <p style={{ marginTop: '0.75rem' }}>
          <Link href="/about" style={{ color: 'rgba(255,255,255,0.6)' }}>About</Link>{' · '}
          <Link href="/contact" style={{ color: 'rgba(255,255,255,0.6)' }}>Contact</Link>{' · '}
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
