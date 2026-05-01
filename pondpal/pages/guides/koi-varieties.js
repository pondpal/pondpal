import Head from 'next/head'
import Link from 'next/link'

const varieties = [
  { name: 'Kohaku', emoji: '⬜', level: 'Classic', desc: 'The most iconic koi variety — white body with red (hi) markings. Kohaku are judged on the quality of the white (which should be pure snow white) and the pattern of the red. A well-balanced, symmetrical pattern with clean edges is considered most desirable. Kohaku are often called the "king of koi" and a high-quality specimen is among the most valuable fish in the hobby.' },
  { name: 'Taisho Sanke (Sanke)', emoji: '🔴', level: 'Classic', desc: 'White body with red and black markings. Think of Sanke as a Kohaku with the addition of sumi (black) patches, which should appear on the upper body and not on the head. The interplay between the three colors — particularly the balance of red and black over the white base — determines quality. Sanke are one of the "Big Three" varieties alongside Kohaku and Showa.' },
  { name: 'Showa Sanshoku (Showa)', emoji: '⚫', level: 'Classic', desc: 'Black body with red and white markings. Showa are often confused with Sanke but have a key difference — in Showa, the black (sumi) is the base color and wraps around the body including the head and fins, while in Sanke, white is the base. Young Showa can look dramatically different from adults as their sumi develops and changes with age, making them fascinating fish to grow on.' },
  { name: 'Tancho', emoji: '⭕', level: 'Classic', desc: 'Perhaps the most elegant koi variety — a pure white body with a single circular red spot on the head, reminiscent of the Japanese crane and the Japanese flag. Any variety of koi with this single head spot pattern can be called Tancho (Tancho Kohaku, Tancho Sanke, etc.). The spot should be perfectly circular, centered on the head, and vivid red. Tancho command premium prices when the spot is ideal.' },
  { name: 'Ogon', emoji: '✨', level: 'Metallic', desc: 'Single-colored metallic koi available in gold (yamabuki ogon), silver (platinum ogon), and orange. Ogon were among the first metallic koi developed and remain hugely popular for their stunning reflective scales that shimmer in sunlight. They are relatively easy to keep and breed, making them a popular choice for beginners who want a visually striking fish.' },
  { name: 'Shusui', emoji: '💙', level: 'Doitsu', desc: 'A Doitsu (scaleless or partially scaled) variety with a pale blue-grey body and a line of large mirror scales along the dorsal line. Shusui also typically display red-orange coloring on the sides and belly. The blue-grey color is unusual among koi and makes Shusui instantly recognizable. They tend to be hardy fish and are popular with keepers who appreciate something different from the standard red-and-white varieties.' },
  { name: 'Butterfly Koi', emoji: '🦋', level: 'Longfin', desc: 'Not a traditional Japanese variety but enormously popular in the West. Butterfly koi have dramatically long, flowing fins that trail behind them as they swim. They are available in virtually every color pattern but are classified separately from traditional koi in shows. They are generally hardy and their flowing fins make them stunning pond fish, though the fins can occasionally be damaged in ponds with sharp rocks or aggressive tankmates.' },
  { name: 'Bekko', emoji: '🐢', level: 'Classic', desc: 'White, red, or yellow base color with black (sumi) patches. Bekko are essentially Sanke without the red — a clean two-color fish. Shiro Bekko (white with black) is the most common. The sumi markings should be similar to those on a Sanke — defined patches on the upper body with clean edges. Bekko are underrated in the hobby and can be very striking fish when the sumi is deep and well-patterned.' },
]

export default function KoiVarieties() {
  return (
    <>
      <Head>
        <title>Koi Varieties and Breeds — Pond Pal</title>
        <meta name="description" content="A guide to the most popular koi varieties — Kohaku, Sanke, Showa, Tancho, Ogon, Butterfly koi, and more explained in plain English." />
      </Head>

      <nav className="nav">
        <Link href="/" className="nav-logo">🐟 Pond<span style={{ color: '#f4833d' }}>Pal</span></Link>
        <ul className="nav-links">
          <li><Link href="/tank-checker">Tank Checker</Link></li>
          <li><Link href="/water-chemistry">Water Chemistry</Link></li>
          <li><Link href="/care-guides">Care Guides</Link></li>
        </ul>
      </nav>

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
          There are over 100 recognized koi varieties, each with its own color pattern, scale type, and character. The varieties below are the most commonly kept and the ones you are most likely to encounter at your local fish store or koi dealer. Japanese koi names can seem intimidating at first, but they follow logical patterns once you learn a few key terms.
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
          <strong>A note on buying koi:</strong> The variety matters less than the health of the individual fish. A plain but healthy fish will bring you far more joy than a stunning specimen that arrives sick. Always buy from reputable dealers, quarantine new fish for 4–6 weeks before adding them to your pond, and never buy a fish just because it is beautiful if it shows any signs of illness.
        </div>

        <div style={{ background: '#062d3a', borderRadius: '14px', padding: '2rem', marginTop: '2rem', textAlign: 'center' }}>
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
        <p>🐟 Pond Pal — Friendly fish care, powered by AI</p>
        <p style={{ marginTop: '1rem', fontSize: '11px', opacity: 0.6 }}>General guidance only. Always consult a vet for health concerns.</p>
      </footer>
    </>
  )
}
