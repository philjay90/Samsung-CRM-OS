import { useState } from 'react'

export default function CreativeIntelligence() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Creative Intelligence</h1>
        <p className="page-subtitle">AI-suggested creative concepts based on your brand assets and top-performing CRM campaigns</p>
      </div>

      {/* Top Insight Banner */}
      <InsightBanner />

      {/* AI-Suggested Campaign Concepts */}
      <div className="section">
        <h3 className="section-title">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="var(--accent)"><path d="M8 0l2 5h5l-4 3 1.5 5L8 10l-4.5 3L5 8 1 5h5z" /></svg>
          AI-Suggested Campaign Concepts
        </h3>
        <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: 'var(--sp-5)', marginTop: '-8px' }}>Ranked by predicted CLV lift based on your active CRM journeys</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-6)' }}>
          <ConceptCard
            visual={<PhoneMockup />}
            title="Early Access. Only for Elite."
            predictedCTR="+38%"
            clvImpact="High"
            segment="Samsung Elite (87.5K)"
            headline="Before the world sees it — you do."
            body="As a Samsung Elite member, your Galaxy S25 Ultra access opens 48 hours before launch. Titanium. Titanium camera. Zero compromise."
            channels={['Email', 'Push', 'In-App']}
            tones={['Exclusive', 'Aspirational', 'Urgency']}
            brandSafety={99}
          />
          <ConceptCard
            visual={<BudsMockup />}
            title="Your Points. Your Sound."
            predictedCTR="+27%"
            clvImpact="Medium-High"
            segment="Gold Rewards (310K)"
            headline="You've earned this moment."
            body="Your Samsung Rewards points are ready for something worthy. Galaxy Buds3 Pro — adaptive noise cancellation, 360 Audio, yours to claim."
            channels={['Email', 'SMS', 'Push']}
            tones={['Rewarding', 'Personal', 'Warm']}
            brandSafety={97}
          />
          <ConceptCard
            visual={<FridgeMockup />}
            title="Upgrade the break room. Upgrade the team."
            predictedCTR="+19%"
            clvImpact="Medium"
            segment="EPP Corporate (441K)"
            headline="Your EPP discount just got tastier."
            body="Samsung Bespoke refrigerators are now part of your corporate EPP program. Choose your panels. Keep your budget happy."
            channels={['Email', 'In-App']}
            tones={['Professional', 'Playful', 'Value-Driven']}
            brandSafety={96}
          />
        </div>
      </div>

      {/* Top-Performing Creative */}
      <div className="section">
        <h3 className="section-title">Top-Performing Creative — Last 30 Days</h3>
        <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: 'var(--sp-5)', marginTop: '-8px' }}>Benchmarks from your highest-CTR CRM campaigns — used to train new suggestions</p>
        <div style={{ display: 'flex', gap: 'var(--sp-5)', overflowX: 'auto', paddingBottom: 'var(--sp-2)' }}>
          <PerfCard
            visual={<MiniEmail />}
            name="Galaxy S25 Launch Email"
            stats="CTR: 6.8% · Opens: 2.1M · CLV Lift: +$142/customer"
            badge="Top Performer"
            badgeClass="badge-warning"
          />
          <PerfCard
            visual={<MiniPush />}
            name="Elite Early Access Push"
            stats="CTR: 11.2% · Sent: 87K · Conversion: 34%"
            badge="Highest CTR"
            badgeClass="badge-danger"
          />
          <PerfCard
            visual={<MiniSMS />}
            name="Rewards Redemption SMS"
            stats="CTR: 8.4% · Response Rate: 22% · Opt-outs: 0.3%"
            badge="Low Fatigue"
            badgeClass="badge-success"
          />
          <PerfCard
            visual={<MiniEmail2 />}
            name="EPP Welcome Series Email 2"
            stats="CTR: 5.1% · CLV Lift: +$89/customer"
            badge="Best CLV Impact"
            badgeClass="badge-info"
          />
        </div>
      </div>

      {/* Generate Custom Creative */}
      <div className="section">
        <GeneratePanel />
      </div>
    </div>
  )
}

