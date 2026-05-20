import Head from 'next/head'
import Link from 'next/link'

export default function AmmoniaSpike() {
  return (
    <>
      <Head>
        <title>Koi Pond Ammonia Spike — Causes, Dangers and How to Fix It Fast — Pond Pal</title>
        <meta name="description" content="Ammonia is the number one killer in koi ponds. Learn how to identify an ammonia spike, fix it fast, and prevent it from happening again." />
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
        </ul>
      </nav>

      <div className="tool-hero" style={{ background: 'linear-gradient(135deg, #3d0a0a 0%, #6b1a1a 50%, #8b2a2a 100%)' }}>
        <h1>Koi Pond Ammonia Spike</h1>
        <p>Causes, dangers, and how to fix it fast before you lose fish</p>
      </div>

      <div style={{ maxWidth: '780px', margin: '0 auto', padding: '3rem 2rem' }}>

        <div style={{ display: 'flex', gap: '8px', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '11px', fontWeight: 500, padding: '4px 12px', borderRadius: '20px', background: '#FCEBEB', color: '#A32D2D' }}>Water Quality</span>
          <span style={{ fontSize: '11px', color: '#5a7a82', padding: '4px 0' }}>May 2026</span>
          <span style={{ fontSize: '11px', color: '#5a7a82', padding: '4px 0' }}>10 min read</span>
        </div>

        <div style={{ background: '#FCEBEB', borderRadius: '12px', padding: '1rem 1.25rem', marginBottom: '2rem', border: '1px solid rgba(163,45,45,0.2)' }}>
          <p style={{ fontSize: '14px', color: '#A32D2D', fontWeight: 500 }}>⚠️ If your fish are gasping at the surface right now, do a 25% water change immediately using dechlorinated water. Then come back and read this article to understand what happened and prevent it recurring.</p>
        </div>

        {[
          {
            heading: null,
            text: `Ammonia is the single most common cause of koi death, and the frustrating thing is that it's completely invisible. Your pond can look crystal clear while ammonia is quietly climbing to lethal levels. By the time fish show visible signs of distress, the situation is often already serious.\n\nThis guide explains everything you need to know — what causes ammonia spikes, how to recognize them, how to fix them fast, and how to build a pond that resists them in the future.`
          },
          {
            heading: 'What is ammonia and where does it come from?',
            text: `Ammonia is a nitrogen compound produced constantly in your pond. Every time a koi breathes, urinates, or produces waste, ammonia enters the water. Uneaten food and decomposing plant matter also break down into ammonia.\n\nIn a healthy, established pond this ammonia is processed almost as fast as it's produced by colonies of beneficial bacteria living in your filter media. These bacteria convert ammonia first into nitrite and then into the relatively harmless nitrate — a process called the nitrogen cycle.\n\nAn ammonia spike occurs when ammonia is being produced faster than your bacteria can process it, causing levels to build to dangerous concentrations.`
          },
          {
            heading: 'How dangerous is ammonia to koi?',
            text: `Very dangerous — and faster acting than most people realize. At 0.25 ppm, koi experience gill irritation and stress. Their immune systems begin to suppress, making them vulnerable to disease. At 0.5 ppm, visible behavioral changes appear. At 1 ppm and above, gill damage occurs rapidly. At 2 ppm and above, ammonia is potentially fatal within hours depending on pH and temperature.\n\nHigh pH makes ammonia significantly more toxic. At pH 8.0, ammonia is roughly 10 times more toxic than at pH 7.0 — which is why pond keepers need to monitor both parameters together, not just one in isolation.\n\nTemperature also plays a role. Warmer water increases the toxicity of ammonia, which is why summer is the most dangerous season for ammonia spikes.`
          },
          {
            heading: 'Common causes of ammonia spikes',
            text: `New pond syndrome is the most common cause. A brand new pond has no established bacterial colonies to process ammonia. The tank cycles over 4 to 8 weeks as bacteria populations build up, during which ammonia and nitrite will spike significantly. Never fully stock a new pond — add fish slowly and test constantly.\n\nFilter crash happens when beneficial bacteria are accidentally killed, usually by cleaning filter media in tap water (chlorine kills bacteria), using antibiotics in the pond, or running the filter dry. After a filter crash your pond is essentially a new pond again.\n\nOverfeeding is a surprisingly common cause. Uneaten food decomposes rapidly into ammonia. The five minute rule exists for a reason — if food is sinking to the bottom untouched, you're adding ammonia directly to your pond with every feeding.\n\nOverstocking puts more waste into the pond than the filter can handle. This is a slow creep problem as fish grow, which is why stocking levels that seemed fine last year can cause problems this year.\n\nDead fish left in the pond decompose rapidly and release a massive ammonia pulse. Check your fish daily and remove any dead fish immediately.\n\nSeasonal changes, particularly spring, can trigger spikes as filter bacteria wake up more slowly than the fish after winter.`
          },
          {
            heading: 'Signs your koi have ammonia poisoning',
            text: `Gasping at the surface is the most alarming sign, though it can also indicate low dissolved oxygen. If your fish are congregating at the surface, especially near waterfalls or air stones where oxygen is highest, test your water immediately.\n\nRed streaking on the body or fins indicates hemorrhaging from ammonia damage to the blood vessels. This is a serious sign requiring immediate action.\n\nClamped fins, where the fish holds its fins tightly against its body rather than spreading them naturally, indicates stress and discomfort.\n\nLethargy and loss of appetite are early warning signs. Koi that normally rush to greet you at feeding time and suddenly show no interest in food are telling you something is wrong.\n\nFlashing, where fish rub against the sides or bottom of the pond, can indicate gill irritation from ammonia.`
          },
          {
            heading: 'How to fix an ammonia spike fast',
            text: `Step one: test your water to confirm ammonia is the problem and measure the severity. Use a reliable liquid test kit rather than test strips for accurate readings.\n\nStep two: do an immediate 25 to 30 percent water change using dechlorinated water at a similar temperature to your pond. This physically dilutes the ammonia concentration. Do not do a larger water change in one go — a massive water change can stress fish through sudden temperature or chemistry shifts.\n\nStep three: add Seachem Prime at double the normal dose. Prime is a water conditioner that not only removes chlorine from tap water but also temporarily detoxifies ammonia for 24 to 48 hours, giving your filter time to process it. This is the best emergency treatment available.\n\nStep four: stop feeding completely. Every meal adds more ammonia to an already struggling system. Koi can go two weeks without food without any harm — skipping a few days is nothing.\n\nStep five: increase aeration. Run all your pumps, waterfalls, and air stones at full capacity. Ammonia stressed fish need maximum oxygen.\n\nStep six: do not clean your filter. Your bacterial colonies are what will save your fish — disturbing them now is the worst thing you can do.\n\nStep seven: retest after 24 hours. If ammonia is still rising, do another 25 percent water change and repeat daily until readings drop to zero.`
          },
          {
            heading: 'How to prevent ammonia spikes',
            text: `Test weekly, not just when something looks wrong. By the time your fish show symptoms, the damage is done. A five minute water test every week catches problems early.\n\nNever clean all your filter media at once. If you have multiple filter chambers, clean one at a time and always use old pond water, never tap water. This preserves enough bacteria to keep the cycle running.\n\nDon't overfeed. Feed small amounts, only what fish eat in five minutes, and remove any uneaten food.\n\nStock conservatively. Use the 250 gallon per koi guideline and don't be tempted to add more fish until your system has proven it can handle the current load.\n\nKeep your filter running 24 hours a day, 365 days a year. Beneficial bacteria begin dying within hours if flow stops. Never turn your filter off, even overnight or in winter.\n\nIf you use any pond treatments or medications, research their impact on beneficial bacteria first. Many treatments are bactericidal and will crash your filter.`
          },
        ].map((s, i) => (
          <div key={i} style={{ marginBottom: '2rem' }}>
            {s.heading && <h2 style={{ fontSize: '1.3rem', marginBottom: '0.875rem', color: '#062d3a' }}>{s.heading}</h2>}
            {s.text.split('\n\n').map((para, j) => (
              <p key={j} style={{ fontSize: '15px', color: '#2a3f47', lineHeight: '1.85', marginBottom: '1rem' }}>{para}</p>
            ))}
            {i === 2 && (
              <div style={{ background: '#f0faf8', borderRadius: '10px', padding: '1rem 1.25rem', margin: '1rem 0', border: '1px solid rgba(26,158,142,0.2)' }}>
                <p style={{ fontSize: '14px', color: '#0e6b6b', fontWeight: 500, marginBottom: '0.5rem' }}>🧪 Check your ammonia level right now</p>
                <p style={{ fontSize: '13px', color: '#2a3f47', marginBottom: '0.75rem' }}>Enter your readings for an instant AI diagnosis and specific treatment plan.</p>
                <Link href="/water-chemistry" className="btn-primary" style={{ fontSize: '13px', padding: '8px 18px' }}>Test My Water Free</Link>
              </div>
            )}
          </div>
        ))}

        <div style={{ background: '#fff', borderRadius: '14px', padding: '1.5rem', border: '1px solid rgba(0,0,0,0.07)', marginBottom: '2rem' }}>
          <p style={{ fontSize: '14px', fontWeight: 500, color: '#1a2e35', marginBottom: '1rem' }}>🛒 Products every koi keeper needs for ammonia emergencies</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
            {[
              { name: 'Seachem Prime', desc: 'Detoxifies ammonia for 24-48 hrs', url: 'https://www.amazon.com/dp/B00025694O?tag=pondpal20-20' },
              { name: 'API Master Test Kit', desc: 'Accurate ammonia & nitrite testing', url: 'https://www.amazon.com/dp/B000255NCI?tag=pondpal20-20' },
              { name: 'API Pond Master Test Kit', desc: 'Pond-specific water testing', url: 'https://www.amazon.com/dp/B0002IHNUO?tag=pondpal20-20' },
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
          <h3 style={{ color: '#fff', marginBottom: '0.75rem', fontSize: '1.1rem' }}>Get an instant diagnosis of your water</h3>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', marginBottom: '1.5rem' }}>Enter your ammonia and other readings for a personalized treatment plan from our AI.</p>
          <Link href="/water-chemistry" className="btn-primary">Test My Water Free</Link>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <Link href="/blog/how-many-koi-1000-gallon-pond" style={{ color: '#1a9e8e', fontSize: '14px' }}>← How many koi in a 1000 gallon pond?</Link>
          <Link href="/blog/best-koi-food-every-season" style={{ color: '#1a9e8e', fontSize: '14px' }}>Next: Best koi food by season →</Link>
        </div>
      </div>

      <footer className="footer">
        <p>🐟 Pond Pal — Friendly fish care, powered by AI</p>
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
