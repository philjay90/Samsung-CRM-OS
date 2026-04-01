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
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 'var(--sp-8)',
      }}>
        {/* Grain texture overlay */}
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.08,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: '128px 128px',
        }} />
        <span style={{
          fontFamily: 'var(--font-display)', fontSize: '3rem', fontWeight: 700,
          color: 'rgba(255,255,255,0.12)', letterSpacing: '0.04em',
          position: 'relative', textAlign: 'center', lineHeight: 1.2,
        }}>
          Built for the Galaxy era.
        </span>
      </div>

      <div className="page-header" style={{ marginBottom: 'var(--sp-5)' }}>
        <h1 className="page-title">Brand Center</h1>
        <p className="page-subtitle">Manage Samsung's visual identity, assets, and brand governance across CRM</p>
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
      {/* Section 1 — Brand Identity Grid */}
      <div className="section">
        <h3 className="section-title">Brand Identity</h3>
        <div className="two-col">
          {/* Brand Mark Card */}
          <div style={{
            background: '#1428A0', borderRadius: 'var(--card-radius)', padding: 'var(--sp-8)',
            display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
            minHeight: '260px', position: 'relative',
          }}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: 700, color: 'white', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              SAMSUNG
            </span>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 600, color: '#00B2FF', letterSpacing: '0.15em', textTransform: 'uppercase', marginTop: '4px' }}>
              CRM OS
            </span>
            <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)', marginTop: 'var(--sp-5)', textAlign: 'center' }}>
              Official CRM Brand Mark — do not modify proportions
            </p>
            <span style={{ position: 'absolute', bottom: '12px', right: '16px', fontSize: '0.65rem', color: 'rgba(255,255,255,0.3)' }}>
              v3.2 — Approved
            </span>
          </div>

          {/* Color Palette */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: 'auto auto', gap: '4px', borderRadius: 'var(--card-radius)', overflow: 'hidden', minHeight: '260px' }}>
            <ColorTile color="#1428A0" name="Samsung Blue" hex="#1428A0" light style={{ gridRow: 'span 1' }} large />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <ColorTile color="#0A0F2C" name="Galaxy Night" hex="#0A0F2C" light />
              <ColorTile color="#F4F6FA" name="Polar White" hex="#F4F6FA" />
            </div>
            <ColorTile color="#00B2FF" name="Cyan Spark" hex="#00B2FF" light large />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <ColorTile color="#1A1A2E" name="Deep Navy" hex="#1A1A2E" light />
              <ColorTile color="#6B7280" name="Storm Gray" hex="#6B7280" light />
            </div>
          </div>
        </div>
      </div>

      {/* Section 2 — Typography Cards */}
      <div className="section">
        <h3 className="section-title">Typography</h3>
        <div className="two-col">
          <div style={{ background: '#0A0F2C', borderRadius: 'var(--card-radius)', padding: 'var(--sp-6)', color: 'white' }}>
            <h4 style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--accent)', marginBottom: 'var(--sp-4)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Samsung Sharp Sans — Display & Headers</h4>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', letterSpacing: '0.02em', color: 'rgba(255,255,255,0.5)', marginBottom: 'var(--sp-4)' }}>
              AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz
            </p>
            <div style={{ display: 'flex', gap: 'var(--sp-5)', marginBottom: 'var(--sp-5)', flexWrap: 'wrap' }}>
              {[['Light', 300], ['Regular', 400], ['SemiBold', 600], ['Bold', 700]].map(([label, weight]) => (
                <span key={label} style={{ fontFamily: 'var(--font-display)', fontWeight: weight, fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)' }}>{label}</span>
              ))}
            </div>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 700 }}>Galaxy. Redefined.</p>
          </div>

          <div className="card">
            <h4 style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--samsung-blue)', marginBottom: 'var(--sp-4)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>SamsungOne — Body & UI</h4>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: 'var(--sp-4)' }}>
              AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz
            </p>
            <div style={{ display: 'flex', gap: 'var(--sp-5)', marginBottom: 'var(--sp-5)', flexWrap: 'wrap' }}>
              {[['Light', 300], ['Regular', 400], ['Medium', 500], ['Bold', 700]].map(([label, weight]) => (
                <span key={label} style={{ fontFamily: 'var(--font-body)', fontWeight: weight, fontSize: '0.85rem', color: 'var(--text-muted)' }}>{label}</span>
              ))}
            </div>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', lineHeight: 1.7, color: 'var(--text-secondary)' }}>
              Samsung CRM OS helps loyalty teams unlock customer lifetime value across every product line — from Galaxy to Bespoke.
            </p>
          </div>
        </div>
      </div>

      {/* Section 3 — Brand Voice & Tone */}
      <div className="section">
        <h3 className="section-title">Brand Voice & Tone</h3>
        <div className="three-col">
          {[
            { tone: 'Confident', desc: 'Lead with clarity. Never hedge. Samsung speaks with authority.', color: 'var(--samsung-blue)' },
            { tone: 'Human', desc: 'Behind every data point is a person. Speak to them, not at them.', color: '#6c5ce7' },
            { tone: 'Forward', desc: "We don't describe the future. We build it.", color: 'var(--accent)' },
          ].map(t => (
            <div key={t.tone} className="card" style={{ borderTop: `3px solid ${t.color}` }}>
              <h4 style={{ fontSize: '1rem', fontWeight: 700, color: t.color, marginBottom: 'var(--sp-2)' }}>{t.tone}</h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{t.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Section 4 — Logo Usage Grid */}
      <div className="section">
        <h3 className="section-title">Logo Usage</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--sp-5)' }}>
          <LogoTile bg="white" color="var(--text-primary)" accent="var(--samsung-blue)" label="Primary Lockup" />
          <LogoTile bg="#1428A0" color="white" accent="white" label="Reversed — White on Blue" />
          <LogoTile bg="#0A0F2C" color="white" accent="#00B2FF" label="Dark Mode Version" />
          <div style={{
            borderRadius: 'var(--card-radius)', padding: 'var(--sp-6)',
            background: '#fafafa', border: '1px solid #eee',
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            position: 'relative', overflow: 'hidden', minHeight: '140px',
          }}>
            <div style={{ transform: 'scaleX(1.6) scaleY(0.7)', opacity: 0.3 }}>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 700, color: '#999' }}>SAMSUNG</span>
            </div>
            {/* Diagonal red X */}
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

