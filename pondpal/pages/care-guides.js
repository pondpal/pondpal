import Head from 'next/head'
import Link from 'next/link'

const koiGuides = [
  { emoji: '🐣', title: 'Getting Started with Koi', desc: 'Everything a first-time koi keeper needs to know — pond size, filtration, the nitrogen cycle, choosing fish, and what to expect in year one.', level: 'Beginner', levelColor: '#d4f0ec', levelText: '#0e6b6b', slug: '/guides/getting-started', time: '10 min' },
  { emoji: '💧', title: 'Understanding Water Chemistry', desc: 'A plain-English guide to pH, ammonia, nitrite, nitrate, KH and GH — what they mean, why they matter, and what to do when readings are off.', level: 'Beginner', levelColor: '#d4f0ec', levelText: '#0e6b6b', slug: '/guides/water-chemistry', time: '12 min' },
  { emoji: '🌡️', title: 'Seasonal Pond Care', desc: 'How to care for your koi through spring, summer, autumn, and winter — including when to stop feeding and how to winterize safely.', level: 'Intermediate', levelColor: '#ffdcc9', levelText: '#c04a10', slug: '/guides/seasonal-care', time: '12 min' },
  { emoji: '🏥', title: 'Common Koi Diseases', desc: 'How to identify and treat fin rot, ich, anchor worm, ulcers, dropsy, flukes, and swim bladder issues before they become serious.', level: 'Intermediate', levelColor: '#ffdcc9', levelText: '#c04a10', slug: '/guides/koi-diseases', time: '15 min' },
  { emoji: '🍽️', title: 'Feeding Your Koi Right', desc: 'What to feed, how much, how often, and how feeding changes with the seasons. Plus the foods you should never give your fish.', level: 'Beginner', levelColor: '#d4f0ec', levelText: '#0e6b6b', slug: '/guides/feeding', time: '10 min' },
  { emoji: '🔬', title: 'Advanced Filtration Systems', desc: 'Gravity filters, bead filters, moving bed reactors, UV sterilizers, and bottom drains — what they do and which is right for your pond.', level: 'Advanced', levelColor: '#e8e4f8', levelText: '#4a3d8f', slug: '/guides/filtration', time: '12 min' },
  { emoji: '🐠', title: 'Koi Varieties and Breeds', desc: 'From Kohaku to Showa, Tancho to Butterfly koi — a friendly introduction to the most popular varieties and what makes each one special.', level: 'Beginner', levelColor: '#d4f0ec', levelText: '#0e6b6b', slug: '/guides/koi-varieties', time: '10 min' },
  { emoji: '🌱', title: 'Pond Plants That Help', desc: 'The best aquatic plants for koi ponds — which ones absorb nitrates, provide shade, and actually survive being nibbled by curious koi.', level: 'Intermediate', levelColor: '#ffdcc9', levelText: '#c04a10', slug: '/guides/pond-plants', time: '10 min' },
]

const otherGuides = [
  { emoji: '🐡', title: 'Goldfish Care Guide', desc: 'Tank sizing, water quality, feeding, health issues, and the difference between fancy and single-tailed varieties.', level: 'Beginner', levelColor: '#d4f0ec', levelText: '#0e6b6b', slug: '/guides/goldfish', time: '12 min', category: 'Goldfish' },
  { emoji: '💜', title: 'Betta Fish Care Guide', desc: 'Everything you need to keep your betta happy and healthy — tank size, temperature, gentle filtration, feeding, and common health problems.', level: 'Beginner', levelColor: '#d4f0ec', levelText: '#0e6b6b', slug: '/guides/betta', time: '12 min', category: 'Betta' },
  { emoji: '🪸', title: 'Saltwater Aquarium Guide', desc: 'Getting started with a marine tank — equipment, salinity, cycling, water parameters, and choosing your first marine fish.', level: 'Intermediate', levelColor: '#ffdcc9', levelText: '#c04a10', slug: '/guides/saltwater', time: '15 min', category: 'Saltwater' },
  { emoji: '🐟', title: 'Cichlid Care Guide', desc: 'African, South American, and Central American cichlids — what makes each group unique and how to keep them successfully.', level: 'Intermediate', levelColor: '#ffdcc9', levelText: '#c04a10', slug: '/guides/cichlids', time: '14 min', category: 'Cichlid' },
  { emoji: '🌿', title: 'Community Tropical Tank Guide', desc: 'How to set up a peaceful, thriving tropical aquarium — compatible fish, water parameters, feeding, and health care for beginners.', level: 'Beginner', levelColor: '#d4f0ec', levelText: '#0e6b6b', slug: '/guides/tropical', time: '13 min', category: 'Tropical' },
  { emoji: '🌊', title: 'Planted Tank Guide', desc: 'How to set up a thriving planted freshwater aquarium — lighting, substrate, CO2, best beginner plants, and compatible fish.', level: 'Intermediate', levelColor: '#ffdcc9', levelText: '#c04a10', slug: '/guides/planted-tank', time: '13 min', category: 'Planted Tank' },
]



