import { useState } from 'react'

export default function BrandCenter() {
  const [activeTab, setActiveTab] = useState('style-guide')

  return (
    <div className="page-container">
      {/* Hero Banner */}
      <div style={{
        height: '220px',
        borderRadius: 'var(--card-radius)',
        background: 'linear-gradient(135deg, #0A0F2C 0%, #1428A0 50%, #00B2FF 100%)',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 'var(--sp-8)',
      }}>
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.08,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: '128px 128px',
        }} />
        <span style={{
          fontFamily: 'var(--font-display)', fontSize: '2.2rem', fontWeight: 300,
          color: 'rgba(255,255,255,0.85)', letterSpacing: '0.02em',
          position: 'relative', textAlign: 'center', lineHeight: 1.3,
          fontStyle: 'italic',
        }}>
          Simple. Iconic. Timeless.
        </span>
        <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.35)', position: 'relative', marginTop: '8px' }}>
          Samsung Brand Identity — Official Guidelines
        </span>
      </div>

      <div className="page-header" style={{ marginBottom: 'var(--sp-5)' }}>
        <h1 className="page-title">Brand Center</h1>
        <p className="page-subtitle">Samsung's visual identity, brand governance, and asset management across CRM</p>
      </div>

      {/* Tab Switcher */}
      <div style={{ display: 'flex', gap: 'var(--sp-6)', borderBottom: '2px solid #eef0f4', marginBottom: 'var(--sp-8)' }}>
        {[
          { key: 'style-guide', label: 'Style Guide' },
          { key: 'asset-library', label: 'Asset Library' },
        ].map(tab => (
          <button key={tab.key} onClick={() => setActiveTab(tab.key)} style={{
            background: 'none', padding: '0 0 12px 0', fontSize: '0.9rem',
            fontWeight: activeTab === tab.key ? 700 : 500,
            color: activeTab === tab.key ? 'var(--samsung-blue)' : 'var(--text-muted)',
            borderBottom: activeTab === tab.key ? '2px solid var(--samsung-blue)' : '2px solid transparent',
            marginBottom: '-2px', cursor: 'pointer', transition: 'all 0.15s',
          }}>
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === 'style-guide' ? <StyleGuide /> : <AssetLibrary />}
    </div>
  )
}

