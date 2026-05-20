import Head from 'next/head'
import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'

const suggestions = [
  'My koi are flashing and rubbing against the sides — what is wrong?',
  'How do I know if my filter is big enough?',
  'My water is green — how do I clear it up?',
  'What should I do when I first set up a new pond?',
  'How often should I do water changes?',
  'My koi has a white patch on its body — is it sick?',
  'Can I mix koi and goldfish in the same pond?',
  'Why are my koi not eating?',
]

export default function AskPondPal() {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      text: "Hi there! I'm Pond Pal AI — your friendly fish care assistant. Ask me anything about koi, pond care, water chemistry, fish health, or any other fish keeping question. I'm here to help! 🐟"
    }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const sendMessage = async (text) => {
    const question = text || input.trim()
    if (!question) return

    setMessages(m => [...m, { role: 'user', text: question }])
    setInput('')
    setLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: question })
      })
      const json = await res.json()
      setMessages(m => [...m, { role: 'assistant', text: json.result }])
    } catch (e) {
      setMessages(m => [...m, { role: 'assistant', text: 'Sorry, something went wrong — please try again!' }])
    }
    setLoading(false)
  }

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <>
      <Head>
        <title>Ask Pond Pal — Free AI Fish Care Chat — Pond Pal</title>
        <meta name="description" content="Ask Pond Pal AI anything about koi, pond care, water chemistry, fish health, and more. Free AI-powered fish keeping chat assistant." />
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
        <h1>💬 Ask Pond Pal</h1>
        <p>Ask anything about koi, pond care, water chemistry, or fish health — free AI chat, no account needed</p>
      </div>

      <div style={{ maxWidth: '760px', margin: '0 auto', padding: '2rem' }}>

        {messages.length === 1 && (
          <div style={{ marginBottom: '1.5rem' }}>
            <p style={{ fontSize: '13px', color: '#5a7a82', marginBottom: '0.75rem', fontWeight: 500 }}>Popular questions to get you started:</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
              {suggestions.map((s, i) => (
                <button
                  key={i}
                  onClick={() => sendMessage(s)}
                  style={{
                    background: '#fff', border: '1px solid rgba(0,0,0,0.1)', borderRadius: '8px',
                    padding: '0.625rem 0.875rem', fontSize: '12px', color: '#2a3f47', cursor: 'pointer',
                    textAlign: 'left', fontFamily: 'inherit', lineHeight: '1.4',
                    transition: 'all 0.15s'
                  }}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}

        <div style={{ background: '#fff', borderRadius: '14px', border: '1px solid rgba(0,0,0,0.08)', overflow: 'hidden', marginBottom: '1rem' }}>
          <div style={{ height: '420px', overflowY: 'auto', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {messages.map((m, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: m.role === 'user' ? 'flex-end' : 'flex-start' }}>
                <div style={{
                  maxWidth: '80%', padding: '0.875rem 1rem', borderRadius: m.role === 'user' ? '14px 14px 4px 14px' : '14px 14px 14px 4px',
                  background: m.role === 'user' ? '#062d3a' : '#f0faf8',
                  color: m.role === 'user' ? '#fff' : '#2a3f47',
                  fontSize: '14px', lineHeight: '1.7',
                  border: m.role === 'assistant' ? '1px solid rgba(26,158,142,0.2)' : 'none'
                }}>
                  {m.role === 'assistant' && <span style={{ fontSize: '16px', marginRight: '6px' }}>🐟</span>}
                  <span dangerouslySetInnerHTML={{ __html: m.text.replace(/\n/g, '<br/>') }} />
                </div>
              </div>
            ))}
            {loading && (
              <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <div style={{ padding: '0.875rem 1rem', borderRadius: '14px 14px 14px 4px', background: '#f0faf8', border: '1px solid rgba(26,158,142,0.2)', fontSize: '14px', color: '#5a7a82' }}>
                  🐟 Pond Pal is thinking...
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          <div style={{ padding: '1rem', borderTop: '1px solid rgba(0,0,0,0.08)', display: 'flex', gap: '0.75rem' }}>
            <textarea
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Ask anything about your fish or pond..."
              rows={2}
              style={{
                flex: 1, padding: '0.75rem 1rem', border: '1px solid rgba(0,0,0,0.15)',
                borderRadius: '8px', fontSize: '14px', fontFamily: 'inherit',
                color: '#1a2e35', background: '#faf7f2', resize: 'none',
                lineHeight: '1.5'
              }}
            />
            <button
              onClick={() => sendMessage()}
              disabled={loading || !input.trim()}
              style={{
                padding: '0 1.25rem', background: '#062d3a', color: '#fff',
                border: 'none', borderRadius: '8px', cursor: 'pointer',
                fontSize: '20px', opacity: loading || !input.trim() ? 0.5 : 1,
                transition: 'opacity 0.2s'
              }}
            >
              →
            </button>
          </div>
        </div>

        <p style={{ fontSize: '11px', color: '#5a7a82', textAlign: 'center', marginBottom: '2rem' }}>
          Press Enter to send · Shift+Enter for a new line · General guidance only, not veterinary advice
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.75rem' }}>
          {[
            { href: '/tank-checker', emoji: '🏠', label: 'Tank Checker' },
            { href: '/water-chemistry', emoji: '🧪', label: 'Water Testing' },
            { href: '/tools/pond-calculator', emoji: '🏊', label: 'Pond Calculator' },
          ].map((t, i) => (
            <Link key={i} href={t.href} style={{ textDecoration: 'none' }}>
              <div style={{ background: '#fff', borderRadius: '10px', padding: '1rem', textAlign: 'center', border: '1px solid rgba(0,0,0,0.07)', transition: 'transform 0.15s' }}>
                <div style={{ fontSize: '24px', marginBottom: '4px' }}>{t.emoji}</div>
                <p style={{ fontSize: '12px', fontWeight: 500, color: '#1a2e35' }}>{t.label}</p>
              </div>
            </Link>
          ))}
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
