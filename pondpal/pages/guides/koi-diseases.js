import Head from 'next/head'
import Link from 'next/link'

const diseases = [
  { name: 'Fin Rot', emoji: '🦭', severity: 'Moderate', cause: 'Bacterial infection, often triggered by poor water quality or injury', symptoms: 'Fins appear ragged, frayed, or disintegrating at the edges. May see redness at the base of fins. In advanced cases the fin tissue recedes toward the body.', treatment: 'Improve water quality first — this is almost always the root cause. Do a 25% water change. Treat with an antibacterial product such as Melafix or a veterinary antibiotic like Kanamycin for severe cases. Remove any sharp decorations that could be causing injury. Fins will regrow once the infection clears and water quality is maintained.' },
  { name: 'White Spot (Ich)', emoji: '⚪', severity: 'High', cause: 'Parasitic infection by Ichthyophthirius multifiliis', symptoms: 'Small white spots resembling grains of salt scattered across the body and fins. Fish may flash (rub against surfaces) and show clamped fins. Can be rapidly fatal if untreated in koi.', treatment: 'Raise water temperature gradually to 82–86°F if possible to accelerate the parasite life cycle. Treat with an ich-specific medication such as Ich-X or salt at 0.3% concentration. Treat for the full recommended course even after spots disappear, as the parasite has stages that are not visible on the fish. Remove carbon from your filter during treatment as it will absorb the medication.' },
  { name: 'Anchor Worm', emoji: '🪱', severity: 'Moderate', cause: 'Parasitic crustacean (Lernaea) that embeds in the skin', symptoms: 'Visible worm-like parasites protruding from the body, often with a forked tail visible. Red inflammation around the attachment point. Fish may flash or scratch against surfaces.', treatment: 'Remove visible anchor worms carefully with tweezers, twisting gently to remove the entire parasite. Treat the wound site with an antiseptic such as iodine or potassium permanganate. Treat the entire pond with Dimilin or a lernaea-specific treatment to kill larvae in the water. Repeat treatment after 7–10 days to catch any newly hatched larvae.' },
  { name: 'Ulcer Disease', emoji: '🔴', severity: 'High', cause: 'Bacterial infection (often Aeromonas), usually entering through wounds or after stress', symptoms: 'Open sores or craters on the body, often red-edged with white tissue visible at the center. Can appear suddenly and worsen rapidly. Fish may be lethargic and stop eating.', treatment: 'Ulcers require prompt treatment. Clean the wound by gently removing any dead tissue with a cotton swab and apply a topical antiseptic such as iodine directly to the wound. Improve water quality immediately. Severe cases require injection or oral antibiotics — consult a vet. Pond salt at 0.3% helps reduce osmotic stress. Catch early — ulcers that reach the muscle layer or organs have a poor prognosis.' },
  { name: 'Dropsy', emoji: '🎈', severity: 'Very High', cause: 'Bacterial infection affecting the kidneys, causing fluid accumulation', symptoms: 'Pinecone appearance — scales standing out from the body like a pinecone due to fluid buildup beneath them. The fish may also appear bloated. Often fatal by the time symptoms are visible.', treatment: 'Dropsy is one of the most difficult conditions to treat because it indicates severe internal organ damage. Isolate the affected fish immediately. Treat with antibiotics specifically targeting gram-negative bacteria such as Kanamycin or a veterinary prescription antibiotic. Add Epsom salt to the hospital tank at 1 teaspoon per 5 gallons to help draw out fluid. Unfortunately, the prognosis for full-blown dropsy is poor — early detection and treatment give the best chance of survival.' },
  { name: 'Flukes', emoji: '🔬', severity: 'Moderate', cause: 'Microscopic parasitic flatworms (Gyrodactylus or Dactylogyrus)', symptoms: 'Fish scratching and flashing, increased mucus production giving a grayish sheen to the skin, clamped fins, and rapid gill movement indicating gill flukes. Not visible to the naked eye — requires microscope confirmation for certainty.', treatment: 'Treat with Praziquantel — it is the most effective and safest treatment for flukes in koi. Available as a pond treatment or medicated food. Two treatments 7 days apart are recommended as Prazi does not kill eggs. Salt at 0.3% can provide some relief but will not fully eliminate flukes. Flukes are extremely common and often present at low levels without causing visible symptoms — treatment is warranted when fish show clear signs of distress.' },
  { name: 'Swim Bladder Issues', emoji: '🐟', severity: 'Variable', cause: 'Infection, injury, genetic issue, or constipation', symptoms: 'Fish swimming sideways, upside down, or struggling to maintain position in the water column. May float helplessly at the surface or sink to the bottom.', treatment: 'First, stop feeding for 3–5 days — constipation is a surprisingly common cause and fasting often resolves it. If feeding resumes, offer a pea with the outer skin removed as a laxative. Check water quality and temperature. If the issue persists after fasting, bacterial infection of the swim bladder is possible — consult a vet. Genetic swim bladder issues in fancy koi varieties are unfortunately not treatable but affected fish can sometimes still live reasonable quality lives.' },
]

