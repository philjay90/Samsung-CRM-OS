import React from 'react'
import InfoTooltip from '../components/InfoTooltip'

export default function RewardsEPP() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Rewards & EPP Value Management</h1>
        <p className="page-subtitle">Unified loyalty ledger for Rewards members and EPP-eligible users</p>
      </div>

      {/* KPI Row */}
      <div className="kpi-row">
        <div className="kpi-card">
          <div className="kpi-label">Total Rewards Points Issued (MTD) <InfoTooltip text="Month-to-date points distributed across the Rewards program. Tracks the cost side of the loyalty equation." /></div>
          <div className="kpi-value">1.2B</div>
          <div className="kpi-delta neutral">On pace with forecast</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-label">EPP Conversion Rate <InfoTooltip text="Percentage of EPP-eligible users who have actually made a purchase through the program. Measures how effectively you're converting eligibility into revenue." /></div>
          <div className="kpi-value">34.7%</div>
          <div className="kpi-delta positive">&#9650; +2.1% vs last period</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-label">Offers Suppressed (Overlap Prevention) <InfoTooltip text="Offers blocked because a customer was already receiving a competing offer from another LOB. Prevents offer cannibalization and fatigue." /></div>
          <div className="kpi-value">22,400</div>
          <div className="kpi-delta positive">Cross-LOB dedup active</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-label">VIP Members (Top Tier) <InfoTooltip text="Top-tier loyalty members who drive disproportionate CLV. Growing this segment organically (not through discount incentives) is a key goal." /></div>
          <div className="kpi-value">87,500</div>
          <div className="kpi-delta positive">&#9650; +4.2% QoQ</div>
        </div>
      </div>

      {/* EPP Eligibility Engine */}
      <div className="section">
        <h3 className="section-title">EPP Eligibility Engine <InfoTooltip text="Manages the three EPP enrollment segments. Eligible users are verified against employer, military, or education databases and can access exclusive Samsung pricing." /></h3>
        <div className="three-col">
          {[
            { segment: 'Corporate Accounts', eligible: '441K', icon: '🏢', color: 'var(--samsung-blue)' },
            { segment: 'Military & Veterans', eligible: '128K', icon: '🎖️', color: '#6c5ce7' },
            { segment: 'Students & Educators', eligible: '320K', icon: '🎓', color: 'var(--accent)' },
          ].map(s => (
            <div key={s.segment} className="card" style={{ borderTop: `3px solid ${s.color}` }}>
              <div style={{ fontSize: '1.5rem', marginBottom: '8px' }}>{s.icon}</div>
              <h4 style={{ fontSize: '0.95rem', fontWeight: 600, marginBottom: '4px' }}>{s.segment}</h4>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 700, color: s.color, marginBottom: '8px' }}>{s.eligible} <span style={{ fontSize: '0.8rem', fontWeight: 400, color: 'var(--text-muted)' }}>eligible</span></div>
              <a href="#" style={{ fontSize: '0.82rem', fontWeight: 600, color: s.color }}>View Segment →</a>
            </div>
          ))}
        </div>
      </div>

      {/* Offer Prioritization Matrix */}
      <div className="section">
        <h3 className="section-title">Offer Prioritization Matrix <InfoTooltip text="Shows which offer types have the strongest fit for each customer segment. Higher scores (darker blue) indicate better predicted response rates and CLV impact." /></h3>
        <div className="card" style={{ overflowX: 'auto' }}>
          <HeatmapGrid />
        </div>
      </div>

      {/* VIP Tier Framework */}
      <div className="section">
        <h3 className="section-title">VIP Tier Framework <InfoTooltip text="The three loyalty tiers with their key benefits and fill rates. Tier progression should be earned through engagement, not purchased through discounting." /></h3>
        <div className="three-col">
          {[
            { tier: 'Samsung Insider', members: '52,300', benefit: 'Early Access to Product Launches', fill: 65, color: '#8b95a5' },
            { tier: 'Samsung Elite', members: '28,700', benefit: 'White-Glove Onboarding & Priority Support', fill: 78, color: 'var(--samsung-blue)' },
            { tier: 'Samsung Icon', members: '6,500', benefit: 'Milestone Recognition & Exclusive Events', fill: 92, color: 'var(--accent)' },
          ].map(t => (
            <div key={t.tier} className="card" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: t.color }}>{t.tier}</h4>
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700 }}>{t.members}</div>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>{t.benefit}</p>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                  <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Tier Fill</span>
                  <span style={{ fontSize: '0.72rem', fontWeight: 600, color: t.color }}>{t.fill}%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-bar-fill" style={{ width: `${t.fill}%`, background: t.color }}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function HeatmapGrid() {
  const segments = ['Gold', 'Silver', 'EPP', 'New Member']
  const offers = ['Upgrade Discount', 'Accessory Bundle', 'Early Access', 'Cash-Back']
  const scores = {
    'Gold-Upgrade Discount': 5,
    'Gold-Accessory Bundle': 3,
    'Gold-Early Access': 4,
    'Gold-Cash-Back': 2,
    'Silver-Upgrade Discount': 4,
    'Silver-Accessory Bundle': 4,
    'Silver-Early Access': 2,
    'Silver-Cash-Back': 3,
    'EPP-Upgrade Discount': 5,
    'EPP-Accessory Bundle': 2,
    'EPP-Early Access': 5,
    'EPP-Cash-Back': 1,
    'New Member-Upgrade Discount': 2,
    'New Member-Accessory Bundle': 5,
    'New Member-Early Access': 3,
    'New Member-Cash-Back': 4,
  }

  const getColor = (score) => {
    const opacity = (score / 5) * 0.9 + 0.1
    return `rgba(20, 40, 160, ${opacity})`
  }

  return (
    <div style={{ minWidth: '500px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '120px repeat(4, 1fr)', gap: '3px' }}>
        <div></div>
        {offers.map(o => (
          <div key={o} style={{ textAlign: 'center', fontSize: '0.72rem', fontWeight: 600, color: 'var(--text-secondary)', padding: '8px 4px', textTransform: 'uppercase', letterSpacing: '0.02em' }}>
            {o}
          </div>
        ))}
        {segments.map(seg => (
          <React.Fragment key={seg}>
            <div style={{ display: 'flex', alignItems: 'center', fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-primary)', paddingLeft: '4px' }}>
              {seg}
            </div>
            {offers.map(offer => {
              const score = scores[`${seg}-${offer}`]
              return (
                <div key={`${seg}-${offer}`} style={{
                  height: '52px',
                  background: getColor(score),
                  borderRadius: '6px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: score >= 3 ? 'white' : 'var(--text-secondary)',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: '1rem',
                }}>
                  {score}
                </div>
              )
            })}
          </React.Fragment>
        ))}
      </div>
      <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '12px' }}>Priority score (1–5) — higher score = stronger offer-segment fit</p>
    </div>
  )
}