/* ========== INSIGHT BANNER ========== */
function InsightBanner() {
  return (
    <div className="section" style={{
      background: 'linear-gradient(135deg, #1428A0, #0f1f7a)', borderRadius: 'var(--card-radius)',
      padding: 'var(--sp-8)', color: 'white',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--sp-8)',
    }}>
      <div style={{ flex: 1 }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 700, marginBottom: 'var(--sp-2)' }}>
          3 high-impact creative opportunities detected
        </h2>
        <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.65)', marginBottom: 'var(--sp-5)', lineHeight: 1.5 }}>
          Based on Galaxy S25 campaign data + Rewards segment performance from the last 30 days
        </p>
        <button className="btn btn-accent" style={{ padding: '10px 24px', fontSize: '0.88rem' }}>
          <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" style={{ marginRight: '4px' }}>
            <path d="M8 0l2 5h5l-4 3 1.5 5L8 10l-4.5 3L5 8 1 5h5z" />
          </svg>
          Generate All
        </button>
      </div>
      <div style={{ display: 'flex', gap: 'var(--sp-6)', flexShrink: 0 }}>
        {[
          { label: 'Top Performer Lift', value: '+34% CTR' },
          { label: 'Segments Analyzed', value: '12' },
          { label: 'Brand-Safe Score', value: '98/100' },
        ].map(s => (
          <div key={s.label} style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700 }}>{s.value}</div>
            <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)', marginTop: '2px' }}>{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ========== CONCEPT CARD ========== */
function ConceptCard({ visual, title, predictedCTR, clvImpact, segment, headline, body, channels, tones, brandSafety }) {
  return (
    <div className="card" style={{ padding: 0, overflow: 'hidden', display: 'grid', gridTemplateColumns: '340px 1fr' }}>
      {/* Left — Visual */}
      <div style={{ position: 'relative', minHeight: '340px' }}>
        {visual}
        <span className="badge badge-info" style={{ position: 'absolute', top: '12px', right: '12px' }}>AI Concept</span>
      </div>
      {/* Right — Detail */}
      <div style={{ padding: 'var(--sp-6)' }}>
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 700, marginBottom: 'var(--sp-3)' }}>{title}</h3>

        <div style={{ display: 'flex', gap: 'var(--sp-5)', marginBottom: 'var(--sp-5)', flexWrap: 'wrap' }}>
          <Stat label="Predicted CTR Lift" value={predictedCTR} color="var(--success)" />
          <Stat label="CLV Impact" value={clvImpact} color="var(--samsung-blue)" />
          <Stat label="Segment" value={segment} color="var(--text-primary)" />
        </div>

        <div style={{ marginBottom: 'var(--sp-4)' }}>
          <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '4px' }}>Suggested Headline</div>
          <p style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 600 }}>{headline}</p>
        </div>
        <div style={{ marginBottom: 'var(--sp-5)' }}>
          <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '4px' }}>Suggested Body</div>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{body}</p>
        </div>

        <div style={{ display: 'flex', gap: 'var(--sp-6)', marginBottom: 'var(--sp-4)', flexWrap: 'wrap' }}>
          <div>
            <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: '4px' }}>Channels</div>
            <div style={{ display: 'flex', gap: '4px' }}>{channels.map(c => <span key={c} className="badge badge-blue">{c}</span>)}</div>
          </div>
          <div>
            <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: '4px' }}>Tone</div>
            <div style={{ display: 'flex', gap: '4px' }}>{tones.map(t => <span key={t} className="badge badge-neutral">{t}</span>)}</div>
          </div>
          <div>
            <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: '4px' }}>Brand Safety</div>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--success)' }}>{brandSafety}/100 ✓</span>
          </div>
        </div>

        <div style={{ display: 'flex', gap: 'var(--sp-2)', flexWrap: 'wrap', paddingTop: 'var(--sp-3)', borderTop: '1px solid #eef0f4' }}>
          <button className="btn btn-primary">Use This Concept →</button>
          <button className="btn btn-outline">Refine with AI</button>
          <button className="btn btn-outline">Save to Library</button>
        </div>
      </div>
    </div>
  )
}

function Stat({ label, value, color }) {
  return (
    <div>
      <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{label}</div>
      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.95rem', color }}>{value}</div>
    </div>
  )
}

