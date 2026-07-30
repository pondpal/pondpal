import Head from 'next/head'
import Link from 'next/link'
import { useState, useRef } from 'react'

function resizeImage(file, maxDim, quality) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = (e) => {
      const img = new Image()
      img.onload = () => {
        let width = img.width
        let height = img.height
        if (width > maxDim || height > maxDim) {
          if (width > height) {
            height = Math.round(height * (maxDim / width))
            width = maxDim
          } else {
            width = Math.round(width * (maxDim / height))
            height = maxDim
          }
        }
        const canvas = document.createElement('canvas')
        canvas.width = width
        canvas.height = height
        const ctx = canvas.getContext('2d')
        ctx.drawImage(img, 0, 0, width, height)
        resolve(canvas.toDataURL('image/jpeg', quality))
      }
      img.onerror = () => reject(new Error('Could not read that image file.'))
      img.src = e.target.result
    }
    reader.onerror = () => reject(new Error('Could not read that image file.'))
    reader.readAsDataURL(file)
  })
}

const fishTypeOptions = [
  { value: '', label: "Not sure / prefer not to say" },
  { value: 'koi', label: 'Koi' },
  { value: 'goldfish', label: 'Goldfish — Fancy' },
  { value: 'common goldfish', label: 'Goldfish — Common' },
  { value: 'comet goldfish', label: 'Goldfish — Comet' },
  { value: 'betta', label: 'Betta Fish' },
  { value: 'african cichlid', label: 'Cichlid — African (Malawi/Tanganyika)' },
  { value: 'south american cichlid', label: 'Cichlid — South American' },
  { value: 'oscar', label: 'Oscar' },
  { value: 'tropical community fish', label: 'Tropical Community Fish' },
  { value: 'guppies', label: 'Guppies / Livebearers' },
  { value: 'tetras', label: 'Tetras' },
  { value: 'angelfish', label: 'Angelfish' },
  { value: 'discus', label: 'Discus' },
  { value: 'corydoras', label: 'Corydoras / Bottom Dwellers' },
  { value: 'pleco', label: 'Pleco / Suckermouth Fish' },
  { value: 'molly', label: 'Molly' },
  { value: 'platy', label: 'Platy' },
  { value: 'swordtail', label: 'Swordtail' },
  { value: 'zebra danio', label: 'Zebra Danio' },
  { value: 'harlequin rasbora', label: 'Harlequin Rasbora' },
  { value: 'dwarf gourami', label: 'Dwarf Gourami' },
  { value: 'rainbowfish', label: 'Rainbowfish' },
  { value: 'other freshwater', label: 'Other Freshwater Fish' },
  { value: 'clownfish', label: 'Clownfish' },
  { value: 'chromis', label: 'Chromis / Damselfish' },
  { value: 'tang', label: 'Tang / Surgeonfish' },
  { value: 'angelfish marine', label: 'Marine Angelfish' },
  { value: 'blenny', label: 'Blenny / Goby' },
  { value: 'wrasse', label: 'Wrasse' },
  { value: 'lionfish', label: 'Lionfish' },
  { value: 'firefish', label: 'Firefish' },
  { value: 'anthias', label: 'Anthias' },
  { value: 'butterflyfish', label: 'Butterflyfish' },
  { value: 'cardinalfish', label: 'Cardinalfish' },
  { value: 'reef mixed', label: 'Mixed Reef Tank' },
  { value: 'other saltwater', label: 'Other Saltwater Fish' },
]

