import React from 'react'

export default function PersonalizationEngine() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Personalization Engine</h1>
        <p className="page-subtitle">AI-driven content, timing, and channel optimization across the Samsung ecosystem</p>
      </div>

      {/* KPI Row */}
      <div className="kpi-row">
        <div className="kpi-card">
          <div className="kpi-label">Personalized Touchpoints (MTD)</div>
          <div className="kpi-value">8.4M</div>
          <div className="kpi-delta positive">&#9650; +18% vs static sends</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-label">AI Content Variants Active</div>
          <div className="kpi-value">342</div>
          <div className="kpi-delta neutral">Across 12 campaigns</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-label">Avg Engagement Lift (AI vs Control)</div>
          <div className="kpi-value">+23%</div>
          <div className="kpi-delta positive">Open rate uplift</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-label">Next-Best-Action Coverage</div>
          <div className="kpi-value">76%</div>
          <div style={{ marginTop: '8px' }}>
            <div className="progress-bar">
              <div className="progress-bar-fill" style={{ width: '76%', background: 'var(--accent)' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Optimization Matrix */}
      <div className="section">
        <h3 className="section-title">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="var(--accent)">
            <path d="M8 0l2 5h5l-4 3 1.5 5L8 10l-4.5 3L5 8 1 5h5z"/>
          </svg>
          AI Content Optimization
        </h3>
        <div className="card">
          <table className="data-table">
            <thead>
              <tr>
                <th>Campaign</th>
                <th>Channel</th>
                <th>Variants</th>
                <th>Winning Strategy</th>
                <th>Lift</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {[
                { campaign: 'Galaxy S25 Launch', channel: 'Email', variants: 8, strategy: 'Urgency + Social Proof', lift: '+31%', status: 'Optimizing', badge: 'badge-info' },
                { campaign: 'Rewards Double Points', channel: 'Push', variants: 5, strategy: 'Personalized Reward Amount', lift: '+18%', status: 'Deployed', badge: 'badge-success' },
                { campaign: 'EPP Enrollment Drive', channel: 'SMS', variants: 4, strategy: 'Employer-Specific Messaging', lift: '+24%', status: 'Optimizing', badge: 'badge-info' },
                { campaign: 'TV Seasonal Promo', channel: 'Email', variants: 6, strategy: 'Room-Type Personalization', lift: '+12%', status: 'Testing', badge: 'badge-warning' },
                { campaign: 'Wearables Health Tips', channel: 'In-App', variants: 3, strategy: 'Activity-Based Timing', lift: '+42%', status: 'Deployed', badge: 'badge-success' },
              ].map((c, i) => (
                <tr key={i}>
                  <td style={{ fontWeight: 500 }}>{c.campaign}</td>
                  <td><span className="badge badge-neutral">{c.channel}</span></td>
                  <td style={{ fontFamily: 'var(--font-display)', fontWeight: 600 }}>{c.variants}</td>
                  <td style={{ color: 'var(--text-secondary)' }}>{c.strategy}</td>
                  <td style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--success)' }}>{c.lift}</td>
                  <td><span className={`badge ${c.badge}`}>{c.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Send-Time Optimization + Channel Preference */}
      <div className="two-col section">
        <div className="card">
          <div className="card-title">Send-Time Optimization Heatmap</div>
          <SendTimeHeatmap />
        </div>
        <div className="card">
          <div className="card-title">Channel Preference Distribution</div>
          <ChannelPreference />
        </div>
      </div>

      {/* Next-Best-Action Engine */}
      <div className="section">
        <h3 className="section-title">Next-Best-Action Recommendations</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--sp-5)' }}>
          {[
            { segment: 'High-Value Mobile Upgraders', action: 'Serve Galaxy S25 Ultra early access', confidence: 94, reason: 'Strong buy propensity + loyalty tier match' },
            { segment: 'Lapsed Rewards Members', action: 'Re-engagement with bonus points offer', confidence: 81, reason: 'Churn signal detected, 45-day inactivity' },
            { segment: 'Multi-Product VIPs', action: 'Cross-sell Bespoke appliance bundle', confidence: 77, reason: 'Category expansion model flagged' },
            { segment: 'New EPP Enrollees', action: 'Welcome journey with exclusive pricing', confidence: 89, reason: 'First 30 days — highest engagement window' },
          ].map((nba, i) => (
            <div key={i} className="card" style={{ borderLeft: `3px solid var(--accent)` }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                <span className="badge badge-blue">{nba.segment}</span>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--accent)', fontSize: '0.9rem' }}>{nba.confidence}%</span>
              </div>
              <p style={{ fontSize: '0.88rem', fontWeight: 600, marginBottom: '6px' }}>{nba.action}</p>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{nba.reason}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function SendTimeHeatmap() {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  const hours = ['8am', '10am', '12pm', '2pm', '4pm', '6pm', '8pm']
  const data = [
    [3, 5, 4, 5, 3, 2, 1],
    [4, 6, 5, 6, 4, 3, 2],
    [5, 7, 8, 7, 5, 4, 3],
    [4, 6, 7, 6, 5, 5, 4],
    [3, 5, 5, 5, 4, 6, 5],
    [2, 4, 4, 4, 3, 7, 6],
    [1, 2, 3, 3, 2, 5, 4],
  ]

  return (
    <div style={{ overflowX: 'auto' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '50px repeat(7, 1fr)', gap: '3px', minWidth: '350px' }}>
        <div></div>
        {days.map(d => (
          <div key={d} style={{ textAlign: 'center', fontSize: '0.7rem', fontWeight: 600, color: 'var(--text-muted)', padding: '4px 0' }}>{d}</div>
        ))}
        {hours.map((h, hi) => (
          <React.Fragment key={h}>
            <div style={{ display: 'flex', alignItems: 'center', fontSize: '0.7rem', color: 'var(--text-muted)' }}>{h}</div>
            {data[hi].map((v, di) => (
              <div key={`${hi}-${di}`} style={{
                height: '28px',
                borderRadius: '4px',
                background: `rgba(0, 178, 255, ${v / 8 * 0.8 + 0.1})`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.65rem',
                fontWeight: 600,
                color: v >= 5 ? 'white' : 'var(--text-muted)',
              }}>{v > 5 ? '●' : ''}</div>
            ))}
          </React.Fragment>
        ))}
      </div>
      <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '8px' }}>Engagement intensity by day and time — darker = higher open rates</p>
    </div>
  )
}

function ChannelPreference() {
  const channels = [
    { name: 'Email', pct: 34, color: 'var(--samsung-blue)' },
    { name: 'Push', pct: 28, color: 'var(--accent)' },
    { name: 'In-App', pct: 22, color: '#6c5ce7' },
    { name: 'SMS', pct: 16, color: '#00c853' },
  ]

  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        {channels.map(c => (
          <div key={c.name}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
              <span style={{ fontSize: '0.82rem', fontWeight: 500 }}>{c.name}</span>
              <span style={{ fontSize: '0.82rem', fontWeight: 700, color: c.color }}>{c.pct}%</span>
            </div>
            <div className="progress-bar" style={{ height: '10px' }}>
              <div className="progress-bar-fill" style={{ width: `${c.pct}%`, background: c.color }}></div>
            </div>
          </div>
        ))}
      </div>
      <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '12px' }}>Based on user engagement response data across 4.2M active members</p>
    </div>
  )
}
