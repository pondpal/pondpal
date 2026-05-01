import Head from 'next/head'
import Link from 'next/link'

const sections = [
  { emoji: '🍽️', title: 'The golden rule of koi feeding', content: `When it comes to feeding koi, less is almost always better. Overfeeding is one of the most common mistakes new koi keepers make, and it causes a cascade of problems — uneaten food decomposes and spikes ammonia, excess nutrients fuel algae blooms, and overfed koi can develop liver and digestive issues over time.\n\nThe standard guideline is to feed only what your koi can consume within 5 minutes, then remove any uneaten food. In practice, you should see your fish actively competing for food. If food is sinking to the bottom untouched, you're feeding too much.` },
  { emoji: '🌡️', title: 'Temperature dictates everything', content: `A koi's metabolism is tied directly to water temperature, which means temperature determines what you feed, how much you feed, and whether you feed at all.\n\nAbove 65°F: feed a quality staple or growth food 2–3 times daily. This is when koi grow fastest and build body condition.\n\n55–65°F: switch to a wheat germ based food, which is lower in protein and much easier to digest in cooler water. Feed once daily, small amounts.\n\n50–55°F: feed wheat germ every 2–3 days, very small portions. Watch for uneaten food carefully.\n\nBelow 50°F: stop feeding entirely. Koi cannot properly digest food at this temperature, and undigested food sitting in their gut over winter can cause serious internal damage and even death. They will not starve — they survive on stored body fat.` },
  { emoji: '🥗', title: 'Understanding koi food types', content: `Staple food is your everyday feeding option — a balanced pellet designed to meet koi's nutritional needs during normal activity. Look for a protein content of 30–36% from quality sources like fish meal or shrimp meal.\n\nWheat germ food is lower in protein (around 20–25%) and higher in easily digestible carbohydrates. Essential for spring and autumn feeding when temperatures are cooler. Some keepers use wheat germ year-round for less intensive feeding.\n\nGrowth or color-enhancing foods are higher in protein (38–42%) and often contain color enhancers like spirulina or astaxanthin that bring out orange and red pigments. Best used in summer when koi are actively growing. Don't feed these in cooler weather.\n\nTreats and supplements include silkworm pupae, shrimp, watermelon, and orange slices. These are enjoyable enrichment for your fish but should not make up more than 10% of their diet. Avoid feeding bread, crackers, or high-carbohydrate human food.` },
  { emoji: '📏', title: 'How much to feed', content: `As a starting guideline, feed 1–2% of your koi's total body weight per day in summer. For a pond with 10 fish averaging 12 inches and roughly 1.5 pounds each, that's about 2.25–4.5 ounces of food daily — less than you might think.\n\nThe 5-minute rule is more practical than trying to calculate body weight: offer a small handful of food, watch your fish eat, and stop when they lose interest or food starts sinking to the bottom. You'll quickly develop an intuition for your specific pond.\n\nFeed multiple small meals rather than one large feeding. Two or three small feedings daily is better than one large one — it reduces ammonia spikes and is closer to how fish eat naturally. Morning and evening feedings are a natural routine that most keepers find works well.` },
  { emoji: '📅', title: 'Seasonal feeding calendar', content: `Spring (water above 50°F, below 65°F): wheat germ food, once daily, small amounts. Gradually increase as temperatures rise. Switch to staple food once consistently above 65°F.\n\nSummer (65°F and above): staple or growth food, 2–3 times daily. This is peak feeding season. Monitor water quality closely as feeding frequency increases.\n\nAutumn (dropping below 65°F): begin transitioning back to wheat germ. Reduce feeding frequency as temperatures drop. By the time you're consistently below 55°F, feed only every 2–3 days.\n\nWinter (below 50°F): no feeding. None. Not even a little. Resist the temptation when you see your koi looking up at you hopefully — they're not hungry, they're just reacting to movement.` },
  { emoji: '🚫', title: 'Foods to never feed koi', content: `Bread and crackers: high in starch and gluten, which koi cannot properly digest. They expand in the gut and can cause bloating and constipation.\n\nPork, beef, and most mammal-based meats: koi are not designed to digest mammal fats and proteins. These can cause serious digestive issues.\n\nCitrus fruits: the acidity can irritate koi's digestive systems. Oranges are a borderline exception in small amounts, but most citrus should be avoided.\n\nAnything with added salt, seasoning, or preservatives: human-processed foods contain additives that are harmful to fish.\n\nWild-caught insects from pesticide-treated areas: can introduce toxins into your pond.\n\nStick to quality koi-specific foods as your base and offer only known-safe treats in moderation.` },
]

export default function FeedingGuide() {
  return (
    <>
      <Head>
        <title>Feeding Your Koi Right — Pond Pal</title>
        <meta name="description" content="What to feed koi, how much, how often, and how feeding changes with the seasons. A complete koi feeding guide for all experience levels." />
      </Head>

      <nav className="nav">
        <Link href="/" className="nav-logo">🐟 Pond<span style={{ color: '#f4833d' }}>Pal</span></Link>
        <ul className="nav-links">
          <li><Link href="/tank-checker">Tank Checker</Link></li>
          <li><Link href="/water-chemistry">Water Chemistry</Link></li>
          <li><Link href="/care-guides">Care Guides</Link></li>
        </ul>
      </nav>

      <div className="tool-hero">
        <h1>Feeding Your Koi Right</h1>
        <p>What to feed, how much, when to stop, and what to never give your fish</p>
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
            {i < sections.length - 1 && <hr style={{ border: 'none', borderTop: '1px solid rgba(0,0,0,0.08)', marginTop: '2rem' }} />}
          </div>
        ))}

        <div style={{ background: '#062d3a', borderRadius: '14px', padding: '2rem', marginTop: '2rem', textAlign: 'center' }}>
          <h3 style={{ color: '#fff', marginBottom: '0.75rem', fontSize: '1.2rem' }}>Is your water handling the feeding load?</h3>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', marginBottom: '1.5rem' }}>More food means more waste. Check your water chemistry to make sure your pond is keeping up.</p>
          <Link href="/water-chemistry" className="btn-primary">Analyze My Water</Link>
        </div>

        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <Link href="/care-guides" style={{ color: '#1a9e8e', fontSize: '14px' }}>← Back to all guides</Link>
        </div>
      </div>

      <footer className="footer">
        <p>🐟 Pond Pal — Friendly fish care, powered by AI</p>
        <p style={{ marginTop: '1rem', fontSize: '11px', opacity: 0.6 }}>General guidance only. Always consult a vet for health concerns.</p>
      </footer>
    </>
  )
}
