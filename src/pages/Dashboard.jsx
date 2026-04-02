import InfoTooltip from '../components/InfoTooltip'

export default function Dashboard() {
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Welcome back, Brian. Here's your CRM pulse.</h1>
        <p className="page-subtitle">{today}</p>
      </div>

      {/* Primary KPIs */}
      <div className="kpi-row">
        <div className="kpi-card" style={{ borderLeft: '4px solid var(--accent)' }}>
          <div className="kpi-label">Contact Fatigue Index <InfoTooltip text="Your primary guardrail for the volume-to-value shift. CFI measures how oversaturated customers feel. As you reduce frequency, declining CFI across cohorts is your earliest proof the model is working — before CLV even moves." /></div>
          <div className="kpi-value">5.8 / 10</div>
          <div className="kpi-delta positive">&#9660; -1.2 vs 90 days ago</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-label">Revenue Per Communication <InfoTooltip text="If you're sending less, each send needs to work harder. This tracks revenue attributable per outbound touchpoint. Rising RPC means quality is genuinely replacing quantity — not just sending less and getting less." /></div>
          <div className="kpi-value">$4.82</div>
          <div className="kpi-delta positive">&#9650; +$1.14 vs last quarter</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-label">Avg CLV (Rewards) <InfoTooltip text="The north star metric. CLV takes 6-12 months to shift visibly, so use CFI and RPC to carry the narrative in the interim. A rising CLV confirms the strategy is defensible at leadership level." /></div>
          <div className="kpi-value">$1,840</div>
          <div className="kpi-delta positive">&#9650; +$112 vs last period</div>
        </div>
        <div className="kpi-card">
          <div className="kpi-label">Unsubscribe Rate (30d) <InfoTooltip text="A lagging indicator, but important for leadership. As CFI drops and frequency decreases, unsubscribes should follow. This is your clearest before/after signal that the strategy shift is reducing damage to your audience asset." /></div>
          <div className="kpi-value">0.34%</div>
          <div className="kpi-delta positive">&#9660; -0.18pp vs pre-shift</div>
        </div>
      </div>

      {/* CLV Trajectory */}
      <div className="section">
        <div className="card">
          <div className="card-title">CLV Trajectory by Engagement Cohort <InfoTooltip text="The business case in one chart. Compares the CLV trend of customers in your low-frequency model vs. the legacy high-frequency group. The widening gap is what makes the strategic shift defensible to a VP of CRM." /></div>
          <CLVTrajectoryChart />
        </div>
      </div>

      {/* CFI Trend + Engagement by Type */}
      <div className="two-col section">
        <div className="card">
          <div className="card-title">CFI Trend by Cohort <InfoTooltip text="Tracks fatigue declining across your key customer segments. CFI is a leading indicator — it moves before CLV does. Showing downward trends here helps you defend the strategy during the window before revenue impact is visible." /></div>
          <CFITrendChart />
        </div>
        <div className="card">
          <div className="card-title">Engagement Rate by Communication Type <InfoTooltip text="Not open rate — that's a vanity metric at scale. This shows which types of outreach actually drive behavior (trade-ins, upsells, loyalty offers). Tells you where to concentrate the fewer touches you're now making." /></div>
          <EngagementByType />
        </div>
      </div>

      {/* Ecosystem Depth + Relationship Health */}
      <div className="two-col section">
        <div className="card">
          <div className="card-title">Ecosystem / Cross-Category Depth <InfoTooltip text="The long-game CLV driver. As you shift from spray-and-pray to relevance-based outreach, customers receiving fewer but better comms should show higher cross-category attach rates over a 6-12 month window." /></div>
          <EcosystemDepth />
        </div>
        <div className="card">
          <div className="card-title">Relationship Health Indicators <InfoTooltip text="Lagging signals that confirm the strategy shift is reducing damage to your audience asset. Improving list health, falling spam complaints, and rising consent rates are your proof points for stakeholders." /></div>
          <RelationshipHealth />
        </div>
      </div>

      {/* Upgrade Velocity + Reactivation */}
      <div className="two-col section">
        <div className="card">
          <div className="card-title">Upgrade Cycle Velocity <InfoTooltip text="Your medium-term CLV proxy. If the value-based approach is working, customers upgrade on a healthier, more engaged cycle rather than being pushed into premature upgrades by volume pressure. Longer ≠ worse — it means organic intent." /></div>
          <UpgradeVelocity />
        </div>
        <div className="card">
          <div className="card-title">Reactivation Rate — Lapsed Segments <InfoTooltip text="The contacts you previously fatigued into dormancy are a recoverable asset. This tracks whether your new low-frequency, high-relevance model can win back disengaged customers — turning past damage into future value." /></div>
          <ReactivationRate />
        </div>
      </div>
    </div>
  )
}

