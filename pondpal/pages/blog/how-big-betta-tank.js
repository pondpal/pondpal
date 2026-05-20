import Head from 'next/head'
import Link from 'next/link'

export default function BettaTankSize() {
  return (
    <>
      <Head>
        <title>How Big of a Tank Does a Betta Fish Need? — Pond Pal</title>
        <meta name="description" content="The honest answer to betta tank size — why the bowl myth is harmful, what size tank bettas actually need, and how to set one up properly." />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>

      <div className="tool-hero">
        <h1>How Big of a Tank Does a Betta Fish Need?</h1>
        <p>The honest answer — and why the bowl myth is one of the most harmful in fishkeeping</p>
      </div>

      <div style={{ maxWidth: '780px', margin: '0 auto', padding: '3rem 2rem' }}>

        <div style={{ display: 'flex', gap: '8px', marginBottom: '2rem', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '11px', fontWeight: 500, padding: '4px 12px', borderRadius: '20px', background: '#d4f0ec', color: '#0e6b6b' }}>Betta Care</span>
          <span style={{ fontSize: '11px', color: '#5a7a82', padding: '4px 0' }}>May 2026</span>
          <span style={{ fontSize: '11px', color: '#5a7a82', padding: '4px 0' }}>8 min read</span>
        </div>

        {[
          {
            heading: null,
            text: `If you've ever walked through the fish section of a pet store, you've seen them — betta fish in tiny cups, stacked on shelves, often marketed with the idea that these fish do just fine in small containers. It's one of the most persistent and harmful myths in the entire fishkeeping hobby.\n\nThe short answer to how big a betta tank needs to be is this: 5 gallons minimum, 10 gallons ideal. Anything smaller is not a suitable permanent home for a betta fish and will significantly shorten their lifespan.\n\nHere's why — and what a proper betta setup actually looks like.`
          },
          {
            heading: 'Why the bowl myth is so harmful',
            text: `The idea that bettas can live in bowls or tiny vases comes from a misunderstanding of their natural habitat. Bettas are native to the rice paddies, shallow ponds, and slow-moving streams of Southeast Asia. Because these habitats can be shallow, people assume bettas are adapted to tiny spaces.\n\nBut shallow does not mean small. A rice paddy can stretch for acres. A betta in the wild has access to enormous horizontal space, abundant plant cover, insects to hunt, and a complex environment to explore. A one-gallon bowl is nothing like this.\n\nIn a small container, several things go wrong simultaneously. Water quality deteriorates extremely rapidly — ammonia from the fish's own waste builds to toxic levels within days. Temperature fluctuates wildly with no way to stabilize it. There's no room for a proper filter. And the fish has nowhere to go, nothing to explore, and no way to express natural behaviors.\n\nA betta in a bowl is not thriving. It's surviving — and usually not for long.`
          },
          {
            heading: 'The 5 gallon minimum — why this number',
            text: `Five gallons is the widely accepted minimum for a single betta fish, and it's not arbitrary. Here's what five gallons actually gives you that smaller tanks cannot.\n\nFirst, it allows for proper filtration. A filter in a five-gallon tank can process the betta's waste efficiently, maintaining ammonia at zero rather than letting it spike. Filters in one or two-gallon tanks either create too much current for bettas or can't house enough beneficial bacteria to be effective.\n\nSecond, it provides thermal stability. Small volumes of water change temperature rapidly with room temperature fluctuations. A five-gallon tank with a small heater maintains a steady 78 to 80°F — the temperature bettas need to have a fully functioning immune system. Temperature swings in a bowl cause chronic stress and suppress immune function even when they don't appear dramatic.\n\nThird, it gives the fish actual space. A betta in a five-gallon tank can swim horizontally, investigate decorations, rest on plant leaves near the surface, and display natural behaviors like building bubble nests.\n\nAt less than five gallons, all of these become difficult or impossible to achieve reliably.`
          },
          {
            heading: 'Why 10 gallons is even better',
            text: `While five gallons is the minimum, most experienced betta keepers recommend ten gallons as the ideal starter size, and the reasons are compelling.\n\nA ten-gallon tank is dramatically more stable than a five-gallon tank. The larger water volume buffers against temperature swings, pH fluctuations, and ammonia spikes more effectively. If you miss a water change by a day or two, or if your filter has a minor issue, the consequences in a ten-gallon tank are far less severe.\n\nA ten-gallon tank also gives you more options for plants and décor. Bettas are intelligent fish that benefit from environmental enrichment — live plants, hiding spots, and interesting objects to investigate. A richer environment leads to a less stressed, more behaviorally active fish.\n\nFinally, a ten-gallon tank can potentially house a small cleanup crew alongside your betta — a few snails or carefully chosen bottom dwellers — which adds visual interest and helps manage waste.\n\nThe price difference between a five-gallon and ten-gallon setup is minimal. If you're setting up a betta tank for the first time, ten gallons is the right choice.`
          },
          {
            heading: 'What about nano tanks under 5 gallons?',
            text: `Two and three-gallon tanks marketed as betta tanks are widely available and widely sold. They're small, cute, affordable, and often beautifully designed. They're also not appropriate as permanent betta homes.\n\nThe issues are the same as with bowls, just less severe. Water quality management in a two-gallon tank requires daily monitoring and very frequent water changes — typically every two to three days — to keep ammonia from reaching dangerous levels. Most people cannot maintain this schedule consistently.\n\nIf you already have a small tank and a betta in it, don't panic — but do plan to upgrade. Bettas in undersized tanks can live reasonable lives if water quality is carefully maintained, but they don't thrive the way they do in proper setups.\n\nIf you're choosing a tank for a betta right now, skip the nano tanks. Start with at least five gallons and you'll have a much better experience — and so will your fish.`
          },
          {
            heading: 'Tank shape matters too',
            text: `It's not just volume that matters for bettas — the shape of the tank matters too.\n\nBettas are surface breathers. They have a special organ called the labyrinth that allows them to breathe air directly from the surface, supplementing their gill breathing. This is why bettas can survive in low-oxygen water that would suffocate other fish — but it also means they need easy access to the surface at all times.\n\nA tall, narrow tank with a deep water column forces a betta to work harder to reach the surface. A long, shallow tank with more horizontal swimming space and easy surface access is far more appropriate.\n\nWhen shopping for a betta tank, look for tanks that are longer than they are tall. A ten-gallon standard aquarium (20 inches long) is much better suited to bettas than a tall five-gallon cylinder of the same volume.\n\nAlso check that the tank has a lid or a cover. Bettas are excellent jumpers and will leap out of an open tank — often fatally. Any gap large enough for a betta to fit through is a hazard.`
          },
          {
            heading: 'The complete betta tank setup',
            text: `Once you have a properly sized tank, here's what a complete betta setup needs.\n\nA heater is non-negotiable. Bettas are tropical fish and need a stable temperature of 78 to 80°F. A small adjustable heater rated for your tank size is essential — not a mat heater or heat lamp, which are unreliable.\n\nA gentle filter is essential but must be the right kind. Bettas have long, flowing fins that make swimming against current exhausting. A sponge filter, a hang-on-back filter on the lowest setting, or a filter with a baffle to diffuse the output are all appropriate. Internal filters and powerheads usually create too much flow.\n\nPlants — live or silk — provide resting spots, hiding places, and a sense of security. Bettas love resting on broad leaves near the surface. Java fern, anubias, and floating plants like frogbit are excellent choices. Avoid sharp plastic plants that can tear fins.\n\nA lid is mandatory. Bettas jump.\n\nWith these elements in place, a betta can live 3 to 5 years and become a genuinely personable, interactive pet that you'll look forward to seeing every day.`
          },
        ].map((s, i) => (
          <div key={i} style={{ marginBottom: '2rem' }}>
            {s.heading && <h2 style={{ fontSize: '1.3rem', marginBottom: '0.875rem', color: '#062d3a' }}>{s.heading}</h2>}
            {s.text.split('\n\n').map((para, j) => (
              <p key={j} style={{ fontSize: '15px', color: '#2a3f47', lineHeight: '1.85', marginBottom: '1rem' }}>{para}</p>
            ))}
            {i === 2 && (
              <div style={{ background: '#f0faf8', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1rem 0', border: '1px solid rgba(26,158,142,0.2)' }}>
                <p style={{ fontSize: '14px', color: '#0e6b6b', fontWeight: 500, marginBottom: '0.5rem' }}>🐟 Check if your betta tank is the right size</p>
                <p style={{ fontSize: '13px', color: '#2a3f47', marginBottom: '0.75rem' }}>Enter your tank details and get an instant AI analysis tailored to bettas.</p>
                <Link href="/tank-checker" className="btn-primary" style={{ fontSize: '13px', padding: '8px 18px' }}>Check My Tank Free</Link>
              </div>
            )}
          </div>
        ))}

        <div style={{ background: '#fff', borderRadius: '14px', padding: '1.5rem', border: '1px solid rgba(0,0,0,0.07)', marginBottom: '2rem' }}>
          <p style={{ fontSize: '14px', fontWeight: 500, color: '#1a2e35', marginBottom: '1rem' }}>🛒 Everything you need for a proper betta setup</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
            {[
              { name: 'Hikari Betta Bio-Gold', desc: 'Premium betta-specific pellet food', url: 'https://www.amazon.com/dp/B0002APBHO?tag=pondpal20-20' },
              { name: 'Seachem Prime', desc: 'Essential water conditioner for bettas', url: 'https://www.amazon.com/dp/B00025694O?tag=pondpal20-20' },
              { name: 'API Betta Test Kit', desc: 'Monitor water quality in your betta tank', url: 'https://www.amazon.com/dp/B001F0QT1C?tag=pondpal20-20' },
              { name: 'Seachem Stability', desc: 'Cycles your new betta tank safely', url: 'https://www.amazon.com/dp/B000255MWM?tag=pondpal20-20' },
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
          <h3 style={{ color: '#fff', marginBottom: '0.75rem', fontSize: '1.1rem' }}>Want a full betta care guide?</h3>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', marginBottom: '1.5rem' }}>Our complete betta guide covers everything from tank setup to feeding, health problems, and enrichment.</p>
          <Link href="/guides/betta" className="btn-primary">Read the Betta Care Guide</Link>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <Link href="/blog" style={{ color: '#1a9e8e', fontSize: '14px' }}>← Back to blog</Link>
          <Link href="/blog/why-is-my-goldfish-tank-cloudy" style={{ color: '#1a9e8e', fontSize: '14px' }}>Next: Why is my goldfish tank cloudy? →</Link>
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