function ColorTile({ color, name, hex, light, large }) {
  return (
    <div style={{
      background: color, borderRadius: '4px', padding: '14px',
      display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
      minHeight: large ? '100%' : '60px', flex: 1,
    }}>
      <span style={{ fontSize: '0.72rem', fontWeight: 600, color: light ? 'rgba(255,255,255,0.9)' : 'var(--text-primary)' }}>{name}</span>
      <span style={{ fontSize: '0.65rem', fontFamily: 'monospace', color: light ? 'rgba(255,255,255,0.5)' : 'var(--text-muted)' }}>{hex}</span>
    </div>
  )
}

function LogoTile({ bg, color, accent, label }) {
  return (
    <div style={{
      borderRadius: 'var(--card-radius)', padding: 'var(--sp-6)',
      background: bg, border: bg === 'white' ? '1px solid #eef0f4' : 'none',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      minHeight: '140px', boxShadow: bg === 'white' ? 'var(--card-shadow)' : 'none',
    }}>
      <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 700, color, letterSpacing: '0.08em' }}>SAMSUNG</span>
      <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.65rem', fontWeight: 600, color: accent, letterSpacing: '0.12em', marginTop: '2px' }}>CRM OS</span>
      <span style={{ fontSize: '0.72rem', color: bg === 'white' ? 'var(--text-muted)' : 'rgba(255,255,255,0.45)', marginTop: 'var(--sp-3)' }}>{label}</span>
    </div>
  )
}

