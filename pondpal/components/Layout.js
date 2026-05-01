import Link from 'next/link'
import { useState } from 'react'

export default function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <nav className="nav">
        <Link href="/" className="nav-logo">
          🐟 Pond<span style={{ color: '#f4833d' }}>Pal</span>
        </Link>

        <ul className="nav-links">
          <li><Link href="/tank-checker">Tank Checker</Link></li>
          <li><Link href="/water-chemistry">Water Chemistry</Link></li>
          <li><Link href="/care-guides">Care Guides</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            color: '#fff',
            fontSize: '22px',
            cursor: 'pointer',
            padding: '4px 8px',
          }}
          className="mobile-menu-btn"
          aria-label="Toggle menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </nav>

      {menuOpen && (
        <div style={{
          background: '#062d3a',
          padding: '1rem 2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
          position: 'sticky',
          top: '64px',
          zIndex: 99,
        }}>
          {[
            { href: '/tank-checker', label: 'Tank Checker' },
            { href: '/water-chemistry', label: 'Water Chemistry' },
            { href: '/care-guides', label: 'Care Guides' },
            { href: '/about', label: 'About' },
            { href: '/contact', label: 'Contact' },
          ].map(link => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{ color: 'rgba(255,255,255,0.85)', fontSize: '15px' }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}

      <main>{children}</main>

      <footer className="footer">
        <p>🐟 Pond Pal — Friendly fish care, powered by AI</p>
        <p style={{ marginTop: '0.75rem' }}>
          <Link href="/tank-checker" style={{ color: 'rgba(255,255,255,0.6)' }}>Tank Checker</Link>
          {' · '}
          <Link href="/water-chemistry" style={{ color: 'rgba(255,255,255,0.6)' }}>Water Chemistry</Link>
          {' · '}
          <Link href="/care-guides" style={{ color: 'rgba(255,255,255,0.6)' }}>Care Guides</Link>
          {' · '}
          <Link href="/about" style={{ color: 'rgba(255,255,255,0.6)' }}>About</Link>
          {' · '}
          <Link href="/contact" style={{ color: 'rgba(255,255,255,0.6)' }}>Contact</Link>
        </p>
        <p style={{ marginTop: '0.75rem' }}>
          <Link href="/privacy-policy" style={{ color: '#f4833d' }}>Privacy Policy</Link>
          {' · '}
          <Link href="/terms" style={{ color: '#f4833d' }}>Terms of Use</Link>
          {' · '}
          <Link href="/disclaimer" style={{ color: '#f4833d' }}>Disclaimer</Link>
        </p>
        <p style={{ marginTop: '1rem', fontSize: '11px', opacity: 0.5 }}>
          General guidance only. Always consult a vet for health concerns.
          Some links may be affiliate links — this helps keep Pond Pal free!
        </p>
      </footer>

      <style>{`
        @media (max-width: 640px) {
          .nav-links { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </>
  )
}
