import Head from 'next/head'
import Link from 'next/link'

export default function HowManyKoi() {
  return (
    <>
      <Head>
        <title>How Many Koi Can I Put in a 1000 Gallon Pond? — Pond Pal</title>
        <meta name="description" content="The honest answer to how many koi fit in a 1000 gallon pond — with the 250 gallon rule explained, stocking calculations, and what most beginners get wrong." />
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
        <h1>How Many Koi Can I Put in a 1000 Gallon Pond?</h1>
        <p>The honest answer — with the math, the rules, and what most beginners get wrong</p>
      </div>

      <div style={{ maxWidth: '780px', margin: '0 auto', padding: '3rem 2rem' }}>

        <div style={{ display: 'flex', gap: '8px', marginBottom: '2rem', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '11px', fontWeight: 500, padding: '4px 12px', borderRadius: '20px', background: '#d4f0ec', color: '#0e6b6b' }}>Pond Setup</span>
          <span style={{ fontSize: '11px', color: '#5a7a82', padding: '4px 0' }}>May 2026</span>
          <span style={{ fontSize: '11px', color: '#5a7a82', padding: '4px 0' }}>8 min read</span>
        </div>

        {[
          {
            heading: null,
            text: `If you're planning a 1,000 gallon koi pond, the short answer is 4 koi — but that's with good filtration, regular water changes, and fish that aren't fully grown yet. The full answer is more nuanced, and getting it right is the difference between a thriving pond and a constant battle with water quality.\n\nLet's break it down properly so you can make the right decision for your specific setup.`
          },
          {
            heading: 'The 250 gallon rule — what it actually means',
            text: `The most widely used guideline in koi keeping is 250 gallons per koi. Applied to a 1,000 gallon pond, that gives you 4 koi.\n\nBut here's what most beginners don't realize — this rule assumes your koi are fully grown adults, typically 18 to 24 inches long. Koi grow fast. A 4-inch fish you bring home today can reach 12 inches within a year and 18 to 20 inches within 3 to 5 years under good conditions.\n\nSo while you might be tempted to add 6 or 8 small koi to your new 1,000 gallon pond, you're really setting yourself up for an overstocking problem in 2 to 3 years when those fish have grown significantly.`
          },
          {
            heading: 'The 10x body length rule',
            text: `There's a second stocking guideline that often gets overlooked — the 10x body length rule. This states that koi need a pond length at least 10 times their own body length to swim comfortably and behave naturally.\n\nFor a 20-inch koi, that means a minimum pond length of 200 inches, or just over 16 feet. Most 1,000 gallon ponds don't come close to that length, which is why many experienced keepers consider 1,000 gallons a comfortable home for small to medium koi (6 to 12 inches) rather than large adults.\n\nIf you're stocking with smaller fish that you plan to grow on, 4 to 5 fish is reasonable in a 1,000 gallon pond. Just have a plan for when they outgrow it.`
          },
          {
            heading: 'How filtration changes everything',
            text: `The 250 gallon rule assumes basic filtration. With an excellent filtration system you may be able to push slightly higher stocking levels. With poor or no filtration, you need to stock even more conservatively.\n\nFor a 1,000 gallon koi pond, your filter should be rated for at least 2,000 gallons. Koi produce far more waste than most other pond fish, and a filter rated exactly for your pond volume will constantly struggle to keep up.\n\nThe key metrics to watch are ammonia and nitrite. In a properly stocked, well-filtered pond, both should read zero at all times. If you're seeing ammonia or nitrite above zero, your pond is overstocked or your filtration is inadequate — or both.\n\nNot sure if your filtration is keeping up? Use our free Water Testing Analyzer to check your readings and get specific advice.`
          },
          {
            heading: 'Realistic stocking scenarios for a 1,000 gallon pond',
            text: `Here's a practical breakdown based on fish size and filtration quality:\n\nSmall koi (4 to 8 inches) with good filtration: up to 6 fish, with the understanding you'll need a larger pond or to rehome some fish as they grow.\n\nMedium koi (8 to 14 inches) with good filtration: 4 fish is comfortable, 5 is possible with excellent filtration and regular water changes.\n\nLarge koi (14 inches and above) with good filtration: 3 fish maximum. Fully grown koi in a 1,000 gallon pond are pushing the limits of what the system can handle.\n\nMixed size with basic filtration: stick to 3 fish and upgrade your filter before adding more.`
          },
          {
            heading: 'Signs your pond is overstocked',
            text: `Even if your numbers look right on paper, watch your fish for signs of stress that indicate the pond is struggling:\n\nFish gasping at the surface, especially in the morning, often indicates low dissolved oxygen from an overstocked system working overtime.\n\nAmmonia or nitrite readings above zero mean your biological filtration can't keep up with the waste load.\n\nFrequent disease outbreaks suggest chronic low-level stress from overcrowding suppressing the immune systems of your fish.\n\nAlgae blooms that seem impossible to control often point to excess nutrients from too many fish in the system.\n\nIf you're seeing any of these signs, the answer is usually more filtration, fewer fish, or both.`
          },
          {
            heading: 'What about goldfish instead?',
            text: `If you love the look of a pond full of colorful fish but your 1,000 gallon pond feels limiting for koi, consider fancy goldfish as an alternative or addition. Fancy goldfish are much smaller than koi at maturity — typically 6 to 8 inches — produce less waste, and can be kept at roughly 1 fish per 20 to 30 gallons.\n\nA 1,000 gallon pond can comfortably house 30 to 40 goldfish, giving you a lively, colorful pond without the stocking pressures of koi. Many keepers mix a few statement koi with a larger number of goldfish for the best of both worlds.`
          },
          {
            heading: 'The bottom line',
            text: `For a 1,000 gallon pond with good filtration, 4 koi is the sweet spot. If your filtration is excellent and you're committed to regular water changes, 5 is workable. If you're starting with small fish, you can begin with 5 to 6 but plan ahead for when they grow.\n\nThe biggest mistake new koi keepers make is overstocking a new pond before the filter has fully cycled and before they really understand how much space adult koi need. Start conservatively, test your water regularly, and add fish slowly — your koi will reward you with better health, faster growth, and more vibrant colors when they're not competing for resources.`
          },
        ].map((s, i) => (
          <div key={i} style={{ marginBottom: '2rem' }}>
            {s.heading && <h2 style={{ fontSize: '1.3rem', marginBottom: '0.875rem', color: '#062d3a' }}>{s.heading}</h2>}
            {s.text.split('\n\n').map((para, j) => (
              <p key={j} style={{ fontSize: '15px', color: '#2a3f47', lineHeight: '1.85', marginBottom: '1rem' }}>{para}</p>
            ))}
            {i === 3 && (
              <div style={{ background: '#f0faf8', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1rem 0', border: '1px solid rgba(26,158,142,0.2)' }}>
                <p style={{ fontSize: '14px', color: '#0e6b6b', fontWeight: 500, marginBottom: '0.5rem' }}>🧪 Check your water right now</p>
                <p style={{ fontSize: '13px', color: '#2a3f47', marginBottom: '0.75rem' }}>Enter your ammonia, nitrite, and nitrate readings for an instant AI diagnosis.</p>
                <Link href="/water-chemistry" className="btn-primary" style={{ fontSize: '13px', padding: '8px 18px' }}>Test My Water Free</Link>
              </div>
            )}
          </div>
        ))}

        <div style={{ background: '#fff', borderRadius: '14px', padding: '1.5rem', border: '1px solid rgba(0,0,0,0.07)', marginBottom: '2rem' }}>
          <p style={{ fontSize: '14px', fontWeight: 500, color: '#1a2e35', marginBottom: '1rem' }}>🛒 Essential gear for a healthy koi pond</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
            {[
              { name: 'API Master Test Kit', desc: 'Monitor ammonia, nitrite & nitrate', url: 'https://www.amazon.com/dp/B000255NCI?tag=pondpal20-20' },
              { name: 'API Pond Master Test Kit', desc: 'Designed specifically for ponds', url: 'https://www.amazon.com/dp/B0002IHNUO?tag=pondpal20-20' },
              { name: 'Seachem Prime', desc: 'Detoxifies ammonia in emergencies', url: 'https://www.amazon.com/dp/B00025694O?tag=pondpal20-20' },
              { name: 'Hikari Staple Koi Food', desc: 'Quality everyday koi nutrition', url: 'https://www.amazon.com/dp/B0002562MK?tag=pondpal20-20' },
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
          <h3 style={{ color: '#fff', marginBottom: '0.75rem', fontSize: '1.1rem' }}>Not sure if your pond is the right size?</h3>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', marginBottom: '1.5rem' }}>Use our free Tank Size Checker — enter your pond details and get an instant AI analysis.</p>
          <Link href="/tank-checker" className="btn-primary">Check My Tank Size Free</Link>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <Link href="/blog" style={{ color: '#1a9e8e', fontSize: '14px' }}>← Back to blog</Link>
          <Link href="/blog/koi-ammonia-spike" style={{ color: '#1a9e8e', fontSize: '14px' }}>Next: Koi Ammonia Spikes →</Link>
        </div>
      </div>

      <footer className="footer">
        <p>🐟 Pond Pal — Friendly fish care, powered by AI</p>
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
