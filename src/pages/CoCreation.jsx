import { useState } from 'react'

const useCases = [
  { id: 1, title: 'EPP Early Access Launch — Galaxy S25 Ultra', status: 'Building', tag: 'badge-info' },
  { id: 2, title: 'Rewards Tier Migration Campaign', status: 'Approved', tag: 'badge-success' },
  { id: 3, title: 'Cross-LOB Fatigue Suppression Rules', status: 'In Review', tag: 'badge-warning' },
  { id: 4, title: 'AI-Powered Welcome Journey v2', status: 'Live', tag: 'badge-success' },
  { id: 5, title: 'Wearables Health Engagement Loop', status: 'In Review', tag: 'badge-warning' },
]

const comments = [
  { author: 'Sarah Chen', role: 'CRM Strategy', time: '2h ago', avatar: 'SC', text: 'Legal review is complete — no blockers on the early access language. We can proceed to prototype.' },
  { author: 'Marcus Rivera', role: 'Engineering', time: '4h ago', avatar: 'MR', text: 'API endpoint for EPP eligibility check is deployed to staging. Ready for front-end integration.' },
  { author: 'Yuna Park', role: 'WONGDOODY Creative', time: '6h ago', avatar: 'YP', text: 'Updated the push notification copy to align with Samsung tone guidelines. See prototype preview →' },
]

