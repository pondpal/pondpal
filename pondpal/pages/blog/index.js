import Head from 'next/head'
import Link from 'next/link'

const posts = [
  { slug: 'how-many-koi-1000-gallon-pond', title: 'How Many Koi Can I Put in a 1000 Gallon Pond?', desc: 'The honest answer with the math, the rules, and what most beginners get wrong.', date: 'May 2026', readTime: '8 min', emoji: '🐠', category: 'Koi & Ponds' },
  { slug: 'koi-ammonia-spike', title: 'Koi Pond Ammonia Spike — Causes and How to Fix It Fast', desc: 'Ammonia is the number one killer in koi ponds. Here is everything you need to know.', date: 'May 2026', readTime: '10 min', emoji: '⚠️', category: 'Water Quality' },
  { slug: 'best-koi-food-every-season', title: 'Best Koi Food for Every Season', desc: 'What to feed your koi in spring, summer, autumn and winter with our top product picks.', date: 'May 2026', readTime: '10 min', emoji: '🍽️', category: 'Koi & Ponds' },
  { slug: 'how-big-betta-tank', title: 'How Big of a Tank Does a Betta Fish Need?', desc: 'Why the bowl myth is harmful and what a proper betta tank actually looks like.', date: 'May 2026', readTime: '8 min', emoji: '💜', category: 'Betta' },
  { slug: 'why-is-my-goldfish-tank-cloudy', title: 'Why Is My Goldfish Tank Cloudy?', desc: 'White cloudiness, green water, and brown tint all have different causes — find yours here.', date: 'May 2026', readTime: '9 min', emoji: '🐡', category: 'Goldfish' },
  { slug: 'best-filter-55-gallon-aquarium', title: 'Best Filter for a 55 Gallon Aquarium', desc: 'What to look for and which filter types work best for different fish.', date: 'May 2026', readTime: '10 min', emoji: '🔄', category: 'Aquarium Setup' },
  { slug: 'how-to-cycle-fish-tank', title: 'How to Cycle a Fish Tank for Beginners', desc: 'The most important step before adding fish — what it is, how long it takes, and how to do it right.', date: 'May 2026', readTime: '10 min', emoji: '🔬', category: 'Aquarium Setup' },
  { slug: 'what-fish-can-live-with-bettas', title: 'What Fish Can Live With Bettas?', desc: 'Safe tank mates, fish to always avoid, and how to tell if your betta will tolerate company.', date: 'May 2026', readTime: '9 min', emoji: '💜', category: 'Betta' },
  { slug: 'african-cichlid-tank-setup', title: 'African Cichlid Tank Setup Guide', desc: 'Tank size, water chemistry, rockwork, stocking, and aggression management for Malawi and Tanganyika cichlids.', date: 'May 2026', readTime: '11 min', emoji: '🐟', category: 'Cichlid' },
  { slug: 'how-often-water-changes', title: 'How Often Should You Do Water Changes?', desc: "The real answer depends on your setup — stocking, filtration, and feeding all play a part. Here's how to figure out yours.", date: 'July 2026', readTime: '9 min', emoji: '💧', category: 'Water Quality' },
  { slug: 'nitrite-poisoning-fish', title: 'Nitrite Poisoning in Fish — Signs and Treatment', desc: "Nitrite is the second stage of the nitrogen cycle and just as dangerous as ammonia. Here's how to recognize it and treat it fast.", date: 'July 2026', readTime: '9 min', emoji: '🩸', category: 'Water Quality' },
]

const categoryColors = {
  'Koi & Ponds': { bg: '#d4f0ec', text: '#0e6b6b' },
  'Water Quality': { bg: '#FCEBEB', text: '#A32D2D' },
  'Betta': { bg: '#e8e4f8', text: '#4a3d8f' },
  'Goldfish': { bg: '#faeeda', text: '#854F0B' },
  'Aquarium Setup': { bg: '#E6F1FB', text: '#185FA5' },
  'Cichlid': { bg: '#ffdcc9', text: '#c04a10' },
}

export default function Blog() {
  return (
    <>
      <Head>
        <title>Fish & Aquarium Care Blog — Pond Pal</title>
        <meta name="description" content="Expert fish and aquarium care articles — koi, goldfish, bettas, cichlids, tank setup, water quality, and more. Plain English advice for every fish keeper." />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>

      <div className="tool-hero">
        <h1>Pond Pal Blog</h1>
        <p>In-depth articles on fish keeping, pond care, water quality, and everything in between</p>
      </div>

      <section className="section" style={{ background: 'var(--cream)' }}>
        <div className="section-inner" style={{ maxWidth: '860px' }}>
          <div style={{ display: 'grid', gap: '1.5rem' }}>
            {posts.map((p, i) => {
              const colors = categoryColors[p.category] || { bg: '#d4f0ec', text: '#0e6b6b' }
              return (
                <Link key={i} href={'/blog/' + p.slug} style={{ textDecoration: 'none' }}>
                  <div className="tool-card" style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                    <div style={{ fontSize: '40px', flexShrink: 0 }}>{p.emoji}</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', gap: '8px', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                        <span style={{ fontSize: '11px', fontWeight: 500, padding: '2px 10px', borderRadius: '20px', background: colors.bg, color: colors.text }}>{p.category}</span>
                        <span style={{ fontSize: '11px', color: '#5a7a82' }}>{p.date}</span>
                        <span style={{ fontSize: '11px', color: '#5a7a82' }}>{p.readTime} read</span>
                      </div>
                      <h2 style={{ fontSize: '1.15rem', marginBottom: '0.5rem', color: '#1a2e35' }}>{p.title}</h2>
                      <p style={{ fontSize: '14px', color: '#5a7a82', lineHeight: '1.6' }}>{p.desc}</p>
                      <span className="tool-link" style={{ marginTop: '0.75rem', display: 'inline-block' }}>Read article →</span>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>

          <div style={{ marginTop: '3rem', background: 'var(--deep)', borderRadius: '14px', padding: '2rem', textAlign: 'center' }}>
            <h2 style={{ color: '#fff', marginBottom: '0.75rem' }}>Get instant answers for your specific setup</h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '1.5rem', fontSize: '14px' }}>Our free AI tools give personalized advice for any fish, any tank.</p>
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
          <Link href="/faq" style={{ color: 'rgba(255,255,255,0.6)' }}>FAQ</Link>{' · '}
          <Link href="/about" style={{ color: 'rgba(255,255,255,0.6)' }}>About</Link>
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
