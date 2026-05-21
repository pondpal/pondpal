import Head from 'next/head'
import Link from 'next/link'

export default function CycleFishTank() {
  return (
    <>
      <Head>
        <title>How to Cycle a Fish Tank for Beginners — Pond Pal</title>
        <meta name="description" content="A complete beginner's guide to cycling a fish tank — what the nitrogen cycle is, how long it takes, and exactly how to do it safely before adding fish." />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>

      <div className="tool-hero">
        <h1>How to Cycle a Fish Tank for Beginners</h1>
        <p>The most important thing you can do before adding fish — explained in plain English</p>
      </div>

      <div style={{ maxWidth: '780px', margin: '0 auto', padding: '3rem 2rem' }}>

        <div style={{ display: 'flex', gap: '8px', marginBottom: '2rem', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '11px', fontWeight: 500, padding: '4px 12px', borderRadius: '20px', background: '#d4f0ec', color: '#0e6b6b' }}>Beginner</span>
          <span style={{ fontSize: '11px', color: '#5a7a82', padding: '4px 0' }}>May 2026</span>
          <span style={{ fontSize: '11px', color: '#5a7a82', padding: '4px 0' }}>10 min read</span>
        </div>

        <div style={{ background: '#faeeda', borderRadius: '12px', padding: '1rem 1.25rem', marginBottom: '2rem', fontSize: '14px', color: '#854F0B' }}>
          <strong>The short version:</strong> Before adding fish, your tank needs beneficial bacteria to process toxic fish waste. This takes 4–8 weeks and is called cycling. Skip it and your fish will likely die within weeks from ammonia poisoning.
        </div>

        {[
          {
            heading: null,
            text: `Cycling a fish tank is the single most important thing a beginner can do before adding fish — and it's also the step most beginners skip because no one told them it was necessary.\n\nWalking into a pet store, buying a tank and some fish, setting it all up the same day, and watching your fish die within two weeks is unfortunately one of the most common experiences in the hobby. It's not bad luck. It's almost always ammonia poisoning from an uncycled tank.\n\nThis guide explains exactly what cycling is, why it matters, and how to do it correctly so your fish have the best possible start.`
          },
          {
            heading: 'What is the nitrogen cycle?',
            text: `The nitrogen cycle is the biological process that makes your tank safe for fish to live in. Here is how it works.\n\nFish produce ammonia constantly — through their gills, urine, and waste. Ammonia is highly toxic. In a healthy, established tank, colonies of beneficial bacteria living in your filter media convert ammonia into nitrite (also toxic), and then a second type of bacteria converts nitrite into nitrate, which is relatively harmless at low levels.\n\nIn a brand new tank, these bacteria don't exist yet. There's nothing to process the ammonia your fish produce. It builds up in the water until it reaches lethal concentrations, usually within days to weeks depending on how many fish you added and how big your tank is.\n\nCycling your tank means establishing those bacterial colonies before your fish move in, so the tank can process waste safely from day one.`
          },
          {
            heading: 'How long does cycling take?',
            text: `A fishless cycle typically takes 4 to 8 weeks from start to finish. This feels like a long time when you're excited to get fish, but it's genuinely non-negotiable for your fish's wellbeing.\n\nThe timeline looks roughly like this: In the first one to two weeks, ammonia rises as bacteria begin to establish. Between weeks two and four, nitrite appears as the first bacterial colony grows and starts converting ammonia. Nitrite spikes can be dramatic during this phase. Between weeks four and eight, nitrate appears as the second bacterial colony establishes and processes nitrite. Once both ammonia and nitrite consistently read zero after you add an ammonia source, your tank is cycled.\n\nYou can dramatically speed up cycling by seeding your tank with beneficial bacteria from an established source — more on this below.`
          },
          {
            heading: 'Fishless cycling — the safest method',
            text: `Fishless cycling is the recommended approach for beginners. You cycle the tank before any fish are present, which means there's no risk of harming fish during the process.\n\nStep one: Set up your tank completely with filter, heater, substrate, and decorations. Fill with dechlorinated water. Run the filter.\n\nStep two: Add an ammonia source to feed the developing bacteria. Pure ammonia (without surfactants or fragrances) added to reach 2–4 ppm works well. Alternatively, a small piece of raw shrimp from the grocery store will decompose and release ammonia naturally.\n\nStep three: Test your water every 2–3 days with a liquid test kit. You're watching for ammonia to rise, then nitrite to appear as bacteria start processing ammonia, then both to fall to zero as the full cycle completes.\n\nStep four: When both ammonia and nitrite read zero within 24 hours of adding an ammonia dose, your tank is cycled. Do a 50% water change to reduce nitrate, then add your fish.`
          },
          {
            heading: 'How to speed up cycling',
            text: `The standard 4 to 8 week timeline can be significantly shortened with the right approach.\n\nSeeding with established filter media is the fastest method. If you have access to a fish keeper with a healthy established tank, ask for a handful of their gravel, a piece of their filter sponge, or some of their filter media. The bacteria living on these surfaces can seed your new tank and reduce cycling time to as little as one to two weeks.\n\nBottled bacteria products work well too. Seachem Stability is one of the most consistently effective products available — add it daily for the first week and it can cut cycling time significantly. Not all bottled bacteria products are equal, but Stability has a strong track record in the hobby.\n\nHigher temperatures speed up bacterial growth. Keeping your tank at the warmer end of your fish's temperature range during cycling accelerates the process.\n\nNever clean new filter media during cycling. The bacteria are establishing on those surfaces — rinsing them, especially with tap water containing chlorine, will kill the bacteria and restart the process.`
          },
          {
            heading: 'Testing your water during cycling',
            text: `A reliable liquid test kit is essential for cycling. Test strips are not accurate enough — you need real numbers, not rough color matches, to know where you are in the cycle.\n\nThe API Freshwater Master Test Kit is the gold standard for freshwater cycling. It tests pH, ammonia, nitrite, and nitrate — the four parameters you need to monitor during cycling and beyond.\n\nDuring cycling, test every 2–3 days and keep a log of your readings. Watching the numbers tell the story of your cycle — ammonia rising, then nitrite appearing and climbing, then both falling to zero — is genuinely satisfying when you know what you're looking at.\n\nYour tank is fully cycled when both ammonia and nitrite read zero within 24 hours of adding your ammonia source, and nitrate is present showing that the full cycle is working.`
          },
          {
            heading: 'Adding fish after cycling',
            text: `Once your tank is cycled, add fish slowly. Your bacterial population has established itself to handle a specific ammonia load — the amount you were adding during cycling. Adding a full tank of fish at once can overwhelm the bacteria and trigger a mini-cycle.\n\nAdd a few fish, wait two to three weeks for your bacteria to adjust, test your water to confirm it's still stable, then add more. This gradual approach prevents ammonia spikes and gives new fish time to settle in.\n\nAlways dechlorinate any water you add to the tank with a product like Seachem Prime. Chlorine in tap water kills the beneficial bacteria you just spent weeks cultivating.\n\nOnce your tank is established, test your water monthly at minimum. A weekly test takes five minutes and catches problems before they become emergencies.`
          },
        ].map((s, i) => (
          <div key={i} style={{ marginBottom: '2rem' }}>
            {s.heading && <h2 style={{ fontSize: '1.3rem', marginBottom: '0.875rem', color: '#062d3a' }}>{s.heading}</h2>}
            {s.text.split('\n\n').map((para, j) => (
              <p key={j} style={{ fontSize: '15px', color: '#2a3f47', lineHeight: '1.85', marginBottom: '1rem' }}>{para}</p>
            ))}
            {i === 4 && (
              <div style={{ background: '#f0faf8', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1rem 0', border: '1px solid rgba(26,158,142,0.2)' }}>
                <p style={{ fontSize: '14px', color: '#0e6b6b', fontWeight: 500, marginBottom: '0.5rem' }}>🧪 Already have fish in an uncycled tank?</p>
                <p style={{ fontSize: '13px', color: '#2a3f47', marginBottom: '0.75rem' }}>Test your ammonia and nitrite immediately and get a personalized action plan.</p>
                <Link href="/water-chemistry" className="btn-primary" style={{ fontSize: '13px', padding: '8px 18px' }}>Test My Water Free</Link>
              </div>
            )}
          </div>
        ))}

        <div style={{ background: '#fff', borderRadius: '14px', padding: '1.5rem', border: '1px solid rgba(0,0,0,0.07)', marginBottom: '2rem' }}>
          <p style={{ fontSize: '14px', fontWeight: 500, color: '#1a2e35', marginBottom: '1rem' }}>🛒 Everything you need for cycling</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
            {[
              { name: 'API Master Test Kit', desc: 'Essential for monitoring your cycle', url: 'https://www.amazon.com/dp/B000255NCI?tag=pondpal20-20' },
              { name: 'Seachem Stability', desc: 'Speeds up cycling significantly', url: 'https://www.amazon.com/dp/B000255MWM?tag=pondpal20-20' },
              { name: 'Seachem Prime', desc: 'Dechlorinates and detoxifies ammonia', url: 'https://www.amazon.com/dp/B00025694O?tag=pondpal20-20' },
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
          <h3 style={{ color: '#fff', marginBottom: '0.75rem', fontSize: '1.1rem' }}>Monitor your cycle with our free Water Testing tool</h3>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', marginBottom: '1.5rem' }}>Enter your readings and get an instant AI diagnosis of where you are in the cycle.</p>
          <Link href="/water-chemistry" className="btn-primary">Test My Water Free</Link>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <Link href="/blog" style={{ color: '#1a9e8e', fontSize: '14px' }}>← Back to blog</Link>
          <Link href="/blog/what-fish-can-live-with-bettas" style={{ color: '#1a9e8e', fontSize: '14px' }}>Next: What fish can live with bettas? →</Link>
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