export default function CoCreation() {
  const [selectedId, setSelectedId] = useState(1)
  const selected = useCases.find(u => u.id === selectedId)

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Cross-Functional Co-Creation Workspace</h1>
        <p className="page-subtitle">Samsung and WONGDOODY build the loyalty roadmap together</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(220px, 280px) minmax(0, 1fr) minmax(220px, 300px)', gap: 'var(--sp-5)', minHeight: '600px' }}>
        {/* Left Panel — Active Use Cases */}
        <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
          <div style={{ padding: 'var(--sp-4) var(--sp-5)', borderBottom: '1px solid #eef0f4' }}>
            <h4 style={{ fontSize: '0.85rem', fontWeight: 600 }}>Active Use Cases</h4>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {useCases.map(uc => (
              <button
                key={uc.id}
                onClick={() => setSelectedId(uc.id)}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                  padding: '14px 20px',
                  background: selectedId === uc.id ? 'var(--surface)' : 'transparent',
                  borderLeft: selectedId === uc.id ? '3px solid var(--accent)' : '3px solid transparent',
                  textAlign: 'left',
                  borderBottom: '1px solid #f0f1f5',
                  cursor: 'pointer',
                  transition: 'background 0.15s',
                }}
              >
                <span style={{ fontSize: '0.82rem', fontWeight: 500, color: 'var(--text-primary)', lineHeight: 1.3 }}>{uc.title}</span>
                <span className={`badge ${uc.tag}`}>{uc.status}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Main Panel — Selected Use Case Detail */}
        <div className="card">
          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: 'var(--sp-4)' }}>{selected.title}</h3>

          {/* Stakeholders */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: 'var(--sp-5)' }}>
            {['CRM', 'Rewards', 'Legal', 'Engineering', 'Agency'].map(s => (
              <span key={s} className="badge badge-blue">{s}</span>
            ))}
          </div>

          {/* Assessment */}
          <div style={{ display: 'flex', gap: 'var(--sp-6)', marginBottom: 'var(--sp-6)' }}>
            <div>
              <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Feasibility</span>
              <div style={{ fontWeight: 700, color: 'var(--success)' }}>High</div>
            </div>
            <div>
              <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Risk</span>
              <div style={{ fontWeight: 700, color: 'var(--success)' }}>Low</div>
            </div>
            <div>
              <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Effort</span>
              <div style={{ fontWeight: 700, color: 'var(--warning)' }}>Medium</div>
            </div>
          </div>

          {/* Status Timeline */}
          <div style={{ marginBottom: 'var(--sp-6)' }}>
            <h4 style={{ fontSize: '0.82rem', fontWeight: 600, marginBottom: '12px', color: 'var(--text-secondary)' }}>Status Timeline</h4>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0' }}>
              {[
                { label: 'Brief', done: true },
                { label: 'Legal Review', done: true },
                { label: 'Prototype', done: false, active: true },
                { label: 'Launch', done: false },
              ].map((step, i, arr) => (
                <div key={step.label} style={{ display: 'flex', alignItems: 'center', flex: i < arr.length - 1 ? 1 : 'none' }}>
                  <div style={{
                    width: '32px', height: '32px', borderRadius: '50%',
                    background: step.done ? 'var(--samsung-blue)' : step.active ? 'var(--accent)' : '#e0e2ea',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: step.done || step.active ? 'white' : 'var(--text-muted)',
                    fontSize: '0.72rem', fontWeight: 700, flexShrink: 0,
                  }}>
                    {step.done ? '✓' : i + 1}
                  </div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 500, color: step.active ? 'var(--accent)' : 'var(--text-secondary)', marginLeft: '6px', whiteSpace: 'nowrap' }}>{step.label}</span>
                  {i < arr.length - 1 && (
                    <div style={{ flex: 1, height: '2px', background: step.done ? 'var(--samsung-blue)' : '#e0e2ea', margin: '0 8px' }}></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Comments */}
          <div>
            <h4 style={{ fontSize: '0.82rem', fontWeight: 600, marginBottom: '12px', color: 'var(--text-secondary)' }}>Comments</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {comments.map((c, i) => (
                <div key={i} style={{ display: 'flex', gap: '12px' }}>
                  <div style={{
                    width: '32px', height: '32px', borderRadius: '50%',
                    background: i === 0 ? 'var(--samsung-blue)' : i === 1 ? '#6c5ce7' : 'var(--accent)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.65rem', fontWeight: 700, color: 'white', flexShrink: 0,
                  }}>{c.avatar}</div>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '4px' }}>
                      <span style={{ fontSize: '0.82rem', fontWeight: 600 }}>{c.author}</span>
                      <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>{c.role} · {c.time}</span>
                    </div>
                    <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{c.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Generate Prototype Button */}
          <div style={{ marginTop: 'var(--sp-6)', paddingTop: 'var(--sp-4)', borderTop: '1px solid #eef0f4' }}>
            <button className="btn btn-accent" style={{ padding: '10px 24px', fontSize: '0.88rem' }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" style={{ marginRight: '4px' }}>
                <path d="M8 0l2 5h5l-4 3 1.5 5L8 10l-4.5 3L5 8 1 5h5z"/>
              </svg>
              Generate Prototype
            </button>
          </div>
        </div>

        {/* Right Panel — Rapid Prototype Preview */}
        <div className="card" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
          <div style={{ padding: 'var(--sp-4) var(--sp-5)', borderBottom: '1px solid #eef0f4' }}>
            <h4 style={{ fontSize: '0.85rem', fontWeight: 600 }}>Rapid Prototype Preview</h4>
          </div>
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 'var(--sp-5)' }}>
            {/* Mock Push Notification */}
            <div style={{
              width: '100%',
              maxWidth: '260px',
              background: '#1a1a2e',
              borderRadius: '16px',
              padding: '20px',
              color: 'white',
              boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
            }}>
              {/* Phone status bar mock */}
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.65rem', color: '#888', marginBottom: '16px' }}>
                <span>9:41 AM</span>
                <span>⚡ 87%</span>
              </div>
              {/* Notification */}
              <div style={{
                background: 'rgba(255,255,255,0.1)',
                borderRadius: '12px',
                padding: '14px',
                backdropFilter: 'blur(10px)',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <div style={{ width: '20px', height: '20px', borderRadius: '5px', background: 'var(--samsung-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.5rem', fontWeight: 700 }}>S</div>
                  <span style={{ fontSize: '0.7rem', fontWeight: 600, color: '#ccc' }}>Samsung Members</span>
                  <span style={{ fontSize: '0.6rem', color: '#888', marginLeft: 'auto' }}>now</span>
                </div>
                <p style={{ fontSize: '0.78rem', lineHeight: 1.5, color: '#eee' }}>
                  Hey Brian, as a <strong style={{ color: 'var(--accent)' }}>Samsung Elite</strong> member, you get early access to Galaxy S25 Ultra.
                </p>
                <p style={{ fontSize: '0.78rem', lineHeight: 1.5, color: '#eee', marginTop: '6px' }}>
                  Shop before anyone else →
                </p>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
                <div style={{ width: '100px', height: '4px', borderRadius: '2px', background: 'rgba(255,255,255,0.2)' }}></div>
              </div>
            </div>
          </div>
          <div style={{ padding: 'var(--sp-3) var(--sp-5)', borderTop: '1px solid #eef0f4', textAlign: 'center' }}>
            <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Push Notification Preview — Samsung Members App</span>
          </div>
        </div>
      </div>
    </div>
  )
}
