import Head from 'next/head'
import Link from 'next/link'

const seasons = [
  {
    emoji: '🌸',
    title: 'Spring — waking up the pond',
    color: '#d4f0ec',
    textColor: '#0e6b6b',
    content: `Spring is the most critical season for koi keepers. Your fish are coming out of their semi-dormant winter state with weakened immune systems, and the pond is transitioning from cold to warmer temperatures. This is when most disease outbreaks occur, so vigilance pays off.

Start testing your water as soon as temperatures rise above 50°F. Ammonia and nitrite can spike in spring as your filter bacteria wake up more slowly than your fish. Don't rush feeding — start with small amounts of wheat germ food when temperatures are consistently above 50°F, and only switch to a protein-rich staple food above 65°F.

Spring cleaning should be done carefully. A full pond cleanout sounds tempting, but removing too much organic material at once can crash your water chemistry. Instead, do a partial 20–25% water change, remove the worst of any sludge from the bottom, and clean your filter media gently in old pond water — never tap water, as chlorine will kill your beneficial bacteria.

Inspect every fish carefully in spring. Look for wounds from winter, early signs of parasites, and any fish that look lethargic or have not recovered their appetite by the time temperatures reach 60°F. Spring is the best time to treat for parasites prophylactically if you've had issues in previous years.`
  },
  {
    emoji: '☀️',
    title: 'Summer — peak season',
    color: '#faeeda',
    textColor: '#854F0B',
    content: `Summer is when koi truly come alive. They're active, colorful, hungry, and growing fast. It's also the season that demands the most attention from you.

Feeding: koi can be fed 2–3 times daily in summer, only what they can consume in 5 minutes per feeding. Overfeeding is one of the most common mistakes — excess food decomposes quickly and creates an ammonia spike. A quality high-protein food supports growth and vibrant color during warm months.

Oxygen management: warm water holds less dissolved oxygen. On hot days above 85°F, run your waterfall and any air stones continuously. If you notice fish gasping at the surface first thing in the morning, this is a red flag for overnight oxygen depletion. Adding an air stone or increasing surface agitation is the quick fix.

Algae: some string algae and green water is normal and even beneficial. However, a severe algae bloom can crash oxygen levels overnight. A UV sterilizer keeps the water clear and green water algae under control. String algae can be managed manually by twisting it out on a stick. Avoid algaecides — they can cause a sudden die-off that depletes oxygen catastrophically.

Water changes: aim for a 10–15% water change weekly in summer. This keeps nitrate in check and replaces trace minerals.`
  },
  {
    emoji: '🍂',
    title: 'Autumn — preparing for winter',
    color: '#ffdcc9',
    textColor: '#c04a10',
    content: `Autumn is about preparation. The decisions you make now directly affect how well your fish survive winter and how healthy they are in spring.

Feeding transition: as water temperature drops below 65°F, switch from high-protein summer food to a wheat germ based food. Wheat germ is lower in protein and much easier to digest at cooler temperatures. Koi's digestive systems slow dramatically in cooler water, and undigested high-protein food sitting in their gut over winter can cause serious problems. Stop feeding entirely below 50°F.

Leaf management is critical in autumn. Falling leaves decompose rapidly and drive ammonia up while consuming oxygen. Use a pond net stretched over the surface to catch leaves before they sink, and remove them daily. This one habit can make a significant difference to your water quality over winter.

Autumn is also a good time for a partial water change of 20–25% before winter sets in, to start the cold season with the cleanest water possible. Test your KH — if it's below 4 dKH, add some crushed coral to your filter now, as pH crashes are more likely over winter when biological activity slows.`
  },
  {
    emoji: '❄️',
    title: 'Winter — less is more',
    color: '#E6F1FB',
    textColor: '#185FA5',
    content: `Winter koi care is mostly about restraint — resisting the urge to feed, to disturb the fish, or to do major pond maintenance. Koi are incredibly hardy in cold water when left alone.

Below 50°F, stop feeding completely. This is one of the most important rules in koi keeping. Koi's metabolism slows to a crawl in cold water. They can survive months without food, drawing on body fat reserves. Feeding them when they cannot properly digest food causes food to rot in their digestive tract and can be fatal.

Ice management: a completely frozen pond is dangerous because toxic gases from decomposition cannot escape. You do not need to keep the entire surface clear — just maintain a hole in the ice for gas exchange. A pond de-icer or floating a tennis ball on the surface can prevent a small area from freezing. Never break ice by hitting it — the shockwave can stun or kill koi. Pour warm water on the ice instead.

In moderate climates where the pond doesn't freeze, you can run your filter at a reduced flow rate. In very cold climates, some keepers shut the filter down entirely and rely on the pond's natural biology through winter. If you stop your filter, restart it gradually in spring and expect a mini-cycle.

Check on your fish periodically from a distance. Healthy koi in winter will sit quietly near the bottom in the deepest part of the pond. They should not be erratic, gasping, or visibly distressed.`
  },
]

