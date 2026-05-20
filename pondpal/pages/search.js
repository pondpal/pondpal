import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

const allContent = [
  { title: 'Fish Keeping FAQ', desc: 'Quick answers to the most common fish keeping questions — koi, goldfish, bettas, water chemistry, tank setup, and more.', url: '/faq', category: 'Tool', emoji: '❓', tags: ['faq', 'questions', 'answers', 'help', 'koi', 'goldfish', 'betta', 'ammonia', 'tank', 'filter', 'cloudy', 'feeding', 'winter', 'cycle'] },
  // Tools
  { title: 'Tank Size Checker', desc: 'Find out if your tank or pond is big enough for your fish — works for koi, goldfish, bettas, cichlids, and saltwater setups.', url: '/tank-checker', category: 'Tool', emoji: '🏠', tags: ['tank', 'size', 'checker', 'aquarium', 'pond', 'koi', 'goldfish', 'betta', 'stocking'] },
  { title: 'Water Testing Analyzer', desc: 'Enter your test kit readings and get an instant AI diagnosis — pH, ammonia, nitrite, nitrate, and more.', url: '/water-chemistry', category: 'Tool', emoji: '🧪', tags: ['water', 'testing', 'chemistry', 'ph', 'ammonia', 'nitrite', 'nitrate', 'analyze', 'diagnosis'] },
  { title: 'Pond Volume Calculator', desc: 'Calculate how many gallons your pond or tank holds by entering your dimensions.', url: '/tools/pond-calculator', category: 'Tool', emoji: '🏊', tags: ['pond', 'volume', 'calculator', 'gallons', 'size', 'dimensions', 'litres'] },
  { title: 'Feeding Calculator', desc: 'Find out exactly how much to feed your fish based on their size, number, and the current season.', url: '/tools/feeding-calculator', category: 'Tool', emoji: '🍽️', tags: ['feeding', 'calculator', 'food', 'how much', 'season', 'amount', 'koi', 'fish'] },
  { title: 'Ask Pond Pal', desc: 'Ask our AI anything about fish keeping — any species, any question, instant friendly answers.', url: '/tools/ask-pond-pal', category: 'Tool', emoji: '💬', tags: ['ask', 'chat', 'ai', 'question', 'help', 'advice', 'fish', 'pond'] },

  // Koi Guides
  { title: 'Getting Started with Koi', desc: 'Everything a first-time koi keeper needs to know — pond size, filtration, the nitrogen cycle, and what to expect in year one.', url: '/guides/getting-started', category: 'Koi Guide', emoji: '🐣', tags: ['koi', 'beginner', 'getting started', 'setup', 'new pond', 'first time', 'nitrogen cycle'] },
  { title: 'Understanding Water Chemistry', desc: 'Plain-English guide to pH, ammonia, nitrite, nitrate, KH and GH — what they mean and what to do when readings are off.', url: '/guides/water-chemistry', category: 'Koi Guide', emoji: '💧', tags: ['water chemistry', 'ph', 'ammonia', 'nitrite', 'nitrate', 'kh', 'gh', 'hardness', 'koi'] },
  { title: 'Seasonal Pond Care', desc: 'How to care for your koi through spring, summer, autumn, and winter — including when to stop feeding.', url: '/guides/seasonal-care', category: 'Koi Guide', emoji: '🌡️', tags: ['seasonal', 'spring', 'summer', 'autumn', 'winter', 'koi', 'pond', 'feeding', 'winterize'] },
  { title: 'Common Koi Diseases', desc: 'How to identify and treat fin rot, ich, anchor worm, ulcers, dropsy, flukes, and swim bladder issues.', url: '/guides/koi-diseases', category: 'Koi Guide', emoji: '🏥', tags: ['disease', 'sick', 'fin rot', 'ich', 'anchor worm', 'ulcer', 'dropsy', 'flukes', 'swim bladder', 'koi', 'treatment'] },
  { title: 'Feeding Your Koi Right', desc: 'What to feed, how much, how often, and how feeding changes with the seasons. Plus foods to never give your fish.', url: '/guides/feeding', category: 'Koi Guide', emoji: '🍽️', tags: ['feeding', 'food', 'koi', 'wheat germ', 'staple', 'how much', 'season', 'diet'] },
  { title: 'Advanced Filtration Systems', desc: 'Gravity filters, bead filters, UV sterilizers, and bottom drains — what they do and which is right for your pond.', url: '/guides/filtration', category: 'Koi Guide', emoji: '🔬', tags: ['filtration', 'filter', 'gravity', 'bead', 'uv', 'bottom drain', 'mbbr', 'k1', 'koi', 'pond'] },
  { title: 'Koi Varieties and Breeds', desc: 'From Kohaku to Butterfly koi — a guide to the most popular varieties and what makes each one special.', url: '/guides/koi-varieties', category: 'Koi Guide', emoji: '🐠', tags: ['koi', 'varieties', 'breeds', 'kohaku', 'sanke', 'showa', 'tancho', 'ogon', 'butterfly', 'types'] },
  { title: 'Pond Plants That Help', desc: 'The best aquatic plants for koi ponds — which ones absorb nitrates, provide shade, and survive koi nibbling.', url: '/guides/pond-plants', category: 'Koi Guide', emoji: '🌱', tags: ['plants', 'pond', 'aquatic', 'water hyacinth', 'lotus', 'lily', 'koi', 'nitrate', 'algae'] },

  // Fish Guides
  { title: 'Goldfish Care Guide', desc: 'Tank sizing, water quality, feeding, health issues, and the difference between fancy and single-tailed goldfish.', url: '/guides/goldfish', category: 'Fish Guide', emoji: '🐡', tags: ['goldfish', 'fancy goldfish', 'comet', 'oranda', 'tank size', 'bowl', 'care', 'feeding'] },
  { title: 'Betta Fish Care Guide', desc: 'Tank size, temperature, gentle filtration, feeding, and common health problems for betta fish.', url: '/guides/betta', category: 'Fish Guide', emoji: '💜', tags: ['betta', 'betta fish', 'siamese fighting fish', 'tank size', 'heater', 'feeding', 'fin rot', 'velvet'] },
  { title: 'Saltwater Aquarium Guide', desc: 'Getting started with a marine tank — salinity, equipment, cycling, water parameters, and choosing your first marine fish.', url: '/guides/saltwater', category: 'Fish Guide', emoji: '🪸', tags: ['saltwater', 'marine', 'reef', 'clownfish', 'salinity', 'protein skimmer', 'live rock', 'cycling'] },
  { title: 'Cichlid Care Guide', desc: 'African, South American, and Central American cichlids — tank size, water chemistry, aggression management.', url: '/guides/cichlids', category: 'Fish Guide', emoji: '🐟', tags: ['cichlid', 'african cichlid', 'malawi', 'oscar', 'discus', 'south american', 'aggression', 'mbuna'] },

  // Blog Posts
  { title: 'How Many Koi in a 1000 Gallon Pond?', desc: 'The honest answer to one of the most Googled koi questions — with the math and stocking rules explained.', url: '/blog/how-many-koi-1000-gallon-pond', category: 'Blog', emoji: '📝', tags: ['koi', 'stocking', '1000 gallon', 'how many', 'pond size', '250 gallon rule'] },
  { title: 'Koi Pond Ammonia Spike — How to Fix It Fast', desc: 'Causes, dangers, and step-by-step treatment for a koi pond ammonia spike.', url: '/blog/koi-ammonia-spike', category: 'Blog', emoji: '📝', tags: ['ammonia', 'spike', 'koi', 'toxic', 'fix', 'emergency', 'water change', 'prime'] },
  { title: 'Best Koi Food for Every Season', desc: 'What to feed koi in spring, summer, autumn and winter with seasonal product recommendations.', url: '/blog/best-koi-food-every-season', category: 'Blog', emoji: '📝', tags: ['koi food', 'feeding', 'season', 'wheat germ', 'staple', 'winter', 'spring', 'best food'] },
  { title: 'How Big of a Tank Does a Betta Fish Need?', desc: 'Why the bowl myth is harmful and what size tank bettas actually need to thrive.', url: '/blog/how-big-betta-tank', category: 'Blog', emoji: '📝', tags: ['betta', 'tank size', 'bowl', '5 gallon', '10 gallon', 'minimum', 'how big'] },
  { title: 'Why Is My Goldfish Tank Cloudy?', desc: 'White cloudiness, green water, and brown tint all have different causes — find yours here.', url: '/blog/why-is-my-goldfish-tank-cloudy', category: 'Blog', emoji: '📝', tags: ['goldfish', 'cloudy', 'cloudy water', 'white', 'green water', 'bacterial bloom', 'algae', 'fix'] },
  { title: 'Best Filter for a 55 Gallon Aquarium', desc: 'What to look for in a 55 gallon aquarium filter and which types work best for different fish.', url: '/blog/best-filter-55-gallon-aquarium', category: 'Blog', emoji: '📝', tags: ['filter', '55 gallon', 'aquarium', 'canister', 'hang on back', 'filtration', 'best filter'] },
]

