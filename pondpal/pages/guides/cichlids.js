import Head from 'next/head'
import Link from 'next/link'

const sections = [
  {
    emoji: '🐟',
    title: 'Cichlids — intelligent, colorful, and challenging',
    content: `Cichlids are one of the most diverse fish families on the planet, with over 1,700 known species found across Africa, Central America, South America, and a few in Asia and Europe. They range from the tiny shell-dwelling Neolamprologus multifasciatus at under 2 inches to the massive Boulengerochromis microlepis approaching 3 feet.\n\nWhat unites cichlids is their intelligence, strong personalities, and often complex social behaviors. They're fascinating fish to keep — they recognize their owners, exhibit sophisticated breeding and parenting behaviors, and interact with their environment in ways that many fish simply don't. They're also frequently aggressive, territorial, and capable of serious damage to tank mates.\n\nSuccessful cichlid keeping requires understanding the specific needs of the group or species you're working with, because different cichlid groups have very different requirements.`
  },
  {
    emoji: '🌍',
    title: 'The main cichlid groups',
    content: `African cichlids from Lake Malawi are the most popular group for home aquariums. Mbuna (rock-dwelling cichlids) are brilliantly colored, active, and highly aggressive. They require hard, alkaline water (pH 7.8 to 8.5) and a specific rockwork setup that creates territories. Popular species include Electric Yellow Labs, Acei, and various Pseudotropheus. They're best kept in species-only or all-Malawi setups with many hiding places.\n\nAfrican cichlids from Lake Tanganyika are equally striking but often smaller and more complex in their social structures. Shell dwellers, Julidochromis, and Frontosa are popular choices. Water chemistry is similar to Malawi — hard and alkaline.\n\nSouth American cichlids are generally more peaceful and include some of the hobby's most beautiful fish. Oscars are large, intelligent, and personable but need big tanks. Discus are stunning but demanding — sensitive fish that require warm, soft, acidic water and pristine conditions. Angelfish are popular community fish though they will eat small fish. Earth-eating cichlids like Geophagus are fascinating and relatively peaceful.\n\nCentral American cichlids tend to be large and aggressive. Convict cichlids are hardy beginners' fish. Firemouths are striking and moderately aggressive. Jack Dempsey and Flowerhorns are beautiful but highly aggressive and need large tanks.`
  },
  {
    emoji: '📐',
    title: 'Tank size requirements',
    content: `Cichlid tank size requirements vary enormously by species but as a general rule, cichlids need more space than their body size suggests. Their territorial nature means they claim and defend areas, and a tank that seems adequate by pure volume can be functionally too small if fish can't establish proper territories.\n\nSmall cichlids (under 4 inches) like shell dwellers and small Tanganyikans: minimum 20 to 30 gallons for a pair or small group.\n\nMedium cichlids (4 to 8 inches) like Mbuna, Angelfish, Firemouths: minimum 55 gallons, 75+ gallons preferred for groups.\n\nLarge cichlids (8 to 12 inches) like Oscars, Severums, large South Americans: minimum 75 gallons for one fish, 125+ gallons for pairs.\n\nVery large cichlids (over 12 inches) like Flowerhorns, large Dovii: 150 gallons and above. These fish are often best kept alone.\n\nOvercrowding African Mbuna is actually a common strategy to spread aggression — so many fish that no one individual gets targeted. This works but requires excellent filtration and regular water changes.`
  },
  {
    emoji: '💧',
    title: 'Water parameters by group',
    content: `Water chemistry for cichlids varies significantly by origin and getting this right is crucial for long-term health and breeding success.\n\nAfrican Rift Lake cichlids (Malawi, Tanganyika, Victoria): hard, alkaline water. pH 7.8 to 8.5, hardness 10 to 20 dGH, temperature 76 to 82°F. These fish evolved in some of the hardest, most alkaline freshwater on earth. Soft or acidic water causes chronic stress and shortened lifespans.\n\nSouth American cichlids: most prefer softer, more acidic water. pH 6.0 to 7.5 for most species, though this varies. Discus require pH 6.0 to 7.0 and very soft water. Oscars are more tolerant and do well in a wider range including neutral to slightly alkaline water. Temperature 76 to 84°F depending on species.\n\nCentral American cichlids: generally adaptable to a moderate range. pH 7.0 to 8.0, moderate hardness, temperature 74 to 80°F.\n\nAmmonia and nitrite: 0 ppm for all cichlids. Nitrate: below 20 ppm ideally, certainly below 40 ppm. Cichlids are somewhat tolerant of elevated nitrate compared to sensitive species but chronic high nitrate still causes long-term harm.`
  },
  {
    emoji: '🏠',
    title: 'Tank setup and aggression management',
    content: `Cichlid tank setup is critical to managing aggression. The physical environment directly influences territorial behavior and can mean the difference between a peaceful community and constant fighting.\n\nFor African Mbuna, create a dense rockwork structure with many caves, crevices, and hiding spots. Every fish needs a potential refuge. Sight lines should be broken so no one fish can see and patrol the entire tank. Use smooth rocks — sharp edges can damage fish during chases.\n\nFor South American cichlids, driftwood, rocks, and plants create territories and refuges. Discus prefer tall tanks with soft lighting, dark substrate, and minimal décor. Angelfish appreciate tall plants and vertical structures.\n\nFor aggressive species, always have a backup plan — a spare tank you can use to separate fish if needed. Even well-researched cichlid setups sometimes produce incompatibilities.\n\nAdding all fish simultaneously rather than sequentially reduces aggression by preventing established fish from claiming territory before newcomers arrive. This is particularly relevant for Mbuna setups.\n\nIf one fish is being persistently targeted, visual barriers — a divider, dense plants, or rearranging the décor — can break the aggressor's line of sight and reset territorial dynamics.`
  },
  {
    emoji: '🍽️',
    title: 'Feeding cichlids',
    content: `Cichlid dietary needs vary by species but most do well on a quality cichlid-specific pellet as a staple food. These are formulated with appropriate protein levels and often include color-enhancing ingredients.\n\nAfrican Mbuna are primarily herbivores in the wild, grazing on algae-covered rocks. Feed them a spirulina-based cichlid food rather than high-protein meat-based pellets, which can cause a dangerous condition called Malawi bloat — a fatal digestive illness linked to high-protein diets in herbivorous cichlids.\n\nMeat-eating cichlids like Oscars, Dovii, and large predatory species need protein-rich food. Quality cichlid pellets, earthworms, crickets, and feeder fish (from a reliable source) are appropriate. Avoid feeder goldfish from pet stores — they carry disease risk.\n\nFeed once or twice daily, only what fish consume in a few minutes. Cichlids are enthusiastic feeders and will always appear hungry — resist overfeeding, as excess food degrades water quality rapidly in cichlid tanks.`
  },
]