export default function KoiDiseases() {
  return (
    <>
      <Head>
        <title>Common Koi Diseases — Pond Pal</title>
        <meta name="description" content="How to identify and treat the most common koi diseases — fin rot, ich, anchor worm, ulcers, dropsy, flukes, and swim bladder problems." />
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
        <h1>Common Koi Diseases</h1>
        <p>How to spot health problems early and what to do about them</p>
      </div>

      <div style={{ maxWidth: '780px', margin: '0 auto', padding: '3rem 2rem' }}>

        <div style={{ background: '#faeeda', borderRadius: '12px', padding: '1rem 1.25rem', marginBottom: '2rem', fontSize: '14px', color: '#854F0B' }}>
          <strong>Important:</strong> The best treatment for most koi diseases is prevention. Good water quality, a healthy diet, and avoiding stress eliminates the conditions in which most diseases take hold. When in doubt, check your water first.
        </div>

        <div style={{ display: 'flex', gap: '8px', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '11px', fontWeight: 500, padding: '4px 12px', borderRadius: '20px', background: '#ffdcc9', color: '#c04a10' }}>Intermediate</span>
          <span style={{ fontSize: '11px', color: '#5a7a82', padding: '4px 0' }}>15 min read</span>
        </div>

        {diseases.map((d, i) => (
          <div key={i} style={{ background: '#fff', borderRadius: '14px', padding: '1.75rem', border: '1px solid rgba(0,0,0,0.07)', marginBottom: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <h2 style={{ fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span>{d.emoji}</span> {d.name}
              </h2>
              <span style={{
                fontSize: '11px', fontWeight: 500, padding: '3px 10px', borderRadius: '20px',
                background: d.severity === 'Very High' ? '#FCEBEB' : d.severity === 'High' ? '#ffdcc9' : '#faeeda',
                color: d.severity === 'Very High' ? '#A32D2D' : d.severity === 'High' ? '#c04a10' : '#854F0B'
              }}>
                {d.severity} severity
              </span>
            </div>
            <div style={{ display: 'grid', gap: '0.75rem' }}>
              <div>
                <p style={{ fontSize: '11px', fontWeight: 500, color: '#5a7a82', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '3px' }}>Cause</p>
                <p style={{ fontSize: '14px', color: '#2a3f47', lineHeight: '1.6' }}>{d.cause}</p>
              </div>
              <div>
                <p style={{ fontSize: '11px', fontWeight: 500, color: '#5a7a82', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '3px' }}>Symptoms</p>
                <p style={{ fontSize: '14px', color: '#2a3f47', lineHeight: '1.6' }}>{d.symptoms}</p>
              </div>
              <div style={{ background: '#f0faf8', borderRadius: '8px', padding: '0.875rem' }}>
                <p style={{ fontSize: '11px', fontWeight: 500, color: '#0e6b6b', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '3px' }}>Treatment</p>
                <p style={{ fontSize: '14px', color: '#2a3f47', lineHeight: '1.6' }}>{d.treatment}</p>
              </div>
            </div>
          </div>
        ))}

        <div style={{ background: '#062d3a', borderRadius: '14px', padding: '2rem', marginTop: '2rem', textAlign: 'center' }}>
          <h3 style={{ color: '#fff', marginBottom: '0.75rem', fontSize: '1.2rem' }}>Prevention starts with good water</h3>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', marginBottom: '1.5rem' }}>Most koi diseases are triggered by poor water conditions. Check yours now.</p>
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
