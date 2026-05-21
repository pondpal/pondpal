import Head from 'next/head'
import Link from 'next/link'

const sections = [
  {
    emoji: '🌊',
    title: 'Why planted tanks are worth the effort',
    content: `A thriving planted aquarium is arguably the most beautiful thing you can create in the fishkeeping hobby. Lush green carpets, tall background plants swaying gently in the current, a school of small fish weaving between stems — it looks like a window into a natural river.\n\nBeyond aesthetics, live plants genuinely improve tank health. They absorb nitrates and phosphates, compete with algae for nutrients, produce oxygen during the day, and provide shelter and security for fish. A well-planted tank is often more stable and easier to maintain than a bare tank of the same size.\n\nThe challenge is that plants have their own requirements — light, nutrients, and sometimes CO2 — that need to be understood and managed. But the barrier to entry is lower than many beginners think, and you can have a beautiful planted tank at any budget.`
  },
  {
    emoji: '💡',
    title: 'Lighting — the most important factor',
    content: `Light is to plants what filtration is to fish — the non-negotiable foundation everything else depends on. Plants need light to photosynthesize and grow. Too little light and plants slowly die back. Too much light without enough nutrients fuels algae explosions.\n\nFor a low-tech planted tank with easy plants, a quality LED light running 8 hours per day is sufficient. Look for lights with a PAR (photosynthetically active radiation) rating — low light plants do well at 20–40 PAR, medium light plants need 40–80 PAR, and high light demanding plants need 80+ PAR.\n\nPopular quality planted tank lights include the Fluval Plant 3.0, Finnex Planted+, and the Chihiros range. Avoid generic "blue and white" LED lights designed for fish viewing — they often lack the spectrum plants need to thrive.\n\nA timer is highly recommended. Consistent light duration — 8 hours on, 16 hours off — is better than irregular photoperiods. Inconsistent lighting is one of the most common causes of algae problems in planted tanks.\n\nNever run lights longer than 10 hours per day. More light does not equal faster growth — it equals more algae. The limiting factor for plant growth is usually nutrients or CO2, not light duration.`
  },
  {
    emoji: '🪨',
    title: 'Substrate — what to put on the bottom',
    content: `Substrate choice matters more in planted tanks than in standard fish tanks because plant roots need appropriate material to anchor in and draw nutrients from.\n\nInert substrates like plain gravel or sand can work for plants that feed primarily from the water column rather than their roots — java fern, anubias, and most mosses do fine in gravel. However, for heavy root feeders like stem plants and carpeting plants, a nutrient-rich substrate is a significant advantage.\n\nAquasoil substrates — products like ADA Amazonia, Fluval Stratum, and UNS Controsoil — are rich in nutrients and naturally lower pH, creating ideal conditions for most tropical plants. They are the gold standard for planted tanks but are more expensive and require capping with inert material to prevent clouding.\n\nCapped substrate — a layer of nutrient-rich soil under 1 to 2 inches of fine gravel or sand — is a cost-effective approach that works very well. Use organic potting soil (without perlite or fertilizer additives) as the base layer.\n\nDepth matters for planted tanks. Aim for 2 to 3 inches of substrate total — enough for roots to anchor and grow. Too shallow and plants will uproot easily.`
  },
  {
    emoji: '🧪',
    title: 'CO2 — do you need it?',
    content: `Carbon dioxide is often called the "limiting factor" in planted tanks — plants use CO2 during photosynthesis and in most aquariums the natural CO2 from fish respiration and surface agitation is not enough to support fast, lush plant growth.\n\nPressurized CO2 injection — a CO2 cylinder connected to a regulator and diffuser — provides a consistent supply of CO2 to the tank and transforms plant growth. With CO2, demanding plants that are borderline in a low-tech tank flourish. Growth is visibly faster, colors are more vibrant, and algae is easier to control because healthy plants outcompete it.\n\nHowever, CO2 injection is not essential for a beautiful planted tank. A low-tech approach using easy plants, appropriate lighting, and regular fertilization produces excellent results without the complexity and cost of pressurized CO2.\n\nFor beginners, a low-tech planted tank is the right starting point. Get comfortable with lighting, fertilization, and plant selection first. CO2 injection can always be added later when you're ready for more demanding plants.\n\nLiquid carbon supplements like Seachem Flourish Excel provide a limited CO2 alternative and can boost growth in low-tech tanks without the complexity of pressurized systems.`
  },
  {
    emoji: '🌱',
    title: 'Best plants for beginners',
    content: `Starting with easy, forgiving plants sets you up for success and builds confidence before tackling more demanding species.\n\nJava fern is perhaps the most beginner-friendly aquatic plant available. It grows slowly, tolerates a wide range of lighting and water conditions, and attaches to rocks and driftwood rather than needing to be planted in substrate. It cannot be buried — attach it with thread or glue and it will send roots out over time.\n\nAnubias are similarly easy and similarly attached to hardscape rather than planted. They are slow growers but extremely tough. The one weakness of anubias is that their leaves can develop algae due to their slow growth — position them in lower light areas of the tank.\n\nJava moss and other mosses create natural-looking carpets on rocks, driftwood, and substrate. Easy, undemanding, and beloved by fish fry and shrimp.\n\nHornwort and water sprite are fast-growing stem plants that absorb nutrients rapidly — excellent for new tanks as they help control algae by outcompeting it for nutrients. They can be floated or planted.\n\nCryptocorynes (crypts) are popular rosette plants that come in many sizes and colors. They are slow to establish and may melt back when first planted — this is normal. Once rooted they are tough and grow steadily.\n\nAmazon sword plants make dramatic background plants for larger tanks. They feed heavily from the substrate and benefit from root tabs placed under them.`
  },
  {
    emoji: '🍽️',
    title: 'Fertilization — feeding your plants',
    content: `Plants need more than just light and CO2 — they need a range of macro and micronutrients to grow healthily. In a low-tech tank without CO2, fertilization is the primary way to support plant growth.\n\nLiquid fertilizers added to the water column supply nutrients that plants absorb through their leaves. Seachem Flourish Comprehensive is a widely used all-in-one micronutrient supplement. Dose according to the instructions, usually weekly.\n\nFor heavy root feeders, substrate fertilizer tabs pushed into the substrate near the roots provide a slow-release nutrient source. Seachem Flourish Tabs are popular and effective — replace every 3 to 6 months.\n\nNitrate and phosphate from fish waste actually serve as natural fertilizer for plants. This is one reason why planted tanks and fish work so well together — the fish provide fertilizer and the plants process the waste. A lightly stocked planted tank may need additional nitrogen and phosphate supplementation if plants show deficiency signs.\n\nPlant deficiency signs to watch for: yellowing leaves often indicates iron or nitrogen deficiency. Holes in leaves can indicate potassium deficiency. Slow, stunted growth in good lighting often indicates CO2 or nutrient limitation. Addressing deficiencies promptly prevents plants from becoming unhealthy enough to lose ground to algae.`
  },
  {
    emoji: '🐠',
    title: 'Best fish for planted tanks',
    content: `Not all fish are suitable for planted tanks — some will uproot, eat, or destroy your carefully cultivated plants. Choosing the right fish makes the difference between a thriving planted display and constant replanting frustration.\n\nSmall peaceful schooling fish are ideal planted tank inhabitants. Neon tetras, cardinal tetras, ember tetras, and rummy nose tetras are classic choices — they look stunning against green plants and don't disturb the planting. Harlequin rasboras and chili rasboras are similarly excellent.\n\nDwarf corydoras like corydoras habrosus and pygmy corydoras are wonderful planted tank bottom dwellers — small enough not to uproot plants and fascinating to watch as they scurry across the substrate.\n\nDwarf shrimp — particularly neocaridina shrimp like cherry shrimp and blue dream shrimp — thrive in planted tanks and help control algae by grazing on it constantly. They're also beautiful and a natural fit with lush planted setups.\n\nFish to avoid in planted tanks: goldfish and large cichlids will eat and uproot plants relentlessly. Larger plecos graze on and damage plant leaves. Crayfish will systematically destroy plants. Silver dollars eat aquatic plants as their primary diet.\n\nBettas actually work well in planted tanks — the plants provide hiding spots and resting places they love, and the gentle filtered environment suits their preference for low current.`
  },
]