export default function CichlidGuide() {
  return (
    <>
      <Head>
        <title>Cichlid Care Guide — Pond Pal</title>
        <meta name="description" content="Complete cichlid care guide — African, South American, and Central American cichlids. Tank size, water parameters, aggression management, and feeding." />
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
          <li><Link href="/search" style={{ fontSize: '18px' }}>🔍</Link></li>
        </ul>
      </nav>

      <div className="tool-hero">
        <h1>Cichlid Care Guide</h1>
        <p>African, South American, and Central American cichlids — what makes each group unique and how to keep them thriving</p>
      </div>

      <div style={{ maxWidth: '780px', margin: '0 auto', padding: '3rem 2rem' }}>
        <div style={{ display: 'flex', gap: '8px', marginBottom: '2rem', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '11px', fontWeight: 500, padding: '4px 12px', borderRadius: '20px', background: '#ffdcc9', color: '#c04a10' }}>Intermediate</span>
          <span style={{ fontSize: '11px', color: '#5a7a82', padding: '4px 0' }}>14 min read</span>
        </div>

        <div style={{ background: '#faeeda', borderRadius: '12px', padding: '1rem 1.25rem', marginBottom: '2rem', fontSize: '14px', color: '#854F0B' }}>
          <strong>Key rule:</strong> Research your specific cichlid species before purchasing — water chemistry, tank size, and aggression management vary enormously between groups. African Rift Lake cichlids need hard alkaline water. Most South Americans prefer soft acidic water. Never mix these groups.
        </div>

        {sections.map((s, i) => (
          <div key={i} style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span>{s.emoji}</span> {s.title}
            </h2>
            {s.content.split('\n\n').map((para, j) => (
              <p key={j} style={{ fontSize: '15px', color: '#2a3f47', lineHeight: '1.8', marginBottom: '1rem' }}>{para}</p>
            ))}
            {i < sections.length - 1 && <hr style={{ border: 'none', borderTop: '1px solid rgba(0,0,0,0.08)', marginTop: '2rem' }} />}
          </div>
        ))}

        <div style={{ background: '#fff', borderRadius: '14px', padding: '1.5rem', border: '1px solid rgba(0,0,0,0.07)', marginBottom: '2rem' }}>
          <p style={{ fontSize: '13px', fontWeight: 500, color: '#1a2e35', marginBottom: '1rem' }}>🛒 Recommended for cichlid keepers</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
            {[
              { name: 'API Master Test Kit', desc: 'Essential water testing', url: 'https://www.amazon.com/dp/B000255NCI?tag=pondpal20-20' },
              { name: 'Hikari Cichlid Gold', desc: 'Premium cichlid pellet food', url: 'https://www.amazon.com/dp/B0002562LG?tag=pondpal20-20' },
              { name: 'Seachem Malawi Buffer', desc: 'Maintains African cichlid pH', url: 'https://www.amazon.com/dp/B000255NCI?tag=pondpal20-20' },
              { name: 'Seachem Prime', desc: 'Essential water conditioner', url: 'https://www.amazon.com/dp/B00025694O?tag=pondpal20-20' },
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

        
        <div style={{ background: '#fff', borderRadius: '14px', padding: '1.5rem', border: '1px solid rgba(0,0,0,0.07)', marginBottom: '2rem' }}>
          <p style={{ fontSize: '13px', fontWeight: 500, color: '#1a2e35', marginBottom: '1rem' }}>🛒 Recommended products for this guide</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
            {[
              { name: 'API Master Test Kit', desc: 'Essential water testing for cichlids', url: 'https://www.amazon.com/dp/B000255NCI?tag=pondpal20-20' },
              { name: 'Hikari Cichlid Gold', desc: 'Premium cichlid pellet food', url: 'https://www.amazon.com/dp/B0002562LG?tag=pondpal20-20' },
              { name: 'Seachem Prime', desc: 'Essential water conditioner', url: 'https://www.amazon.com/dp/B00025694O?tag=pondpal20-20' },
              { name: 'Seachem Stability', desc: 'Establishes beneficial bacteria fast', url: 'https://www.amazon.com/dp/B000255MWM?tag=pondpal20-20' },
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
          <h3 style={{ color: '#fff', marginBottom: '0.75rem', fontSize: '1.1rem' }}>Check your cichlid tank setup</h3>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', marginBottom: '1.5rem' }}>Use our AI tools for instant personalized advice on tank sizing and water chemistry for your cichlids.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/tank-checker" className="btn-primary">Check My Tank</Link>
            <Link href="/water-chemistry" className="btn-outline">Test My Water</Link>
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
