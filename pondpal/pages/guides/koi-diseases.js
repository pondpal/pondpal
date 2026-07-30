import Head from 'next/head'
import Link from 'next/link'

function ProductGrid({ items, title }) {
  return (
    <div style={{ background: '#fff', borderRadius: '14px', padding: '1.5rem', border: '1px solid rgba(0,0,0,0.07)', margin: '1.5rem 0' }}>
      <p style={{ fontSize: '13px', fontWeight: 500, color: '#1a2e35', marginBottom: '1rem' }}>🛒 {title}</p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
        {items.map((p, i) => (
          <a key={i} href={p.url} target="_blank" rel="noopener noreferrer"
            style={{ textDecoration: 'none', padding: '0.75rem', background: '#f8fffe', borderRadius: '8px', border: '1px solid rgba(26,158,142,0.2)', display: 'block' }}>
            <p style={{ fontSize: '13px', fontWeight: 500, color: '#1a2e35', marginBottom: '2px' }}>{p.name}</p>
            <p style={{ fontSize: '11px', color: '#5a7a82' }}>{p.desc}</p>
            <p style={{ fontSize: '11px', color: '#1a9e8e', marginTop: '4px' }}>View on Amazon →</p>
          </a>
        ))}
      </div>
      <p style={{ fontSize: '10px', color: '#5a7a82', marginTop: '0.75rem' }}>As an Amazon Associate, Pond Pal earns from qualifying purchases.</p>
    </div>
  )
}