/* ========== DEVICE MOCKUPS ========== */
function PhoneMockup() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#0A0F2C', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', width: '200px', height: '200px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,178,255,0.12) 0%, transparent 70%)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
      <span style={{ fontSize: '0.6rem', fontWeight: 600, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '16px' }}>SAMSUNG</span>
      <div style={{ width: '80px', height: '160px', borderRadius: '14px', background: 'linear-gradient(180deg, #1428A0, #00B2FF)', border: '2px solid rgba(255,255,255,0.12)', position: 'relative', boxShadow: '0 8px 32px rgba(0,0,0,0.5)' }}>
        <div style={{ position: 'absolute', top: '10px', right: '-18px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {[0,1,2].map(i => (
            <div key={i} style={{ width: '13px', height: '13px', borderRadius: '50%', background: '#1a1a2e', border: '2px solid #888', boxShadow: '0 0 6px rgba(0,178,255,0.3), inset 0 0 3px rgba(0,178,255,0.2)' }} />
          ))}
        </div>
        <div style={{ padding: '20px 8px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '5px' }}>
          {Array(12).fill(0).map((_, i) => (
            <div key={i} style={{ width: '8px', height: '8px', borderRadius: '2px', background: `rgba(255,255,255,${0.08 + Math.random() * 0.12})` }} />
          ))}
        </div>
      </div>
      <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'white', fontSize: '0.95rem', marginTop: '16px' }}>Galaxy S25 Ultra</span>
    </div>
  )
}

function BudsMockup() {
  return (
    <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, #1A1A2E, #1428A0)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', width: '160px', height: '160px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)' }} />
      <div style={{ display: 'flex', gap: '40px', marginBottom: '20px' }}>
        {[false, true].map((flip, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'linear-gradient(135deg, #f0f0f0, #d4d4d4)', boxShadow: '0 2px 12px rgba(0,0,0,0.3)', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '6px', left: '50%', transform: 'translateX(-50%)', width: '6px', height: '6px', borderRadius: '50%', background: 'rgba(0,0,0,0.1)' }} />
            </div>
            <div style={{ width: '2.5px', height: '20px', background: 'linear-gradient(180deg, #d4d4d4, #aaa)', borderRadius: '1px', marginTop: '-2px' }} />
          </div>
        ))}
      </div>
      <div style={{ width: '56px', height: '28px', borderRadius: '14px', background: 'linear-gradient(135deg, #e8e8e8, #ccc)', boxShadow: '0 4px 16px rgba(0,0,0,0.25)' }} />
      <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, color: 'rgba(255,255,255,0.8)', fontSize: '0.82rem', marginTop: '20px' }}>Redeem. Listen. Love.</span>
    </div>
  )
}

function FridgeMockup() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#F4F6FA', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
      <div style={{ width: '100px', height: '200px', border: '2.5px solid #1428A0', borderRadius: '8px', overflow: 'hidden', display: 'flex', flexDirection: 'column', position: 'relative', boxShadow: '0 4px 20px rgba(20,40,160,0.1)' }}>
        <div style={{ flex: 1, display: 'flex' }}>
          <div style={{ flex: 1, background: '#B2C9AD', borderRight: '1px solid #1428A0', borderBottom: '1px solid #1428A0' }} />
          <div style={{ flex: 1, background: '#B2C9AD', borderBottom: '1px solid #1428A0' }} />
        </div>
        <div style={{ height: '38%', background: '#F5ECD7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: '32px', height: '1.5px', background: '#1428A0', opacity: 0.3 }} />
        </div>
        <span style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', fontSize: '0.4rem', fontWeight: 700, color: '#1428A0', letterSpacing: '0.12em', opacity: 0.4 }}>BESPOKE</span>
      </div>
      <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.78rem', marginTop: '12px' }}>Designed for you. Priced for your team.</span>
    </div>
  )
}

/* ========== PERFORMANCE CARDS ========== */
function PerfCard({ visual, name, stats, badge, badgeClass }) {
  return (
    <div className="card" style={{ padding: 0, overflow: 'hidden', minWidth: '260px', flexShrink: 0 }}>
      <div style={{ height: '120px' }}>{visual}</div>
      <div style={{ padding: 'var(--sp-4)' }}>
        <h4 style={{ fontSize: '0.85rem', fontWeight: 600, marginBottom: '6px' }}>{name}</h4>
        <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '8px' }}>{stats}</p>
        <span className={`badge ${badgeClass}`}>{badge}</span>
      </div>
    </div>
  )
}

function MiniEmail() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#0A0F2C', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: '90px', height: '100px', background: 'white', borderRadius: '3px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.2)' }}>
        <div style={{ height: '24px', background: '#1428A0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: '20px', height: '30px', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.3)', marginTop: '12px' }} />
        </div>
        <div style={{ padding: '6px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <div style={{ height: '3px', background: '#e0e2ea', borderRadius: '1px', width: '80%' }} />
          <div style={{ height: '3px', background: '#e0e2ea', borderRadius: '1px', width: '60%' }} />
          <div style={{ height: '3px', background: '#eee', borderRadius: '1px', width: '70%' }} />
          <div style={{ height: '12px', background: '#00B2FF', borderRadius: '2px', marginTop: '4px' }} />
        </div>
      </div>
    </div>
  )
}

