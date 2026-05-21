import Head from 'next/head'
import Link from 'next/link'

export default function BettaTankMates() {
  return (
    <>
      <Head>
        <title>What Fish Can Live With Bettas? Tank Mate Guide — Pond Pal</title>
        <meta name="description" content="Which fish can safely live with bettas and which will cause problems. A complete betta tank mate guide with safe options and fish to always avoid." />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>

      <div className="tool-hero">
        <h1>What Fish Can Live With Bettas?</h1>
        <p>Safe tank mates, fish to avoid, and how to tell if your betta will tolerate company</p>
      </div>

      <div style={{ maxWidth: '780px', margin: '0 auto', padding: '3rem 2rem' }}>

        <div style={{ display: 'flex', gap: '8px', marginBottom: '2rem', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '11px', fontWeight: 500, padding: '4px 12px', borderRadius: '20px', background: '#e8e4f8', color: '#4a3d8f' }}>Betta</span>
          <span style={{ fontSize: '11px', color: '#5a7a82', padding: '4px 0' }}>May 2026</span>
          <span style={{ fontSize: '11px', color: '#5a7a82', padding: '4px 0' }}>9 min read</span>
        </div>

        <div style={{ background: '#faeeda', borderRadius: '12px', padding: '1rem 1.25rem', marginBottom: '2rem', fontSize: '14px', color: '#854F0B' }}>
          <strong>Important:</strong> Betta compatibility is highly individual. Two bettas of the same temperament can have completely different reactions to tank mates. Always have a backup plan — a spare tank or divider — before adding any fish with a betta.
        </div>

        {[
          {
            heading: null,
            text: `Bettas have a reputation as aggressive, solitary fish that can't live with anything. The reality is more nuanced. Some bettas are genuinely peaceful and coexist happily with carefully chosen tank mates. Others will attack and kill anything they share water with. You don't always know which type you have until you try.\n\nWhat you can control is giving the attempt the best possible chance of success — choosing the right tank mates, having an adequate tank size, setting up the environment correctly, and watching carefully for signs of aggression.`
          },
          {
            heading: 'The golden rules of betta tank mates',
            text: `Before we get into specific species, here are the principles that apply to any betta tank mate situation.\n\nTank size matters enormously. A 5-gallon tank is too small for a betta and tank mates. The minimum for a betta community setup is 10 gallons — 20 gallons gives everyone genuine space and dramatically reduces aggression.\n\nAvoid fish that look like bettas. Long flowing fins, bright colors, and a similar body shape trigger aggression in male bettas. Guppies are a classic example — their flowing tails look enough like a rival betta that many bettas will attack them relentlessly.\n\nAvoid fin nippers. Tiger barbs, serpae tetras, and many other active fish will nip at betta fins, causing stress and fin damage. A betta with ragged fins from nipping is miserable.\n\nIntroduce tank mates before the betta when possible. A betta that has already established territory will defend it aggressively against newcomers. Adding the betta last to a tank that already has other fish changes the dynamic.\n\nAlways watch closely for 48 hours after introducing any new fish. If you see persistent chasing, flaring, or any fish hiding constantly and refusing to eat, separation is needed.`
          },
          {
            heading: '✅ Good betta tank mates',
            text: `Corydoras catfish are one of the most reliably compatible tank mates for bettas. They are peaceful bottom dwellers that mind their own business, stay out of the betta's territory near the surface, and don't have the flowing fins or bright colors that trigger aggression. Keep them in groups of 4 or more — they are social fish and do poorly alone. Pygmy corydoras are particularly good for smaller tanks.\n\nNerite snails and mystery snails are excellent companions. They eat algae, clean up leftover food, and are essentially invisible to bettas. Some bettas will occasionally peck at snail antennae but this rarely causes lasting harm. Snails are genuinely low-risk tank mates.\n\nAmano shrimp and ghost shrimp can work in larger tanks with calmer bettas, though some bettas will hunt and eat shrimp. Cherry shrimp are brightly colored and more likely to attract attention. If you want shrimp with a betta, start with a few inexpensive ghost shrimp to test your betta's reaction before investing in pricier species.\n\nKuhli loaches are another good bottom-dwelling option. They're peaceful, hide among plants and substrate, and occupy a completely different part of the tank from the betta. Their eel-like appearance is unusual enough that bettas generally don't register them as competitors.\n\nOtocinclus catfish (otos) are tiny algae-eating fish that stay near the glass and plants. Very peaceful and generally ignored by bettas. They need a mature tank with established algae growth and prefer groups of 4 or more.`
          },
          {
            heading: '⚠️ Proceed with caution',
            text: `Neon tetras and other small tetras can work with calm bettas in larger tanks, but they are fast-moving and their iridescent coloring can attract attention from more aggressive bettas. The risk is manageable in a 20-gallon planted tank with a relaxed betta, but not recommended for beginners or in smaller setups.\n\nDwarf gouramis are sometimes suggested as betta companions but this is generally a bad idea. Gouramis are labyrinth fish like bettas — they breathe air, look somewhat similar, and often trigger serious aggression. Occasional successes are reported but the risk of a serious fight is high.\n\nRasboras — especially harlequin rasboras — can work in a peaceful betta's tank. They are schooling fish that move quickly and don't have flowing fins. A school of 6 or more harlequins in a 15-20 gallon planted tank with a calm betta often works well.\n\nPlaties and mollies are sometimes kept with bettas. They are robust enough to handle some harassment and peaceful enough not to provoke. Male platies can occasionally be mistaken for rivals due to their color, but females are less likely to cause issues.`
          },
          {
            heading: '❌ Fish to never put with bettas',
            text: `Other male bettas — this needs no explanation. Two male bettas in the same tank will fight until one is dead or severely injured. No exceptions.\n\nGuppies are the most common mistake beginners make. Their flowing, colorful tails look almost identical to a rival betta to the betta's eyes. Most bettas will relentlessly attack guppies. The occasional report of successful cohabitation is the exception, not the rule.\n\nTiger barbs are notorious fin nippers and will shred a betta's fins within hours. Avoid entirely.\n\nAny cichlid — cichlids are aggressive fish that will hold their own against a betta and potentially kill it, or stress it severely through territorial behavior.\n\nGoldfish are a bad pairing for a completely different reason — they are cold water fish that thrive at 65–72°F while bettas need 78–80°F. Even if they don't fight, one of them will always be living at the wrong temperature.\n\nAngel fish will likely eat bettas. Their size and semi-aggressive nature makes them incompatible with bettas in most setups.`
          },
          {
            heading: 'What if your betta is aggressive to everything?',
            text: `Some bettas simply will not tolerate any tank mates, and that is completely fine. A betta that lives alone in a well-set-up 10-gallon tank with plants, hiding spots, and good water quality is a happy fish. The goal is a thriving betta, not a community tank.\n\nIf you've tried appropriate tank mates and your betta attacked them, remove the other fish and don't try again. Chronic stress from an aggressive encounter shortens the betta's lifespan and reduces their quality of life.\n\nA solo betta can still have a rich environment. Add live or silk plants for resting spots, a leaf hammock near the surface where bettas love to rest, caves and hiding places for security, and gentle surface movement. A betta with interesting surroundings will be more behaviorally active and visibly happier than one in a bare tank.`
          },
        ].map((s, i) => (
          <div key={i} style={{ marginBottom: '2rem' }}>
            {s.heading && <h2 style={{ fontSize: '1.3rem', marginBottom: '0.875rem', color: '#062d3a' }}>{s.heading}</h2>}
            {s.text.split('\n\n').map((para, j) => (
              <p key={j} style={{ fontSize: '15px', color: '#2a3f47', lineHeight: '1.85', marginBottom: '1rem' }}>{para}</p>
            ))}
            {i === 2 && (
              <div style={{ background: '#f0faf8', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1rem 0', border: '1px solid rgba(26,158,142,0.2)' }}>
                <p style={{ fontSize: '14px', color: '#0e6b6b', fontWeight: 500, marginBottom: '0.5rem' }}>🏠 Is your tank big enough for a betta community?</p>
                <p style={{ fontSize: '13px', color: '#2a3f47', marginBottom: '0.75rem' }}>Check your setup with our Tank Size Checker — select Betta for species-specific advice.</p>
                <Link href="/tank-checker" className="btn-primary" style={{ fontSize: '13px', padding: '8px 18px' }}>Check My Tank Free</Link>
              </div>
            )}
          </div>
        ))}

        <div style={{ background: '#fff', borderRadius: '14px', padding: '1.5rem', border: '1px solid rgba(0,0,0,0.07)', marginBottom: '2rem' }}>
          <p style={{ fontSize: '14px', fontWeight: 500, color: '#1a2e35', marginBottom: '1rem' }}>🛒 Recommended for betta keepers</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
            {[
              { name: 'Hikari Betta Bio-Gold', desc: 'Premium betta-specific pellet food', url: 'https://www.amazon.com/dp/B0002APBHO?tag=pondpal20-20' },
              { name: 'Seachem Prime', desc: 'Essential water conditioner', url: 'https://www.amazon.com/dp/B00025694O?tag=pondpal20-20' },
              { name: 'API Master Test Kit', desc: 'Monitor water quality', url: 'https://www.amazon.com/dp/B000255NCI?tag=pondpal20-20' },
              { name: 'Seachem Stability', desc: 'Cycles new tanks safely', url: 'https://www.amazon.com/dp/B000255MWM?tag=pondpal20-20' },
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
          <h3 style={{ color: '#fff', marginBottom: '0.75rem', fontSize: '1.1rem' }}>Want our full betta care guide?</h3>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', marginBottom: '1.5rem' }}>Everything about betta tank size, temperature, feeding, and health in one place.</p>
          <Link href="/guides/betta" className="btn-primary">Read the Betta Care Guide</Link>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <Link href="/blog/how-to-cycle-fish-tank" style={{ color: '#1a9e8e', fontSize: '14px' }}>← How to cycle a fish tank</Link>
          <Link href="/blog/african-cichlid-tank-setup" style={{ color: '#1a9e8e', fontSize: '14px' }}>Next: African cichlid tank setup →</Link>
        </div>
      </div>

      <footer className="footer">
        <p>🐟 Pond Pal — Friendly fish & aquarium care, powered by AI</p>
        <p style={{ marginTop: '0.75rem' }}>
          <Link href="/tank-checker" style={{ color: 'rgba(255,255,255,0.6)' }}>Tank Checker</Link>{' · '}
          <Link href="/water-chemistry" style={{ color: 'rgba(255,255,255,0.6)' }}>Water Testing</Link>{' · '}
          <Link href="/care-guides" style={{ color: 'rgba(255,255,255,0.6)' }}>Care Guides</Link>{' · '}
          <Link href="/blog" style={{ color: 'rgba(255,255,255,0.6)' }}>Blog</Link>{' · '}
          <Link href="/faq" style={{ color: 'rgba(255,255,255,0.6)' }}>FAQ</Link>
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