const diseases = [
  { name: 'Fin Rot', emoji: '🦭', severity: 'Moderate', cause: 'Bacterial infection, often triggered by poor water quality or injury', symptoms: 'Fins appear ragged, frayed, or disintegrating at the edges. May see redness at the base of fins. In advanced cases the fin tissue recedes toward the body.', treatment: 'Improve water quality first — this is almost always the root cause. Do a 25% water change. Treat with an antibacterial product such as Melafix or a veterinary antibiotic like Kanamycin for severe cases. Remove any sharp decorations that could be causing injury. Fins will regrow once the infection clears and water quality is maintained.' },
  { name: 'White Spot (Ich)', emoji: '⚪', severity: 'High', cause: 'Parasitic infection by Ichthyophthirius multifiliis', symptoms: 'Small white spots resembling grains of salt scattered across the body and fins. Fish may flash (rub against surfaces) and show clamped fins. Can be rapidly fatal if untreated in koi.', treatment: 'Raise water temperature gradually to 82–86°F if possible to accelerate the parasite life cycle. Treat with Ich-X or salt at 0.3% concentration. Treat for the full recommended course even after spots disappear. Remove carbon from your filter during treatment as it will absorb the medication.' },
  { name: 'Anchor Worm', emoji: '🪱', severity: 'Moderate', cause: 'Parasitic crustacean (Lernaea) that embeds in the skin', symptoms: 'Visible worm-like parasites protruding from the body, often with a forked tail visible. Red inflammation around the attachment point. Fish may flash or scratch against surfaces.', treatment: 'Remove visible anchor worms carefully with tweezers, twisting gently to remove the entire parasite. Treat the wound site with iodine or potassium permanganate. Treat the entire pond with Dimilin or a lernaea-specific treatment to kill larvae in the water. Repeat treatment after 7–10 days.' },
  { name: 'Ulcer Disease', emoji: '🔴', severity: 'High', cause: 'Bacterial infection (often Aeromonas), usually entering through wounds or after stress', symptoms: 'Open sores or craters on the body, often red-edged with white tissue visible at the center. Can appear suddenly and worsen rapidly. Fish may be lethargic and stop eating.', treatment: 'Ulcers require prompt treatment. Clean the wound by gently removing any dead tissue with a cotton swab and apply iodine directly to the wound. Improve water quality immediately. Severe cases require injection or oral antibiotics — consult a vet. Pond salt at 0.3% helps reduce osmotic stress.' },
  { name: 'Dropsy', emoji: '🎈', severity: 'Very High', cause: 'Bacterial infection affecting the kidneys, causing fluid accumulation', symptoms: 'Pinecone appearance — scales standing out from the body like a pinecone due to fluid buildup beneath them. The fish may also appear bloated. Often fatal by the time symptoms are visible.', treatment: 'Isolate the affected fish immediately. Treat with antibiotics targeting gram-negative bacteria such as Kanamycin or a veterinary prescription antibiotic. Add Epsom salt to the hospital tank at 1 teaspoon per 5 gallons to help draw out fluid. Unfortunately, the prognosis for full-blown dropsy is poor — early detection gives the best chance.' },
  { name: 'Flukes', emoji: '🔬', severity: 'Moderate', cause: 'Microscopic parasitic flatworms (Gyrodactylus or Dactylogyrus)', symptoms: 'Fish scratching and flashing, increased mucus production giving a grayish sheen to the skin, clamped fins, and rapid gill movement indicating gill flukes. Not visible to the naked eye.', treatment: 'Treat with Praziquantel — it is the most effective and safest treatment for flukes in koi. Two treatments 7 days apart are recommended as Prazi does not kill eggs. Salt at 0.3% can provide some relief but will not fully eliminate flukes.' },
  { name: 'Swim Bladder Issues', emoji: '🐟', severity: 'Variable', cause: 'Infection, injury, genetic issue, or constipation', symptoms: 'Fish swimming sideways, upside down, or struggling to maintain position in the water column. May float helplessly at the surface or sink to the bottom.', treatment: 'First, stop feeding for 3–5 days — constipation is a surprisingly common cause and fasting often resolves it. If feeding resumes, offer a pea with the outer skin removed as a laxative. Check water quality and temperature. If the issue persists after fasting, bacterial infection of the swim bladder is possible — consult a vet.' },
  { name: 'Koi Herpesvirus (KHV)', emoji: '☣️', severity: 'Very High', cause: 'Highly contagious viral infection (Cyprinid herpesvirus 3), triggered when water temperature is in the 64–81°F range', symptoms: 'Sudden mass die-offs are the hallmark sign — often 80–100% of koi in an affected pond within 1–2 weeks. Look for severe gill damage (mottled, patchy, or necrotic-looking gills), sunken eyes, excess mucus or the opposite (very rough, dry-looking skin), and fish that suddenly stop eating across the whole pond, not just one individual.', treatment: 'There is no cure for KHV. If suspected, isolate the pond immediately — do not move fish, water, nets, or equipment between this pond and any other. Contact a fish health vet or your state aquatic health lab for testing; KHV is a reportable disease in many regions. Survivors become lifelong carriers even after symptoms clear, so any new koi from an affected pond should never be introduced elsewhere. Prevention is the only real defense: always quarantine new koi for a minimum of 4–6 weeks, ideally at 68–77°F where the virus is most likely to show itself, before adding them to an established pond.' },
  { name: 'Costia (Ichthyobodo)', emoji: '🦠', severity: 'Moderate', cause: 'Microscopic parasitic protozoan that thrives in stressed, overcrowded, or poor-quality water', symptoms: 'Excess mucus giving fish a grayish-blue sheen, especially around the head. Fish flash and rub against surfaces, clamp their fins, and become lethargic. Unlike ich, there are no visible spots — costia is only confirmed with a microscope skin scrape, though the mucus and behavior pattern are strong indicators.', treatment: 'Costia is very sensitive to salt — treat at 0.3% pond salt concentration for 10–14 days. Formalin-based treatments also work well where salt isn\'t suitable. Because costia thrives on stressed fish in poor water, always address the underlying water quality alongside treatment or it will return.' },
  { name: 'Columnaris (Cotton Wool Disease)', emoji: '🧵', severity: 'High', cause: 'Bacterial infection (Flavobacterium columnare), often confused with a fungal infection', symptoms: 'White or grayish cotton-like or fuzzy patches on the skin, fins, or especially around the mouth (sometimes called "mouth fungus," though it isn\'t a fungus at all). Can progress to fin and tail erosion. Spreads fast in warm water and stressed populations.', treatment: 'Treat with a columnaris-specific antibacterial such as Kanamycin or a potassium permanganate bath for localized cases. Reduce temperature slightly if possible, as columnaris progresses faster in warm water. Improve water quality and reduce stocking density — outbreaks are almost always linked to overcrowding or poor water conditions.' },
]

const quarantineSteps = [
  { step: '1. Set up a separate quarantine tank or pond', detail: 'Minimum 20–30 gallons for smaller koi, with its own filter, heater if needed, and equipment. Never share nets, siphons, or other tools between quarantine and your main pond without disinfecting them first.' },
  { step: '2. Quarantine for a minimum of 4–6 weeks', detail: 'Many serious diseases, including KHV, have incubation periods long enough that a shorter quarantine can miss them entirely. 6 weeks is safer than 2–4 for peace of mind on new stock.' },
  { step: '3. Hold quarantine temperature at 68–77°F', detail: 'This range is warm enough to bring out latent KHV symptoms if present, without being so warm that it stresses the fish unnecessarily.' },
  { step: '4. Test water daily for the first week, then 2–3 times weekly', detail: 'A new fish in a new tank is exactly the kind of bioload change that can trigger an ammonia or nitrite spike — catch it early.' },
  { step: '5. Watch closely and do not add new fish to the group during quarantine', detail: 'If you add a second new fish partway through, restart the clock — you want the full quarantine period with no new arrivals to be confident the group is healthy.' },
  { step: '6. Only move fish to your main pond after the full period with zero symptoms', detail: 'No flashing, no visible spots or patches, normal appetite throughout, and normal gill appearance.' },
]