function MiniPush() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#1A1A2E', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: '110px' }}>
        <div style={{ height: '4px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px', width: '60px', margin: '0 auto 8px' }} />
        <div style={{ background: 'rgba(255,255,255,0.08)', borderRadius: '8px', padding: '8px' }}>
          <div style={{ display: 'flex', gap: '4px', alignItems: 'center', marginBottom: '6px' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '2px', background: '#1428A0' }} />
            <div style={{ height: '2px', background: 'rgba(255,255,255,0.2)', flex: 1, borderRadius: '1px' }} />
          </div>
          <div style={{ height: '2px', background: 'rgba(255,255,255,0.15)', borderRadius: '1px', marginBottom: '3px', width: '90%' }} />
          <div style={{ height: '2px', background: 'rgba(255,255,255,0.1)', borderRadius: '1px', width: '70%' }} />
        </div>
      </div>
    </div>
  )
}

function MiniSMS() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#f0f1f5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', width: '100px' }}>
        <div style={{ background: '#e0e2ea', borderRadius: '12px 12px 12px 4px', padding: '8px 10px' }}>
          <div style={{ height: '2px', background: '#bbb', borderRadius: '1px', marginBottom: '3px', width: '85%' }} />
          <div style={{ height: '2px', background: '#ccc', borderRadius: '1px', width: '60%' }} />
        </div>
        <div style={{ background: '#1428A0', borderRadius: '12px 12px 4px 12px', padding: '8px 10px', alignSelf: 'flex-end' }}>
          <div style={{ height: '2px', background: 'rgba(255,255,255,0.4)', borderRadius: '1px', width: '50px', marginBottom: '3px' }} />
          <div style={{ height: '2px', background: 'rgba(255,255,255,0.25)', borderRadius: '1px', width: '35px' }} />
        </div>
      </div>
    </div>
  )
}

function MiniEmail2() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#f8f9fc', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: '90px', height: '100px', background: 'white', borderRadius: '3px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
        <div style={{ height: '8px', background: '#1428A0' }} />
        <div style={{ padding: '6px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <div style={{ height: '3px', background: '#1428A0', borderRadius: '1px', width: '70%', opacity: 0.6 }} />
          <div style={{ height: '3px', background: '#e0e2ea', borderRadius: '1px', width: '90%' }} />
          <div style={{ height: '3px', background: '#e0e2ea', borderRadius: '1px', width: '75%' }} />
          <div style={{ height: '3px', background: '#eee', borderRadius: '1px', width: '85%' }} />
          <div style={{ height: '3px', background: '#eee', borderRadius: '1px', width: '50%' }} />
          <div style={{ height: '14px', background: '#1428A0', borderRadius: '2px', marginTop: '4px' }} />
        </div>
      </div>
    </div>
  )
}