/* ========== CLV TRAJECTORY CHART ========== */
function CLVTrajectoryChart() {
  const months = ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
  const lowFreq =  [1680, 1700, 1720, 1755, 1790, 1810, 1840, 1870, 1905]
  const highFreq = [1680, 1690, 1695, 1700, 1690, 1685, 1670, 1660, 1645]

  const w = 700, h = 260
  const pad = { top: 30, right: 80, bottom: 35, left: 55 }
  const cW = w - pad.left - pad.right, cH = h - pad.top - pad.bottom
  const allVals = [...lowFreq, ...highFreq]
  const min = Math.min(...allVals) - 30, max = Math.max(...allVals) + 30

  const x = (i) => pad.left + (i / (months.length - 1)) * cW
  const y = (v) => pad.top + (1 - (v - min) / (max - min)) * cH

  const pathD = (data) => data.map((v, i) => `${i === 0 ? 'M' : 'L'}${x(i)},${y(v)}`).join(' ')

  return (
    <svg width="100%" viewBox={`0 0 ${w} ${h}`} style={{ maxWidth: '100%' }}>
      {[1650, 1700, 1750, 1800, 1850, 1900].map(v => (
        <g key={v}>
          <line x1={pad.left} y1={y(v)} x2={w - pad.right} y2={y(v)} stroke="#eef0f4" strokeWidth="1" />
          <text x={pad.left - 8} y={y(v) + 4} textAnchor="end" style={{ fontSize: '9px', fill: 'var(--text-muted)' }}>${v}</text>
        </g>
      ))}
      {months.map((m, i) => (
        <text key={m} x={x(i)} y={h - 8} textAnchor="middle" style={{ fontSize: '9px', fill: 'var(--text-muted)' }}>{m}</text>
      ))}
      <line x1={x(3)} y1={pad.top} x2={x(3)} y2={pad.top + cH} stroke="var(--accent)" strokeWidth="1" strokeDasharray="4 4" opacity="0.5" />
      <text x={x(3) + 4} y={pad.top + 12} style={{ fontSize: '8px', fill: 'var(--accent)', fontWeight: 600 }}>Strategy shift</text>
      <path d={pathD(highFreq)} fill="none" stroke="var(--danger)" strokeWidth="2" strokeDasharray="6 3" opacity="0.7" />
      <path d={pathD(lowFreq)} fill="none" stroke="var(--success)" strokeWidth="2.5" />
      <circle cx={x(8)} cy={y(lowFreq[8])} r="4" fill="var(--success)" />
      <text x={x(8) + 10} y={y(lowFreq[8]) + 4} style={{ fontSize: '9px', fill: 'var(--success)', fontWeight: 600 }}>$1,905</text>
      <circle cx={x(8)} cy={y(highFreq[8])} r="4" fill="var(--danger)" />
      <text x={x(8) + 10} y={y(highFreq[8]) + 4} style={{ fontSize: '9px', fill: 'var(--danger)', fontWeight: 600 }}>$1,645</text>
      <circle cx={w - pad.right + 10} cy={pad.top + 10} r="4" fill="var(--success)" />
      <text x={w - pad.right + 18} y={pad.top + 14} style={{ fontSize: '8px', fill: 'var(--text-secondary)' }}>Low-freq</text>
      <circle cx={w - pad.right + 10} cy={pad.top + 28} r="4" fill="var(--danger)" />
      <text x={w - pad.right + 18} y={pad.top + 32} style={{ fontSize: '8px', fill: 'var(--text-secondary)' }}>High-freq</text>
      <text x={(x(5) + x(8)) / 2} y={y((lowFreq[6] + highFreq[6]) / 2) + 4} textAnchor="middle" style={{ fontSize: '9px', fill: 'var(--samsung-blue)', fontWeight: 700 }}>+$260 CLV gap</text>
    </svg>
  )
}

