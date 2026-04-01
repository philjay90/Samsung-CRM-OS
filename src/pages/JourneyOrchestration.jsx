export default function JourneyOrchestration() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Journey Orchestration & Contact Governance</h1>
        <p className="page-subtitle">Coordinate what gets sent, when, and why — across all LOBs</p>
      </div>

      {/* Stat Cards */}
      <div className="kpi-row" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
        <div className="kpi-card">
          <div className="kpi-label">Active Journeys</div>
          <div className="kpi-value">24</div>
          <div className="kpi-delta neutral">Across 4 LOBs</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-label">Contact Budget Utilization</div>
          <div className="kpi-value">71%</div>
          <div style={{ marginTop: '8px' }}>
            <div className="progress-bar">
              <div className="progress-bar-fill" style={{ width: '71%', background: 'var(--samsung-blue)' }}></div>
            </div>
          </div>
        </div>
        <div className="kpi-card">
          <div className="kpi-label">Messages Suppressed This Week</div>
          <div className="kpi-value">48,200</div>
          <div className="kpi-delta positive">Fatigue protection active</div>
        </div>
      </div>

      {/* Cross-LOB Journey Map */}
      <div className="section">
        <h3 className="section-title">Cross-LOB Journey Map</h3>
        <div className="card" style={{ overflowX: 'auto' }}>
          <SwimLaneMap />
        </div>
      </div>

      {/* Priority Resolution Queue */}
      <div className="section">
        <h3 className="section-title">Priority Resolution Queue</h3>
        <div className="card">
          <table className="data-table">
            <thead>
              <tr>
                <th>Customer Segment</th>
                <th>LOB A Message</th>
                <th>LOB B Message</th>
                <th>Conflict Type</th>
                <th>Resolution</th>
              </tr>
            </thead>
            <tbody>
              <tr className="highlight-amber">
                <td style={{ fontWeight: 500 }}>Galaxy S24 Owners, Gold Tier</td>
                <td>Mobile: Trade-In Upgrade Offer</td>
                <td>Rewards: Double Points on Accessories</td>
                <td><span className="badge badge-warning">Overlap — Offer Cannibalization</span></td>
                <td><span style={{ color: 'var(--text-muted)', fontSize: '0.82rem' }}>Pending review</span></td>
              </tr>
              <tr className="highlight-green">
                <td style={{ fontWeight: 500 }}>Multi-Product Owners, VIP</td>
                <td>Mobile: Galaxy Z Fold6 Early Access</td>
                <td>TV: Neo QLED Bundle Discount</td>
                <td><span className="badge badge-neutral">Scheduling Overlap</span></td>
                <td><span className="badge badge-success">Resolved: Mobile wins (higher CLV)</span></td>
              </tr>
              <tr>
                <td style={{ fontWeight: 500 }}>New Rewards Members (&lt;30 days)</td>
                <td>Rewards: Welcome Series Email 3</td>
                <td>Appliances: Bespoke Promo Push</td>
                <td><span className="badge badge-neutral">Frequency Cap</span></td>
                <td><span className="badge badge-success">Resolved: Welcome series priority</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Rules & Triggers Library */}
      <div className="section">
        <h3 className="section-title">Rules & Triggers Library</h3>
        <div className="card">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
            {[
              { name: 'Setup Complete', status: 'Active' },
              { name: 'First 30 Days', status: 'Active' },
              { name: 'Service Event', status: 'Active' },
              { name: 'Accessory Purchase', status: 'Active' },
              { name: 'Renewal Window', status: 'Draft' },
              { name: 'Churn Signal', status: 'Active' },
            ].map(rule => (
              <div key={rule.name} style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '12px 16px', background: 'var(--surface)', borderRadius: '8px',
              }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 500 }}>{rule.name}</span>
                <span className={`badge ${rule.status === 'Active' ? 'badge-success' : 'badge-neutral'}`}>{rule.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function SwimLaneMap() {
  const lobs = ['Mobile', 'TV', 'Appliances', 'Wearables']
  const stages = ['Setup', '30 Days', 'Active', 'Pre-Renewal', 'Churned']
  const touchpoints = {
    'Mobile-Setup': true, 'Mobile-30 Days': true, 'Mobile-Active': true, 'Mobile-Pre-Renewal': true,
    'TV-Setup': true, 'TV-Active': true, 'TV-Pre-Renewal': true,
    'Appliances-Setup': true, 'Appliances-30 Days': true, 'Appliances-Active': true,
    'Wearables-Setup': true, 'Wearables-30 Days': true, 'Wearables-Active': true, 'Wearables-Pre-Renewal': true,
    'TV-Churned': true, 'Mobile-Churned': true,
  }
  const colors = {
    'Mobile': 'var(--samsung-blue)',
    'TV': 'var(--accent)',
    'Appliances': '#6c5ce7',
    'Wearables': '#00c853',
  }

  return (
    <div style={{ minWidth: '600px' }}>
      {/* Header */}
      <div style={{ display: 'grid', gridTemplateColumns: '100px repeat(5, 1fr)', gap: '2px', marginBottom: '4px' }}>
        <div></div>
        {stages.map(s => (
          <div key={s} style={{ textAlign: 'center', fontSize: '0.72rem', fontWeight: 600, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.04em', padding: '8px 0' }}>
            {s}
          </div>
        ))}
      </div>
      {/* Swim Lanes */}
      {lobs.map(lob => (
        <div key={lob} style={{ display: 'grid', gridTemplateColumns: '100px repeat(5, 1fr)', gap: '2px', marginBottom: '2px' }}>
          <div style={{ display: 'flex', alignItems: 'center', fontSize: '0.82rem', fontWeight: 600, color: colors[lob], paddingLeft: '4px' }}>
            {lob}
          </div>
          {stages.map(stage => {
            const key = `${lob}-${stage}`
            const active = touchpoints[key]
            return (
              <div key={key} style={{
                height: '48px',
                background: active ? `${colors[lob]}11` : '#f8f9fc',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: active ? `1.5px solid ${colors[lob]}33` : '1.5px solid transparent',
              }}>
                {active && (
                  <div style={{
                    width: '12px', height: '12px', borderRadius: '50%',
                    background: colors[lob],
                    boxShadow: `0 0 0 3px ${colors[lob]}22`,
                  }}></div>
                )}
              </div>
            )
          })}
        </div>
      ))}
      <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '12px' }}>Dots indicate active journey touchpoints per LOB and lifecycle stage</p>
    </div>
  )
}