export default function SeasonalCare() {
  return (
    <>
      <Head>
        <title>Seasonal Pond Care — Pond Pal</title>
        <meta name="description" content="How to care for koi through every season — spring startup, summer management, autumn preparation, and winter survival tips." />
      </Head>

      <nav className="nav">
        <Link href="/" className="nav-logo">🐟 Pond<span style={{ color: '#f4833d' }}>Pal</span></Link>
        <ul className="nav-links">
          <li><Link href="/tank-checker">Tank Checker</Link></li>
          <li><Link href="/water-chemistry">Water Chemistry</Link></li>
          <li><Link href="/care-guides">Care Guides</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>

      <div className="tool-hero">
        <h1>Seasonal Pond Care</h1>
        <p>What to do in spring, summer, autumn, and winter to keep your koi happy year-round</p>
      </div>

      <div style={{ maxWidth: '780px', margin: '0 auto', padding: '3rem 2rem' }}>

        <div style={{ display: 'flex', gap: '8px', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '11px', fontWeight: 500, padding: '4px 12px', borderRadius: '20px', background: '#ffdcc9', color: '#c04a10' }}>Intermediate</span>
          <span style={{ fontSize: '11px', color: '#5a7a82', padding: '4px 0' }}>12 min read</span>
        </div>

        {seasons.map((s, i) => (
          <div key={i} style={{ marginBottom: '3rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.25rem' }}>
              <span style={{ fontSize: '36px' }}>{s.emoji}</span>
              <div>
                <h2 style={{ fontSize: '1.4rem' }}>{s.title}</h2>
              </div>
            </div>
            {s.content.split('\n\n').map((para, j) => (
              <p key={j} style={{ fontSize: '15px', color: '#2a3f47', lineHeight: '1.8', marginBottom: '1rem' }}>{para}</p>
            ))}
            {i < seasons.length - 1 && (
              <hr style={{ border: 'none', borderTop: '1px solid rgba(0,0,0,0.08)', marginTop: '2rem' }} />
            )}
          </div>
        ))}

        <div style={{ background: '#062d3a', borderRadius: '14px', padding: '2rem', marginTop: '2rem', textAlign: 'center' }}>
          <h3 style={{ color: '#fff', marginBottom: '0.75rem', fontSize: '1.2rem' }}>Not sure where your water stands going into a new season?</h3>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', marginBottom: '1.5rem' }}>Run a quick water chemistry check and get instant personalized advice.</p>
          <Link href="/water-chemistry" className="btn-primary">Analyze My Water</Link>
        </div>

        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <Link href="/care-guides" style={{ color: '#1a9e8e', fontSize: '14px' }}>← Back to all guides</Link>
        </div>
      </div>

      <footer className="footer">
        <p>🐟 Pond Pal — Friendly fish care, powered by AI</p>
        <p style={{ marginTop: '0.75rem' }}>
          <Link href="/tank-checker" style={{ color: 'rgba(255,255,255,0.6)' }}>Tank Checker</Link>{' · '}
          <Link href="/water-chemistry" style={{ color: 'rgba(255,255,255,0.6)' }}>Water Chemistry</Link>{' · '}
          <Link href="/care-guides" style={{ color: 'rgba(255,255,255,0.6)' }}>Care Guides</Link>{' · '}
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
          Some links may be affiliate links — this helps keep Pond Pal free!
        </p>
      </footer>
    </>
  )
}
