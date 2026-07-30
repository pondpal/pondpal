import Head from 'next/head'
import Link from 'next/link'

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy — Pond Pal</title>
        <meta name="description" content="Pond Pal privacy policy — how we collect, use, and protect your information." />
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
        <h1>Privacy Policy</h1>
        <p>Last updated: May 2026</p>
      </div>

      <div style={{ maxWidth: '780px', margin: '0 auto', padding: '3rem 2rem' }}>

        {[
          {
            title: 'Who we are',
            content: 'Pond Pal (pondpal.space) is a free online resource providing AI-powered tools and care guides for koi and aquarium fish owners. We are committed to protecting your privacy and being transparent about how we handle information.'
          },
          {
            title: 'Information we collect',
            content: 'Pond Pal does not require you to create an account or provide personal information to use our tools. When you use our Tank Checker, Water Chemistry Analyzer, or other AI tools, the information you enter (such as tank size or water readings) is sent to our AI system to generate your results and is not stored or linked to you personally.\n\nOur Photo Diagnosis tool works the same way: any photo you upload is sent directly to our AI system for one-time analysis and is not saved, stored, or retained by Pond Pal afterward. Please avoid including any people or identifying information in photos you upload.\n\nLike most websites, we may collect standard technical information automatically, including your IP address, browser type, pages visited, and time spent on the site. This is collected through cookies and similar technologies.'
          },
          {
            title: 'Cookies and advertising',
            content: 'Pond Pal uses Google AdSense to display advertisements. Google AdSense uses cookies to serve ads based on your prior visits to our site and other sites on the internet. You can opt out of personalized advertising by visiting Google\'s Ads Settings at adssettings.google.com.\n\nWe also use cookies for basic analytics to understand how visitors use our site so we can improve it. These cookies do not personally identify you.'
          },
          {
            title: 'Affiliate links',
            content: 'Pond Pal participates in the Amazon Associates Program and may participate in other affiliate programs. This means that when we recommend a product and you click a link to purchase it, we may earn a small commission at no extra cost to you. We only recommend products we genuinely believe are useful for fish keepers. Affiliate relationships do not influence our advice or recommendations.'
          },
          {
            title: 'How we use your information',
            content: 'We use the information we collect to operate and improve Pond Pal, to understand how our tools and guides are being used, and to display relevant advertising. We do not sell your personal information to third parties. We do not use your information to contact you unless you have explicitly reached out to us.'
          },
          {
            title: 'Third party services',
            content: 'Pond Pal uses the following third party services which have their own privacy policies:\n\nAnthropic (Claude AI) — powers our AI analysis tools. Visit anthropic.com/privacy for their privacy policy.\n\nGoogle AdSense — displays advertisements on our site. Visit policies.google.com/privacy for Google\'s privacy policy.\n\nVercel — hosts our website. Visit vercel.com/legal/privacy-policy for their privacy policy.'
          },
          {
            title: 'Children\'s privacy',
            content: 'Pond Pal is not directed at children under the age of 13. We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us and we will delete it.'
          },
          {
            title: 'Your rights',
            content: 'Depending on where you are located, you may have rights regarding your personal data including the right to access, correct, or delete information we hold about you. If you are in the European Union or California, you have additional rights under GDPR and CCPA respectively.\n\nTo exercise any of these rights or if you have questions about this privacy policy, please contact us at hello@pondpal.space.'
          },
          {
            title: 'Changes to this policy',
            content: 'We may update this privacy policy from time to time. When we do, we will update the date at the top of this page. We encourage you to review this policy periodically. Continued use of Pond Pal after any changes constitutes your acceptance of the updated policy.'
          },
          {
            title: 'Contact us',
            content: 'If you have any questions about this privacy policy or how we handle your information, please contact us at hello@pondpal.space.'
          },
        ].map((s, i) => (
          <div key={i} style={{ marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '1.2rem', marginBottom: '0.75rem', color: '#062d3a' }}>{s.title}</h2>
            {s.content.split('\n\n').map((para, j) => (
              <p key={j} style={{ fontSize: '15px', color: '#2a3f47', lineHeight: '1.8', marginBottom: '0.75rem' }}>{para}</p>
            ))}
            {i < 9 && <hr style={{ border: 'none', borderTop: '1px solid rgba(0,0,0,0.07)', marginTop: '1.5rem' }} />}
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
