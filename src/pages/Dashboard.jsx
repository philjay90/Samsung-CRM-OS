export default function Dashboard() {
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Welcome back, Brian. Here's your CRM pulse.</h1>
        <p className="page-subtitle">{today}</p>
      </div>

      {/* KPI Row */}
      <div className="kpi-row">
        <div className="kpi-card">
          <div className="kpi-label">Active Rewards Members</div>
          <div className="kpi-value">4.2M</div>
          <div className="kpi-delta positive">&#9650; +3.1% vs last period</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-label">EPP Eligible Users</div>
          <div className="kpi-value">890K</div>
          <div className="kpi-delta positive">&#9650; +12.4% vs last period</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-label">Avg CLV (Rewards)</div>
          <div className="kpi-value">$1,840</div>
          <div className="kpi-delta positive">&#9650; +$112 vs last period</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-label">Contact Fatigue Index</div>
          <div className="kpi-value">6.2 / 10</div>
          <div className="kpi-delta positive">&#9660; -0.4 vs last period</div>
        </div>
      </div>

      {/* Journey Health + Active Experiments */}
      <div className="two-col section">
        <div className="card">
          <div className="card-title">Journey Health</div>
          <JourneyHealthChart />
        </div>
        <div className="card">
          <div className="card-title">Active Experiments</div>
          <ExperimentList />
        </div>
      </div>

      {/* Cross-LOB Priority Queue */}
      <div className="section">
        <div className="card">
          <div className="card-title">Cross-LOB Priority Queue</div>
          <PriorityQueue />
        </div>
      </div>
    </div>
  )
}

function JourneyHealthChart() {
  const data = [
    { label: 'Mobile', value: 78, color: 'var(--samsung-blue)' },
    { label: 'TV', value: 64, color: 'var(--accent)' },
    { label: 'Appliances', value: 52, color: '#6c5ce7' },
    { label: 'Wearables', value: 71, color: '#00c853' },
  ]

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      {data.map(d => (
        <div key={d.label} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', width: '80px', flexShrink: 0 }}>{d.label}</span>
          <div style={{ flex: 1, height: '24px', background: '#eef0f4', borderRadius: '6px', overflow: 'hidden', position: 'relative' }}>
            <div style={{
              width: `${d.value}%`,
              height: '100%',
              background: d.color,
              borderRadius: '6px',
              transition: 'width 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              paddingRight: '8px',
            }}>
              <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'white' }}>{d.value}%</span>
            </div>
          </div>
        </div>
      ))}
      <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '4px' }}>Completion rates across product-line journeys</p>
    </div>
  )
}

function ExperimentList() {
  const experiments = [
    { name: 'Mobile Upgrade Cadence v2', status: 'Running', badge: 'badge-info' },
    { name: 'EPP Onboarding Flow Test', status: 'Running', badge: 'badge-info' },
    { name: 'TV Cross-Sell Timing', status: 'Paused', badge: 'badge-warning' },
    { name: 'Rewards Tier Incentive A/B', status: 'Winner Found', badge: 'badge-success' },
  ]

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      {experiments.map(e => (
        <div key={e.name} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #f0f1f5' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 500 }}>{e.name}</span>
          <span className={`badge ${e.badge}`}>{e.status}</span>
        </div>
      ))}
    </div>
  )
}

function PriorityQueue() {
  const rows = [
    { lob: 'Mobile', message: 'Galaxy S25 Ultra — Trade-In Reminder', audience: '1.2M', date: 'Apr 3, 2026', priority: 92, conflict: false },
    { lob: 'Rewards', message: 'Double Points Weekend Activation', audience: '3.8M', date: 'Apr 4, 2026', priority: 88, conflict: false },
    { lob: 'TV', message: 'Neo QLED Launch — Early Access Offer', audience: '640K', date: 'Apr 4, 2026', priority: 85, conflict: true },
    { lob: 'Appliances', message: 'Bespoke Refrigerator Seasonal Promo', audience: '920K', date: 'Apr 5, 2026', priority: 72, conflict: false },
    { lob: 'EPP', message: 'Corporate Benefits Enrollment Reminder', audience: '441K', date: 'Apr 6, 2026', priority: 68, conflict: false },
  ]

  return (
    <table className="data-table">
      <thead>
        <tr>
          <th>LOB</th>
          <th>Message</th>
          <th>Audience Size</th>
          <th>Scheduled Date</th>
          <th>Priority Score</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((r, i) => (
          <tr key={i} className={r.conflict ? 'highlight-amber' : ''}>
            <td><span className="badge badge-blue">{r.lob}</span></td>
            <td style={{ fontWeight: 500 }}>{r.message}</td>
            <td>{r.audience}</td>
            <td>{r.date}</td>
            <td>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: r.priority > 85 ? 'var(--samsung-blue)' : 'var(--text-secondary)' }}>
                {r.priority}
              </span>
              {r.conflict && <span className="badge badge-warning" style={{ marginLeft: '8px' }}>Conflict Detected</span>}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
