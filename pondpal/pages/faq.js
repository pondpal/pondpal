import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

const faqs = [
  {
    category: 'Koi & Ponds',
    emoji: '🐠',
    questions: [
      {
        q: 'How many koi can I put in my pond?',
        a: 'The standard rule is 250 gallons per koi. So a 1,000 gallon pond can support 4 koi at most. This assumes good filtration — if your filter is basic, stock even more conservatively. Remember koi grow to 18–24 inches as adults, so a fish that seems small today will need that space within a few years.',
        link: '/blog/how-many-koi-1000-gallon-pond',
        linkText: 'Full stocking guide →'
      },
      {
        q: 'When should I stop feeding koi in winter?',
        a: 'Stop feeding completely when water temperature drops below 50°F. Koi\'s digestive systems slow dramatically in cold water and undigested food can cause serious internal problems. They survive winter on stored body fat and don\'t need food. Resume feeding with wheat germ food in spring when temperatures reliably reach 50°F again.',
        link: '/guides/seasonal-care',
        linkText: 'Seasonal care guide →'
      },
      {
        q: 'Why is my koi pond water green?',
        a: 'Green water is caused by a bloom of microscopic algae suspended in the water. The root causes are too much sunlight, too many nutrients from overfeeding or infrequent water changes, or both. A UV sterilizer is the most effective solution — it clears green water within a week. Reduce feeding and light exposure to prevent it returning.',
        link: '/water-chemistry',
        linkText: 'Test your water →'
      },
      {
        q: 'What is the best koi food?',
        a: 'In summer, use a quality staple or growth pellet with 30–36% protein from a trusted brand. In spring and autumn when water is below 65°F, switch to wheat germ food which is easier to digest in cool water. Stop feeding entirely below 50°F. Never feed bread or human food to koi.',
        link: '/blog/best-koi-food-every-season',
        linkText: 'Full feeding guide →'
      },
      {
        q: 'My koi is sitting on the bottom — what is wrong?',
        a: 'A koi sitting motionless on the bottom is a serious warning sign. Test your water immediately for ammonia, nitrite, and pH. Common causes include ammonia or nitrite poisoning, low dissolved oxygen, disease, or injury. If your water tests are off, do a 25% water change immediately. If parameters are fine, look for physical signs of disease like sores, torn fins, or discoloration.',
        link: '/guides/koi-diseases',
        linkText: 'Koi disease guide →'
      },
    ]
  },
  {
    category: 'Water Quality',
    emoji: '🧪',
    questions: [
      {
        q: 'What should my ammonia level be?',
        a: 'Zero. Ammonia should read 0 ppm at all times in a healthy tank or pond. Any detectable ammonia is stressful for fish. At 0.5 ppm fish show signs of distress. At 2 ppm and above it becomes rapidly fatal. If you detect ammonia, do a 25% water change immediately and stop feeding until levels return to zero.',
        link: '/water-chemistry',
        linkText: 'Analyze your water →'
      },
      {
        q: 'What is the ideal pH for fish?',
        a: 'It depends on the species. Koi and goldfish prefer pH 7.0–8.0. Tropical community fish do well at 6.8–7.6. African cichlids need alkaline water at 7.8–8.5. Bettas prefer slightly acidic water at 6.5–7.5. Saltwater fish need 8.1–8.4. Stability matters as much as the actual number — sudden pH swings stress fish even when the new value is within range.',
        link: '/guides/water-chemistry',
        linkText: 'Water chemistry guide →'
      },
      {
        q: 'How often should I do water changes?',
        a: 'For most tanks and ponds, a 20–25% water change weekly is the standard recommendation. Goldfish tanks and koi ponds may need 25–30% weekly due to high waste production. Heavily stocked tanks may need twice weekly changes. Lightly stocked planted tanks can sometimes go every two weeks. Regular small changes are better than infrequent large ones.',
        link: '/water-chemistry',
        linkText: 'Test your water →'
      },
      {
        q: 'What is the nitrogen cycle and why does it matter?',
        a: 'The nitrogen cycle is the biological process that makes your tank safe for fish. Fish produce ammonia which is toxic. Beneficial bacteria in your filter convert ammonia to nitrite (also toxic), then to nitrate (mostly harmless). A new tank takes 4–8 weeks to fully cycle. Never fully stock a new tank — add fish slowly and test water frequently until the cycle is established.',
        link: '/guides/getting-started',
        linkText: 'Getting started guide →'
      },
      {
        q: 'My water is cloudy — what do I do?',
        a: 'The color tells you the cause. White or grey cloudiness in a new tank is a normal bacterial bloom during cycling — it resolves on its own within 1–2 weeks. Green cloudiness is algae — reduce light and nutrients. Brown tint is tannins from driftwood — use activated carbon. White cloudiness in an established tank signals a water quality problem — test your parameters immediately.',
        link: '/blog/why-is-my-goldfish-tank-cloudy',
        linkText: 'Cloudy water guide →'
      },
    ]
  },
  {
    category: 'Goldfish',
    emoji: '🐡',
    questions: [
      {
        q: 'Can goldfish live in a bowl?',
        a: 'No — not healthily or for long. Goldfish need at least 20 gallons for the first fish and 10 gallons for each additional fish. Bowls cannot house a proper filter, maintain stable temperature, or hold enough water to dilute waste. A goldfish in a proper tank can live 15–20 years. A goldfish in a bowl typically lives 1–3 years.',
        link: '/guides/goldfish',
        linkText: 'Goldfish care guide →'
      },
      {
        q: 'Why is my goldfish floating sideways?',
        a: 'Sideways floating usually indicates swim bladder disorder. The most common cause is constipation — fast your goldfish for 2–3 days, then offer a blanched pea with the skin removed. This resolves many cases. If it persists, bacterial infection of the swim bladder is possible. Avoid overfeeding and consider switching to sinking pellets to prevent air ingestion.',
        link: '/guides/goldfish',
        linkText: 'Goldfish care guide →'
      },
    ]
  },
  {
    category: 'Betta Fish',
    emoji: '💜',
    questions: [
      {
        q: 'How big of a tank does a betta need?',
        a: 'Minimum 5 gallons — ideally 10 gallons. Bettas in smaller tanks have severely shortened lifespans due to rapid water quality deterioration and temperature instability. A 5+ gallon tank with a gentle filter and a heater set to 78–80°F gives your betta the environment it needs to live 3–5 years and display its full personality.',
        link: '/blog/how-big-betta-tank',
        linkText: 'Full betta tank guide →'
      },
      {
        q: 'Can I put other fish with my betta?',
        a: 'It depends on your betta\'s temperament. Male bettas cannot be kept with other male bettas — they will fight. Some bettas tolerate peaceful tank mates like small corydoras, snails, or shrimp. Others attack anything. Fish with long flowing fins (guppies, angelfish) often get attacked. Always have a backup plan to separate fish if needed, and never add tank mates to a tank smaller than 10 gallons.',
        link: '/guides/betta',
        linkText: 'Betta care guide →'
      },
    ]
  },
  {
    category: 'Tank Setup',
    emoji: '🏠',
    questions: [
      {
        q: 'What filter do I need for my aquarium?',
        a: 'Choose a filter rated for at least the size of your tank — ideally larger. For goldfish, cichlids, and other heavy waste producers, use a filter rated for 2–3 times your tank volume. Canister filters provide the best biological filtration for larger tanks. Hang-on-back filters are reliable and easy for most community setups. Sponge filters are gentle and ideal for bettas or fry tanks.',
        link: '/blog/best-filter-55-gallon-aquarium',
        linkText: 'Aquarium filter guide →'
      },
      {
        q: 'How long does it take to cycle a new tank?',
        a: 'Typically 4–8 weeks for a fishless cycle. You can speed this up by adding beneficial bacteria from an established tank — a handful of gravel, a piece of filter media, or a used sponge filter. Bottled bacteria products like Seachem Stability also help. Test ammonia and nitrite every few days — the tank is cycled when both read 0 ppm consistently after adding an ammonia source.',
        link: '/guides/getting-started',
        linkText: 'Getting started guide →'
      },
      {
        q: 'Do I need a heater for my fish tank?',
        a: 'It depends on your fish. Tropical fish (bettas, tetras, cichlids, discus) require a heater to maintain 75–82°F. Goldfish and koi are cold-water fish and generally don\'t need a heater unless your home gets very cold in winter. Saltwater fish typically need a heater to maintain 75–80°F. When in doubt, a heater provides stability which is always beneficial.',
        link: '/tank-checker',
        linkText: 'Check my tank setup →'
      },
      {
        q: 'How many fish can I put in my tank?',
        a: 'It depends entirely on the species. The old "1 inch of fish per gallon" rule is a very rough guideline for small tropical fish only. Koi need 250 gallons each. Fancy goldfish need 20–30 gallons each. Bettas should be alone in at least 5 gallons. African cichlids are often intentionally overstocked to manage aggression. Use our Tank Checker for species-specific analysis.',
        link: '/tank-checker',
        linkText: 'Use our Tank Checker →'
      },
    ]
  },
]

