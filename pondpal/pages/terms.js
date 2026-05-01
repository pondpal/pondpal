import Head from 'next/head'
import Link from 'next/link'

export default function Terms() {
  return (
    <>
      <Head>
        <title>Terms of Use — Pond Pal</title>
        <meta name="description" content="Pond Pal terms of use — the rules and guidelines for using our website and tools." />
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
        <h1>Terms of Use</h1>
        <p>Last updated: May 2026</p>
      </div>

      <div style={{ maxWidth: '780px', margin: '0 auto', padding: '3rem 2rem' }}>
        {[
          {
            title: 'Acceptance of terms',
            content: 'By accessing and using Pond Pal (pondpal.space), you accept and agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our website.'
          },
          {
            title: 'Use of our tools and content',
            content: 'Pond Pal provides AI-powered tools and educational content for informational purposes only. You may use our website for personal, non-commercial purposes. You may not copy, reproduce, or redistribute our content without permission.\n\nYou agree not to use Pond Pal in any way that could damage, disable, or impair the website or interfere with any other user\'s use of the site.'
          },
          {
            title: 'Accuracy of information',
            content: 'While we strive to provide accurate and helpful information, Pond Pal makes no warranties or representations about the accuracy, completeness, or suitability of any information provided through our tools or guides. Fish keeping involves living animals and many variables — always use your own judgment and consult a qualified veterinarian for health concerns.'
          },
          {
            title: 'AI-generated content',
            content: 'Our Tank Checker and Water Chemistry Analyzer use artificial intelligence to generate recommendations. These recommendations are general guidance only and may not account for every specific situation. Pond Pal is not liable for any outcomes resulting from following AI-generated advice. Always verify important decisions with additional research or professional consultation.'
          },
          {
            title: 'Affiliate links and advertising',
            content: 'Pond Pal participates in affiliate programs and displays advertising. We are not responsible for the products, services, or content of any third party websites linked from our site. Any purchases you make through affiliate links are transactions between you and the retailer — Pond Pal is not a party to those transactions.'
          },
          {
            title: 'Limitation of liability',
            content: 'Pond Pal and its operators shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of this website or reliance on any information provided. This includes but is not limited to harm to fish or aquatic animals, financial loss, or equipment damage.'
          },
          {
            title: 'Intellectual property',
            content: 'All content on Pond Pal including text, guides, code, and design is the property of Pond Pal unless otherwise noted. The Pond Pal name and branding may not be used without permission.'
          },
          {
            title: 'Changes to these terms',
            content: 'We reserve the right to update these terms at any time. Changes will be posted on this page with an updated date. Continued use of Pond Pal after changes are posted constitutes acceptance of the updated terms.'
          },
          {
            title: 'Contact',
            content: 'Questions about these terms? Contact us at hello@pondpal.space.'
          },
        ].map((s, i) => (
          <div key={i} style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.2rem', marginBottom: '0.75rem', color: '#062d3a' }}>{s.title}</h2>
            {s.content.split('\n\n').map((para, j) => (
              <p key={j} style={{ fontSize: '15px', color: '#2a3f47', lineHeight: '1.8', marginBottom: '0.75rem' }}>{para}</p>
            ))}
            {i < 8 && <hr style={{ border: 'none', borderTop: '1px solid rgba(0,0,0,0.07)', marginTop: '1.5rem' }} />}
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