const products = [
  { name: 'API Master Test Kit', desc: 'Tests pH, ammonia, nitrite & nitrate', url: 'https://www.amazon.com/dp/B000255NCI?tag=pondpal20-20', emoji: '🧪' },
  { name: 'Seachem Prime', desc: 'Best water conditioner for all tanks', url: 'https://www.amazon.com/dp/B00025694O?tag=pondpal20-20', emoji: '💧' },
  { name: 'Hikari Wheat Germ Koi Food', desc: 'Perfect cool weather koi food', url: 'https://www.amazon.com/dp/B0002DHYDI?tag=pondpal20-20', emoji: '🌿' },
  { name: 'Hikari Staple Koi Food', desc: 'Quality everyday koi food', url: 'https://www.amazon.com/dp/B0002562MK?tag=pondpal20-20', emoji: '🍽️' },
]

export default function CareGuides() {
  return (
    <>
      <Head>
        <title>Fish & Aquarium Care Guides — Pond Pal</title>
        <meta name="description" content="Free fish and aquarium care guides for all experience levels — koi, goldfish, betta, cichlids, saltwater, and more. Plain English advice for every fish keeper." />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>

      <div className="tool-hero">
        <h1>📖 Care Guides</h1>
        <p>Friendly guides for koi, goldfish, bettas, cichlids, saltwater fish, and more</p>
      </div>

      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="section-inner">

          <span className="section-tag">Koi & Pond Guides</span>
          <h2 style={{ marginBottom: '0.5rem' }}>Koi keeping — start to finish</h2>
          <p className="section-lead">Our most comprehensive guides covering every aspect of koi and pond care.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem', marginBottom: '3rem' }}>
            {koiGuides.map((g, i) => (
              <Link key={i} href={g.slug} style={{ textDecoration: 'none' }}>
                <div className="tool-card" style={{ height: '100%' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                    <span style={{ fontSize: '32px' }}>{g.emoji}</span>
                    <span style={{ fontSize: '11px', fontWeight: 500, padding: '3px 10px', borderRadius: '20px', background: g.levelColor, color: g.levelText }}>{g.level}</span>
                  </div>
                  <h3 style={{ marginBottom: '0.5rem', fontSize: '1.05rem' }}>{g.title}</h3>
                  <p style={{ fontSize: '14px', color: '#5a7a82', lineHeight: '1.6' }}>{g.desc}</p>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '1.25rem' }}>
                    <span className="tool-link">Read guide →</span>
                    <span style={{ fontSize: '11px', color: '#5a7a82' }}>{g.time} read</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <span className="section-tag teal">More Fish Types</span>
          <h2 style={{ marginBottom: '0.5rem' }}>Goldfish, bettas, cichlids & saltwater</h2>
          <p className="section-lead">Care guides for every type of fish keeper — all free, all in plain English.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem', marginBottom: '3rem' }}>
            {otherGuides.map((g, i) => (
              <Link key={i} href={g.slug} style={{ textDecoration: 'none' }}>
                <div className="tool-card" style={{ height: '100%' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                    <span style={{ fontSize: '32px' }}>{g.emoji}</span>
                    <div style={{ display: 'flex', gap: '4px', flexDirection: 'column', alignItems: 'flex-end' }}>
                      <span style={{ fontSize: '11px', fontWeight: 500, padding: '3px 10px', borderRadius: '20px', background: g.levelColor, color: g.levelText }}>{g.level}</span>
                      <span style={{ fontSize: '10px', padding: '2px 8px', borderRadius: '10px', background: '#E6F1FB', color: '#185FA5', fontWeight: 500 }}>{g.category}</span>
                    </div>
                  </div>
                  <h3 style={{ marginBottom: '0.5rem', fontSize: '1.05rem' }}>{g.title}</h3>
                  <p style={{ fontSize: '14px', color: '#5a7a82', lineHeight: '1.6' }}>{g.desc}</p>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '1.25rem' }}>
                    <span className="tool-link">Read guide →</span>
                    <span style={{ fontSize: '11px', color: '#5a7a82' }}>{g.time} read</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>



          <div style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>🛒 Recommended Products</h2>
            <p style={{ fontSize: '14px', color: '#5a7a82', marginBottom: '1.5rem' }}>Everything our guides recommend — linked directly to Amazon for easy ordering.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
              {products.map((p, i) => (
                <a key={i} href={p.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                  <div className="tool-card" style={{ textAlign: 'center' }}>
                    <span style={{ fontSize: '28px' }}>{p.emoji}</span>
                    <h3 style={{ fontSize: '14px', margin: '0.5rem 0 0.25rem' }}>{p.name}</h3>
                    <p style={{ fontSize: '12px', color: '#5a7a82' }}>{p.desc}</p>
                    <span className="tool-link" style={{ fontSize: '12px', marginTop: '0.75rem' }}>View on Amazon →</span>
                  </div>
                </a>
              ))}
            </div>
            <p style={{ fontSize: '11px', color: '#5a7a82', marginTop: '1rem', textAlign: 'center' }}>
              As an Amazon Associate, Pond Pal earns from qualifying purchases. This helps keep our tools free!
            </p>
          </div>

          <div style={{ background: 'var(--deep)', borderRadius: '14px', padding: '2.5rem', textAlign: 'center' }}>
            <h2 style={{ color: '#fff', marginBottom: '0.75rem' }}>Need a personalized answer right now?</h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '1.5rem' }}>Our free AI tools give instant, specific advice tailored to your exact setup — for any fish type.</p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/tank-checker" className="btn-primary">Check My Tank</Link>
              <Link href="/water-chemistry" className="btn-outline">Test My Water</Link>
              <Link href="/tools/ask-pond-pal" className="btn-outline">Ask Pond Pal</Link>
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