/* ========== GENERATE PANEL ========== */
function GeneratePanel() {
  const [generating, setGenerating] = useState(false)
  const [generated, setGenerated] = useState(false)
  const [selectedProducts, setSelectedProducts] = useState(['Galaxy Mobile'])
  const [selectedSegments, setSelectedSegments] = useState([])
  const [selectedTones, setSelectedTones] = useState([])

  const togglePill = (arr, setArr, val) => {
    setArr(prev => prev.includes(val) ? prev.filter(x => x !== val) : [...prev, val])
  }

  const handleGenerate = () => {
    setGenerating(true)
    setGenerated(false)
    setTimeout(() => { setGenerating(false); setGenerated(true) }, 1500)
  }

  return (
    <div className="card">
      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 700, marginBottom: '4px' }}>Generate a new concept</h3>
      <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: 'var(--sp-5)' }}>
        Describe your campaign goal — AI will suggest creative concepts using your brand assets and top-performing benchmarks
      </p>

      <textarea style={{
        width: '100%', minHeight: '100px', padding: 'var(--sp-4)',
        border: '1.5px solid #e0e2ea', borderRadius: 'var(--card-radius-sm)',
        fontFamily: 'var(--font-body)', fontSize: '0.88rem', resize: 'vertical',
        color: 'var(--text-primary)', outline: 'none', transition: 'border-color 0.15s',
        background: 'var(--surface)',
      }}
        placeholder="e.g. 'Create a re-engagement campaign for lapsed Rewards members who own a Galaxy S23 and haven't redeemed points in 90 days...'"
        onFocus={e => e.target.style.borderColor = 'var(--samsung-blue)'}
        onBlur={e => e.target.style.borderColor = '#e0e2ea'}
      />

      <div style={{ display: 'flex', gap: 'var(--sp-6)', marginTop: 'var(--sp-5)', flexWrap: 'wrap' }}>
        <PillGroup label="Product Line" options={['Galaxy Mobile', 'Wearables', 'TV', 'Appliances']} selected={selectedProducts} onToggle={(v) => togglePill(selectedProducts, setSelectedProducts, v)} />
        <PillGroup label="Segment" options={['Rewards Gold', 'EPP', 'New Members', 'Churned']} selected={selectedSegments} onToggle={(v) => togglePill(selectedSegments, setSelectedSegments, v)} />
        <PillGroup label="Tone" options={['Exclusive', 'Warm', 'Urgent', 'Playful']} selected={selectedTones} onToggle={(v) => togglePill(selectedTones, setSelectedTones, v)} />
      </div>

      <button onClick={handleGenerate} disabled={generating} className="btn btn-primary" style={{
        width: '100%', padding: '14px', fontSize: '0.95rem', fontWeight: 700,
        marginTop: 'var(--sp-6)', justifyContent: 'center',
        background: generating ? '#8e90a6' : 'var(--samsung-blue)',
      }}>
        {generating ? (
          <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ width: '16px', height: '16px', border: '2px solid rgba(255,255,255,0.3)', borderTop: '2px solid white', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />
            Generating concepts...
          </span>
        ) : (
          <>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" style={{ marginRight: '6px' }}>
              <path d="M8 0l2 5h5l-4 3 1.5 5L8 10l-4.5 3L5 8 1 5h5z" />
            </svg>
            Generate Creative Concepts
          </>
        )}
      </button>

      {/* Shimmer / Generated result */}
      {generating && (
        <div style={{ marginTop: 'var(--sp-5)', borderRadius: 'var(--card-radius)', overflow: 'hidden' }}>
          <div style={{ height: '180px', background: 'linear-gradient(90deg, #f0f1f5 25%, #e8e9ed 50%, #f0f1f5 75%)', backgroundSize: '200% 100%', animation: 'shimmer 1.5s infinite' }} />
        </div>
      )}

      {generated && !generating && (
        <div style={{ marginTop: 'var(--sp-5)' }}>
          <ConceptCard
            visual={<GeneratedMockup />}
            title="Win them back with what they love."
            predictedCTR="+22%"
            clvImpact="Medium-High"
            segment="Lapsed Galaxy S23 Owners (48K)"
            headline="Your Galaxy misses you. So do your points."
            body="You have 12,400 Rewards points waiting. Use them toward Galaxy Buds3 Pro or a Galaxy Watch7 — and rediscover why you chose Samsung."
            channels={['Email', 'Push']}
            tones={['Warm', 'Personal', 'Rewarding']}
            brandSafety={95}
          />
        </div>
      )}

      <style>{`
        @keyframes shimmer { 0% { background-position: -200% 0 } 100% { background-position: 200% 0 } }
        @keyframes spin { to { transform: rotate(360deg) } }
      `}</style>
    </div>
  )
}

function GeneratedMockup() {
  return (
    <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, #1A1A2E, #1428A0, #00B2FF)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', width: '200px', height: '200px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,178,255,0.15) 0%, transparent 70%)' }} />
      <svg width="48" height="48" viewBox="0 0 16 16" fill="rgba(255,255,255,0.15)" style={{ marginBottom: '12px' }}>
        <path d="M8 0l2 5h5l-4 3 1.5 5L8 10l-4.5 3L5 8 1 5h5z" />
      </svg>
      <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'white', fontSize: '0.9rem', textAlign: 'center' }}>AI-Generated Concept</span>
      <span style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.5)', marginTop: '4px' }}>Re-Engagement Campaign</span>
    </div>
  )
}

function PillGroup({ label, options, selected, onToggle }) {
  return (
    <div>
      <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '6px' }}>{label}</div>
      <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
        {options.map(o => (
          <button key={o} onClick={() => onToggle(o)}
            className={`btn btn-sm ${selected.includes(o) ? 'btn-primary' : 'btn-outline'}`}>
            {selected.includes(o) && '✓ '}{o}
          </button>
        ))}
      </div>
    </div>
  )
}