/* ========== CFI TREND ========== */
function CFITrendChart() {
  const cohorts = [
    { name: 'Mobile Upgraders', before: 7.8, now: 5.4, color: 'var(--samsung-blue)' },
    { name: 'Rewards Active', before: 6.9, now: 4.8, color: 'var(--accent)' },
    { name: 'EPP Enrolled', before: 5.2, now: 3.9, color: '#6c5ce7' },
    { name: 'Multi-Product VIP', before: 8.1, now: 5.6, color: '#00c853' },
  ]

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
      <div style={{ display: 'flex', gap: '16px', fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: '4px' }}>
        <span>▨ 90 days ago</span>
        <span>■ Current</span>
      </div>
      {cohorts.map(c => (
        <div key={c.name}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 500 }}>{c.name}</span>
            <span style={{ fontSize: '0.75rem', color: 'var(--success)', fontWeight: 600 }}>{c.before} → {c.now}</span>
          </div>
          <div style={{ display: 'flex', gap: '3px', height: '18px' }}>
            <div style={{ width: `${(c.before / 10) * 100}%`, height: '100%', background: c.color, opacity: 0.25, borderRadius: '4px' }} />
          </div>
          <div style={{ display: 'flex', gap: '3px', height: '18px', marginTop: '2px' }}>
            <div style={{ width: `${(c.now / 10) * 100}%`, height: '100%', background: c.color, borderRadius: '4px' }} />
          </div>
        </div>
      ))}
    </div>
  )
}

/* ========== ENGAGEMENT BY TYPE ========== */
function EngagementByType() {
  const types = [
    { type: 'Trade-In Prompts', rate: 8.4, revenue: '$6.20', trend: 'positive' },
    { type: 'Loyalty Offers', rate: 6.1, revenue: '$5.80', trend: 'positive' },
    { type: 'Accessory Recs', rate: 5.7, revenue: '$4.90', trend: 'positive' },
    { type: 'Service Upsell', rate: 4.2, revenue: '$3.40', trend: 'neutral' },
    { type: 'General Promos', rate: 1.8, revenue: '$0.90', trend: 'negative' },
  ]

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 80px 80px', gap: '8px', fontSize: '0.7rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em', paddingBottom: '4px', borderBottom: '1px solid #eef0f4' }}>
        <span>Type</span>
        <span>Action Rate</span>
        <span>Rev / Send</span>
      </div>
      {types.map(t => (
        <div key={t.type} style={{ display: 'grid', gridTemplateColumns: '1fr 80px 80px', gap: '8px', alignItems: 'center', padding: '6px 0', borderBottom: '1px solid #f8f9fc' }}>
          <span style={{ fontSize: '0.82rem', fontWeight: 500 }}>{t.type}</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <div style={{ width: '40px', height: '6px', background: '#eef0f4', borderRadius: '3px', overflow: 'hidden' }}>
              <div style={{ width: `${(t.rate / 10) * 100}%`, height: '100%', background: t.trend === 'negative' ? 'var(--danger)' : 'var(--samsung-blue)', borderRadius: '3px' }} />
            </div>
            <span style={{ fontSize: '0.78rem', fontWeight: 600, color: t.trend === 'negative' ? 'var(--danger)' : 'var(--text-primary)' }}>{t.rate}%</span>
          </div>
          <span style={{ fontSize: '0.78rem', fontWeight: 600, color: t.trend === 'negative' ? 'var(--danger)' : 'var(--success)' }}>{t.revenue}</span>
        </div>
      ))}
    </div>
  )
}

/* ========== ECOSYSTEM DEPTH ========== */
function EcosystemDepth() {
  const segments = [
    { segment: 'Low-Freq Cohort (new model)', avgCategories: 2.8, attach: '34%', trend: '+8pp', positive: true },
    { segment: 'High-Freq Cohort (legacy)', avgCategories: 2.1, attach: '22%', trend: '-2pp', positive: false },
    { segment: 'VIP Multi-Product', avgCategories: 4.2, attach: '61%', trend: '+12pp', positive: true },
  ]

  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 100px 80px 70px', gap: '8px', fontSize: '0.7rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em', paddingBottom: '8px', borderBottom: '1px solid #eef0f4' }}>
        <span>Cohort</span>
        <span>Avg Categories</span>
        <span>Attach Rate</span>
        <span>6mo Δ</span>
      </div>
      {segments.map(s => (
        <div key={s.segment} style={{ display: 'grid', gridTemplateColumns: '1fr 100px 80px 70px', gap: '8px', alignItems: 'center', padding: '12px 0', borderBottom: '1px solid #f8f9fc' }}>
          <span style={{ fontSize: '0.82rem', fontWeight: 500 }}>{s.segment}</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            {Array(5).fill(0).map((_, i) => (
              <div key={i} style={{ width: '12px', height: '12px', borderRadius: '3px', background: i < Math.round(s.avgCategories) ? 'var(--samsung-blue)' : '#eef0f4' }} />
            ))}
            <span style={{ fontSize: '0.78rem', fontWeight: 600, marginLeft: '2px' }}>{s.avgCategories}</span>
          </div>
          <span style={{ fontSize: '0.82rem', fontWeight: 600 }}>{s.attach}</span>
          <span style={{ fontSize: '0.78rem', fontWeight: 700, color: s.positive ? 'var(--success)' : 'var(--danger)' }}>{s.trend}</span>
        </div>
      ))}
    </div>
  )
}