export default function FAQ() {
  const [openItems, setOpenItems] = useState({})

  const toggle = (key) => {
    setOpenItems(prev => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <>
      <Head>
        <title>Fish & Aquarium FAQ — Pond Pal</title>
        <meta name="description" content="Answers to the most common fish keeping questions — koi, goldfish, bettas, water chemistry, tank setup, and more. Plain English answers for every fish keeper." />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>

      <div className="tool-hero">
        <h1>❓ Fish Keeping FAQ</h1>
        <p>Quick answers to the most common fish keeping questions — koi, goldfish, bettas, water quality, and more</p>
      </div>

      <div style={{ maxWidth: '780px', margin: '0 auto', padding: '3rem 2rem' }}>

        <div style={{ background: '#f0faf8', borderRadius: '12px', padding: '1rem 1.25rem', marginBottom: '2.5rem', fontSize: '14px', color: '#0e6b6b', border: '1px solid rgba(26,158,142,0.2)' }}>
          <strong>Can't find your answer?</strong> Try our <Link href="/tools/ask-pond-pal" style={{ color: '#1a9e8e', fontWeight: 500 }}>Ask Pond Pal AI</Link> — ask any fish keeping question and get an instant personalized answer, or use our <Link href="/search" style={{ color: '#1a9e8e', fontWeight: 500 }}>search page</Link> to find the right guide.
        </div>

        {faqs.map((category, ci) => (
          <div key={ci} style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '1.3rem', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '10px', color: '#062d3a' }}>
              <span>{category.emoji}</span> {category.category}
            </h2>

            <div style={{ display: 'grid', gap: '0.75rem' }}>
              {category.questions.map((item, qi) => {
                const key = `${ci}-${qi}`
                const isOpen = openItems[key]
                return (
                  <div key={qi} style={{ background: '#fff', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.07)', overflow: 'hidden' }}>
                    <button
                      onClick={() => toggle(key)}
                      style={{
                        width: '100%', padding: '1.125rem 1.25rem',
                        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                        gap: '1rem', background: 'none', border: 'none', cursor: 'pointer',
                        fontFamily: 'inherit', textAlign: 'left'
                      }}
                    >
                      <span style={{ fontSize: '15px', fontWeight: 500, color: '#1a2e35', lineHeight: 1.4 }}>{item.q}</span>
                      <span style={{
                        fontSize: '20px', color: '#1a9e8e', flexShrink: 0,
                        transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                        transition: 'transform 0.2s ease', display: 'block'
                      }}>+</span>
                    </button>

                    {isOpen && (
                      <div style={{ padding: '0 1.25rem 1.25rem', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
                        <p style={{ fontSize: '14px', color: '#2a3f47', lineHeight: '1.8', marginTop: '1rem', marginBottom: '0.875rem' }}>{item.a}</p>
                        {item.link && (
                          <Link href={item.link} style={{ fontSize: '13px', color: '#1a9e8e', fontWeight: 500 }}>
                            {item.linkText}
                          </Link>
                        )}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        ))}

        <div style={{ background: '#062d3a', borderRadius: '14px', padding: '2rem', textAlign: 'center', marginTop: '2rem' }}>
          <h3 style={{ color: '#fff', marginBottom: '0.75rem', fontSize: '1.1rem' }}>Still have a question?</h3>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', marginBottom: '1.5rem' }}>Ask our AI anything — any fish, any question, instant friendly answer.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/tools/ask-pond-pal" className="btn-primary">Ask Pond Pal AI</Link>
            <Link href="/tank-checker" className="btn-outline">Check My Tank</Link>
          </div>
        </div>
      </div>

      <footer className="footer">
        <p>🐟 Pond Pal — Friendly fish & aquarium care, powered by AI</p>
        <p style={{ marginTop: '0.75rem' }}>
          <Link href="/tank-checker" style={{ color: 'rgba(255,255,255,0.6)' }}>Tank Checker</Link>{' · '}
          <Link href="/water-chemistry" style={{ color: 'rgba(255,255,255,0.6)' }}>Water Testing</Link>{' · '}
          <Link href="/care-guides" style={{ color: 'rgba(255,255,255,0.6)' }}>Care Guides</Link>{' · '}
          <Link href="/blog" style={{ color: 'rgba(255,255,255,0.6)' }}>Blog</Link>{' · '}
          <Link href="/faq" style={{ color: 'rgba(255,255,255,0.6)' }}>FAQ</Link>{' · '}
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