export default function PlantedTankGuide() {
  return (
    <>
      <Head>
        <title>Planted Tank Guide — Pond Pal</title>
        <meta name="description" content="How to set up a thriving planted freshwater aquarium — lighting, substrate, CO2, best beginner plants, fertilization, and compatible fish." />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>

      <div className="tool-hero">
        <h1>Planted Tank Guide</h1>
        <p>How to grow a beautiful planted aquarium — lighting, substrate, plants, and the fish that go with them</p>
      </div>

      <div style={{ maxWidth: '780px', margin: '0 auto', padding: '3rem 2rem' }}>
        <div style={{ display: 'flex', gap: '8px', marginBottom: '2rem', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '11px', fontWeight: 500, padding: '4px 12px', borderRadius: '20px', background: '#ffdcc9', color: '#c04a10' }}>Intermediate</span>
          <span style={{ fontSize: '11px', color: '#5a7a82', padding: '4px 0' }}>13 min read</span>
        </div>

        <div style={{ background: '#faeeda', borderRadius: '12px', padding: '1rem 1.25rem', marginBottom: '2rem', fontSize: '14px', color: '#854F0B' }}>
          <strong>Quick reference:</strong> Quality LED light on 8-hour timer. Nutrient-rich substrate or capped soil. Easy starter plants — java fern, anubias, cryptocorynes. Liquid fertilizer weekly. CO2 optional for beginners. Small peaceful fish only.
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
          <p style={{ fontSize: '13px', fontWeight: 500, color: '#1a2e35', marginBottom: '1rem' }}>🛒 Recommended for planted tanks</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
            {[
              { name: 'Seachem Flourish', desc: 'Complete plant micronutrient supplement', url: 'https://www.amazon.com/dp/B00025YJ8E?tag=pondpal20-20' },
              { name: 'Seachem Flourish Tabs', desc: 'Root fertilizer tabs for heavy feeders', url: 'https://www.amazon.com/dp/B00025YJ8O?tag=pondpal20-20' },
              { name: 'Seachem Prime', desc: 'Essential water conditioner', url: 'https://www.amazon.com/dp/B00025694O?tag=pondpal20-20' },
              { name: 'API Master Test Kit', desc: 'Monitor water quality in planted tanks', url: 'https://www.amazon.com/dp/B000255NCI?tag=pondpal20-20' },
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
          <h3 style={{ color: '#fff', marginBottom: '0.75rem', fontSize: '1.1rem' }}>Check your planted tank water quality</h3>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', marginBottom: '1.5rem' }}>Healthy plants need healthy water. Test your parameters for an instant AI diagnosis.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/water-chemistry" className="btn-primary">Test My Water</Link>
            <Link href="/tank-checker" className="btn-outline">Check My Tank</Link>
          </div>
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
