import Head from 'next/head'
import Link from 'next/link'

export default function Disclaimer() {
  return (
    <>
      <Head>
        <title>Disclaimer — Pond Pal</title>
        <meta name="description" content="Pond Pal disclaimer — important information about the nature of our advice and affiliate relationships." />
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
        <h1>Disclaimer</h1>
        <p>Important information about Pond Pal and our content</p>
      </div>

      <div style={{ maxWidth: '780px', margin: '0 auto', padding: '3rem 2rem' }}>
        {[
          {
            title: 'General guidance only',
            content: 'The information, tools, and guides provided on Pond Pal are for general educational and informational purposes only. Nothing on this site constitutes professional veterinary advice. Fish keeping involves living animals and every situation is unique — always use your own judgment and consult a qualified aquatic veterinarian for specific health concerns about your fish.'
          },
          {
            title: 'AI tool disclaimer',
            content: 'Our Tank Checker and Water Chemistry Analyzer use artificial intelligence to generate recommendations based on the information you provide. These tools are designed to be helpful starting points, not definitive diagnoses. AI recommendations should always be verified with physical water testing and, where fish health is concerned, with professional advice.\n\nWe make no guarantee that AI-generated recommendations will be accurate for every situation. Water chemistry, fish health, and pond dynamics are complex and can be influenced by many factors that our tools cannot account for.'
          },
          {
            title: 'Affiliate disclosure',
            content: 'Pond Pal is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to amazon.com. We may also participate in other affiliate programs.\n\nThis means that when you click certain product links on our site and make a purchase, we may receive a small commission at no additional cost to you. This helps us keep Pond Pal free for everyone.\n\nWe only recommend products that we genuinely believe are useful and appropriate for fish keepers. Our affiliate relationships do not influence the advice or recommendations we provide.'
          },
          {
            title: 'Advertising disclosure',
            content: 'Pond Pal displays advertisements through Google AdSense. These ads are clearly displayed and are separate from our editorial content. We do not control which specific ads appear on our site. The presence of an advertisement does not constitute an endorsement of the advertised product or service.'
          },
          {
            title: 'External links',
            content: 'Pond Pal may contain links to third party websites for your convenience and reference. We are not responsible for the content, accuracy, or privacy practices of any external sites. Linking to a third party website does not constitute an endorsement of that site or its content.'
          },
          {
            title: 'No liability',
            content: 'Pond Pal and its operators accept no liability for any loss, damage, or harm — including harm to fish or aquatic life — arising from the use of information, tools, or recommendations provided on this website. Use of Pond Pal is entirely at your own risk.'
          },
          {
            title: 'Contact',
            content: 'If you have questions about this disclaimer or anything on Pond Pal, please reach out at hello@pondpal.space. We are always happy to help!'
          },
        ].map((s, i) => (
          <div key={i} style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.2rem', marginBottom: '0.75rem', color: '#062d3a' }}>{s.title}</h2>
            {s.content.split('\n\n').map((para, j) => (
              <p key={j} style={{ fontSize: '15px', color: '#2a3f47', lineHeight: '1.8', marginBottom: '0.75rem' }}>{para}</p>
            ))}
            {i < 6 && <hr style={{ border: 'none', borderTop: '1px solid rgba(0,0,0,0.07)', marginTop: '1.5rem' }} />}
          </div>
        ))}
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
