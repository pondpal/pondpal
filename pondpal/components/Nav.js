import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'

const allTools = [
  { href: '/tank-checker', label: 'Tank Size Checker', emoji: '🏠' },
  { href: '/water-chemistry', label: 'Water Testing Analyzer', emoji: '🧪' },
  { href: '/tools/pond-calculator', label: 'Pond Volume Calculator', emoji: '🏊' },
  { href: '/tools/feeding-calculator', label: 'Feeding Calculator', emoji: '🍽️' },
  { href: '/tools/ask-pond-pal', label: 'Ask Pond Pal', emoji: '💬' },
  { href: '/tools/climate-checker', label: 'Climate Checker', emoji: '❄️' },
  { href: '/tools/compatibility-checker', label: 'Compatibility Checker', emoji: '🤝' },
  { href: '/tools/cost-calculator', label: 'Cost Calculator', emoji: '💰' },
  { href: '/tools/photo-diagnosis', label: 'Photo Diagnosis', emoji: '📸' },
]

const otherPages = [
  { href: '/care-guides', label: 'Care Guides' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/faq', label: 'FAQ' },
  { href: '/search', label: '🔍 Search' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [toolsOpen, setToolsOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    if (!toolsOpen) return
    const handleClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setToolsOpen(false)
      }
    }
    const handleKey = (e) => {
      if (e.key === 'Escape') setToolsOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    document.addEventListener('keydown', handleKey)
    return () => {
      document.removeEventListener('mousedown', handleClick)
      document.removeEventListener('keydown', handleKey)
    }
  }, [toolsOpen])

  return (
    <>
      <nav className="nav">
        <Link href="/" className="nav-logo">
          🐟 Pond<span style={{ color: '#f4833d' }}>Pal</span>
        </Link>

        <ul className="nav-links">
          <li className="nav-dropdown" ref={dropdownRef}>
            <button
              className="nav-dropdown-trigger"
              onClick={() => setToolsOpen(!toolsOpen)}
              aria-expanded={toolsOpen}
            >
              Tools <span className="nav-dropdown-arrow">{toolsOpen ? '▴' : '▾'}</span>
            </button>
            {toolsOpen && (
              <div className="nav-dropdown-menu">
                {allTools.map(tool => (
                  <Link key={tool.href} href={tool.href} onClick={() => setToolsOpen(false)}>
                    <span className="nav-dropdown-emoji">{tool.emoji}</span> {tool.label}
                  </Link>
                ))}
              </div>
            )}
          </li>
          {otherPages.map(link => (
            <li key={link.href}>
              <Link href={link.href} title={link.label === '🔍 Search' ? 'Search' : link.label} style={{ fontSize: link.label === '🔍 Search' ? '18px' : undefined }}>
                {link.label === '🔍 Search' ? '🔍' : link.label}
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
        <p className="nav-drawer-heading">Tools</p>
        {allTools.map(tool => (
          <Link key={tool.href} href={tool.href} onClick={() => setOpen(false)}>
            {tool.emoji} {tool.label}
          </Link>
        ))}
        <p className="nav-drawer-heading">More</p>
        {otherPages.map(link => (
          <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </Link>
        ))}
      </div>
    </>
  )
}
