import Head from 'next/head'
import Link from 'next/link'

const varieties = [
  { name: 'Kohaku', emoji: '⬜', level: 'Classic', desc: 'The most iconic koi variety — white body with red (hi) markings. Kohaku are judged on the quality of the white (which should be pure snow white) and the pattern of the red. A well-balanced, symmetrical pattern with clean edges is considered most desirable. Kohaku are often called the "king of koi" and a high-quality specimen is among the most valuable fish in the hobby.' },
  { name: 'Taisho Sanke (Sanke)', emoji: '🔴', level: 'Classic', desc: 'White body with red and black markings. Think of Sanke as a Kohaku with the addition of sumi (black) patches, which should appear on the upper body and not on the head. One of the "Big Three" varieties alongside Kohaku and Showa.' },
  { name: 'Showa Sanshoku (Showa)', emoji: '⚫', level: 'Classic', desc: 'Black body with red and white markings. Showa are often confused with Sanke but have a key difference — in Showa, the black (sumi) is the base color and wraps around the body including the head and fins. Young Showa can look dramatically different from adults as their sumi develops with age.' },
  { name: 'Tancho', emoji: '⭕', level: 'Classic', desc: 'Perhaps the most elegant koi variety — a pure white body with a single circular red spot on the head, reminiscent of the Japanese crane. The spot should be perfectly circular, centered on the head, and vivid red. Tancho command premium prices when the spot is ideal.' },
  { name: 'Ogon', emoji: '✨', level: 'Metallic', desc: 'Single-colored metallic koi available in gold (yamabuki ogon), silver (platinum ogon), and orange. Among the first metallic koi developed and remain hugely popular for their stunning reflective scales that shimmer in sunlight.' },
  { name: 'Shusui', emoji: '💙', level: 'Doitsu', desc: 'A Doitsu (scaleless or partially scaled) variety with a pale blue-grey body and a line of large mirror scales along the dorsal line. Shusui also typically display red-orange coloring on the sides and belly. The blue-grey color is unusual among koi and makes Shusui instantly recognizable.' },
  { name: 'Butterfly Koi', emoji: '🦋', level: 'Longfin', desc: 'Not a traditional Japanese variety but enormously popular in the West. Butterfly koi have dramatically long, flowing fins that trail behind them as they swim. Available in virtually every color pattern. Generally hardy and their flowing fins make them stunning pond fish.' },
  { name: 'Bekko', emoji: '🐢', level: 'Classic', desc: 'White, red, or yellow base color with black (sumi) patches. Bekko are essentially Sanke without the red — a clean two-color fish. Shiro Bekko (white with black) is the most common. The sumi markings should be defined patches on the upper body with clean edges.' },
]

export default function KoiVarieties() {
  return (
    <>
      <Head>
        <title>Koi Varieties and Breeds — Pond Pal</title>
        <meta name="description" content="A guide to the most popular koi varieties — Kohaku, Sanke, Showa, Tancho, Ogon, Butterfly koi, and more explained in plain English." />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>

      <div className="tool-hero">
        <h1>Koi Varieties and Breeds</h1>
        <p>From Kohaku to Butterfly koi — a guide to the most popular varieties and what makes each one special</p>
      </div>

      <div style={{ maxWidth: '780px', margin: '0 auto', padding: '3rem 2rem' }}>
        <div style={{ display: 'flex', gap: '8px', marginBottom: '1rem', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '11px', fontWeight: 500, padding: '4px 12px', borderRadius: '20px', background: '#d4f0ec', color: '#0e6b6b' }}>Beginner</span>
          <span style={{ fontSize: '11px', color: '#5a7a82', padding: '4px 0' }}>10 min read</span>
        </div>

        <p style={{ fontSize: '15px', color: '#2a3f47', lineHeight: '1.8', marginBottom: '2.5rem' }}>
          There are over 100 recognized koi varieties, each with its own color pattern, scale type, and character. The varieties below are the most commonly kept and most likely encountered at your local koi dealer. Japanese koi names can seem intimidating at first, but they follow logical patterns once you learn a few key terms.
        </p>

        <div style={{ display: 'grid', gap: '1.25rem' }}>
          {varieties.map((v, i) => (
            <div key={i} style={{ background: '#fff', borderRadius: '14px', padding: '1.5rem', border: '1px solid rgba(0,0,0,0.07)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '0.75rem' }}>
                <span style={{ fontSize: '28px' }}>{v.emoji}</span>
                <div>
                  <h2 style={{ fontSize: '1.15rem', marginBottom: '2px' }}>{v.name}</h2>
                  <span style={{ fontSize: '11px', fontWeight: 500, padding: '2px 8px', borderRadius: '10px', background: '#E6F1FB', color: '#185FA5' }}>{v.level}</span>
                </div>
              </div>
              <p style={{ fontSize: '14px', color: '#2a3f47', lineHeight: '1.7' }}>{v.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ background: '#faeeda', borderRadius: '12px', padding: '1.25rem', marginTop: '2rem', fontSize: '14px', color: '#854F0B' }}>
          <strong>A note on buying koi:</strong> The variety matters less than the health of the individual fish. A plain but healthy fish will bring you far more joy than a stunning specimen that arrives sick. Always buy from reputable dealers, quarantine new fish for 4–6 weeks before adding them to your pond, and never buy a fish just because it's beautiful if it shows any signs of illness.
        </div>

        <div style={{ background: '#fff', borderRadius: '14px', padding: '1.5rem', border: '1px solid rgba(0,0,0,0.07)', marginTop: '2rem', marginBottom: '2rem' }}>
          <p style={{ fontSize: '13px', fontWeight: 500, color: '#1a2e35', marginBottom: '1rem' }}>🛒 Recommended products for this guide</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
            {[
              { name: 'API Pond Master Test Kit', desc: 'Keep your new koi healthy', url: 'https://www.amazon.com/dp/B0002DJNN0?tag=pondpal20-20' },
              { name: 'Seachem Prime', desc: 'Essential for any new fish addition', url: 'https://www.amazon.com/dp/B00025694O?tag=pondpal20-20' },
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
          <h3 style={{ color: '#fff', marginBottom: '0.75rem', fontSize: '1.2rem' }}>Ready to check if your pond is ready for new fish?</h3>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', marginBottom: '1.5rem' }}>Make sure your tank size and water chemistry are right before adding to your collection.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/tank-checker" className="btn-primary">Check My Tank Size</Link>
            <Link href="/water-chemistry" className="btn-outline">Analyze My Water</Link>
          </div>
        </div>

        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <Link href="/care-guides" style={{ color: '#1a9e8e', fontSize: '14px' }}>← Back to all guides</Link>
        </div>
      </div>

      <footer className="footer">
        <p>🐟 Pond Pal — Friendly fish & aquarium care, powered by AI</p>
        <p style={{ marginTop: '0.75rem' }}>
          <Link href="/tank-checker" style={{ color: 'rgba(255,255,255,0.6)' }}>Tank Checker</Link>{' · '}
          <Link href="/water-chemistry" style={{ color: 'rgba(255,255,255,0.6)' }}>Water Testing</Link>{' · '}
          <Link href="/care-guides" style={{ color: 'rgba(255,255,255,0.6)' }}>Care Guides</Link>{' · '}
          <Link href="/blog" style={{ color: 'rgba(255,255,255,0.6)' }}>Blog</Link>
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
