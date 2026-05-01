import Head from 'next/head'
import Link from 'next/link'

const sections = [
  {
    emoji: '🐟',
    title: 'Why koi?',
    content: `Koi are one of the most rewarding fish you can keep. They're intelligent, long-lived (often 20–30 years), and can grow to recognize their owners — some will even eat from your hand. They're also beautiful, with hundreds of color varieties ranging from classic white and red to metallic golds and striking black patterns.

That said, koi are not beginner goldfish. They're large, produce a lot of waste, and need a properly set up pond to truly thrive. The good news is that with the right setup from the start, koi are surprisingly hardy and forgiving fish.`
  },
  {
    emoji: '📐',
    title: 'How much space do koi actually need?',
    content: `This is where many first-time keepers run into trouble. Koi grow — fast. A 3-inch fish you bring home from the pet store can reach 18–24 inches within 3–5 years under good conditions.

The standard rule of thumb is 250 gallons per koi. So if you want 4 koi, you're looking at a minimum of 1,000 gallons. This isn't arbitrary — koi need space to swim, and a larger body of water is far more stable chemically, which means healthier fish and less work for you.

Depth matters too. Aim for at least 3 feet deep, ideally 4–5 feet in colder climates so the pond doesn't freeze solid in winter. A good starter pond for 4–6 koi is roughly 10 feet x 6 feet x 4 feet deep — around 1,800 gallons.`
  },
  {
    emoji: '🔄',
    title: 'Filtration — the heart of your pond',
    content: `Koi produce a lot of waste for their size. Without good filtration, ammonia from fish waste will build up quickly and can be fatal. A proper koi filter has two jobs:

Mechanical filtration physically removes solid waste from the water — things like uneaten food, fish waste, and debris. This is usually achieved with foam pads, brushes, or settlement chambers.

Biological filtration uses beneficial bacteria to convert harmful ammonia into nitrite, and then into the much less harmful nitrate. This process is called the nitrogen cycle, and it's the foundation of a healthy pond.

For koi, you want a filter rated for at least twice your actual pond volume. So a 1,000-gallon pond needs a filter rated for 2,000 gallons. A UV sterilizer is also a great addition — it kills algae and harmful bacteria and keeps your water crystal clear.`
  },
  {
    emoji: '🔬',
    title: 'The nitrogen cycle — what it is and why it matters',
    content: `Before adding fish to any new pond, you need to understand the nitrogen cycle. This is the biological process that makes your pond safe for fish to live in.

Here's how it works: Fish produce ammonia through their waste and gill function. Ammonia is toxic — even small amounts stress fish and damage their gills. Beneficial bacteria (Nitrosomonas) colonize your filter media and convert ammonia into nitrite. Nitrite is also toxic. A second group of bacteria (Nitrobacter) then convert nitrite into nitrate. Nitrate is relatively harmless at low levels and is removed through regular water changes and plant uptake.

A new pond takes 4–8 weeks to fully cycle. During this time, ammonia and nitrite will spike before the bacteria populations establish. Never stock a pond fully on day one — start with just 2–3 fish and test your water weekly.`
  },
  {
    emoji: '🛒',
    title: 'What to buy before bringing fish home',
    content: `Getting the right equipment before your first fish arrive makes everything easier. Here is a practical checklist:

A water test kit — the API Freshwater Master Test Kit is the gold standard. It tests pH, ammonia, nitrite, and nitrate and gives you accurate readings you can trust. Test strips are convenient but less reliable.

A good thermometer — koi are sensitive to temperature swings. A simple pond thermometer tells you when to adjust feeding and warns you of problems.

A dechlorinator — tap water contains chlorine and chloramines that are harmful to fish and kill your beneficial bacteria. Always treat tap water before adding it to your pond. Seachem Prime is a popular and reliable choice.

A net — for catching fish when needed and keeping predators like herons out.

A quality pond pump — sized to turn over your full pond volume at least once per hour.`
  },
  {
    emoji: '🐠',
    title: 'Choosing your first koi',
    content: `When buying your first koi, healthy fish are more important than beautiful fish. A stunning koi that arrives sick will cause you far more heartache than a plain but healthy fish.

Signs of a healthy koi: swimming actively and upright, no clamped fins, no visible sores or white spots, eating eagerly, bright clear eyes, and no red streaks on the body.

Signs to avoid: fish sitting on the bottom, gasping at the surface, flashing (rubbing against surfaces), torn or frayed fins, visible lesions or fuzzy patches.

Start with fish in the 4–8 inch range. They're past their most vulnerable stage, easier to handle, and you'll get to watch them grow. Spend your budget on 3 good healthy fish rather than 8 cheap ones.`
  },
  {
    emoji: '📅',
    title: 'What to expect in your first year',
    content: `Month 1–2: Focus on cycling your pond and monitoring water parameters closely. Test every 2–3 days. Don't be alarmed by ammonia and nitrite spikes — this is normal. Feed lightly.

Month 3–4: Your pond should be fully cycled. Water parameters stabilize. You can add a few more fish if you have room. Start enjoying your koi — watch their personalities emerge.

Month 5–6: Summer is here. Koi are active and hungry. Feed 2–3 times daily, only what they can eat in 5 minutes. Keep an eye on algae — some is fine, but excessive algae can crash oxygen levels overnight.

Month 7–8: Autumn arrives. Start reducing feeding as temperatures drop. Switch to a wheat germ based food below 55°F as it's easier to digest in cooler water.

Month 9–12: Winter. Stop feeding completely below 50°F. Koi go into a semi-dormant state and their metabolism slows dramatically. Keep a hole in any ice to allow gas exchange. Enjoy the quieter season and start planning for spring!`
  },
]

export default function GettingStarted() {
  return (
    <>
      <Head>
        <title>Getting Started with Koi — Pond Pal</title>
        <meta name="description" content="Everything a first-time koi keeper needs to know — pond size, filtration, the nitrogen cycle, choosing fish, and what to expect in year one." />
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
        <h1>Getting Started with Koi</h1>
        <p>Everything you need to know before bringing your first koi home</p>
      </div>

      <div style={{ maxWidth: '780px', margin: '0 auto', padding: '3rem 2rem' }}>

        <div style={{ display: 'flex', gap: '8px', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '11px', fontWeight: 500, padding: '4px 12px', borderRadius: '20px', background: '#d4f0ec', color: '#0e6b6b' }}>Beginner</span>
          <span style={{ fontSize: '11px', color: '#5a7a82', padding: '4px 0' }}>10 min read</span>
        </div>

        {sections.map((s, i) => (
          <div key={i} style={{ marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span>{s.emoji}</span> {s.title}
            </h2>
            {s.content.split('\n\n').map((para, j) => (
              <p key={j} style={{ fontSize: '15px', color: '#2a3f47', lineHeight: '1.8', marginBottom: '1rem' }}>{para}</p>
            ))}
            {i < sections.length - 1 && (
              <hr style={{ border: 'none', borderTop: '1px solid rgba(0,0,0,0.08)', marginTop: '2rem' }} />
            )}
          </div>
        ))}

        <div style={{ background: '#062d3a', borderRadius: '14px', padding: '2rem', marginTop: '2rem', textAlign: 'center' }}>
          <h3 style={{ color: '#fff', marginBottom: '0.75rem', fontSize: '1.2rem' }}>Ready to check your setup?</h3>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', marginBottom: '1.5rem' }}>Use our free AI tools to make sure your tank size and water chemistry are right for your fish.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/tank-checker" className="btn-primary">Check My Tank Size</Link>
            <Link href="/water-chemistry" className="btn-outline">Analyze My Water</Link>
          </div>
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