export default function PhotoDiagnosis() {
  const [preview, setPreview] = useState(null)
  const [imageData, setImageData] = useState(null)
  const [fishType, setFishType] = useState('')
  const [notes, setNotes] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState('')
  const [error, setError] = useState('')
  const fileInputRef = useRef(null)

  const handleFile = async (file) => {
    setError('')
    setResult('')
    if (!file) return
    if (!file.type.startsWith('image/')) {
      setError('Please choose an image file (JPG, PNG, etc.).')
      return
    }
    if (file.size > 15 * 1024 * 1024) {
      setError('That image is too large — please choose a photo under 15MB.')
      return
    }
    try {
      const dataUrl = await resizeImage(file, 1024, 0.8)
      setPreview(dataUrl)
      const match = dataUrl.match(/^data:(.+);base64,(.*)$/)
      if (!match) throw new Error('Unexpected image format')
      setImageData({ mimeType: match[1], data: match[2] })
    } catch (e) {
      setError('Could not process that image — please try a different photo.')
      setPreview(null)
      setImageData(null)
    }
  }

  const diagnose = async () => {
    if (!imageData) {
      setError('Please upload a photo first.')
      return
    }
    setError('')
    setLoading(true)
    setResult('')
    try {
      const res = await fetch('/api/photo-diagnosis', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ image: imageData.data, mimeType: imageData.mimeType, fishType, notes })
      })
      const json = await res.json()
      setResult(json.result)
    } catch (e) {
      setResult('Something went wrong — please try again!')
    }
    setLoading(false)
  }

  return (
    <>
      <Head>
        <title>Fish Photo Diagnosis — What's Wrong With My Fish? — Pond Pal</title>
        <meta name="description" content="Upload a photo of your fish and get an instant AI assessment of visible symptoms — spots, fin damage, discoloration, and more." />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>

      <div className="tool-hero">
        <h1>📸 Fish Photo Diagnosis</h1>
        <p>Upload a photo and our AI will look for visible signs of illness — spots, fin damage, discoloration, and more</p>
      </div>

      <div className="tool-form-section">
        <div className="tool-form-inner">
          <div style={{ background: '#FCEBEB', borderRadius: '12px', padding: '1rem 1.25rem', marginBottom: '1.5rem', fontSize: '13px', color: '#A32D2D', border: '1px solid rgba(163,45,45,0.2)' }}>
            <strong>⚠️ Important:</strong> This gives general guidance based on visible symptoms only — it's not a substitute for a vet or aquatic health specialist. If your fish is in visible distress or the situation seems urgent, seek professional help right away.
          </div>

          <div className="form-card">
            <h2>Upload a Photo</h2>
            <p style={{ fontSize: '13px', color: '#5a7a82', marginBottom: '1.25rem' }}>
              For the best result, get as close as you can to the affected area in good lighting. Photos are analyzed instantly and are not stored anywhere.
            </p>

            <div
              onClick={() => fileInputRef.current?.click()}
              style={{
                border: '2px dashed rgba(26,158,142,0.4)', borderRadius: '12px', padding: preview ? '1rem' : '2.5rem 1rem',
                textAlign: 'center', cursor: 'pointer', background: '#f8fffe', marginBottom: '1rem'
              }}
            >
              {preview ? (
                <img src={preview} alt="Uploaded fish photo" style={{ maxWidth: '100%', maxHeight: '320px', borderRadius: '8px' }} />
              ) : (
                <>
                  <p style={{ fontSize: '32px', marginBottom: '0.5rem' }}>📸</p>
                  <p style={{ fontSize: '14px', color: '#1a2e35', fontWeight: 500 }}>Click to choose a photo</p>
                  <p style={{ fontSize: '12px', color: '#5a7a82', marginTop: '4px' }}>JPG, PNG, or HEIC — up to 15MB</p>
                </>
              )}
            </div>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={e => handleFile(e.target.files[0])}
              style={{ display: 'none' }}
            />
            {preview && (
              <button type="button" onClick={() => fileInputRef.current?.click()}
                style={{ marginBottom: '1.25rem', padding: '8px 16px', border: '1px dashed #1a9e8e', borderRadius: '8px', background: '#f0faf8', color: '#0e6b6b', cursor: 'pointer', fontSize: '13px', fontWeight: 500 }}>
                Choose a Different Photo
              </button>
            )}

            {error && (
              <p style={{ fontSize: '13px', color: '#A32D2D', marginBottom: '1rem' }}>{error}</p>
            )}

            <div className="form-grid-2">
              <div className="fg">
                <label>Fish Type (optional)</label>
                <select value={fishType} onChange={e => setFishType(e.target.value)}>
                  {fishTypeOptions.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                </select>
              </div>
              <div className="fg">
                <label>Anything Else Noticed? (optional)</label>
                <input type="text" placeholder="e.g. not eating, gasping at surface" value={notes} onChange={e => setNotes(e.target.value)} />
              </div>
            </div>

            <button className="submit-btn" onClick={diagnose} disabled={loading || !imageData}>
              {loading ? 'Analyzing photo...' : 'Diagnose My Fish 🔍'}
            </button>
          </div>

          {(loading || result) && (
            <div className={`result-area ${loading ? 'loading' : ''} visible`}>
              {loading
                ? '🔍 Looking closely at your photo...'
                : <div dangerouslySetInnerHTML={{ __html: result.replace(/\n/g, '<br/>') }} />}
            </div>
          )}

          {result && (
            <div style={{ marginTop: '1.5rem', background: '#062d3a', borderRadius: '14px', padding: '2rem', textAlign: 'center' }}>
              <h3 style={{ color: '#fff', marginBottom: '0.75rem', fontSize: '1.1rem' }}>Check your water quality too</h3>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', marginBottom: '1.5rem' }}>Most fish health issues trace back to water conditions — test yours for a complete picture.</p>
              <Link href="/water-chemistry" className="submit-btn" style={{ display: 'inline-block', width: 'auto', padding: '0 1.5rem', textDecoration: 'none' }}>
                Test My Water →
              </Link>
            </div>
          )}

          <div style={{ marginTop: '1.5rem', padding: '1.25rem', background: '#fff', borderRadius: '14px', border: '1px solid rgba(0,0,0,0.07)', fontSize: '13px', color: '#5a7a82' }}>
            <strong style={{ color: '#1a2e35' }}>💡 Tips for a useful photo:</strong> Get close to the affected area, use natural light if possible (avoid harsh flash glare off the water surface), and photograph from the side rather than from above when you can. If a specific spot or patch concerns you, a close-up of just that area works better than a full-tank shot.
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
