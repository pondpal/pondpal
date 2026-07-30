import Head from 'next/head'
import Link from 'next/link'

const sections = [
  {
    emoji: '💜',
    title: 'Betta fish — stunning, misunderstood, and full of personality',
    content: `Betta fish are among the most beautiful fish in the hobby — flowing fins, vivid colors, and a bold personality that makes them fascinating to watch. They're also one of the most mistreated, largely due to the myth that they can thrive in tiny bowls or vases.\n\nIn the wild, bettas live in shallow rice paddies, ponds, and slow-moving streams in Southeast Asia. These habitats can span huge areas, and while the water is shallow, a betta has access to enormous horizontal space. A small bowl is nothing like their natural environment.\n\nGiven proper care, bettas live 3 to 5 years and can become genuinely interactive pets — recognizing their owners, following fingers across the glass, and even learning simple tricks for food rewards.`
  },
  {
    emoji: '📐',
    title: 'Tank size — bigger than you think',
    content: `The absolute minimum tank size for a single betta is 5 gallons. This is not a recommendation — it is the bare minimum for a healthy betta. Smaller tanks cause chronic stress, temperature instability, and rapid water quality deterioration that shortens lifespan significantly.\n\nThe ideal tank size for a betta is 10 gallons. This provides stable water parameters, room for a proper filter, and enough space for the fish to exhibit natural behaviors including building bubble nests, flaring at his reflection, and exploring his environment.\n\nLong tanks are better than tall tanks for bettas. They are surface breathers and labyrinth fish — they need easy access to the surface to breathe air directly. A tank that is long and wide with moderate depth is ideal.\n\nBettas should be kept alone. Males will fight to the death with other male bettas and will often harass or kill other fish with similar appearances or long flowing fins. Some bettas can coexist peacefully with certain tank mates but this varies enormously by individual temperament.`
  },
  {
    emoji: '🌡️',
    title: 'Temperature and water parameters',
    content: `Bettas are tropical fish and require warm water. Unlike goldfish, they cannot tolerate cold temperatures and will become lethargic, lose color, and develop immune suppression below 76°F.\n\nIdeal temperature: 78 to 80°F. A reliable aquarium heater is essential — not optional — for betta keeping. Small tanks lose heat rapidly, and even a few degrees of fluctuation causes stress.\n\npH: 6.5 to 7.5. Bettas prefer slightly acidic to neutral water, which mirrors their natural habitat in Southeast Asia.\n\nAmmonia and nitrite: 0 ppm at all times. Bettas are sensitive to ammonia and nitrite poisoning.\n\nNitrate: below 20 ppm. High nitrate over time causes fin deterioration and immune suppression. Weekly partial water changes of 25 to 30 percent are recommended.\n\nBettas can breathe air directly through their labyrinth organ, which makes them somewhat more tolerant of low dissolved oxygen than other fish — but this is not a license to keep them in stagnant, oxygen-depleted water.`
  },
  {
    emoji: '🔄',
    title: 'Filtration for bettas',
    content: `Bettas need filtered water but are sensitive to strong current. Their long, flowing fins make swimming against current exhausting, and strong flow causes chronic stress. A gentle filter is essential.\n\nSponge filters are popular for betta tanks because they provide biological filtration with very gentle flow. They're inexpensive, easy to maintain, and betta-friendly. Their bubbling action provides surface agitation without creating a strong current.\n\nHang-on-back filters can work well if adjusted to the lowest flow setting or with a baffle attached to diffuse the output. Look for filters with adjustable flow rates.\n\nInternal filters often create too much current for bettas and are generally not recommended.\n\nA cycled filter is critical. Always establish the nitrogen cycle before adding your betta. The beneficial bacteria in your filter are what convert toxic ammonia into less harmful compounds — without them, even a large tank will accumulate dangerous ammonia quickly.`
  },
  {
    emoji: '🍽️',
    title: 'Feeding bettas',
    content: `Bettas are carnivores. In the wild they eat insects, insect larvae, and small crustaceans. A diet based primarily on plant matter or generic tropical flakes is inadequate and leads to nutritional deficiencies, color fading, and a shortened lifespan.\n\nFeed a quality betta-specific pellet as the staple food. Look for pellets with fish or shrimp as the first ingredient, not fillers like wheat or soy. Hikari Betta Bio-Gold and Fluval Bug Bites Betta Formula are well-regarded options.\n\nFeed small amounts once or twice daily — only what your betta can eat in two to three minutes. Bettas have stomachs roughly the size of their eye, and overfeeding is very common. Uneaten food rapidly degrades water quality in a small tank.\n\nOffer treats a few times weekly: frozen or freeze-dried bloodworms, daphnia, or brine shrimp. These provide variety, enrichment, and nutritional diversity. Live foods are even better if you can source them safely.\n\nFast your betta one day per week. This gives their digestive system a rest and helps prevent constipation, which can trigger swim bladder issues.`
  },
  {
    emoji: '🏥',
    title: 'Common betta health problems',
    content: `Fin rot is extremely common in bettas and almost always caused by poor water quality. The fins appear ragged, frayed, or have dark edges. Improve water conditions immediately and treat with a mild antibacterial product. Severe fin rot requires stronger antibiotics.\n\nVelvet is a parasitic infection that causes a gold or rust-colored dusty appearance on the body, particularly visible under a flashlight. It's highly contagious and requires prompt treatment with a copper-based medication. Keep the tank dark during treatment.\n\nIch (white spot) appears as tiny white dots and is treated the same way as in other fish — with ich medication and slightly elevated temperature.\n\nSwim bladder disorder causes bettas to float at the surface, sink to the bottom, or swim sideways. Fast for 2 to 3 days first — this resolves constipation-related cases. If it persists, offer a blanched, skinned pea. Avoid overfeeding going forward.\n\nPopeye — one or both eyes swelling outward — indicates bacterial infection. Treat with antibiotics and improve water quality. Caught early, it responds well to treatment.\n\nLethargy and color loss without other obvious symptoms are almost always water quality issues. Test your parameters before assuming disease.`
  },
  {
    emoji: '🌿',
    title: 'Tank setup and enrichment',
    content: `Bettas are intelligent fish that benefit from environmental enrichment. A bare tank with no hiding places causes chronic stress.\n\nAdd live or silk plants — bettas love resting on broad leaves near the surface. Java fern, anubias, and floating plants like frogbit or water sprite are excellent choices. Avoid sharp plastic plants that can tear delicate fins.\n\nProvide hiding places — caves, coconut shells, or driftwood give bettas a sense of security. A betta that feels exposed will be chronically stressed.\n\nA tight-fitting lid is essential. Bettas are excellent jumpers and will leap out of open tanks — often fatally. Leave a small gap for air exchange but ensure no betta-sized openings exist.\n\nAvoid mirrors as permanent enrichment. Brief flaring at a mirror provides enrichment for a few minutes but prolonged exposure to their own reflection causes sustained stress.`
  },
]