const categoryColors = {
  'Tool': { bg: '#d4f0ec', text: '#0e6b6b' },
  'Koi Guide': { bg: '#faeeda', text: '#854F0B' },
  'Fish Guide': { bg: '#E6F1FB', text: '#185FA5' },
  'Blog': { bg: '#e8e4f8', text: '#4a3d8f' },
}

export default function Search() {
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState('All')

  const categories = ['All', 'Tool', 'Koi Guide', 'Fish Guide', 'Blog']

  const results = allContent.filter(item => {
    const matchesCategory = filter === 'All' || item.category === filter
    if (!query.trim()) return matchesCategory
    const q = query.toLowerCase()
    const matchesQuery =
      item.title.toLowerCase().includes(q) ||
      item.desc.toLowerCase().includes(q) ||
      item.tags.some(tag => tag.toLowerCase().includes(q))
    return matchesCategory && matchesQuery
  })

  return (
    <>
      <Head>
        <title>Search — Pond Pal</title>
        <meta name="description" content="Search Pond Pal for fish care guides, tools, blog posts, and more — koi, goldfish, bettas, cichlids, saltwater, and aquarium advice." />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>

      <div className="tool-hero">
        <h1>🔍 Search Pond Pal</h1>
        <p>Find guides, tools, and blog posts for any fish keeping question</p>
      </div>

      <div style={{ maxWidth: '760px', margin: '0 auto', padding: '2.5rem 2rem' }}>

        <div style={{ position: 'relative', marginBottom: '1.25rem' }}>
          <input
            type="text"
            placeholder="Search for anything — betta tank size, ammonia spike, koi food, cloudy water..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            autoFocus
            style={{
              width: '100%', height: '52px', padding: '0 52px 0 18px',
              border: '2px solid #1a9e8e', borderRadius: '50px',
              fontSize: '15px', fontFamily: 'inherit', color: '#1a2e35',
              background: '#fff', outline: 'none',
              boxShadow: '0 4px 20px rgba(26,158,142,0.15)'
            }}
          />
          <span style={{ position: 'absolute', right: '18px', top: '50%', transform: 'translateY(-50%)', fontSize: '20px', opacity: 0.5 }}>🔍</span>
        </div>

        <div style={{ display: 'flex', gap: '8px', marginBottom: '2rem', flexWrap: 'wrap' }}>
          {categories.map(c => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              style={{
                padding: '6px 16px', borderRadius: '20px', fontSize: '13px',
                fontFamily: 'inherit', cursor: 'pointer', fontWeight: filter === c ? 500 : 400,
                border: filter === c ? '2px solid #062d3a' : '1px solid rgba(0,0,0,0.15)',
                background: filter === c ? '#062d3a' : '#fff',
                color: filter === c ? '#fff' : '#2a3f47',
                transition: 'all 0.15s'
              }}
            >
              {c}
            </button>
          ))}
        </div>

        {query && (
          <p style={{ fontSize: '13px', color: '#5a7a82', marginBottom: '1.25rem' }}>
            {results.length} result{results.length !== 1 ? 's' : ''} for <strong style={{ color: '#1a2e35' }}>"{query}"</strong>
            {filter !== 'All' && <span> in <strong style={{ color: '#1a2e35' }}>{filter}</strong></span>}
          </p>
        )}

        {!query && (
          <p style={{ fontSize: '13px', color: '#5a7a82', marginBottom: '1.25rem' }}>
            Showing all {results.length} pages{filter !== 'All' ? ` in ${filter}` : ''} — type to search
          </p>
        )}

        <div style={{ display: 'grid', gap: '0.875rem' }}>
          {results.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '3rem', background: '#fff', borderRadius: '14px', border: '1px solid rgba(0,0,0,0.07)' }}>
              <p style={{ fontSize: '36px', marginBottom: '1rem' }}>🤔</p>
              <p style={{ fontSize: '15px', color: '#2a3f47', marginBottom: '0.5rem' }}>No results found for "{query}"</p>
              <p style={{ fontSize: '13px', color: '#5a7a82', marginBottom: '1.5rem' }}>Try different words, or ask our AI directly!</p>
              <Link href={'/tools/ask-pond-pal'} className="btn-primary" style={{ fontSize: '13px' }}>Ask Pond Pal AI →</Link>
            </div>
          ) : (
            results.map((item, i) => {
              const colors = categoryColors[item.category] || { bg: '#d4f0ec', text: '#0e6b6b' }
              return (
                <Link key={i} href={item.url} style={{ textDecoration: 'none' }}>
                  <div style={{
                    background: '#fff', borderRadius: '12px', padding: '1.25rem',
                    border: '1px solid rgba(0,0,0,0.07)', display: 'flex', gap: '1rem',
                    alignItems: 'flex-start', transition: 'transform 0.15s, box-shadow 0.15s',
                  }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.08)' }}
                    onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none' }}
                  >
                    <span style={{ fontSize: '28px', flexShrink: 0 }}>{item.emoji}</span>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px', flexWrap: 'wrap' }}>
                        <h3 style={{ fontSize: '15px', fontWeight: 500, color: '#1a2e35' }}>{item.title}</h3>
                        <span style={{ fontSize: '10px', fontWeight: 500, padding: '2px 8px', borderRadius: '10px', background: colors.bg, color: colors.text, flexShrink: 0 }}>{item.category}</span>
                      </div>
                      <p style={{ fontSize: '13px', color: '#5a7a82', lineHeight: '1.5' }}>{item.desc}</p>
                    </div>
                    <span style={{ color: '#1a9e8e', fontSize: '18px', flexShrink: 0, marginTop: '2px' }}>→</span>
                  </div>
                </Link>
              )
            })
          )}
        </div>

        {!query && (
          <div style={{ marginTop: '2rem', background: '#062d3a', borderRadius: '14px', padding: '1.75rem', textAlign: 'center' }}>
            <p style={{ color: '#fff', fontSize: '15px', fontWeight: 500, marginBottom: '0.5rem' }}>Can't find what you're looking for?</p>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '13px', marginBottom: '1.25rem' }}>Ask our AI directly — any fish question, instant friendly answer.</p>
            <Link href="/tools/ask-pond-pal" className="btn-primary" style={{ fontSize: '13px' }}>Ask Pond Pal AI</Link>
          </div>
        )}
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
