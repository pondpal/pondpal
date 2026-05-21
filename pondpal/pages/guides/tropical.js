import Head from 'next/head'
import Link from 'next/link'

const sections = [
  {
    emoji: '🌿',
    title: 'The joy of a community tropical tank',
    content: `A well-planned community tropical aquarium is one of the most rewarding setups in the hobby. A school of neon tetras catching the light, a betta flaring at his reflection, corydoras busily scooting across the substrate while angelfish drift serenely through the plants above — it's a living piece of art that changes every time you look at it.\n\nCommunity tanks are also genuinely beginner-friendly when set up correctly. Most popular tropical fish are hardy, forgiving, and readily available. The key is understanding compatibility — which fish can share space peacefully, which water parameters suit everyone, and how to set up the environment so every fish has what it needs.`
  },
  {
    emoji: '📐',
    title: 'Tank size for tropical community fish',
    content: `The old "one inch of fish per gallon" rule is a rough starting guideline but it has real limitations. A 10-inch oscar and ten 1-inch neon tetras are not equivalent in terms of waste production, swimming space, or aggression potential.\n\nFor a beginner community tank, 20 gallons is a reasonable minimum but 29 to 40 gallons gives you dramatically more flexibility with stocking and far more stable water parameters. The larger the tank the more forgiving it is of mistakes — small tanks can crash quickly.\n\nTall tanks suit fish like angelfish that appreciate vertical space. Long tanks suit active swimmers like danios and barbs. For most community setups a standard rectangular tank 30 inches or longer is ideal — it provides horizontal swimming lanes and space to create distinct zones for different species.\n\nAlways think about the adult size of your fish, not the size they are when you buy them. Many popular community fish are sold as juveniles and grow significantly. An angelfish sold at 2 inches will reach 6 inches tall as an adult.`
  },
  {
    emoji: '💧',
    title: 'Water parameters for tropical fish',
    content: `Most popular tropical community fish share broadly similar water requirements which is what makes community tanks work. A temperature of 75 to 80°F suits the majority of common species. pH of 6.8 to 7.6 is acceptable for most community fish. Ammonia and nitrite should always be zero. Nitrate should be kept below 20 ppm with regular water changes.\n\nThat said, some species have more specific needs. Discus require soft, acidic water at 82 to 86°F and pristine water quality — they are not beginner community fish despite their beauty. African cichlids need hard alkaline water incompatible with most tropicals. Goldfish are cold water fish that should never be mixed with tropicals.\n\nFor a beginner community tank, stick to species with similar requirements. Amazon basin fish — tetras, corydoras, angelfish, dwarf gouramis — tend to share compatible parameters and coexist naturally. Southeast Asian fish — danios, rasboras, many barbs — also share compatible water chemistry.\n\nAlways research the specific requirements of any fish before purchasing. A reputable fish store should be able to tell you the water parameters and temperament of any fish they sell.'`
  },
  {
    emoji: '🐠',
    title: 'Popular community fish and their roles',
    content: `A well-planned community tank usually has fish occupying different zones — top, middle, and bottom — which reduces competition and creates visual interest throughout the tank.\n\nSchooling fish for the middle zone: neon tetras and cardinal tetras are classics for good reason — hardy, peaceful, and stunning in groups of 10 or more. Harlequin rasboras are similarly beautiful and easy to keep. Ember tetras are tiny and peaceful. Black skirt tetras and serpae tetras are attractive but can be fin nippers — avoid with long-finned fish.\n\nBottom dwellers: corydoras catfish are the workhorses of the community tank bottom — peaceful, helpful, and fascinating to watch. Keep them in groups of 4 or more. Kuhli loaches are eel-like and hide among plants and substrate. Otocinclus catfish are tiny algae eaters that stay on the glass and plants.\n\nMidwater centerpiece fish: dwarf gouramis (honey gourami, flame gourami) add color and personality. Angelfish are stunning but will eat small tetras once large enough — plan accordingly. Rainbowfish are active and colorful, good for larger community tanks.\n\nSurface dwellers: hatchetfish stay near the surface and add an unusual silhouette. They are excellent jumpers — a tight lid is essential.`
  },
  {
    emoji: '🤝',
    title: 'Compatibility — making it work',
    content: `Compatibility is the most important consideration in a community tank and the area where most beginners make mistakes. A few key rules will save you a lot of heartache.\n\nSize compatibility matters enormously. Any fish large enough to fit another fish in its mouth will eventually eat it. Angelfish, larger cichlids, and big gouramis will eat neon tetras and other small fish. Plan your community around fish of similar sizes or fish large enough that they can't be eaten.\n\nTemperament compatibility is equally important. Aggressive or semi-aggressive fish stress peaceful species even without directly attacking them. Tiger barbs are notorious fin nippers and should not be kept with long-finned fish or slow-moving species. Larger cichlids are territorial and incompatible with peaceful community fish.\n\nNumbers matter for schooling fish. A single neon tetra is a stressed, vulnerable fish. A school of 10 neon tetras is a confident, colorful display. Always keep schooling fish in appropriate groups — the minimum is usually 6, with 10 or more being ideal.\n\nIntroduce new fish gradually and always observe for the first 48 hours. Watch for persistent chasing, fish hiding and refusing to eat, or any physical damage. If one fish is being targeted, it needs to be moved.`
  },
  {
    emoji: '🍽️',
    title: 'Feeding a community tank',
    content: `Feeding a community tank requires some thought because different fish feed at different levels and at different speeds. A single feeding of flake food dropped at the surface may be grabbed entirely by faster, more aggressive fish before bottom dwellers get any.\n\nFeed a quality tropical flake or small pellet as the staple food for midwater fish. Feed in two or three locations around the tank so slower fish get a share. For bottom dwellers like corydoras, add sinking wafers or pellets that reach the substrate — corydoras should not have to compete at the surface for food.\n\nVariety improves health and color. Rotate between flake food, small pellets, freeze-dried bloodworms, brine shrimp, and daphnia. Frozen foods are excellent for community fish and most will eat them enthusiastically.\n\nFeed small amounts twice daily — only what fish consume in about three minutes. Remove any uneaten food after five minutes. Overfeeding is the most common cause of water quality problems in community tanks.`
  },
  {
    emoji: '🏥',
    title: 'Common health issues in community tanks',
    content: `Community tanks can be vectors for disease because many fish from different sources share the same water. A few key practices dramatically reduce health problems.\n\nQuarantine new fish for 2 to 4 weeks in a separate tank before adding them to your community. This prevents introducing disease to your established fish. A simple 10-gallon quarantine tank is one of the best investments a community fish keeper can make.\n\nIch (white spot) is the most common disease in tropical community tanks — small white dots like salt grains on fins and body. Treat promptly with a quality ich medication and slightly elevated temperature. All fish in the tank are exposed and all need treatment.\n\nFin rot appears as ragged, deteriorating fin edges and is almost always caused by poor water quality. Fix the water conditions first, then treat with an antibacterial product if needed.\n\nVelvet is a parasitic infection causing a gold or rust-colored dusty appearance, particularly visible under a flashlight in a darkened room. It spreads rapidly and requires prompt treatment with a copper-based medication.\n\nThe single best disease prevention is stable, high-quality water. Test your water weekly and do regular water changes. Most disease outbreaks in community tanks trace back to a water quality event.`
  },
]