export default function KoiDiseases() {
  return (
    <>
      <Head>
        <title>Common Koi Diseases — Pond Pal</title>
        <meta name="description" content="How to identify and treat the most common koi diseases — fin rot, ich, anchor worm, ulcers, dropsy, flukes, KHV, costia, columnaris, and swim bladder problems, plus a proper quarantine protocol." />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>

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
          <span style={{ fontSize: '11px', color: '#5a7a82', padding: '4px 0' }}>20 min read</span>
        </div>

        <div style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>🔒 Quarantine every new koi — no exceptions</h2>
          <p style={{ fontSize: '15px', color: '#2a3f47', lineHeight: '1.8', marginBottom: '1.25rem' }}>
            The single most effective disease-prevention step is one many keepers skip: quarantining every new koi before it ever touches your main pond. Diseases like KHV can sit silently in an apparently healthy fish for weeks before symptoms appear — by the time you'd notice something wrong in your main pond, every fish in it could already be exposed.
          </p>
          <div style={{ display: 'grid', gap: '0.75rem' }}>
            {quarantineSteps.map((q, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: '10px', padding: '1rem 1.25rem', border: '1px solid rgba(0,0,0,0.07)' }}>
                <p style={{ fontSize: '14px', fontWeight: 500, color: '#1a2e35', marginBottom: '4px' }}>{q.step}</p>
                <p style={{ fontSize: '13px', color: '#5a7a82', lineHeight: '1.6' }}>{q.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {diseases.map((d, i) => (
          <div key={i} style={{ background: '#fff', borderRadius: '14px', padding: '1.75rem', border: '1px solid rgba(0,0,0,0.07)', marginBottom: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <h2 style={{ fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span>{d.emoji}</span> {d.name}
              </h2>
              <span style={{ fontSize: '11px', fontWeight: 500, padding: '3px 10px', borderRadius: '20px',
                background: d.severity === 'Very High' ? '#FCEBEB' : d.severity === 'High' ? '#ffdcc9' : '#faeeda',
                color: d.severity === 'Very High' ? '#A32D2D' : d.severity === 'High' ? '#c04a10' : '#854F0B' }}>
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

        <div style={{ background: '#FCEBEB', borderRadius: '14px', padding: '1.75rem', border: '1px solid rgba(163,45,45,0.2)', marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.2rem', marginBottom: '0.875rem', color: '#A32D2D' }}>🩺 When to call a fish vet instead of treating at home</h2>
          <p style={{ fontSize: '14px', color: '#2a3f47', lineHeight: '1.7', marginBottom: '0.75rem' }}>
            Most koi diseases can be diagnosed and treated at home once you know what you're looking at. A few situations genuinely warrant a specialist:
          </p>
          <p style={{ fontSize: '14px', color: '#2a3f47', lineHeight: '1.7' }}>
            Sudden deaths across multiple fish in a short window, especially with gill damage — get a vet or aquatic health lab involved immediately given the possibility of KHV or another reportable pathogen. Symptoms that don't respond to a full, correctly-dosed course of the appropriate over-the-counter treatment. Advanced dropsy, severe ulcers, or anything requiring an injectable antibiotic, since dosing by weight matters and over-the-counter products won't cover it. Any disease outbreak in a valuable or show-quality koi, where the cost of a vet visit is easily justified. If you're ever unsure whether what you're seeing matches one of the conditions above, a clear photo and a description of symptoms is usually enough for a vet to advise by phone or email before you commit to a treatment plan.
          </p>
        </div>

        <ProductGrid
          title="Disease treatment kit — be prepared"
          items={[
            { name: 'API Pond Master Test Kit', desc: 'Test water first — disease often starts here', url: 'https://www.amazon.com/dp/B0002IHNUO?tag=pondpal20-20' },
            { name: 'Ich-X Treatment', desc: 'Highly effective ich treatment', url: 'https://www.amazon.com/dp/B00A4Y17YW?tag=pondpal20-20' },
            { name: 'API Melafix', desc: 'Antibacterial for fin rot and wounds', url: 'https://www.amazon.com/dp/B0002APNI8?tag=pondpal20-20' },
            { name: 'API General Cure', desc: 'Treats flukes and internal parasites', url: 'https://www.amazon.com/dp/B001F0QT1C?tag=pondpal20-20' },
          ]}
        />

        <div style={{ background: '#062d3a', borderRadius: '14px', padding: '2rem', textAlign: 'center' }}>
          <h3 style={{ color: '#fff', marginBottom: '0.75rem', fontSize: '1.2rem' }}>Prevention starts with good water</h3>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', marginBottom: '1.5rem' }}>Most koi diseases are triggered by poor water conditions. Check yours now.</p>
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
