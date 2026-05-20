import Head from 'next/head'
import Link from 'next/link'

export default function GoldfishTankCloudy() {
  return (
    <>
      <Head>
        <title>Why Is My Goldfish Tank Cloudy? Causes and Fixes — Pond Pal</title>
        <meta name="description" content="Cloudy goldfish tank? Find out exactly why and how to fix it — white cloudiness, green water, and brown tint all have different causes and solutions." />
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
        <h1>Why Is My Goldfish Tank Cloudy?</h1>
        <p>Different colors mean different problems — here's exactly what's causing it and how to fix it</p>
      </div>

      <div style={{ maxWidth: '780px', margin: '0 auto', padding: '3rem 2rem' }}>

        <div style={{ display: 'flex', gap: '8px', marginBottom: '2rem', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '11px', fontWeight: 500, padding: '4px 12px', borderRadius: '20px', background: '#d4f0ec', color: '#0e6b6b' }}>Goldfish</span>
          <span style={{ fontSize: '11px', color: '#5a7a82', padding: '4px 0' }}>May 2026</span>
          <span style={{ fontSize: '11px', color: '#5a7a82', padding: '4px 0' }}>9 min read</span>
        </div>

        <div style={{ background: '#faeeda', borderRadius: '12px', padding: '1rem 1.25rem', marginBottom: '2rem', fontSize: '14px', color: '#854F0B' }}>
          <strong>Quick diagnosis:</strong> White or grey cloudiness = bacterial bloom (usually harmless in new tanks). Green cloudiness = algae. Brown tint = tannins from driftwood. Milky white in established tank = bacterial issue needing water change.
        </div>

        {[
          {
            heading: null,
            text: `A cloudy goldfish tank is one of the most common problems new fish keepers encounter — and one of the most confusing, because cloudiness can have several completely different causes that require completely different solutions.\n\nThe most important thing to understand is that the color of the cloudiness tells you what's causing it. White and grey cloudiness, green cloudiness, and brown tinting are three separate problems. Treating the wrong one can make things worse.\n\nHere's how to diagnose your specific situation and fix it correctly.`
          },
          {
            heading: 'White or grey cloudiness — bacterial bloom',
            text: `White or grey milky cloudiness is almost always a bacterial bloom — a sudden explosion in the population of free-floating bacteria in your water. This sounds alarming but in a new tank it's actually a completely normal and expected part of the cycling process.\n\nWhen you set up a new tank, there are very few beneficial bacteria present to process the ammonia your goldfish produce. The tank goes through a period where bacterial populations fluctuate wildly as they establish. During this time, a bacterial bloom causing white cloudiness is common and typically resolves on its own within one to two weeks as the tank cycles.\n\nIn a new tank, the fix is patience. Do small water changes of 15 to 20 percent every few days to keep ammonia from reaching dangerous levels, test your water regularly, and let the cycle complete. Do not add clarifying chemicals — they can disrupt the cycling process and extend the problem.\n\nIn an established tank that has been running clearly for months, a sudden white cloudiness is more concerning. It usually indicates a problem — a dead fish decomposing somewhere, a filter crash, overfeeding, or a sudden ammonia spike. Test your water immediately. If ammonia or nitrite is elevated, do a 25 to 30 percent water change, remove any uneaten food or dead fish, and check that your filter is running correctly.`
          },
          {
            heading: 'Green cloudiness — algae bloom',
            text: `Green water is caused by a bloom of microscopic single-celled algae called phytoplankton suspended throughout the water column. It turns your tank the color of pea soup and can be surprisingly persistent once established.\n\nThe root cause is almost always one or more of these three things: too much light, too many nutrients in the water (from overfeeding or insufficient water changes), or both.\n\nThe most common culprit for indoor tanks is light exposure. If your tank is near a window that receives direct sunlight for several hours a day, algae will thrive no matter what else you do. Move the tank away from direct sunlight and reduce your aquarium light to 8 hours maximum per day.\n\nFor nutrient reduction, cut back on feeding — goldfish are already heavy waste producers and any excess food rapidly fuels algae growth. Increase water change frequency temporarily to 25 percent twice a week until the bloom clears.\n\nA UV sterilizer is the most effective solution for persistent green water. Water passes through the UV chamber and the light kills the suspended algae, clearing green water often within a week. Once clear, maintaining reduced lighting and regular water changes prevents it from returning.\n\nDo not be tempted by algaecides. They kill the algae but the sudden die-off dumps all the organic matter back into the water and can cause a severe ammonia spike that harms your fish.`
          },
          {
            heading: 'Brown or yellow tinting — tannins',
            text: `If your water has a brown or yellowish tea-like tint rather than looking milky or green, the cause is almost certainly tannins leaching from driftwood or certain types of substrate.\n\nTannins are organic compounds released naturally from wood and some leaves. They're completely harmless to fish and actually have mild antibacterial properties — in fact, some fish species from blackwater rivers in South America prefer tannin-stained water.\n\nFor goldfish, which prefer neutral to slightly alkaline water, heavy tannin staining can gradually lower pH over time, so it's worth monitoring if you have a lot of driftwood.\n\nThe fix is simple: pre-soak new driftwood in a bucket of water for several days before adding it to your tank, changing the water daily. This leaches out the bulk of the tannins before the wood goes in. Once in your tank, activated carbon in your filter will remove the brown tint from the water within a few days.\n\nIf the tinting bothers you aesthetically, replace the carbon regularly and the water will stay clear. If you don't mind the natural look and your pH is stable, there's no need to do anything.`
          },
          {
            heading: 'Why goldfish tanks get cloudy faster than other fish',
            text: `Goldfish are notorious for cloudy water problems, and there's a reason for that — they produce more waste per inch of body than almost any other common aquarium fish. A single fancy goldfish in a 20-gallon tank produces more ammonia than several small tropical fish in the same space.\n\nThis is why the standard aquarium fishkeeping rules — one inch of fish per gallon, filter rated for the tank size — simply don't work for goldfish. You need much more space and much more filtration than you might expect.\n\nFor consistently clear water with goldfish, you need a filter rated for two to three times your actual tank volume. A 40-gallon goldfish tank should have a filter rated for 80 to 120 gallons. This is not an exaggeration — it's the difference between a tank that stays clear and one that constantly clouds up.\n\nRegular partial water changes of 25 percent weekly are non-negotiable for goldfish. No filter, no matter how powerful, removes the nitrate that accumulates over time — only water changes do that. Skipping water changes is the most common reason goldfish tanks gradually degrade in water quality even when they don't appear visibly cloudy.`
          },
          {
            heading: 'When to be worried about cloudy water',
            text: `Most cloudiness in goldfish tanks is not immediately dangerous, but there are situations where it signals something serious.\n\nIf your water is cloudy and your fish are gasping at the surface, sitting on the bottom, have clamped fins, or are behaving abnormally, test your water immediately. Elevated ammonia or nitrite in combination with cloudiness means your fish are in danger and need intervention now — a large water change of 30 to 40 percent using dechlorinated water is the first step.\n\nIf your established tank suddenly goes cloudy after being clear for a long time, investigate why. Look for a dead fish hiding behind decorations, check that your filter is running, and test your water. Sudden cloudiness in an established tank always has a cause.\n\nIf cloudiness in a new tank persists beyond three to four weeks without improvement, your tank may be struggling to cycle. Test for ammonia and nitrite and consider using a beneficial bacteria product to help establish the biological filtration faster.`
          },
        ].map((s, i) => (
          <div key={i} style={{ marginBottom: '2rem' }}>
            {s.heading && <h2 style={{ fontSize: '1.3rem', marginBottom: '0.875rem', color: '#062d3a' }}>{s.heading}</h2>}
            {s.text.split('\n\n').map((para, j) => (
              <p key={j} style={{ fontSize: '15px', color: '#2a3f47', lineHeight: '1.85', marginBottom: '1rem' }}>{para}</p>
            ))}
            {i === 1 && (
              <div style={{ background: '#f0faf8', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1rem 0', border: '1px solid rgba(26,158,142,0.2)' }}>
                <p style={{ fontSize: '14px', color: '#0e6b6b', fontWeight: 500, marginBottom: '0.5rem' }}>🧪 Test your water right now</p>
                <p style={{ fontSize: '13px', color: '#2a3f47', marginBottom: '0.75rem' }}>Enter your ammonia, nitrite, and nitrate readings for an instant AI diagnosis.</p>
                <Link href="/water-chemistry" className="btn-primary" style={{ fontSize: '13px', padding: '8px 18px' }}>Test My Water Free</Link>
              </div>
            )}
          </div>
        ))}

        <div style={{ background: '#fff', borderRadius: '14px', padding: '1.5rem', border: '1px solid rgba(0,0,0,0.07)', marginBottom: '2rem' }}>
          <p style={{ fontSize: '14px', fontWeight: 500, color: '#1a2e35', marginBottom: '1rem' }}>🛒 Products that help with cloudy tank water</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
            {[
              { name: 'API Master Test Kit', desc: 'Diagnose the real cause of cloudiness', url: 'https://www.amazon.com/dp/B000255NCI?tag=pondpal20-20' },
              { name: 'Seachem Stability', desc: 'Clears bacterial blooms fast', url: 'https://www.amazon.com/dp/B000255MWM?tag=pondpal20-20' },
              { name: 'Seachem Prime', desc: 'Detoxifies ammonia during cycling', url: 'https://www.amazon.com/dp/B00025694O?tag=pondpal20-20' },
              { name: 'API Accu-Clear', desc: 'Clears cloudy water quickly', url: 'https://www.amazon.com/dp/B0002APNJE?tag=pondpal20-20' },
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
          <h3 style={{ color: '#fff', marginBottom: '0.75rem', fontSize: '1.1rem' }}>Still not sure what's causing your cloudy water?</h3>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', marginBottom: '1.5rem' }}>Enter your water test readings and get an instant AI diagnosis with specific treatment steps.</p>
          <Link href="/water-chemistry" className="btn-primary">Diagnose My Water Free</Link>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <Link href="/blog/how-big-betta-tank" style={{ color: '#1a9e8e', fontSize: '14px' }}>← Betta tank size guide</Link>
          <Link href="/blog/best-filter-55-gallon-aquarium" style={{ color: '#1a9e8e', fontSize: '14px' }}>Next: Best filter for a 55 gallon →</Link>
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
