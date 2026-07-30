import Head from 'next/head'
import Link from 'next/link'

const sections = [
  {
    emoji: '🐡',
    title: 'Goldfish — more than a fairground prize',
    content: `Goldfish are one of the most misunderstood fish in the hobby. The image of a goldfish living in a small bowl has done enormous damage — it's one of the most harmful myths in fishkeeping. In reality, goldfish are intelligent, long-lived fish that can reach 10 to 12 inches and live 15 to 20 years when properly cared for.\n\nThey're also genuinely rewarding pets. Goldfish recognize their owners, learn feeding routines, and develop distinct personalities. A well-kept goldfish in a proper tank is a completely different animal from the stunted, short-lived fish most people associate with the species.`
  },
  {
    emoji: '📐',
    title: 'Tank size — the most important decision',
    content: `The number one mistake goldfish keepers make is underestimating how much space goldfish need. Goldfish produce enormous amounts of waste for their size — more than almost any other common aquarium fish — and they grow much larger than most people expect.\n\nFor fancy goldfish (Orandas, Ryukins, Ranchus, and other rounded double-tailed varieties), the guideline is 20 to 30 gallons for the first fish and 10 to 15 gallons for each additional fish. So two fancy goldfish need at minimum a 40-gallon tank.\n\nFor common goldfish and single-tailed varieties like Comets and Shubunkins, the requirements are higher — 30 to 40 gallons for the first fish. These fish can reach 12 inches and really belong in a pond rather than an aquarium long-term.\n\nBowls and small tanks stunt goldfish growth, cause chronic stress, and lead to shortened lifespans. A goldfish in a proper tank will outlive a goldfish in a bowl by a decade or more.`
  },
  {
    emoji: '🔄',
    title: 'Filtration — oversized is always better',
    content: `Goldfish need heavy filtration. Their waste production is exceptional and ammonia spikes are the leading cause of goldfish death in home aquariums. The standard advice for most fish — filter rated for your tank size — is not enough for goldfish. You want a filter rated for two to three times your actual tank volume.\n\nFor a 40-gallon goldfish tank, use a filter rated for 80 to 120 gallons. This sounds excessive but goldfish bioload makes it necessary.\n\nCanister filters are popular for goldfish tanks because of their large media capacity and powerful flow. Hang-on-back filters work well for smaller setups. Sponge filters alone are not sufficient for goldfish — they lack the mechanical filtration needed to keep up with the waste.\n\nAlways cycle your tank before adding goldfish. The nitrogen cycle takes 4 to 8 weeks to establish and skipping this step is the most common cause of new fish death.`
  },
  {
    emoji: '💧',
    title: 'Water parameters for goldfish',
    content: `Goldfish are cold-water fish, not tropical fish. This surprises many beginners who assume all aquarium fish need warm water. Goldfish actually thrive in cooler temperatures and can handle a wide range.\n\nIdeal temperature: 65 to 72°F. Goldfish can tolerate temperatures from 50 to 75°F but do best in the cooler end of that range. They should never be housed with tropical fish that require 78°F and above.\n\npH: 7.0 to 8.0. Goldfish prefer slightly alkaline water and are more tolerant of pH fluctuations than many other fish.\n\nAmmonia and nitrite: 0 ppm at all times. These parameters are toxic at any detectable level.\n\nNitrate: below 20 ppm ideally, certainly below 40 ppm. Goldfish are sensitive to high nitrate over time — it suppresses immune function and causes fin damage. Regular water changes are essential.\n\nGoldfish do not need a heater in most home environments but may benefit from one in very cold climates to prevent temperatures dropping below 50°F.`
  },
  {
    emoji: '🍽️',
    title: 'Feeding goldfish correctly',
    content: `Goldfish are opportunistic feeders with no natural off switch — they will eat continuously if given the chance. Overfeeding is extremely common and causes serious problems including swim bladder issues, obesity, and water quality crashes from excess waste.\n\nFeed small amounts once or twice daily — only what your fish can consume in two to three minutes. Remove any uneaten food immediately.\n\nGoldfish do well on a varied diet. A quality sinking or floating pellet designed for goldfish should be the staple. Sinking pellets are preferred by many keepers as goldfish gulping food at the surface can cause them to swallow air, contributing to swim bladder problems.\n\nGood occasional treats include blanched peas (with the skin removed — excellent for digestive health), blanched zucchini, bloodworms, and daphnia. Never feed bread, crackers, or processed human food.\n\nGoldfish don't need the seasonal feeding adjustments that koi do, but their appetite will naturally decrease in cooler temperatures. Below 50°F, reduce feeding significantly.`
  },
  {
    emoji: '🏥',
    title: 'Common goldfish health issues',
    content: `Swim bladder disorder is extremely common in fancy goldfish due to their compressed body shape. Symptoms include floating, sinking, or swimming sideways. The most common cause is constipation — fasting for 2 to 3 days followed by offering a blanched, skinned pea often resolves it. Avoid feeding for extended periods and consider switching to sinking pellets to prevent air ingestion.\n\nIch (white spot) presents as small white dots resembling salt grains. Treat with a quality ich medication and raise the temperature slightly to 75°F to speed up the parasite's life cycle.\n\nFin rot appears as ragged, disintegrating fin edges and is almost always caused by poor water quality. Improve your water conditions first, then treat with an antibacterial product if needed.\n\nDropsy — bloating with raised scales like a pinecone — indicates serious internal infection and has a poor prognosis. Isolate the fish and treat with antibiotics immediately.\n\nFlukes are common invisible parasites that cause flashing, excess mucus, and respiratory distress. Praziquantel is the most effective treatment.`
  },
  {
    emoji: '🐟',
    title: 'Fancy vs single-tailed goldfish',
    content: `Understanding the difference between fancy and single-tailed goldfish helps you make better decisions about tank mates, tank size, and care.\n\nFancy goldfish include Orandas, Ryukins, Ranchus, Telescopes, Bubble Eyes, and other rounded double-tailed varieties. They are slower swimmers due to their compact body shape and are best kept with other fancy varieties of similar size and swimming ability. They struggle to compete with faster fish for food.\n\nSingle-tailed goldfish include Commons, Comets, and Shubunkins — the more streamlined, faster-swimming varieties. These grow larger, are hardier, and are better suited to pond life. They can bully or outcompete fancy varieties in a mixed tank.\n\nMixing fancy and single-tailed goldfish is generally not recommended. The slower fancies will consistently lose out at feeding time and may be harassed by the faster fish.`
  },
]

