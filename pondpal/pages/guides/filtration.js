import Head from 'next/head'
import Link from 'next/link'

const sections = [
  { emoji: '🔄', title: 'Why filtration is so critical for koi', content: `Koi are what pond keepers call "dirty fish." Pound for pound, they produce significantly more waste than most other pond fish, and that waste breaks down into ammonia — which is toxic. In a natural river or lake, waste is diluted across vast volumes of water. In a garden pond, your filtration system has to do all the work that nature would otherwise handle.\n\nA common beginner mistake is buying a filter rated exactly for your pond volume. For koi, always buy a filter rated for at least twice your actual pond volume. A filter rated for 2,000 gallons on a 1,000-gallon pond will do a reasonable job. A 1,000-gallon rated filter on a 1,000-gallon koi pond will struggle constantly.` },
  { emoji: '🧱', title: 'Multi-chamber gravity filters', content: `Multi-chamber gravity filters are the gold standard for serious koi ponds. Water flows by gravity through a series of chambers, each serving a specific purpose.\n\nThe first chamber is a settlement chamber — water enters slowly and heavy solids drop to the bottom, where they can be drained away. Subsequent chambers contain mechanical filtration media like foam or brushes that trap finer particles. The final chambers are packed with biological media — surfaces where beneficial bacteria colonize and process ammonia and nitrite.\n\nThe great advantage of gravity filters is that water flows gently, which doesn't damage the beneficial bacteria and allows for thorough contact time with the media. They're also easy to clean — most have bottom drains that let you flush waste without disturbing the biological media. The downside is they're large and require careful positioning since water must flow downhill from the pond.` },
  { emoji: '🔮', title: 'Pressurized bead filters', content: `Pressurized bead filters are a compact, all-in-one solution that combines mechanical and biological filtration in a sealed unit. Water is pumped through a chamber filled with buoyant plastic beads — waste gets trapped between the beads, while the bead surfaces support beneficial bacteria.\n\nThe biggest advantage is their compact size — a bead filter can be buried out of sight, positioned above or below the water level, and is very space-efficient compared to gravity systems. Cleaning is done by backwashing — a process that fluidizes the beads and flushes out trapped waste without removing the filter from service.\n\nBead filters are well-suited for ponds up to around 5,000 gallons and are a popular choice for koi keepers who want effective filtration without the footprint of a gravity system.` },
  { emoji: '🫧', title: 'Moving bed biofilm reactors (MBBR)', content: `Moving bed biofilm reactors, often called MBBR or K1 filters, use small plastic media pieces that tumble constantly in the water. The constant movement keeps the media clean — old waste falls away from the surface while the protected inner surfaces remain colonized with bacteria.\n\nMBBR filters can be self-cleaning and highly efficient at biological filtration. They're often used as a biological stage added on to a system that already has mechanical filtration upstream. The constant movement also means they're very difficult to overload — the media expands its bacterial population in response to increased ammonia.\n\nThis technology is increasingly popular with advanced koi keepers and can handle very high bioloads when properly sized.` },
  { emoji: '☀️', title: 'UV sterilizers — worth every penny', content: `A UV sterilizer is one of the most impactful additions you can make to a koi pond. Water passes through a chamber containing a UV lamp, which kills free-floating algae (solving green water), harmful bacteria, and some parasites in their free-swimming stage.\n\nA good UV sterilizer will turn a pea-soup green pond crystal clear within a week. Beyond aesthetics, UV also reduces pathogen load, which means healthier fish with fewer disease outbreaks.\n\nSizing matters: match the UV wattage to your pond volume and flow rate. A common guideline is 10 watts per 1,000 gallons for ponds in full sun. Replace the UV bulb annually even if it still appears to be working — output degrades significantly over 12 months.` },
  { emoji: '⬇️', title: 'Bottom drains — the unsung hero', content: `If you're building a koi pond, a bottom drain may be the single most important feature you can install. Koi waste is heavier than water and sinks to the bottom. Without a bottom drain, this waste sits, decomposes, and creates a permanent source of ammonia that no filter can fully overcome.\n\nA bottom drain at the deepest point of the pond, connected to your filter, continuously removes settled waste before it can break down. This dramatically reduces the load on your filter and keeps water quality far more stable.\n\nRetrofitting a bottom drain into an existing pond is possible but involves draining and significant work. If you're planning a new pond, it's worth the extra effort to include one from the start.` },
  { emoji: '🧮', title: 'How to actually calculate the pump and filter size you need', content: `Most sizing advice stops at "buy a filter rated for 2x your pond volume," which is a reasonable starting point but skips the actual math behind it. Here's how to work out your real requirement.\n\nStep 1 — pick a turnover rate. For a koi pond, aim to turn over the full pond volume once every 1–2 hours. A heavily stocked pond should target the faster end (once per hour); a lightly stocked pond can go slightly slower (once every 2 hours).\n\nStep 2 — calculate required flow rate in gallons per hour (GPH). Divide your pond volume by your target turnover time. Worked example: a 1,500-gallon pond with a 1-hour turnover target needs a pump rated for 1,500 GPH.\n\nStep 3 — account for head height and pipe friction loss. A pump's rated GPH is measured with zero vertical lift. If your filter or waterfall sits 4 feet above the pond surface, and you're running 25 feet of pipe, real-world flow can drop 20–40% below the rated figure. Check the manufacturer's performance curve (GPH at various head heights) rather than just the headline number, and size up if you're unsure.\n\nStep 4 — match your filter's rated capacity to the same number, then double it for koi. Using the example above: a 1,500 GPH pump feeding a filter rated for at least 3,000 gallons gives your biological media a comfortable safety margin as your koi grow and your bioload increases over time.` },
  { emoji: '🗓️', title: 'Filter maintenance schedule — how often to actually clean each stage', content: `Different filter stages need very different maintenance frequencies, and cleaning the wrong stage too aggressively is one of the most common ways keepers accidentally crash their own cycle.\n\nMechanical media (foam, brushes, settlement chambers): rinse weekly to every 2 weeks in summer, less often in winter. This stage's whole job is trapping debris, so it should visibly need cleaning — always rinse in removed pond water, never tap water.\n\nBiological media (bio balls, K1, ceramic media): leave alone as much as possible. At most, a gentle rinse in old pond water 1–2 times per year to clear excess sludge, never a full scrub. This is where your beneficial bacteria live — treat it as the one part of your system you actively try not to disturb.\n\nUV sterilizer bulb: replace annually regardless of whether it still lights up. UV output drops significantly after about 12 months of use even though the bulb looks unchanged, so a "working" bulb can still be providing little real sterilization.\n\nUV sterilizer quartz sleeve: wipe clean of mineral buildup every 4–6 weeks — a coated sleeve blocks UV output just as much as a dead bulb does.\n\nBottom drain and settlement chamber: flush weekly during the growing season when waste production is highest, and after any major feeding change.` },
]