/* ========== STYLE GUIDE TAB ========== */
function StyleGuide() {
  return (
    <>
      {/* Section 1 — The Lettermark */}
      <div className="section">
        <h3 className="section-title">The Lettermark</h3>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: 'var(--sp-5)', marginTop: '-8px', maxWidth: '700px', lineHeight: 1.6 }}>
          Our logo is composed of our English brand name, "Samsung." The current design — in use since 1993 and refined in 2005 — reflects our dedication to excellence and timeless design experiences.
        </p>

        {/* Lettermark Colours */}
        <h4 style={{ fontSize: '0.85rem', fontWeight: 600, marginBottom: 'var(--sp-4)', color: 'var(--text-primary)' }}>Lettermark Colours</h4>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 'var(--sp-4)', marginBottom: 'var(--sp-6)' }}>
          <LettermarkTile bg="white" textColor="#1428A0" label="Samsung Blue" specs={['PMS 286C', 'CMYK 100/80/0/0', 'RGB 20/40/160', 'HEX #1428A0']} border />
          <LettermarkTile bg="white" textColor="#000000" label="Black" specs={['CMYK 0/0/0/100', 'RGB 0/0/0', 'HEX #000000']} border />
          <LettermarkTile bg="#1428A0" textColor="white" label="White" specs={['CMYK 0/0/0/0', 'RGB 255/255/255', 'HEX #FFFFFF']} />
          <LettermarkTile bg="#000000" textColor="white" label="White" specs={['CMYK 0/0/0/0', 'RGB 255/255/255', 'HEX #FFFFFF']} />
        </div>

        {/* Clear Space */}
        <div className="two-col" style={{ marginBottom: 'var(--sp-6)' }}>
          <div className="card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '160px', position: 'relative' }}>
            <div style={{ position: 'relative', padding: '24px 32px' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '0.08em' }}>SAMSUNG</span>
              {/* Clear space indicators */}
              <div style={{ position: 'absolute', top: 0, left: '32px', right: '32px', height: '1px', borderTop: '1px dashed var(--accent)', opacity: 0.5 }} />
              <div style={{ position: 'absolute', bottom: 0, left: '32px', right: '32px', height: '1px', borderTop: '1px dashed var(--accent)', opacity: 0.5 }} />
              <div style={{ position: 'absolute', top: 0, left: '32px', bottom: 0, width: '1px', borderLeft: '1px dashed var(--accent)', opacity: 0.5 }} />
              <div style={{ position: 'absolute', top: 0, right: '32px', bottom: 0, width: '1px', borderLeft: '1px dashed var(--accent)', opacity: 0.5 }} />
              <span style={{ position: 'absolute', top: '2px', right: '4px', fontSize: '0.6rem', color: 'var(--accent)' }}>0.5s</span>
              <span style={{ position: 'absolute', bottom: '2px', right: '4px', fontSize: '0.6rem', color: 'var(--accent)' }}>0.5s</span>
              <span style={{ position: 'absolute', top: '2px', left: '4px', fontSize: '0.6rem', color: 'var(--accent)' }}>0.5s</span>
            </div>
          </div>
          <div className="card">
            <h4 style={{ fontSize: '0.95rem', fontWeight: 600, marginBottom: 'var(--sp-3)' }}>Clear Space</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              The space around the lettermark should be protected at all times from other elements. The minimum clear space is 0.5s, where "s" equals the height of the letter S in the Samsung wordmark.
            </p>
          </div>
        </div>
      </div>

      {/* Section 2 — Color Identity */}
      <div className="section">
        <h3 className="section-title">Color Identity</h3>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: 'var(--sp-2)', marginTop: '-8px', maxWidth: '700px', lineHeight: 1.6 }}>
          Immersive, dynamic, distinctive.
        </p>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: 'var(--sp-5)', maxWidth: '700px', lineHeight: 1.6 }}>
          Blue has been the iconic color of Samsung since 1993. It represents the values of technology and innovation. It is the North Star that defines our identity. Blue is used throughout Samsung's products and experiences. We combine Samsung Blue with black, white, and vibrant secondary colors for an immersive and dynamic visual language.
        </p>

        {/* Color Principles */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--sp-4)', marginBottom: 'var(--sp-6)' }}>
          {[
            { principle: 'Black and white contrast', visual: ['#000000', '#ffffff'], border: true },
            { principle: 'Low-contrast detail for texture', visual: ['#F5A623', '#00D4AA'] },
            { principle: 'Secondary touches of color for warmth', visual: ['#1428A0', '#000000'] },
            { principle: 'Meaningful product placement', visual: 'art' },
          ].map((p, i) => (
            <div key={i} className="card" style={{ textAlign: 'center', padding: 'var(--sp-5)' }}>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '4px', marginBottom: 'var(--sp-3)' }}>
                {p.visual === 'art' ? (
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <rect x="4" y="6" width="16" height="12" rx="1" stroke="#1428A0" strokeWidth="1.5" />
                      <polygon points="8,14 12,9 15,13 17,11 20,15 4,15" fill="#1428A0" opacity="0.3" />
                    </svg>
                  </div>
                ) : (
                  p.visual.map((c, j) => (
                    <div key={j} style={{ width: '32px', height: '32px', borderRadius: '50%', background: c, border: c === '#ffffff' ? '1.5px solid #ddd' : 'none' }} />
                  ))
                )}
              </div>
              <span style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>{p.principle}</span>
            </div>
          ))}
        </div>

        {/* CRM OS Color Palette */}
        <h4 style={{ fontSize: '0.85rem', fontWeight: 600, marginBottom: 'var(--sp-4)', color: 'var(--text-primary)' }}>CRM OS Extended Palette</h4>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: 'auto auto', gap: '4px', borderRadius: 'var(--card-radius)', overflow: 'hidden', minHeight: '220px', marginBottom: 'var(--sp-6)' }}>
          <ColorTile color="#1428A0" name="Samsung Blue" hex="PMS 286C · #1428A0" light large />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <ColorTile color="#000000" name="Black" hex="#000000" light />
            <ColorTile color="#FFFFFF" name="White" hex="#FFFFFF" border />
          </div>
          <ColorTile color="#0A0F2C" name="Galaxy Night" hex="#0A0F2C" light large />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <ColorTile color="#00B2FF" name="Cyan Spark (Accent)" hex="#00B2FF" light />
            <ColorTile color="#F4F6FA" name="Polar White (Surface)" hex="#F4F6FA" />
          </div>
        </div>
      </div>

      {/* Section 3 — Typography */}
      <div className="section">
        <h3 className="section-title">Typography</h3>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: 'var(--sp-2)', marginTop: '-8px', fontStyle: 'italic' }}>
          Distinctive yet universal.
        </p>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: 'var(--sp-5)', maxWidth: '700px', lineHeight: 1.6 }}>
          We reach people in diverse cultures through an immense spectrum of products and platforms. The Samsung fonts — friendly, sleek, and modern — help us give the customer a connected and universal experience.
        </p>

        <div className="two-col">
          <div style={{ background: '#000000', borderRadius: 'var(--card-radius)', padding: 'var(--sp-6)', color: 'white' }}>
            <h4 style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--accent)', marginBottom: 'var(--sp-4)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Samsung Sharp Sans — Display</h4>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: '3.5rem', fontWeight: 700, lineHeight: 1.1, marginBottom: 'var(--sp-4)' }}>AaBb</p>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: '0.75rem', letterSpacing: '0.02em', color: 'rgba(255,255,255,0.4)', marginBottom: 'var(--sp-4)' }}>
              AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789!@*
            </p>
            <div style={{ display: 'flex', gap: 'var(--sp-5)', marginBottom: 'var(--sp-5)', flexWrap: 'wrap' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.85rem' }}>Bold</span>
            </div>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 700, lineHeight: 1.3 }}>Feel our spirit of the relentless pioneer.</p>
          </div>

          <div className="card">
            <h4 style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--samsung-blue)', marginBottom: 'var(--sp-4)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>SamsungOne — Body & UI</h4>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '3.5rem', fontWeight: 700, lineHeight: 1.1, marginBottom: 'var(--sp-4)', color: 'var(--text-primary)' }}>AaBb</p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: 'var(--sp-4)' }}>
              AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789!@*
            </p>
            <div style={{ display: 'flex', gap: 'var(--sp-5)', marginBottom: 'var(--sp-5)', flexWrap: 'wrap' }}>
              {[['Regular', 400], ['Medium', 500], ['Bold', 700]].map(([label, weight]) => (
                <span key={label} style={{ fontFamily: 'var(--font-body)', fontWeight: weight, fontSize: '0.85rem', color: 'var(--text-muted)' }}>{label}</span>
              ))}
            </div>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.92rem', lineHeight: 1.7, color: 'var(--text-secondary)' }}>
              Samsung CRM OS helps loyalty teams unlock customer lifetime value across every product line — from Galaxy to Bespoke.
            </p>
          </div>
        </div>
      </div>

      {/* Section 4 — Sonic & Brand Moods */}
      <div className="section">
        <h3 className="section-title">Brand Moods</h3>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: 'var(--sp-5)', marginTop: '-8px' }}>
          For every moment you meet us — the tone adapts to the context.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--sp-4)' }}>
          {[
            { mood: 'Bold', desc: 'Dynamic & Inspiring', color: '#1428A0', bg: 'linear-gradient(135deg, #0A0F2C, #1428A0)' },
            { mood: 'Genuine', desc: 'Engaging & Relatable', color: '#00B2FF', bg: 'linear-gradient(135deg, #0A0F2C, #003366)' },
            { mood: 'Contemporary', desc: 'Advancing & Embracing', color: '#00D4AA', bg: 'linear-gradient(135deg, #0A0F2C, #1A3A2A)' },
            { mood: 'Playful', desc: 'Witty & Delightful', color: '#F5A623', bg: 'linear-gradient(135deg, #0A0F2C, #3A2A0A)' },
          ].map(m => (
            <div key={m.mood} style={{
              background: m.bg, borderRadius: 'var(--card-radius)', padding: 'var(--sp-6)',
              display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', minHeight: '120px',
            }}>
              <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 700, color: 'white', fontStyle: 'italic' }}>{m.mood}</h4>
              <p style={{ fontSize: '0.78rem', color: m.color, marginTop: '4px' }}>{m.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Section 5 — Logo Usage Grid */}
      <div className="section">
        <h3 className="section-title">Lettermark Usage</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--sp-5)' }}>
          <LogoTile bg="white" color="var(--text-primary)" label="Samsung Blue on White" border />
          <LogoTile bg="#1428A0" color="white" label="White on Samsung Blue" />
          <LogoTile bg="#000000" color="white" label="White on Black" />
          <div style={{
            borderRadius: 'var(--card-radius)', padding: 'var(--sp-6)',
            background: '#fafafa', border: '1px solid #eee',
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            position: 'relative', overflow: 'hidden', minHeight: '140px',
          }}>
            <div style={{ transform: 'scaleX(1.6) scaleY(0.7)', opacity: 0.3 }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 700, color: '#999' }}>SAMSUNG</span>
            </div>
            <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} viewBox="0 0 200 140">
              <line x1="10" y1="10" x2="190" y2="130" stroke="#ff3b5c" strokeWidth="2.5" opacity="0.6" />
              <line x1="190" y1="10" x2="10" y2="130" stroke="#ff3b5c" strokeWidth="2.5" opacity="0.6" />
            </svg>
            <span className="badge badge-danger" style={{ position: 'absolute', bottom: '12px', right: '12px' }}>Do Not Use</span>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', position: 'absolute', bottom: '14px', left: '16px' }}>Incorrect Usage</span>
          </div>
        </div>
      </div>
    </>
  )
}