/* ========== ASSET LIBRARY TAB ========== */
function AssetLibrary() {
  const [activeFilter, setActiveFilter] = useState('All')
  const filters = ['All', 'Device Visuals', 'Campaign Templates', 'Icons & Graphics', 'Approved Copy']

  return (
    <>
      {/* Filter bar */}
      <div style={{ display: 'flex', gap: 'var(--sp-2)', marginBottom: 'var(--sp-6)', flexWrap: 'wrap' }}>
        {filters.map(f => (
          <button key={f} className={`btn btn-sm ${activeFilter === f ? 'btn-primary' : 'btn-outline'}`} onClick={() => setActiveFilter(f)}>
            {f}
          </button>
        ))}
      </div>

      {/* Asset Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--sp-5)' }}>
        {/* Galaxy S25 Ultra */}
        <AssetCard
          preview={<PhoneVisual />}
          name="Galaxy S25 Ultra — Hero Shot"
          type="Device Visual"
          downloads={2341}
          updated="2d ago"
          badges={[]}
        />
        {/* Galaxy Buds3 Pro */}
        <AssetCard
          preview={<BudsVisual />}
          name="Galaxy Buds3 Pro — Lifestyle"
          type="Device Visual"
          downloads={891}
          updated="5d ago"
          badges={[]}
        />
        {/* Bespoke Fridge */}
        <AssetCard
          preview={<FridgeVisual />}
          name="Samsung Bespoke Fridge — Lifestyle"
          type="Device Visual"
          downloads={445}
          updated="12d ago"
          badges={[]}
        />
        {/* Rewards Email Template */}
        <AssetCard
          preview={<EmailTemplateVisual />}
          name="Rewards Email Master Template"
          type="Campaign Template"
          downloads={1102}
          updated="1d ago"
          badges={['PSD', 'Figma', 'HTML']}
        />
        {/* EPP Push Notification */}
        <AssetCard
          preview={<PushVisual />}
          name="EPP Welcome Push Notification"
          type="Campaign Template"
          downloads={678}
          updated="3d ago"
          badges={['Figma', 'JSON']}
        />
        {/* Icon Set */}
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
          {badges.map(b => (
            <span key={b} className="badge badge-neutral">{b}</span>
          ))}
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

/* ---- CSS Device Visuals ---- */
function PhoneVisual() {
  return (
    <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, #0A0F2C, #1428A0)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
      <div style={{ position: 'absolute', width: '120px', height: '120px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,178,255,0.15) 0%, transparent 70%)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
      <div style={{ width: '56px', height: '112px', borderRadius: '10px', background: 'linear-gradient(180deg, #1428A0, #00B2FF)', border: '2px solid rgba(255,255,255,0.15)', position: 'relative', boxShadow: '0 4px 20px rgba(0,0,0,0.4)' }}>
        {/* Camera array */}
        <div style={{ position: 'absolute', top: '8px', right: '-14px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
          {[0,1,2].map(i => (
            <div key={i} style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#222', border: '1.5px solid #888', boxShadow: '0 0 3px rgba(0,178,255,0.4)' }} />
          ))}
        </div>
        {/* Screen dots */}
        <div style={{ padding: '14px 6px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '4px' }}>
          {Array(9).fill(0).map((_, i) => (
            <div key={i} style={{ width: '6px', height: '6px', borderRadius: '2px', background: `rgba(255,255,255,${0.1 + Math.random() * 0.15})` }} />
          ))}
        </div>
      </div>
      <span style={{ position: 'absolute', bottom: '10px', fontSize: '0.6rem', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.04em' }}>Titanium Finish</span>
    </div>
  )
}

function BudsVisual() {
  return (
    <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, #1A1A2E, #1428A0)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
      <div style={{ position: 'absolute', width: '80px', height: '80px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)' }} />
      {/* Left bud */}
      <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: '#e8e8e8', marginRight: '24px', position: 'relative', boxShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
        <div style={{ position: 'absolute', bottom: '-14px', left: '50%', transform: 'translateX(-50%)', width: '2px', height: '14px', background: '#ccc', borderRadius: '1px' }} />
      </div>
      {/* Right bud */}
      <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: '#e8e8e8', position: 'relative', boxShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
        <div style={{ position: 'absolute', bottom: '-14px', left: '50%', transform: 'translateX(-50%)', width: '2px', height: '14px', background: '#ccc', borderRadius: '1px' }} />
      </div>
      {/* Case */}
      <div style={{ position: 'absolute', bottom: '28px', width: '44px', height: '22px', borderRadius: '11px', background: '#e0e0e0', boxShadow: '0 2px 8px rgba(0,0,0,0.2)' }} />
    </div>
  )
}

function FridgeVisual() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#F4F6FA', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: '70px', height: '140px', border: '2px solid #1428A0', borderRadius: '6px', overflow: 'hidden', display: 'flex', flexDirection: 'column', position: 'relative' }}>
        {/* Upper doors */}
        <div style={{ flex: 1, display: 'flex' }}>
          <div style={{ flex: 1, background: '#B2C9AD', borderBottom: '1px solid #1428A0', borderRight: '1px solid #1428A0' }} />
          <div style={{ flex: 1, background: '#B2C9AD', borderBottom: '1px solid #1428A0' }} />
        </div>
        {/* Lower drawer */}
        <div style={{ height: '35%', background: '#F5ECD7', borderTop: '1px solid #1428A0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: '24px', height: '1.5px', background: '#1428A0', opacity: 0.4 }} />
        </div>
        <span style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', fontSize: '0.35rem', fontWeight: 700, color: '#1428A0', letterSpacing: '0.1em', opacity: 0.5 }}>BESPOKE</span>
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