export default function FiltrationGuide() {
  return (
    <>
      <Head>
        <title>Advanced Filtration Systems — Pond Pal</title>
        <meta name="description" content="A guide to koi pond filtration — gravity filters, bead filters, MBBR, UV sterilizers, and bottom drains, plus how to calculate pump/filter sizing and a maintenance schedule for each stage." />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>

      <div className="tool-hero">
        <h1>Advanced Filtration Systems</h1>
        <p>Gravity filters, bead filters, UV sterilizers — what they are and which is right for your pond</p>
      </div>

      <div style={{ maxWidth: '780px', margin: '0 auto', padding: '3rem 2rem' }}>
        <div style={{ display: 'flex', gap: '8px', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '11px', fontWeight: 500, padding: '4px 12px', borderRadius: '20px', background: '#e8e4f8', color: '#4a3d8f' }}>Advanced</span>
          <span style={{ fontSize: '11px', color: '#5a7a82', padding: '4px 0' }}>16 min read</span>
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
          <p style={{ fontSize: '13px', fontWeight: 500, color: '#1a2e35', marginBottom: '1rem' }}>🛒 Recommended products for this guide</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
            {[
              { name: 'API Pond Master Test Kit', desc: 'Verify your filter is working', url: 'https://www.amazon.com/dp/B0002IHNUO?tag=pondpal20-20' },
              { name: 'Seachem Prime', desc: 'Protects fish during filter maintenance', url: 'https://www.amazon.com/dp/B00025694O?tag=pondpal20-20' },
              { name: 'Seachem Stability', desc: 'Establishes beneficial bacteria fast', url: 'https://www.amazon.com/dp/B000255MWM?tag=pondpal20-20' },
              { name: 'API Stress Coat Pond', desc: 'Reduces stress after filter work', url: 'https://www.amazon.com/dp/B0002APNI8?tag=pondpal20-20' },
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
          <h3 style={{ color: '#fff', marginBottom: '0.75rem', fontSize: '1.1rem' }}>Is your current filtration keeping up?</h3>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', marginBottom: '1.5rem' }}>Check your ammonia and nitrite levels to see how your filter is performing.</p>
          <Link href="/water-chemistry" className="btn-primary">Analyze My Water</Link>
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