/* ========== RELATIONSHIP HEALTH ========== */
function RelationshipHealth() {
  const metrics = [
    { label: 'Unsubscribe Rate', value: '0.34%', prev: '0.52%', delta: '-0.18pp', good: true },
    { label: 'List Health Score', value: '87/100', prev: '74/100', delta: '+13pts', good: true },
    { label: 'Reachable Audience', value: '3.94M', prev: '3.71M', delta: '+230K', good: true },
    { label: 'Spam Complaint Rate', value: '0.02%', prev: '0.06%', delta: '-0.04pp', good: true },
    { label: 'Consent Opt-In Rate', value: '78%', prev: '71%', delta: '+7pp', good: true },
  ]

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      {metrics.map(m => (
        <div key={m.label} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #f8f9fc' }}>
          <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>{m.label}</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>{m.prev}</span>
            <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>→</span>
            <span style={{ fontSize: '0.88rem', fontFamily: 'var(--font-display)', fontWeight: 700 }}>{m.value}</span>
            <span style={{ fontSize: '0.72rem', fontWeight: 600, color: m.good ? 'var(--success)' : 'var(--danger)' }}>{m.delta}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

/* ========== UPGRADE VELOCITY ========== */
function UpgradeVelocity() {
  const lines = [
    { label: 'Galaxy S-Series', avgCycle: '18.2mo', prev: '14.8mo', health: 'Healthier', color: 'var(--samsung-blue)' },
    { label: 'Galaxy Z-Series', avgCycle: '20.4mo', prev: '16.1mo', health: 'Healthier', color: 'var(--accent)' },
    { label: 'Wearables', avgCycle: '24.1mo', prev: '22.8mo', health: 'Stable', color: '#6c5ce7' },
    { label: 'TV / Display', avgCycle: '42.6mo', prev: '39.2mo', health: 'Healthier', color: '#00c853' },
  ]

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
      {lines.map(l => (
        <div key={l.label} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ fontSize: '0.82rem', fontWeight: 500, width: '100px', flexShrink: 0, color: l.color }}>{l.label}</span>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '3px' }}>
              <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Was {l.prev}</span>
              <span style={{ fontSize: '0.82rem', fontWeight: 700 }}>{l.avgCycle}</span>
            </div>
            <div style={{ height: '6px', background: '#eef0f4', borderRadius: '3px', overflow: 'hidden' }}>
              <div style={{ width: `${(parseFloat(l.avgCycle) / 48) * 100}%`, height: '100%', background: l.color, borderRadius: '3px' }} />
            </div>
          </div>
          <span className={`badge ${l.health === 'Healthier' ? 'badge-success' : 'badge-neutral'}`} style={{ flexShrink: 0 }}>{l.health}</span>
        </div>
      ))}
    </div>
  )
}

/* ========== REACTIVATION RATE ========== */
function ReactivationRate() {
  const segments = [
    { segment: 'Lapsed Rewards (90+ days)', total: '142K', reactivated: '23.4K', rate: '16.5%', method: 'Low-freq personalized' },
    { segment: 'Dormant Galaxy Owners', total: '89K', reactivated: '11.2K', rate: '12.6%', method: 'Upgrade path + points' },
    { segment: 'EPP Inactive', total: '67K', reactivated: '9.8K', rate: '14.6%', method: 'Employer benefit reminder' },
    { segment: 'Opted-down (freq pref)', total: '210K', reactivated: '41.3K', rate: '19.7%', method: 'Respected cadence' },
  ]

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      {segments.map(s => (
        <div key={s.segment} style={{ padding: '10px 12px', background: 'var(--surface)', borderRadius: '8px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
            <span style={{ fontSize: '0.82rem', fontWeight: 600 }}>{s.segment}</span>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.95rem', color: 'var(--success)' }}>{s.rate}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: 'var(--text-muted)' }}>
            <span>{s.reactivated} of {s.total} recovered</span>
            <span>{s.method}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
