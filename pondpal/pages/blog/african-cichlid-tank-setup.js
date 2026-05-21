import Head from 'next/head'
import Link from 'next/link'

export default function AfricanCichlidSetup() {
  return (
    <>
      <Head>
        <title>African Cichlid Tank Setup Guide — Pond Pal</title>
        <meta name="description" content="How to set up an African cichlid tank — tank size, water chemistry, rockwork, stocking, filtration, and managing aggression in Malawi and Tanganyika cichlid tanks." />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>

      <div className="tool-hero">
        <h1>African Cichlid Tank Setup Guide</h1>
        <p>Everything you need to set up a thriving Malawi or Tanganyika cichlid tank</p>
      </div>

      <div style={{ maxWidth: '780px', margin: '0 auto', padding: '3rem 2rem' }}>

        <div style={{ display: 'flex', gap: '8px', marginBottom: '2rem', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '11px', fontWeight: 500, padding: '4px 12px', borderRadius: '20px', background: '#ffdcc9', color: '#c04a10' }}>Intermediate</span>
          <span style={{ fontSize: '11px', color: '#5a7a82', padding: '4px 0' }}>May 2026</span>
          <span style={{ fontSize: '11px', color: '#5a7a82', padding: '4px 0' }}>11 min read</span>
        </div>

        <div style={{ background: '#faeeda', borderRadius: '12px', padding: '1rem 1.25rem', marginBottom: '2rem', fontSize: '14px', color: '#854F0B' }}>
          <strong>Key requirements:</strong> 55 gallons minimum. Hard alkaline water pH 7.8–8.5. Heavy rockwork with many caves. Dense stocking to spread aggression. Strong filtration rated for 2–3x tank volume.
        </div>

        {[
          {
            heading: null,
            text: `African cichlids from the Great Rift Lakes — primarily Lake Malawi, Lake Tanganyika, and Lake Victoria — are some of the most spectacular freshwater fish available to hobbyists. Their colors rival many saltwater fish, they're intelligent and interactive, and a well-set-up African cichlid tank is genuinely one of the most eye-catching displays in the hobby.\n\nThey're also among the more demanding freshwater fish to keep successfully. Aggression management, water chemistry, and proper tank setup are all critical in a way that doesn't apply to community tropicals. But get it right and you'll have a tank that draws everyone's attention.`
          },
          {
            heading: 'Choosing your cichlids — Malawi vs Tanganyika',
            text: `Lake Malawi is home to the Mbuna — brightly colored, highly active, rock-dwelling cichlids that are the most popular African cichlids in the hobby. Mbuna include species like Yellow Labs (Labidochromis caeruleus), Acei, various Pseudotropheus and Metriaclima species, and many others. They are boisterous, colorful, and best suited to a dedicated Mbuna setup.\n\nLake Malawi also has non-Mbuna haplochromines (often called "haps") — larger, more open-water fish including Peacock cichlids. Peacocks are less aggressive than Mbuna and can sometimes be mixed with Mbuna in larger tanks, though care is needed.\n\nLake Tanganyika offers a completely different experience. Tanganyikan cichlids include the fascinating shell dwellers (tiny cichlids that live in empty snail shells), Julidochromis (torpedo-shaped, relatively peaceful), Frontosa (large, majestic, deep-water fish), and many others. Tanganyikans generally require more specific setups and more careful research for each species.\n\nFor beginners to African cichlids, a Malawi Mbuna tank is the most forgiving starting point — the species are hardy, widely available, and the setup approach is well-documented.`
          },
          {
            heading: 'Tank size — bigger is genuinely better',
            text: `The minimum tank for a Mbuna cichlid setup is 55 gallons, and this is truly a minimum. A 75-gallon tank is a much better starting point and will give you significantly more flexibility with stocking and aggression management.\n\nLarger tanks work better for African cichlids for two reasons. First, more volume means more stable water chemistry, and Malawi cichlids are sensitive to water parameter fluctuations. Second, and more importantly for Mbuna, more space means more territories and more places for subordinate fish to escape dominant fish.\n\nA long tank is better than a tall tank for the same volume. Mbuna are active swimmers that patrol horizontally. A 75-gallon tank that is 48 inches long is more useful than one that is 36 inches long and taller.\n\nDo not attempt a Mbuna setup in less than 55 gallons. The aggression dynamics in an undersized tank will result in constant fighting and fish deaths.`
          },
          {
            heading: 'Water chemistry for African cichlids',
            text: `African Rift Lake cichlids evolved in some of the most chemically stable water on Earth. The Great Rift Lakes have very specific, consistent water chemistry that these fish are adapted to — and they need you to replicate it.\n\npH: 7.8 to 8.5 for Malawi species, 7.8 to 9.0 for some Tanganyikans. This is significantly higher than most freshwater fish requirements. Soft or acidic water stresses African cichlids chronically and shortens their lives.\n\nHardness: high general hardness (GH) and carbonate hardness (KH) are essential. KH above 10 dKH buffers your pH and prevents dangerous crashes. GH above 10 dGH provides the minerals these fish need.\n\nTemperature: 76 to 82°F for most Malawi species.\n\nIf your tap water is soft and acidic, you'll need to modify it. Crushed coral or aragonite substrate raises and buffers pH naturally over time. Seachem Malawi Buffer and Tanganyika Buffer are purpose-made products for replicating Rift Lake chemistry. Regular water changes with properly prepared water are essential — don't try to chemically adjust your existing tank water without understanding what you're doing.\n\nNever mix African cichlids with fish requiring soft acidic water like discus, most tetras, or South American cichlids. The water requirements are incompatible.`
          },
          {
            heading: 'Rockwork — the most important part of the setup',
            text: `For Mbuna cichlids, the rockwork is arguably more important than almost anything else in the setup. Mbuna are rock-dwelling fish — in the wild they live among the rocky shorelines of Lake Malawi, defending territories among crevices and caves.\n\nYour rockwork needs to accomplish several things. It must create many individual caves and territories — ideally more territories than you have fish so subordinate fish always have somewhere to retreat. It must break line of sight so dominant fish cannot patrol the entire tank. And it must be stable — stacked rocks must not be able to fall and injure fish or crack the glass.\n\nStack rocks from the bottom of the tank up, building cave structures that reach toward the upper half of the tank. Use flat rocks for shelves and overhangs. The more complex and three-dimensional your rockwork, the better. A tank that looks almost overstuffed with rocks is usually better for Mbuna than one that looks artfully minimalist.\n\nSilicone rocks together or use egg crate under your substrate to support heavy rock structures. African cichlids are diggers and will excavate under rocks given the chance.\n\nGood rock choices include Texas holey rock, slate, lace rock, and limestone. Avoid rocks that will lower pH like driftwood or peat.`
          },
          {
            heading: 'Stocking strategy — counterintuitive but essential',
            text: `The stocking strategy for Mbuna cichlids is one of the most counterintuitive aspects of the hobby. For most fish, the advice is to stock lightly. For Mbuna, overstocking — keeping more fish than you might expect — is often the correct approach.\n\nHere is why: in a lightly stocked Mbuna tank, the dominant male will focus his aggression on one or two subordinate fish relentlessly, often killing them. In a densely stocked tank, the aggression is spread across many fish and no single individual takes the full brunt of it.\n\nFor a 55-gallon Mbuna tank, 20 to 25 fish is not unusual. For a 75-gallon tank, 30 or more fish of appropriate size can work well. This requires excellent filtration and regular water changes to manage the waste load.\n\nStocking with multiple species but keeping only one or two males per species reduces interspecies aggression. All-male tanks are popular for their color display. Harems — one male to multiple females of the same species — work well for breeding setups.\n\nAvoid species that look very similar — similar colors and patterns often trigger more aggression between species than very different-looking fish.`
          },
          {
            heading: 'Filtration for African cichlids',
            text: `The high stocking density needed for aggression management means African cichlid tanks generate a very high bioload. Your filtration must be able to handle it.\n\nFor a 55-gallon Mbuna tank, use a filter rated for 110 to 165 gallons minimum. Many experienced Mbuna keepers run two separate filters — this provides redundancy and doubles biological filtration capacity. If one filter fails, the other keeps the cycle alive while you address the problem.\n\nCanister filters are excellent for African cichlid tanks due to their large media volume and strong flow. The Fluval 307 or 407 are popular choices. Hang-on-back filters can supplement but generally shouldn't be the sole filtration for a densely stocked cichlid tank.\n\nStrong water movement also benefits Malawi cichlids — they're accustomed to the wave-stirred, well-oxygenated waters of the lake. Point your filter output to create good circulation throughout the tank.`
          },
        ].map((s, i) => (
          <div key={i} style={{ marginBottom: '2rem' }}>
            {s.heading && <h2 style={{ fontSize: '1.3rem', marginBottom: '0.875rem', color: '#062d3a' }}>{s.heading}</h2>}
            {s.text.split('\n\n').map((para, j) => (
              <p key={j} style={{ fontSize: '15px', color: '#2a3f47', lineHeight: '1.85', marginBottom: '1rem' }}>{para}</p>
            ))}
            {i === 3 && (
              <div style={{ background: '#f0faf8', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1rem 0', border: '1px solid rgba(26,158,142,0.2)' }}>
                <p style={{ fontSize: '14px', color: '#0e6b6b', fontWeight: 500, marginBottom: '0.5rem' }}>🧪 Check your African cichlid water parameters</p>
                <p style={{ fontSize: '13px', color: '#2a3f47', marginBottom: '0.75rem' }}>Enter your pH, KH, and GH readings for an instant AI diagnosis tailored to African cichlids.</p>
                <Link href="/water-chemistry" className="btn-primary" style={{ fontSize: '13px', padding: '8px 18px' }}>Test My Water Free</Link>
              </div>
            )}
          </div>
        ))}

        <div style={{ background: '#fff', borderRadius: '14px', padding: '1.5rem', border: '1px solid rgba(0,0,0,0.07)', marginBottom: '2rem' }}>
          <p style={{ fontSize: '14px', fontWeight: 500, color: '#1a2e35', marginBottom: '1rem' }}>🛒 Recommended for African cichlid setups</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
            {[
              { name: 'API Master Test Kit', desc: 'Essential water testing', url: 'https://www.amazon.com/dp/B000255NCI?tag=pondpal20-20' },
              { name: 'Hikari Cichlid Gold', desc: 'Premium cichlid pellet food', url: 'https://www.amazon.com/dp/B0002562LG?tag=pondpal20-20' },
              { name: 'Seachem Prime', desc: 'Essential water conditioner', url: 'https://www.amazon.com/dp/B00025694O?tag=pondpal20-20' },
              { name: 'Seachem Stability', desc: 'Establishes bacterial cycle fast', url: 'https://www.amazon.com/dp/B000255MWM?tag=pondpal20-20' },
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
          <h3 style={{ color: '#fff', marginBottom: '0.75rem', fontSize: '1.1rem' }}>Read our full cichlid care guide</h3>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', marginBottom: '1.5rem' }}>Covers all cichlid groups — African, South American, and Central American — with water requirements and tank setup for each.</p>
          <Link href="/guides/cichlids" className="btn-primary">Read the Cichlid Guide</Link>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <Link href="/blog/what-fish-can-live-with-bettas" style={{ color: '#1a9e8e', fontSize: '14px' }}>← What fish can live with bettas?</Link>
          <Link href="/blog" style={{ color: '#1a9e8e', fontSize: '14px' }}>Back to blog →</Link>
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