function LettermarkTile({ bg, textColor, label, specs, border }) {
  return (
    <div style={{
      background: bg, borderRadius: 'var(--card-radius)', padding: 'var(--sp-5)',
      display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px',
      border: border ? '1.5px solid #e0e2ea' : 'none', minHeight: '140px',
    }}>
      <div style={{
        flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 700,
        color: textColor, letterSpacing: '0.06em',
      }}>SAMSUNG</div>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '0.78rem', fontWeight: 600, color: border ? 'var(--text-primary)' : 'rgba(255,255,255,0.8)', marginBottom: '4px' }}>{label}</div>
        {specs.map((s, i) => (
          <div key={i} style={{ fontSize: '0.62rem', color: border ? 'var(--text-muted)' : 'rgba(255,255,255,0.45)', lineHeight: 1.5 }}>{s}</div>
        ))}
      </div>
    </div>
  )
}

function ColorTile({ color, name, hex, light, large, border }) {
  return (
    <div style={{
      background: color, borderRadius: '4px', padding: '14px',
      display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
      minHeight: large ? '100%' : '60px', flex: 1,
      border: border ? '1.5px solid #e0e2ea' : 'none',
    }}>
      <span style={{ fontSize: '0.72rem', fontWeight: 600, color: light ? 'rgba(255,255,255,0.9)' : 'var(--text-primary)' }}>{name}</span>
      <span style={{ fontSize: '0.62rem', fontFamily: 'monospace', color: light ? 'rgba(255,255,255,0.5)' : 'var(--text-muted)' }}>{hex}</span>
    </div>
  )
}

