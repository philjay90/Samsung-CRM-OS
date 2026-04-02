import InfoTooltip from '../components/InfoTooltip'

export default function GovernanceRisk() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Governance, Privacy & AI Risk Control</h1>
        <p className="page-subtitle">De-risk personalization — legal, privacy, and AI safety in one place</p>
      </div>

      {/* Alert Cards */}
      <div className="kpi-row" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
        <div className="kpi-card" style={{ borderLeft: '4px solid var(--warning)' }}>
          <div className="kpi-label">Pending DPIA Reviews <InfoTooltip text="Data Protection Impact Assessments awaiting review. Required before launching campaigns that process personal data in new ways. Delays here block campaign launches." /></div>
          <div className="kpi-value">3</div>
          <span className="badge badge-warning">Action Required</span>
        </div>
        <div className="kpi-card" style={{ borderLeft: '4px solid var(--success)' }}>
          <div className="kpi-label">Consent Flag Rate <InfoTooltip text="Percentage of outbound messages flagged for consent issues. Below 3% is healthy; above 5% requires immediate review of consent collection processes." /></div>
          <div className="kpi-value">2.1%</div>
          <span className="badge badge-success">Within Threshold</span>
        </div>
        <div className="kpi-card" style={{ borderLeft: '4px solid var(--warning)' }}>
          <div className="kpi-label">AI Risk Level (Active Models) <InfoTooltip text="Aggregate risk assessment across all active AI models. Flagged models require audit before continued use — typically due to bias concerns, data drift, or regulatory exposure." /></div>
          <div className="kpi-value">Medium</div>
          <span className="badge badge-warning">2 Flagged</span>
        </div>
      </div>

      {/* AI Governance Dashboard */}
      <div className="section">
        <h3 className="section-title">AI Governance Dashboard <InfoTooltip text="Tracks every AI model in production with its use case, risk level, last audit date, and approval status. Models flagged as High risk require remediation before continued deployment." /></h3>
        <div className="card">
          <table className="data-table">
            <thead>
              <tr>
                <th>Model Name</th>
                <th>Use Case</th>
                <th>Risk Level</th>
                <th>Last Audit</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: 'Buy Propensity v3.2', useCase: 'Product recommendations', risk: 'Low', audit: 'Mar 18, 2026', status: 'Approved' },
                { name: 'Churn Prediction v2.1', useCase: 'Retention targeting', risk: 'Medium', audit: 'Mar 22, 2026', status: 'Under Review' },
                { name: 'Dynamic Pricing Engine', useCase: 'EPP offer personalization', risk: 'High', audit: 'Feb 28, 2026', status: 'Flagged' },
                { name: 'Content Personalization LLM', useCase: 'Email subject generation', risk: 'Medium', audit: 'Mar 25, 2026', status: 'Approved' },
              ].map((m, i) => (
                <tr key={i}>
                  <td style={{ fontWeight: 500 }}>{m.name}</td>
                  <td>{m.useCase}</td>
                  <td>
                    <span className={`badge ${m.risk === 'Low' ? 'badge-success' : m.risk === 'Medium' ? 'badge-warning' : 'badge-danger'}`}>
                      {m.risk}
                    </span>
                  </td>
                  <td>{m.audit}</td>
                  <td>
                    <span className={`badge ${m.status === 'Approved' ? 'badge-success' : m.status === 'Flagged' ? 'badge-danger' : 'badge-warning'}`}>
                      {m.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Consent & Preference Manager */}
      <div className="section">
        <h3 className="section-title">Consent & Preference Manager <InfoTooltip text="Real-time view of customer communication consent across channels. The donut shows current opt-in rates; the timeline shows recent changes that may need attention." /></h3>
        <div className="two-col">
          <div className="card">
            <div className="card-title">Consent Breakdown</div>
            <ConsentDonut />
          </div>
          <div className="card">
            <div className="card-title">Recent Consent Changes</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { action: 'SMS opt-out', count: '1,240 users', time: '2 hours ago', type: 'out' },
                { action: 'Push notification opt-in', count: '3,800 users', time: '4 hours ago', type: 'in' },
                { action: 'Email preference update', count: '890 users', time: '6 hours ago', type: 'neutral' },
                { action: 'In-app consent renewal', count: '12,400 users', time: '1 day ago', type: 'in' },
                { action: 'Data deletion request', count: '42 users', time: '1 day ago', type: 'out' },
              ].map((c, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 0', borderBottom: i < 4 ? '1px solid #f0f1f5' : 'none' }}>
                  <div>
                    <div style={{ fontSize: '0.85rem', fontWeight: 500 }}>{c.action}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{c.count}</div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{c.time}</span>
                    <span style={{
                      width: '8px', height: '8px', borderRadius: '50%',
                      background: c.type === 'in' ? 'var(--success)' : c.type === 'out' ? 'var(--danger)' : 'var(--text-muted)',
                    }}></span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Policy Versioning */}
      <div className="section">
        <h3 className="section-title">Policy Versioning <InfoTooltip text="Tracks privacy policy versions by region and upcoming regulatory changes. Ensures CRM campaigns comply with the correct policy version in each market." /></h3>
        <div className="card">
          <table className="data-table">
            <thead>
              <tr>
                <th>Region</th>
                <th>Policy Version</th>
                <th>Last Updated</th>
                <th>Upcoming Change</th>
              </tr>
            </thead>
            <tbody>
              {[
                { region: 'United States', version: 'v4.2.1', updated: 'Jan 15, 2026', upcoming: 'CCPA amendment — May 2026' },
                { region: 'Canada', version: 'v3.8.0', updated: 'Dec 1, 2025', upcoming: 'PIPEDA update — Jun 2026' },
                { region: 'European Union', version: 'v5.1.3', updated: 'Mar 1, 2026', upcoming: 'AI Act compliance — Jul 2026' },
                { region: 'Korea', version: 'v4.0.0', updated: 'Feb 20, 2026', upcoming: 'PIPA revision — Q3 2026' },
                { region: 'APAC', version: 'v3.5.2', updated: 'Nov 15, 2025', upcoming: 'Regional harmonization — Aug 2026' },
              ].map((p, i) => (
                <tr key={i}>
                  <td style={{ fontWeight: 500 }}>{p.region}</td>
                  <td><code style={{ background: 'var(--surface)', padding: '2px 8px', borderRadius: '4px', fontSize: '0.82rem' }}>{p.version}</code></td>
                  <td>{p.updated}</td>
                  <td style={{ color: 'var(--text-secondary)' }}>{p.upcoming}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

function ConsentDonut() {
  const data = [
    { label: 'Email', value: 78, color: 'var(--samsung-blue)' },
    { label: 'SMS', value: 61, color: 'var(--accent)' },
    { label: 'Push', value: 54, color: '#6c5ce7' },
    { label: 'In-App', value: 83, color: '#00c853' },
  ]

  const total = 360
  let offset = 0
  const radius = 60
  const circumference = 2 * Math.PI * radius

  return (
    <div className="donut-container">
      <svg width="180" height="180" viewBox="0 0 180 180">
        {data.map((d, i) => {
          const arc = (d.value / (78 + 61 + 54 + 83)) * circumference
          const gap = 4
          const currentOffset = offset
          offset += arc + gap
          return (
            <circle
              key={d.label}
              cx="90" cy="90" r={radius}
              fill="none"
              stroke={d.color}
              strokeWidth="18"
              strokeDasharray={`${arc} ${circumference}`}
              strokeDashoffset={-currentOffset}
              strokeLinecap="round"
              style={{ transition: 'stroke-dashoffset 0.8s ease' }}
            />
          )
        })}
        <text x="90" y="85" textAnchor="middle" style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 700, fill: 'var(--text-primary)' }}>69%</text>
        <text x="90" y="105" textAnchor="middle" style={{ fontSize: '0.7rem', fill: 'var(--text-muted)' }}>Avg Consent</text>
      </svg>
      <div className="donut-legend">
        {data.map(d => (
          <div key={d.label} className="donut-legend-item">
            <span className="donut-legend-dot" style={{ background: d.color }}></span>
            <span>{d.label} {d.value}%</span>
          </div>
        ))}
      </div>
    </div>
  )
}