export default function BettaGuide() {
  return (
    <>
      <Head>
        <title>Betta Fish Care Guide — Pond Pal</title>
        <meta name="description" content="Complete betta fish care guide — tank size, temperature, filtration, feeding, common health problems, and tank setup for happy healthy bettas." />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>

      <div className="tool-hero">
        <h1>Betta Fish Care Guide</h1>
        <p>How to give your betta the tank, water, and care they actually need to thrive</p>
      </div>

      <div style={{ maxWidth: '780px', margin: '0 auto', padding: '3rem 2rem' }}>
        <div style={{ display: 'flex', gap: '8px', marginBottom: '2rem', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '11px', fontWeight: 500, padding: '4px 12px', borderRadius: '20px', background: '#d4f0ec', color: '#0e6b6b' }}>Beginner</span>
          <span style={{ fontSize: '11px', color: '#5a7a82', padding: '4px 0' }}>12 min read</span>
        </div>

        <div style={{ background: '#faeeda', borderRadius: '12px', padding: '1rem 1.25rem', marginBottom: '2rem', fontSize: '14px', color: '#854F0B' }}>
          <strong>Quick reference:</strong> Minimum 5 gallons, ideal 10 gallons. Temperature 78–80°F — a heater is essential. Ammonia and nitrite 0 ppm. Gentle filtration only. Feed betta-specific pellets once or twice daily. Keep alone — no other male bettas.
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
          <p style={{ fontSize: '13px', fontWeight: 500, color: '#1a2e35', marginBottom: '1rem' }}>🛒 Recommended for betta keepers</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
            {[
              { name: 'Hikari Betta Bio-Gold', desc: 'Premium betta-specific pellets', url: 'https://www.amazon.com/dp/B0002APBHO?tag=pondpal20-20' },
              { name: 'API Betta Water Conditioner', desc: 'Designed specifically for betta tanks', url: 'https://www.amazon.com/dp/B001F0QSEA?tag=pondpal20-20' },
              { name: 'API Betta Test Kit', desc: 'Quick test strips for betta tanks', url: 'https://www.amazon.com/dp/B001F0QT1C?tag=pondpal20-20' },
              { name: 'Seachem Prime', desc: 'Best all-round water conditioner', url: 'https://www.amazon.com/dp/B00025694O?tag=pondpal20-20' },
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
          <h3 style={{ color: '#fff', marginBottom: '0.75rem', fontSize: '1.1rem' }}>Check if your betta tank is set up correctly</h3>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', marginBottom: '1.5rem' }}>Use our free tools for instant personalized advice on your betta's setup and water quality.</p>
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