export default function GoldfishGuide() {
  return (
    <>
      <Head>
        <title>Goldfish Care Guide — Pond Pal</title>
        <meta name="description" content="Complete goldfish care guide — tank size, filtration, water parameters, feeding, health issues, and the difference between fancy and single-tailed varieties." />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>

      <div className="tool-hero">
        <h1>Goldfish Care Guide</h1>
        <p>The truth about goldfish — and how to give them the long, healthy life they deserve</p>
      </div>

      <div style={{ maxWidth: '780px', margin: '0 auto', padding: '3rem 2rem' }}>
        <div style={{ display: 'flex', gap: '8px', marginBottom: '2rem', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '11px', fontWeight: 500, padding: '4px 12px', borderRadius: '20px', background: '#d4f0ec', color: '#0e6b6b' }}>Beginner</span>
          <span style={{ fontSize: '11px', color: '#5a7a82', padding: '4px 0' }}>12 min read</span>
        </div>

        <div style={{ background: '#faeeda', borderRadius: '12px', padding: '1rem 1.25rem', marginBottom: '2rem', fontSize: '14px', color: '#854F0B' }}>
          <strong>Quick reference:</strong> Fancy goldfish need 20–30 gallons each, single-tailed 30–40 gallons. Temperature 65–72°F. Ammonia and nitrite 0 ppm. Filter rated for 2–3x your tank volume. Feed once or twice daily, small amounts only.
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
          <p style={{ fontSize: '13px', fontWeight: 500, color: '#1a2e35', marginBottom: '1rem' }}>🛒 Recommended for goldfish keepers</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
            {[
              { name: 'API Master Test Kit', desc: 'Essential water testing for goldfish', url: 'https://www.amazon.com/dp/B000255NCI?tag=pondpal20-20' },
              { name: 'Seachem Prime', desc: 'Best water conditioner for goldfish', url: 'https://www.amazon.com/dp/B00025694O?tag=pondpal20-20' },
              { name: 'Hikari Oranda Gold Food', desc: 'Premium food for fancy goldfish', url: 'https://www.amazon.com/dp/B0002562V2?tag=pondpal20-20' },
              { name: 'API Stress Coat', desc: 'Protects slime coat during water changes', url: 'https://www.amazon.com/dp/B0002APNI8?tag=pondpal20-20' },
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
          <h3 style={{ color: '#fff', marginBottom: '0.75rem', fontSize: '1.1rem' }}>Check if your goldfish tank is the right size</h3>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', marginBottom: '1.5rem' }}>Use our free Tank Size Checker — select Goldfish and enter your details for an instant AI analysis.</p>
          <Link href="/tank-checker" className="btn-primary">Check My Tank Free</Link>
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