function LogoTile({ bg, color, label, border }) {
  return (
    <div style={{
      borderRadius: 'var(--card-radius)', padding: 'var(--sp-6)',
      background: bg, border: border ? '1px solid #eef0f4' : 'none',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      minHeight: '140px', boxShadow: border ? 'var(--card-shadow)' : 'none',
    }}>
      <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 700, color, letterSpacing: '0.08em' }}>SAMSUNG</span>
      <span style={{ fontSize: '0.72rem', color: border ? 'var(--text-muted)' : 'rgba(255,255,255,0.45)', marginTop: 'var(--sp-3)' }}>{label}</span>
    </div>
  )
}

/* ========== ASSET LIBRARY TAB ========== */
function AssetLibrary() {
  const [activeFilter, setActiveFilter] = useState('All')
  const filters = ['All', 'Device Visuals', 'Campaign Templates', 'Icons & Graphics', 'Approved Copy']

  return (
    <>
      <div style={{ display: 'flex', gap: 'var(--sp-2)', marginBottom: 'var(--sp-6)', flexWrap: 'wrap' }}>
        {filters.map(f => (
          <button key={f} className={`btn btn-sm ${activeFilter === f ? 'btn-primary' : 'btn-outline'}`} onClick={() => setActiveFilter(f)}>
            {f}
          </button>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--sp-5)' }}>
        <AssetCard
          preview={<img src="/images/galaxy-s25.jpg" alt="Galaxy S25 Ultra" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />}
          name="Galaxy S25 Ultra — Hero Shot"
          type="Device Visual"
          downloads={2341}
          updated="2d ago"
          badges={[]}
        />
        <AssetCard
          preview={<img src="/images/buds-case.jpg" alt="Galaxy Buds3 Pro" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />}
          name="Galaxy Buds3 Pro — Lifestyle"
          type="Device Visual"
          downloads={891}
          updated="5d ago"
          badges={[]}
        />
        <AssetCard
          preview={<img src="/images/fridge.jpg" alt="Samsung Bespoke Fridge" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />}
          name="Samsung Bespoke Fridge — Lifestyle"
          type="Device Visual"
          downloads={445}
          updated="12d ago"
          badges={[]}
        />
        <AssetCard
          preview={<EmailTemplateVisual />}
          name="Rewards Email Master Template"
          type="Campaign Template"
          downloads={1102}
          updated="1d ago"
          badges={['PSD', 'Figma', 'HTML']}
        />
        <AssetCard
          preview={<PushVisual />}
          name="EPP Welcome Push Notification"
          type="Campaign Template"
          downloads={678}
          updated="3d ago"
          badges={['Figma', 'JSON']}
        />
        <AssetCard
          preview={<IconGridVisual />}
          name="Samsung Blue Icon Set"
          type="Icons & Graphics"
          downloads={3210}
          updated="7d ago"
          badges={['SVG', 'AI']}
        />
      </div>
    </>
  )
}

function AssetCard({ preview, name, type, downloads, updated, badges }) {
  return (
    <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
      <div style={{ height: '180px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--surface)' }}>
        {preview}
      </div>
      <div style={{ padding: 'var(--sp-4) var(--sp-5)' }}>
        <h4 style={{ fontSize: '0.88rem', fontWeight: 600, marginBottom: '6px' }}>{name}</h4>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sp-2)', flexWrap: 'wrap', marginBottom: '8px' }}>
          <span className="badge badge-blue">{type}</span>
          {badges.map(b => <span key={b} className="badge badge-neutral">{b}</span>)}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
          <span>{downloads.toLocaleString()} downloads</span>
          <span>Updated {updated}</span>
        </div>
        <div style={{ display: 'flex', gap: 'var(--sp-2)', marginTop: 'var(--sp-3)' }}>
          <button className="btn btn-sm btn-outline" style={{ flex: 1 }}>Preview</button>
          <button className="btn btn-sm btn-primary" style={{ flex: 1 }}>Download</button>
        </div>
      </div>
    </div>
  )
}

function EmailTemplateVisual() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#f0f1f5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: '100px', height: '140px', background: 'white', borderRadius: '4px', boxShadow: '0 1px 4px rgba(0,0,0,0.08)', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
        <div style={{ height: '32px', background: '#1428A0' }} />
        <div style={{ flex: 1, padding: '8px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <div style={{ height: '4px', background: '#ddd', borderRadius: '2px', width: '80%' }} />
          <div style={{ height: '4px', background: '#ddd', borderRadius: '2px', width: '60%' }} />
          <div style={{ height: '4px', background: '#eee', borderRadius: '2px', width: '90%' }} />
          <div style={{ height: '4px', background: '#eee', borderRadius: '2px', width: '70%' }} />
          <div style={{ marginTop: 'auto', height: '16px', background: '#00B2FF', borderRadius: '3px' }} />
        </div>
      </div>
    </div>
  )
}

function PushVisual() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#1A1A2E', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: '100px', background: 'rgba(255,255,255,0.08)', borderRadius: '8px', padding: '8px', backdropFilter: 'blur(8px)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '6px' }}>
          <div style={{ width: '10px', height: '10px', borderRadius: '3px', background: '#1428A0' }} />
          <span style={{ fontSize: '0.4rem', color: '#999' }}>Samsung</span>
        </div>
        <div style={{ height: '3px', background: 'rgba(255,255,255,0.2)', borderRadius: '1px', marginBottom: '4px', width: '85%' }} />
        <div style={{ height: '3px', background: 'rgba(255,255,255,0.12)', borderRadius: '1px', width: '65%' }} />
      </div>
    </div>
  )
}

function IconGridVisual() {
  return (
    <div style={{ width: '100%', height: '100%', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
        {['M4 4h4v4H4z', 'M8 2l2 4H6z', 'M4 8a4 4 0 108 0', 'M4 2l4 6H0z', 'M2 6h8l-2 4H4z', 'M4 2v4l3 2-3 2v4', 'M5 1l1.5 3H10L7 6l1 3.5L5 7.5 2 9.5l1-3.5L0 4h3.5z', 'M1 3h6v5H1z', 'M4 1a3 3 0 110 6'].map((d, i) => (
          <div key={i} style={{ width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="16" height="16" viewBox="0 0 10 10" fill="#1428A0" opacity="0.7"><path d={d} /></svg>
          </div>
        ))}
      </div>
    </div>
  )
}
