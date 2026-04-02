import InfoTooltip from '../components/InfoTooltip'

export default function Experimentation() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Experimentation & Value Validation</h1>
        <p className="page-subtitle">Prove that less volume = more long-term value</p>
      </div>

      {/* KPI Row */}
      <div className="kpi-row" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
        <div className="kpi-card">
          <div className="kpi-label">Active Tests <InfoTooltip text="Running experiments across the CRM program. A healthy experimentation velocity is 6-10 concurrent tests. Fewer suggests under-investment; more may dilute statistical power." /></div>
          <div className="kpi-value">8</div>
          <div className="kpi-delta neutral">Across 3 LOBs</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-label">CLV Lift Attributed (QTD) <InfoTooltip text="Quarter-to-date incremental CLV proven through controlled experiments. This is the value your experimentation program has provably created." /></div>
          <div className="kpi-value" style={{ color: 'var(--success)' }}>+$4.2M</div>
          <div className="kpi-delta positive">&#9650; Incremental value proven</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-label">Holdout Group Coverage <InfoTooltip text="Percentage of audience held back from campaigns to measure true incrementality. 10-15% is the sweet spot — enough for statistical validity without sacrificing too much reach." /></div>
          <div className="kpi-value">12%</div>
          <div className="kpi-delta neutral">Of total addressable audience</div>
        </div>
      </div>

      {/* Incrementality Dashboard */}
      <div className="section">
        <h3 className="section-title">Incrementality Dashboard <InfoTooltip text="Each experiment's real contribution measured against a control group. 'Winner Found' means the variant provably outperforms — it should be scaled. 'Inconclusive' means more data is needed." /></h3>
        <div className="card">
          <table className="data-table">
            <thead>
              <tr>
                <th>Experiment Name</th>
                <th>Type</th>
                <th>Audience</th>
                <th>Duration</th>
                <th>Current Lift</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: 'Reduced Cadence — Mobile Upgrade', type: 'A/B', audience: '240K', duration: '6 weeks', lift: '+8.4%', status: 'Running', badge: 'badge-info' },
                { name: 'Holdout: Rewards Welcome Series', type: 'Holdout', audience: '180K', duration: '8 weeks', lift: '+12.1%', status: 'Winner Found', badge: 'badge-success' },
                { name: 'Bandit: EPP Offer Rotation', type: 'Bandit', audience: '95K', duration: '4 weeks', lift: '+3.2%', status: 'Running', badge: 'badge-info' },
                { name: 'TV Cross-Sell Suppression Test', type: 'A/B', audience: '310K', duration: '10 weeks', lift: '+0.8%', status: 'Inconclusive', badge: 'badge-neutral' },
              ].map((e, i) => (
                <tr key={i} className={e.status === 'Winner Found' ? 'highlight-green' : ''}>
                  <td style={{ fontWeight: 500 }}>{e.name}</td>
                  <td><span className="badge badge-blue">{e.type}</span></td>
                  <td>{e.audience}</td>
                  <td>{e.duration}</td>
                  <td style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: parseFloat(e.lift) > 5 ? 'var(--success)' : 'var(--text-primary)' }}>{e.lift}</td>
                  <td><span className={`badge ${e.badge}`}>{e.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Contact Budget Performance */}
      <div className="section">
        <h3 className="section-title">Contact Budget Performance <InfoTooltip text="The core proof point for the volume-to-value shift: as messages sent decrease, CLV index increases. The inflection point marks when the new model began outperforming the old." /></h3>
        <div className="card">
          <ContactBudgetChart />
        </div>
      </div>

      {/* Offer Optimization */}
      <div className="section">
        <h3 className="section-title">Offer Optimization <InfoTooltip text="Side-by-side comparison of offer strategies. Short-term revenue spikes often destroy long-term CLV through discount conditioning and fatigue. CLV-positive offers build sustainable value." /></h3>
        <div className="two-col">
          <div className="card" style={{ borderTop: '3px solid var(--danger)' }}>
            <div className="card-title" style={{ color: 'var(--danger)' }}>Short-Term Revenue Spike Offers</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '8px' }}>
              {[
                { offer: 'Flash Sale — 40% Off Accessories', impact: 'CLV -6.2%', reason: 'Trains discount-seeking behavior' },
                { offer: 'Aggressive Push: 3x Daily Reminders', impact: 'CLV -11.8%', reason: 'Drives opt-outs and fatigue' },
                { offer: 'Limited Time: Free Galaxy Buds', impact: 'CLV -3.1%', reason: 'Cannibalized full-price purchases' },
              ].map((o, i) => (
                <div key={i} style={{ padding: '12px', background: '#fff5f7', borderRadius: '8px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <span style={{ color: 'var(--danger)', fontSize: '1.1rem', flexShrink: 0 }}>✕</span>
                  <div>
                    <div style={{ fontSize: '0.85rem', fontWeight: 600 }}>{o.offer}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--danger)', fontWeight: 600, marginTop: '2px' }}>{o.impact}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '2px' }}>{o.reason}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="card" style={{ borderTop: '3px solid var(--success)' }}>
            <div className="card-title" style={{ color: 'var(--success)' }}>CLV-Positive Offers</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '8px' }}>
              {[
                { offer: 'Personalized Upgrade Path (AI-driven)', impact: 'CLV +14.3%', reason: 'Right product at right lifecycle stage' },
                { offer: 'Loyalty-Exclusive Early Access', impact: 'CLV +9.7%', reason: 'Deepens engagement without discounting' },
                { offer: 'Cross-Category Bundle (Earned Offer)', impact: 'CLV +7.2%', reason: 'Expands wallet share organically' },
              ].map((o, i) => (
                <div key={i} style={{ padding: '12px', background: '#f0fdf4', borderRadius: '8px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <span style={{ color: 'var(--success)', fontSize: '1.1rem', flexShrink: 0 }}>✓</span>
                  <div>
                    <div style={{ fontSize: '0.85rem', fontWeight: 600 }}>{o.offer}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--success)', fontWeight: 600, marginTop: '2px' }}>{o.impact}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '2px' }}>{o.reason}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ContactBudgetChart() {
  // Hand-coded SVG line chart
  const weeks = 12
  const w = 700
  const h = 280
  const pad = { top: 30, right: 60, bottom: 40, left: 50 }
  const chartW = w - pad.left - pad.right
  const chartH = h - pad.top - pad.bottom

  // Messages Sent (declining)
  const messages = [100, 95, 88, 82, 74, 65, 60, 55, 50, 46, 42, 38]
  // CLV Index (rising)
  const clv = [40, 42, 45, 50, 56, 64, 72, 78, 84, 88, 92, 95]

  const toX = (i) => pad.left + (i / (weeks - 1)) * chartW
  const toY = (v) => pad.top + (1 - v / 100) * chartH

  const msgPath = messages.map((v, i) => `${i === 0 ? 'M' : 'L'}${toX(i)},${toY(v)}`).join(' ')
  const clvPath = clv.map((v, i) => `${i === 0 ? 'M' : 'L'}${toX(i)},${toY(v)}`).join(' ')

  return (
    <div>
      <svg width="100%" viewBox={`0 0 ${w} ${h}`} style={{ maxWidth: '100%' }}>
        {/* Grid lines */}
        {[0, 25, 50, 75, 100].map(v => (
          <g key={v}>
            <line x1={pad.left} y1={toY(v)} x2={w - pad.right} y2={toY(v)} stroke="#eef0f4" strokeWidth="1"/>
            <text x={pad.left - 8} y={toY(v) + 4} textAnchor="end" style={{ fontSize: '10px', fill: 'var(--text-muted)' }}>{v}</text>
          </g>
        ))}
        {/* Week labels */}
        {messages.map((_, i) => (
          <text key={i} x={toX(i)} y={h - 10} textAnchor="middle" style={{ fontSize: '10px', fill: 'var(--text-muted)' }}>W{i + 1}</text>
        ))}

        {/* Messages Sent line */}
        <path d={msgPath} fill="none" stroke="var(--danger)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        {/* CLV Index line */}
        <path d={clvPath} fill="none" stroke="var(--success)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>

        {/* Inflection point marker */}
        <circle cx={toX(5)} cy={toY(65)} r="5" fill="var(--danger)" stroke="white" strokeWidth="2"/>
        <circle cx={toX(5)} cy={toY(64)} r="5" fill="var(--success)" stroke="white" strokeWidth="2"/>
        <line x1={toX(5)} y1={pad.top} x2={toX(5)} y2={pad.top + chartH} stroke="var(--accent)" strokeWidth="1" strokeDasharray="4 4" opacity="0.6"/>
        <rect x={toX(5) - 70} y={pad.top - 5} width="140" height="22" rx="4" fill="var(--accent)" opacity="0.9"/>
        <text x={toX(5)} y={pad.top + 10} textAnchor="middle" style={{ fontSize: '10px', fontWeight: 600, fill: 'white' }}>Inflection Point — Week 6</text>

        {/* Legend */}
        <circle cx={w - pad.right + 10} cy={pad.top + 20} r="5" fill="var(--danger)"/>
        <text x={w - pad.right + 20} y={pad.top + 24} style={{ fontSize: '10px', fill: 'var(--text-secondary)' }}>Messages</text>
        <circle cx={w - pad.right + 10} cy={pad.top + 42} r="5" fill="var(--success)"/>
        <text x={w - pad.right + 20} y={pad.top + 46} style={{ fontSize: '10px', fill: 'var(--text-secondary)' }}>CLV Index</text>
      </svg>
      <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '4px' }}>Messages Sent decreasing while CLV Index increases — validating less volume = more value</p>
    </div>
  )
}
