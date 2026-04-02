import { useState } from 'react'
import InfoTooltip from '../components/InfoTooltip'

export default function CustomerIntelligence() {
  const [activeFilter, setActiveFilter] = useState('All')

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Customer & Audience Intelligence</h1>
        <p className="page-subtitle">Unified signals across product lines and loyalty programs</p>
      </div>

      {/* Filter Bar */}
      <div className="card section" style={{ padding: 'var(--sp-3) var(--sp-4)', display: 'flex', alignItems: 'center', gap: 'var(--sp-3)', flexWrap: 'wrap' }}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="var(--text-muted)" strokeWidth="1.8" strokeLinecap="round">
          <path d="M1 2h14l-5 6v5l-4 2V8z"/>
        </svg>
        {['All', 'Mobile', 'TV', 'Appliances', 'Wearables'].map(f => (
          <button key={f} className={`btn btn-sm ${activeFilter === f ? 'btn-primary' : 'btn-outline'}`} onClick={() => setActiveFilter(f)}>
            {f}
          </button>
        ))}
        <div style={{ marginLeft: 'auto' }}>
          {['Onboarding', 'Active', 'At Risk', 'Churned'].map(stage => (
            <button key={stage} className="btn btn-sm btn-outline" style={{ marginLeft: '6px' }}>
              {stage}
            </button>
          ))}
        </div>
      </div>

      {/* Unified Customer Signals */}
      <div className="section">
        <h3 className="section-title">Unified Customer Signals <InfoTooltip text="Aggregated behavioral and identity data across all Samsung product lines and loyalty programs. These signals power segmentation, propensity models, and fatigue management." /></h3>
        <div className="kpi-row" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
          <div className="kpi-card">
            <div className="kpi-label">Anonymous → Known Stitch Rate <InfoTooltip text="The percentage of anonymous site/app visitors successfully matched to known customer profiles. Higher stitch rates mean better personalization and less wasted outreach." /></div>
            <div className="kpi-value">68.4%</div>
            <div className="kpi-delta positive">&#9650; +2.1% this quarter</div>
          </div>
          <div className="kpi-card">
            <div className="kpi-label">Avg Lifecycle Stage Score <InfoTooltip text="A composite score (1-10) indicating where the average customer sits in their journey. Higher scores mean a more mature, engaged customer base." /></div>
            <div className="kpi-value">7.1 / 10</div>
            <div className="kpi-delta positive">&#9650; +0.3 vs Q3</div>
          </div>
          <div className="kpi-card">
            <div className="kpi-label">Oversaturated Customers (Fatigue &gt;8) <InfoTooltip text="Customers with a fatigue score above 8 — they're receiving too many communications and are at high risk of unsubscribing or disengaging. This number should be trending down." /></div>
            <div className="kpi-value">142K</div>
            <div className="kpi-delta positive">&#9660; -18K vs last month</div>
          </div>
        </div>
      </div>

      {/* Propensity Model Library */}
      <div className="section">
        <h3 className="section-title">Propensity Model Library <InfoTooltip text="Pre-built AI models that predict customer likelihood to take specific actions. Accuracy scores reflect how well each model predicts outcomes on holdout test data." /></h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--sp-5)' }}>
          {[
            { name: 'Buy Propensity Model', updated: '3d ago', accuracy: 84, color: 'var(--samsung-blue)' },
            { name: 'Churn Risk Model', updated: '1d ago', accuracy: 79, color: 'var(--danger)' },
            { name: 'Category Expansion Model', updated: '7d ago', accuracy: 76, color: '#6c5ce7' },
            { name: 'EPP Upgrade Propensity', updated: '12h ago', accuracy: 88, color: 'var(--accent)' },
          ].map(m => (
            <div key={m.name} className="card" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <h4 style={{ fontSize: '0.9rem', fontWeight: 600 }}>{m.name}</h4>
                <span className="badge badge-neutral">Updated {m.updated}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ flex: 1 }}>
                  <div className="progress-bar">
                    <div className="progress-bar-fill" style={{ width: `${m.accuracy}%`, background: m.color }}></div>
                  </div>
                </div>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.1rem', color: m.color }}>{m.accuracy}%</span>
              </div>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Model Accuracy</span>
              <button className="btn btn-primary btn-sm" style={{ alignSelf: 'flex-start', marginTop: '4px' }}>Run Audience</button>
            </div>
          ))}
        </div>
      </div>

      {/* Audience Builder */}
      <div className="section">
        <h3 className="section-title">Audience Builder <InfoTooltip text="Combine behavioral signals, loyalty data, and fatigue scores to build targeted segments. The estimated audience updates in real-time as you add conditions." /></h3>
        <div className="card">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '20px' }}>
            <LogicBlock label="Product Ownership" value="Galaxy S-Series" color="var(--samsung-blue)" />
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)' }}>AND</span>
            <LogicBlock label="Loyalty Tier" value="Gold or higher" color="#6c5ce7" />
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)' }}>AND</span>
            <LogicBlock label="Fatigue Index" value="< 5" color="var(--success)" />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px', background: 'var(--surface)', borderRadius: '8px' }}>
            <div>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Estimated Audience</span>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 700, color: 'var(--samsung-blue)' }}>312,400</div>
            </div>
            <button className="btn btn-primary">Build Segment</button>
          </div>
        </div>
      </div>
    </div>
  )
}

function LogicBlock({ label, value, color }) {
  return (
    <div style={{
      border: `2px solid ${color}`,
      borderRadius: '8px',
      padding: '10px 16px',
      background: 'white',
      minWidth: '180px',
    }}>
      <div style={{ fontSize: '0.7rem', fontWeight: 600, color: color, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '2px' }}>{label}</div>
      <div style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-primary)' }}>{value}</div>
    </div>
  )
}
