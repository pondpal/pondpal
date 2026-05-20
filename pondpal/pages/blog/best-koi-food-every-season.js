import Head from 'next/head'
import Link from 'next/link'

const seasonalProducts = [
  {
    season: 'Spring & Autumn',
    color: '#d4f0ec',
    textColor: '#0e6b6b',
    products: [
      { name: 'Hikari Wheat Germ Koi Food', desc: 'Best wheat germ food for cool water', url: 'https://www.amazon.com/dp/B0002DHYDI?tag=pondpal20-20' },
      { name: 'Blue Ridge Wheat Germ', desc: 'Great value cool weather formula', url: 'https://www.amazon.com/dp/B002C026OY?tag=pondpal20-20' },
    ]
  },
  {
    season: 'Summer',
    color: '#faeeda',
    textColor: '#854F0B',
    products: [
      { name: 'Hikari Staple Koi Food', desc: 'Best everyday summer staple', url: 'https://www.amazon.com/dp/B0002562MK?tag=pondpal20-20' },
      { name: 'Hikari Gold Koi Food', desc: 'Premium color enhancing summer food', url: 'https://www.amazon.com/dp/B0002562OY?tag=pondpal20-20' },
    ]
  },
]

export default function BestKoiFood() {
  return (
    <>
      <Head>
        <title>Best Koi Food for Every Season — Complete Feeding Guide — Pond Pal</title>
        <meta name="description" content="What to feed koi in spring, summer, autumn and winter — with our top product picks, seasonal feeding schedules, and the one mistake that can kill your fish." />
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

      <div className="tool-hero">
        <h1>Best Koi Food for Every Season</h1>
        <p>A complete feeding guide with our top product picks for spring, summer, autumn and winter</p>
      </div>

      <div style={{ maxWidth: '780px', margin: '0 auto', padding: '3rem 2rem' }}>

        <div style={{ display: 'flex', gap: '8px', marginBottom: '2rem', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '11px', fontWeight: 500, padding: '4px 12px', borderRadius: '20px', background: '#faeeda', color: '#854F0B' }}>Feeding</span>
          <span style={{ fontSize: '11px', color: '#5a7a82', padding: '4px 0' }}>May 2026</span>
          <span style={{ fontSize: '11px', color: '#5a7a82', padding: '4px 0' }}>10 min read</span>
        </div>

        {[
          {
            heading: null,
            text: `Feeding koi sounds simple — throw some pellets in the pond and watch them go. But feeding your koi the right food at the right time of year is one of the most impactful things you can do for their health, growth, and longevity.\n\nGet it right and your koi will have vibrant colors, strong immune systems, and steady growth. Get it wrong — particularly by feeding the wrong food in cold water — and you can cause serious harm. This guide walks through everything you need to know season by season.`
          },
          {
            heading: 'Why feeding changes with the seasons',
            text: `Koi are cold-blooded animals, meaning their metabolism is directly tied to water temperature. In warm water their digestive systems run at full speed. In cold water, digestion slows to a crawl.\n\nThis matters because a koi's gut needs to fully process food before the next meal. In cold water, food moves through the digestive system very slowly. If you feed a high-protein food in cold water, it can sit undigested in the gut and begin to rot internally — causing infections, swim bladder problems, and in severe cases, death.\n\nDifferent foods are formulated with this in mind. Summer foods are high in protein and nutrients to support active growth. Cold weather foods use wheat germ as the primary ingredient — wheat germ is a carbohydrate-rich, easily digestible energy source that passes through the gut quickly even in cold water.`
          },
          {
            heading: '🌸 Spring feeding (water 50°F to 65°F)',
            text: `Spring is the most delicate feeding season. Your koi are coming out of their winter dormancy with weakened immune systems and digestive tracts that haven't processed food in months. Jumping straight to high-protein summer food is a common mistake that stresses fish during their most vulnerable period.\n\nStart with wheat germ food as soon as temperatures consistently reach 50°F. Feed small amounts once daily — far less than you'll feed in summer. Watch carefully that fish are actively eating and digesting before increasing portions.\n\nAs temperatures rise toward 65°F, you can gradually transition to staple food by mixing a small amount of staple in with the wheat germ over a week or two, slowly increasing the proportion of staple food.\n\nOur top spring pick: Hikari Wheat Germ Koi Food is consistently the most recommended option among experienced keepers. It's palatable, easy to digest, and floats well so you can monitor consumption easily.`
          },
          {
            heading: '☀️ Summer feeding (water above 65°F)',
            text: `Summer is when you can really invest in your koi. With their metabolism running at full speed, they can process high-protein foods efficiently and put the nutrients to work in growth and color development.\n\nFeed a quality staple or growth food two to three times daily in summer. The five minute rule is your guide — offer a moderate amount and remove anything uneaten after five minutes. Overfeeding in summer is the leading cause of ammonia spikes, so resist the temptation to dump in large amounts.\n\nFor color enhancement, a food containing astaxanthin or spirulina will intensify the reds, oranges, and whites in your koi during the months when their metabolism can actually use it. Color enhancing foods fed in cold water are essentially wasted.\n\nOur top summer picks: Hikari Staple for everyday feeding and Hikari Gold or Hikari Growth for keepers who want to maximize size and color during peak season.`
          },
          {
            heading: '🍂 Autumn feeding (water dropping below 65°F)',
            text: `Autumn is a transition season and requires a gradual shift back to wheat germ food as temperatures drop. Many keepers make the mistake of continuing summer food too long into autumn, and the fish go into winter with incompletely digested food in their guts.\n\nAs a general rule, switch back to wheat germ when water temperatures drop consistently below 65°F. Continue feeding once daily in decreasing amounts as temperatures fall further.\n\nBelow 55°F, reduce feeding to every two to three days. Watch carefully — if you notice food sitting on the surface uneaten for more than ten minutes, your fish aren't interested and you should remove it.\n\nAutumn is also a good time to add some higher-fat foods to help koi build up their fat reserves before winter. Some keepers add silkworm pupae or a specially formulated autumn conditioning food during this period.`
          },
          {
            heading: '❄️ Winter feeding (water below 50°F)',
            text: `Stop feeding entirely below 50°F. This is the single most important feeding rule in koi keeping and the one most often broken by well-meaning beginners who feel sorry for their fish.\n\nKoi do not need food in winter. Their metabolism has slowed so dramatically that they can survive for months on stored body fat. Feeding them in cold water doesn't help them — it harms them. Undigested food rotting in a koi's gut at low temperatures causes internal bacterial infections that can be fatal.\n\nWhen you see your koi hovering near the surface in winter, they are not hungry — they are simply responding to movement or light. Resist the urge to feed them.\n\nThe safest approach is to stop feeding when temperatures drop to 50°F and don't resume until temperatures are reliably above 50°F in spring.`
          },
          {
            heading: 'Understanding koi food ingredients',
            text: `Not all koi food is equal and understanding what to look for on the label helps you make better choices.\n\nProtein content is the most important number. Quality summer staple food should contain 30 to 36 percent protein from good sources like fish meal, shrimp meal, or spirulina. Avoid foods where the primary protein source is low-quality fillers like soy or corn.\n\nWheat germ percentage matters for cold water foods. A true cold water formula should list wheat germ as the primary or one of the primary ingredients, not just include a token amount.\n\nPellet size should match your fish. Small pellets for fish under 6 inches, medium for 6 to 12 inches, large for fish over 12 inches. Fish that have to struggle with oversized pellets eat less efficiently and create more waste.\n\nFloating versus sinking pellets — floating pellets are preferred by most keepers because you can see exactly how much the fish are eating and remove uneaten food easily. Sinking pellets can accumulate unseen on the bottom and cause ammonia spikes.`
          },
          {
            heading: 'The bottom line on koi feeding',
            text: `Match the food to the temperature. Wheat germ below 65°F, quality staple above 65°F, nothing below 50°F. That single guideline, followed consistently, will make a bigger difference to your koi's health than almost anything else you do.\n\nFeed little and often rather than one large daily feeding. Monitor your fish during every feeding — healthy koi should be eager and competitive at the surface. Loss of appetite is almost always the first sign something is wrong, and catching it early can save a fish's life.\n\nInvest in quality food. The difference in price between a budget koi food and a quality brand like Hikari is small compared to the cost of treating sick fish or the loss of a valuable koi.`
          },
        ].map((s, i) => (
          <div key={i} style={{ marginBottom: '2rem' }}>
            {s.heading && <h2 style={{ fontSize: '1.3rem', marginBottom: '0.875rem', color: '#062d3a' }}>{s.heading}</h2>}
            {s.text.split('\n\n').map((para, j) => (
              <p key={j} style={{ fontSize: '15px', color: '#2a3f47', lineHeight: '1.85', marginBottom: '1rem' }}>{para}</p>
            ))}
          </div>
        ))}

        {seasonalProducts.map((season, i) => (
          <div key={i} style={{ background: '#fff', borderRadius: '14px', padding: '1.5rem', border: '1px solid rgba(0,0,0,0.07)', marginBottom: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1rem' }}>
              <span style={{ fontSize: '11px', fontWeight: 500, padding: '3px 10px', borderRadius: '20px', background: season.color, color: season.textColor }}>{season.season}</span>
              <span style={{ fontSize: '13px', fontWeight: 500, color: '#1a2e35' }}>Our top picks</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
              {season.products.map((p, j) => (
                <a key={j} href={p.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', padding: '0.75rem', background: '#f8fffe', borderRadius: '8px', border: '1px solid rgba(26,158,142,0.2)', display: 'block' }}>
                  <p style={{ fontSize: '13px', fontWeight: 500, color: '#1a2e35', marginBottom: '2px' }}>{p.name}</p>
                  <p style={{ fontSize: '11px', color: '#5a7a82' }}>{p.desc}</p>
                  <p style={{ fontSize: '11px', color: '#1a9e8e', marginTop: '4px' }}>View on Amazon →</p>
                </a>
              ))}
            </div>
          </div>
        ))}

        <p style={{ fontSize: '11px', color: '#5a7a82', marginBottom: '2rem', textAlign: 'center' }}>As an Amazon Associate, Pond Pal earns from qualifying purchases.</p>

        <div style={{ background: '#062d3a', borderRadius: '14px', padding: '2rem', textAlign: 'center', marginBottom: '2rem' }}>
          <h3 style={{ color: '#fff', marginBottom: '0.75rem', fontSize: '1.1rem' }}>Is your water handling the feeding load?</h3>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', marginBottom: '1.5rem' }}>More food means more waste. Check your ammonia and nitrate levels to make sure your pond is keeping up.</p>
          <Link href="/water-chemistry" className="btn-primary">Test My Water Free</Link>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <Link href="/blog/koi-ammonia-spike" style={{ color: '#1a9e8e', fontSize: '14px' }}>← Koi ammonia spikes</Link>
          <Link href="/blog" style={{ color: '#1a9e8e', fontSize: '14px' }}>Back to blog →</Link>
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
