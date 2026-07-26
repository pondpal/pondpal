import Head from 'next/head'
import Link from 'next/link'

export default function HowOftenWaterChanges() {
  return (
    <>
      <Head>
        <title>How Often Should You Do Water Changes? — Pond Pal</title>
        <meta name="description" content="How often to change water in a fish tank or pond, how much to change each time, and the signs that tell you when to change water more often." />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>

      <div className="tool-hero">
        <h1>How Often Should You Do Water Changes?</h1>
        <p>The real answer depends on your setup — here's how to figure out yours</p>
      </div>

      <div style={{ maxWidth: '780px', margin: '0 auto', padding: '3rem 2rem' }}>

        <div style={{ display: 'flex', gap: '8px', marginBottom: '2rem', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '11px', fontWeight: 500, padding: '4px 12px', borderRadius: '20px', background: '#FCEBEB', color: '#A32D2D' }}>Water Quality</span>
          <span style={{ fontSize: '11px', color: '#5a7a82', padding: '4px 0' }}>July 2026</span>
          <span style={{ fontSize: '11px', color: '#5a7a82', padding: '4px 0' }}>9 min read</span>
        </div>

        {[
          {
            heading: null,
            text: `Every fish keeper eventually asks the same question: how often should I actually be changing water? The honest answer is "it depends" — but that's not very useful on its own, so this guide breaks down exactly what it depends on and gives you a starting point you can adjust from.\n\nGood filtration removes ammonia and nitrite, but it does not remove nitrate, dissolved organic waste, or the trace hormones and pheromones fish release. Water changes are the only reliable way to reset those — no filter, however expensive, replaces them entirely.`
          },
          {
            heading: 'A reasonable starting point',
            text: `For a typical freshwater aquarium: 10–20% weekly, or 20–25% every two weeks if you're lightly stocked and well filtered. For a koi or goldfish pond: 10–20% weekly during the growing season (spring through fall), reduced in winter when fish are dormant and producing far less waste. These are starting points, not rules — the sections below explain how to adjust from there.`
          },
          {
            heading: 'What increases how often you need to change water',
            text: `Heavier stocking means more waste per gallon, which means nitrate builds up faster and needs diluting more often. Goldfish and koi in particular produce far more waste than their size suggests — they're notoriously "dirty" fish.\n\nUnderpowered or minimal filtration means more work falls on water changes to keep parameters stable. A tank running on a small internal filter needs more frequent changes than one with an oversized canister filter.\n\nOverfeeding adds waste directly, whether or not fish eat it all. If you're feeding more than fish need, you're effectively adding extra nitrate load on top of normal bioload.\n\nFew or no live plants means less natural nitrate uptake. A heavily planted tank can sometimes go longer between changes because plants are consuming some of the nitrate themselves.`
          },
          {
            heading: 'Signs you need to change water more often',
            text: `Nitrate testing above 40 ppm in a general community tank, or above 20 ppm for more sensitive species, is the clearest signal — test weekly and let the numbers tell you, rather than guessing on a fixed schedule.\n\nAlgae blooms that keep returning shortly after cleaning often point to excess nutrients being under-diluted between changes.\n\nA subtle yellow tint to the water, especially noticeable against a white background, indicates dissolved organic compounds building up — more common in tanks that go a long time between changes.\n\nFish that seem listless or less active than usual, with all other parameters testing normal, can sometimes be responding to accumulated dissolved waste that basic test kits don't measure directly.`
          },
          {
            heading: 'How to do a water change safely',
            text: `Always treat new water with a dechlorinator before or immediately as it goes in — tap water chlorine and chloramine are harmful to both fish and your beneficial filter bacteria. Seachem Prime is the standard choice because it neutralizes both.\n\nMatch temperature as closely as you can. A sudden temperature swing of more than a few degrees can stress fish even if the water itself is otherwise fine.\n\nDon't change more than 25–30% at once in a normal maintenance change (emergency ammonia/nitrite situations are the exception — see our ammonia spike guide). A large single change can shift pH and hardness abruptly, which is its own source of stress.\n\nVacuum the substrate as you go if you have one — a gravel vacuum lets you remove built-up debris and drain old water in the same step.`
          },
          {
            heading: 'Common water change mistakes',
            text: `Forgetting dechlorinator is the single most common — and most damaging — mistake. Untreated tap water can burn gills and wipe out filter bacteria within hours.\n\nChanging too much water at once "to catch up" after neglecting maintenance is tempting but risky — do a moderate change now and a follow-up change a few days later instead of one huge one.\n\nCleaning filter media in tap water during the same session kills off beneficial bacteria along with any debris — always rinse filter media in removed tank or pond water instead.\n\nSkipping water changes because nitrate "looks fine" ignores that nitrate is only one of several things water changes address — dissolved organics and trace compounds build up even when nitrate stays low.`
          },
        ].map((s, i) => (
          <div key={i} style={{ marginBottom: '2rem' }}>
            {s.heading && <h2 style={{ fontSize: '1.3rem', marginBottom: '0.875rem', color: '#062d3a' }}>{s.heading}</h2>}
            {s.text.split('\n\n').map((para, j) => (
              <p key={j} style={{ fontSize: '15px', color: '#2a3f47', lineHeight: '1.85', marginBottom: '1rem' }}>{para}</p>
            ))}
            {i === 3 && (
              <div style={{ background: '#f0faf8', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1rem 0', border: '1px solid rgba(26,158,142,0.2)' }}>
                <p style={{ fontSize: '14px', color: '#0e6b6b', fontWeight: 500, marginBottom: '0.5rem' }}>🧪 Not sure where your water actually stands?</p>
                <p style={{ fontSize: '13px', color: '#2a3f47', marginBottom: '0.75rem' }}>Enter your test readings for an instant AI diagnosis and a specific plan.</p>
                <Link href="/water-chemistry" className="btn-primary" style={{ fontSize: '13px', padding: '8px 18px' }}>Test My Water Free</Link>
              </div>
            )}
          </div>
        ))}

        <div style={{ background: '#fff', borderRadius: '14px', padding: '1.5rem', border: '1px solid rgba(0,0,0,0.07)', marginBottom: '2rem' }}>
          <p style={{ fontSize: '14px', fontWeight: 500, color: '#1a2e35', marginBottom: '1rem' }}>🛒 Essentials for regular water changes</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
            {[
              { name: 'Seachem Prime', desc: 'Dechlorinates and detoxifies ammonia', url: 'https://www.amazon.com/dp/B00025694O?tag=pondpal20-20' },
              { name: 'API Master Test Kit', desc: 'Track nitrate between changes', url: 'https://www.amazon.com/dp/B000255NCI?tag=pondpal20-20' },
              { name: 'API Pond Master Test Kit', desc: 'Pond-specific water testing', url: 'https://www.amazon.com/dp/B0002IHNUO?tag=pondpal20-20' },
              { name: 'API Ammo Lock', desc: 'Emergency ammonia detoxifier', url: 'https://www.amazon.com/dp/B0002APNI8?tag=pondpal20-20' },
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
          <h3 style={{ color: '#fff', marginBottom: '0.75rem', fontSize: '1.1rem' }}>Get an instant diagnosis of your water</h3>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', marginBottom: '1.5rem' }}>Enter your readings for a personalized treatment plan from our AI.</p>
          <Link href="/water-chemistry" className="btn-primary">Test My Water Free</Link>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <Link href="/blog/koi-ammonia-spike" style={{ color: '#1a9e8e', fontSize: '14px' }}>← Koi pond ammonia spike</Link>
          <Link href="/blog/nitrite-poisoning-fish" style={{ color: '#1a9e8e', fontSize: '14px' }}>Next: Nitrite poisoning — signs and treatment →</Link>
        </div>
      </div>

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
