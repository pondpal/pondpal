import Link from 'next/link'
import { useState } from 'react'

export default function Nav() {
  const [open, setOpen] = useState(false)

  const links = [
    { href: '/tank-checker', label: 'Tank Checker' },
    { href: '/water-chemistry', label: 'Water Testing' },
    { href: '/tools/pond-calculator', label: 'Pond Calculator' },
    { href: '/tools/feeding-calculator', label: 'Feeding Calculator' },
    { href: '/tools/ask-pond-pal', label: 'Ask Pond Pal' },
    { href: '/care-guides', label: 'Care Guides' },
    { href: '/blog', label: 'Blog' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
    { href: '/search', label: '🔍 Search' },
  ]

  const desktopLinks = [
    { href: '/tank-checker', label: 'Tank Checker' },
    { href: '/water-chemistry', label: 'Water Testing' },
    { href: '/care-guides', label: 'Care Guides' },
    { href: '/blog', label: 'Blog' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
    { href: '/search', label: '🔍', title: 'Search' },
  ]

  return (
    <>
      <nav className="nav">
        <Link href="/" className="nav-logo">
          🐟 Pond<span style={{ color: '#f4833d' }}>Pal</span>
        </Link>

        <ul className="nav-links">
          {desktopLinks.map(link => (
            <li key={link.href}>
              <Link href={link.href} title={link.title || link.label} style={{ fontSize: link.label === '🔍' ? '18px' : undefined }}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className={`nav-hamburger${open ? ' open' : ''}`}
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      <div className={`nav-drawer${open ? ' open' : ''}`}>
        {links.map(link => (
          <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </Link>
        ))}
      </div>
    </>
  )
}