export default function TropicalGuide() {
  return (
    <>
      <Head>
        <title>Community Tropical Tank Guide — Pond Pal</title>
        <meta name="description" content="How to set up and maintain a thriving tropical community aquarium — tank size, compatible fish, water parameters, feeding, and health care for beginners." />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>

      <div className="tool-hero">
        <h1>Community Tropical Tank Guide</h1>
        <p>How to set up a peaceful, thriving tropical aquarium with compatible fish that all get along</p>
      </div>

      <div style={{ maxWidth: '780px', margin: '0 auto', padding: '3rem 2rem' }}>
        <div style={{ display: 'flex', gap: '8px', marginBottom: '2rem', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '11px', fontWeight: 500, padding: '4px 12px', borderRadius: '20px', background: '#d4f0ec', color: '#0e6b6b' }}>Beginner</span>
          <span style={{ fontSize: '11px', color: '#5a7a82', padding: '4px 0' }}>13 min read</span>
        </div>

        <div style={{ background: '#faeeda', borderRadius: '12px', padding: '1rem 1.25rem', marginBottom: '2rem', fontSize: '14px', color: '#854F0B' }}>
          <strong>Quick reference:</strong> 20 gallons minimum, 29–40 gallons ideal. Temperature 75–80°F. pH 6.8–7.6. Ammonia and nitrite 0 ppm. Always keep schooling fish in groups of 6+. Research compatibility before buying any fish.
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
          <p style={{ fontSize: '13px', fontWeight: 500, color: '#1a2e35', marginBottom: '1rem' }}>🛒 Recommended for tropical community tanks</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
            {[
              { name: 'API Master Test Kit', desc: 'Essential water testing for community tanks', url: 'https://www.amazon.com/dp/B000255NCI?tag=pondpal20-20' },
              { name: 'Seachem Prime', desc: 'Best water conditioner for tropical tanks', url: 'https://www.amazon.com/dp/B00025694O?tag=pondpal20-20' },
              { name: 'Hikari Micro Pellets', desc: 'Perfect size for small community fish', url: 'https://www.amazon.com/dp/B0002562OO?tag=pondpal20-20' },
              { name: 'Seachem Stability', desc: 'Cycles new community tanks fast', url: 'https://www.amazon.com/dp/B000255MWM?tag=pondpal20-20' },
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
          <h3 style={{ color: '#fff', marginBottom: '0.75rem', fontSize: '1.1rem' }}>Check if your tank is big enough for your community</h3>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', marginBottom: '1.5rem' }}>Use our free Tank Size Checker for species-specific stocking advice.</p>
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
