import Head from 'next/head'
import Link from 'next/link'

export default function NitritePoisoning() {
  return (
    <>
      <Head>
        <title>Nitrite Poisoning in Fish — Signs and Treatment — Pond Pal</title>
        <meta name="description" content="How to recognize nitrite poisoning in fish, why it's dangerous, and how to treat it fast — including why aquarium salt is part of the emergency fix." />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>

      <div className="tool-hero" style={{ background: 'linear-gradient(135deg, #3d0a0a 0%, #6b1a1a 50%, #8b2a2a 100%)' }}>
        <h1>Nitrite Poisoning in Fish</h1>
        <p>Signs, dangers, and how to treat it before it's too late</p>
      </div>

      <div style={{ maxWidth: '780px', margin: '0 auto', padding: '3rem 2rem' }}>

        <div style={{ display: 'flex', gap: '8px', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '11px', fontWeight: 500, padding: '4px 12px', borderRadius: '20px', background: '#FCEBEB', color: '#A32D2D' }}>Water Quality</span>
          <span style={{ fontSize: '11px', color: '#5a7a82', padding: '4px 0' }}>July 2026</span>
          <span style={{ fontSize: '11px', color: '#5a7a82', padding: '4px 0' }}>9 min read</span>
        </div>

        <div style={{ background: '#FCEBEB', borderRadius: '12px', padding: '1rem 1.25rem', marginBottom: '2rem', border: '1px solid rgba(163,45,45,0.2)' }}>
          <p style={{ fontSize: '14px', color: '#A32D2D', fontWeight: 500 }}>⚠️ If your fish are gasping, lethargic, or showing tan or brown gills, test for nitrite immediately. If it's elevated, do a partial water change and add aquarium salt (see below) right away, then keep reading.</p>
        </div>

        {[
          {
            heading: null,
            text: `Nitrite is the second stage of the nitrogen cycle — less talked about than ammonia, but just as capable of killing fish. It tends to catch people off guard because it often spikes a week or two after an ammonia spike has already been dealt with, once ammonia-eating bacteria are established but nitrite-eating bacteria haven't caught up yet.\n\nThis guide covers what nitrite is, why it's dangerous, how to recognize poisoning, and exactly how to treat it.`
          },
          {
            heading: 'What is nitrite and where does it come from?',
            text: `In a healthy nitrogen cycle, one group of bacteria converts ammonia into nitrite, and a second group converts that nitrite into the much less harmful nitrate. Nitrite is the middle step — and if the second group of bacteria hasn't built up enough yet, nitrite accumulates in the meantime.\n\nThis is why nitrite spikes are so common during the second phase of cycling a new tank or pond, and why they can also reappear after a partial filter crash even once you thought your system was established.`
          },
          {
            heading: 'Why nitrite is dangerous',
            text: `Nitrite enters a fish's bloodstream through the gills and binds to hemoglobin, converting it into methemoglobin — a form that can't carry oxygen. This condition is commonly called "brown blood disease" because affected fish blood turns a visible brownish color instead of the normal red.\n\nThe practical effect is that fish suffocate even in water with plenty of dissolved oxygen, because their blood simply can't transport it anymore. This is why nitrite-poisoned fish gasp at the surface even when aeration looks completely fine.\n\nAs a rough guide: 0.5 ppm causes stress and gill irritation in most freshwater fish. 1 ppm and above starts causing real physiological damage. 3 ppm and above is life-threatening for most species within hours to a couple of days, faster in smaller or more sensitive fish.`
          },
          {
            heading: 'Signs of nitrite poisoning',
            text: `Gasping at the water surface is the hallmark sign, and it can look identical to low-oxygen distress — testing is the only way to tell them apart.\n\nRapid gill movement, faster than normal breathing, often appears before more obvious symptoms.\n\nTan, brown, or grey gills instead of the healthy pink or red color are a classic and fairly specific sign of methemoglobin buildup, though they can be hard to spot without close inspection.\n\nLethargy and clamped fins are general stress signs shared with ammonia poisoning and several other water quality problems.\n\nLoss of appetite and hiding are common as fish become increasingly stressed.`
          },
          {
            heading: 'How to treat nitrite poisoning fast',
            text: `Step one: test to confirm nitrite is actually the problem — the symptoms overlap heavily with ammonia poisoning and low oxygen, so don't guess.\n\nStep two: do a 25–30% water change with dechlorinated water to dilute the nitrite concentration.\n\nStep three: add aquarium or pond salt (plain sodium chloride, not table salt with additives) at a rate of about 1–3 grams per liter (roughly 1 tablespoon per 5 gallons as a starting point for freshwater fish). The chloride ion competes with nitrite for uptake at the gills, effectively blocking further nitrite absorption. This is the single most effective emergency treatment for nitrite poisoning in freshwater systems. Note this isn't appropriate for scaleless fish or salt-sensitive species — check your specific fish's salt tolerance first.\n\nStep four: add Seachem Prime, which also temporarily detoxifies nitrite in addition to ammonia and chlorine, buying your bacteria time to catch up.\n\nStep five: increase aeration and stop feeding, exactly as with an ammonia spike — less waste production gives your system room to recover.\n\nStep six: retest daily and repeat water changes until nitrite reads zero. Don't add new salt with every water change — account for what's already in the water so you don't overshoot a safe concentration.`
          },
          {
            heading: 'How to prevent nitrite spikes',
            text: `Go slow when cycling a new tank or pond. Nitrite-eating bacteria are naturally slower to establish than ammonia-eating bacteria, so the second half of cycling is often where people get caught out after seeing ammonia drop and assuming they're in the clear.\n\nTest for both ammonia and nitrite weekly during the first two to three months of a new setup, not just one or the other.\n\nAdd fish gradually rather than fully stocking a new system at once, giving bacteria time to keep pace with the growing bioload.\n\nAvoid disturbing all your filter media at once during cleaning — always leave the bulk of your bacterial colonies undisturbed.`
          },
        ].map((s, i) => (
          <div key={i} style={{ marginBottom: '2rem' }}>
            {s.heading && <h2 style={{ fontSize: '1.3rem', marginBottom: '0.875rem', color: '#062d3a' }}>{s.heading}</h2>}
            {s.text.split('\n\n').map((para, j) => (
              <p key={j} style={{ fontSize: '15px', color: '#2a3f47', lineHeight: '1.85', marginBottom: '1rem' }}>{para}</p>
            ))}
            {i === 2 && (
              <div style={{ background: '#f0faf8', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1rem 0', border: '1px solid rgba(26,158,142,0.2)' }}>
                <p style={{ fontSize: '14px', color: '#0e6b6b', fontWeight: 500, marginBottom: '0.5rem' }}>🧪 Check your nitrite level right now</p>
                <p style={{ fontSize: '13px', color: '#2a3f47', marginBottom: '0.75rem' }}>Enter your readings for an instant AI diagnosis and specific treatment plan.</p>
                <Link href="/water-chemistry" className="btn-primary" style={{ fontSize: '13px', padding: '8px 18px' }}>Test My Water Free</Link>
              </div>
            )}
          </div>
        ))}

        <div style={{ background: '#fff', borderRadius: '14px', padding: '1.5rem', border: '1px solid rgba(0,0,0,0.07)', marginBottom: '2rem' }}>
          <p style={{ fontSize: '14px', fontWeight: 500, color: '#1a2e35', marginBottom: '1rem' }}>🛒 Products for nitrite emergencies</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
            {[
              { name: 'Seachem Prime', desc: 'Detoxifies nitrite, ammonia & chlorine', url: 'https://www.amazon.com/dp/B00025694O?tag=pondpal20-20' },
              { name: 'API Master Test Kit', desc: 'Accurate nitrite testing', url: 'https://www.amazon.com/dp/B000255NCI?tag=pondpal20-20' },
              { name: 'API Pond Master Test Kit', desc: 'Pond-specific water testing', url: 'https://www.amazon.com/dp/B0002IHNUO?tag=pondpal20-20' },
              { name: 'API Ammo Lock', desc: 'Also helps in combined ammonia/nitrite events', url: 'https://www.amazon.com/dp/B0002APNI8?tag=pondpal20-20' },
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
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', marginBottom: '1.5rem' }}>Enter your ammonia, nitrite and other readings for a personalized treatment plan from our AI.</p>
          <Link href="/water-chemistry" className="btn-primary">Test My Water Free</Link>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <Link href="/blog/how-often-water-changes" style={{ color: '#1a9e8e', fontSize: '14px' }}>← How often should you do water changes?</Link>
          <Link href="/blog/how-to-cycle-fish-tank" style={{ color: '#1a9e8e', fontSize: '14px' }}>Next: How to cycle a fish tank →</Link>
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
