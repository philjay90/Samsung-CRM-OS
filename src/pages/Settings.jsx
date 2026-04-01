export default function Settings() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Settings</h1>
        <p className="page-subtitle">System configuration, team management, and integrations</p>
      </div>

      <div className="two-col section">
        {/* General Settings */}
        <div className="card">
          <div className="card-title">General</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <SettingRow label="Organization" value="Samsung Electronics — CRM Division" />
            <SettingRow label="Default LOB View" value="All Lines of Business" />
            <SettingRow label="Timezone" value="Asia/Seoul (KST, UTC+9)" />
            <SettingRow label="Date Format" value="YYYY-MM-DD" />
            <SettingRow label="Language" value="English (US)" />
          </div>
        </div>

        {/* Integrations */}
        <div className="card">
          <div className="card-title">Connected Integrations</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              { name: 'Salesforce CDP', status: 'Connected', color: 'var(--success)' },
              { name: 'Adobe Experience Platform', status: 'Connected', color: 'var(--success)' },
              { name: 'Samsung Rewards API', status: 'Connected', color: 'var(--success)' },
              { name: 'Braze Messaging', status: 'Connected', color: 'var(--success)' },
              { name: 'Snowflake Data Warehouse', status: 'Syncing', color: 'var(--accent)' },
              { name: 'Google Analytics 4', status: 'Disconnected', color: 'var(--danger)' },
            ].map(i => (
              <div key={i.name} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #f0f1f5' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 500 }}>{i.name}</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: i.color }}></span>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>{i.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="two-col section">
        {/* Team Members */}
        <div className="card">
          <div className="card-title">Team Members</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              { name: 'Brian Best', role: 'Head of Group (xLOB CRM)', avatar: 'BB', color: 'var(--samsung-blue)' },
              { name: 'Sarah Chen', role: 'CRM Strategy', avatar: 'SC', color: '#6c5ce7' },
              { name: 'Marcus Rivera', role: 'Engineering Lead', avatar: 'MR', color: 'var(--accent)' },
              { name: 'Yuna Park', role: 'WONGDOODY Creative', avatar: 'YP', color: '#00c853' },
              { name: 'David Lee', role: 'Data Science', avatar: 'DL', color: 'var(--warning)' },
            ].map(t => (
              <div key={t.name} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '8px 0' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: t.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.72rem', fontWeight: 700, color: 'white' }}>{t.avatar}</div>
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 500 }}>{t.name}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Notification Preferences */}
        <div className="card">
          <div className="card-title">Notification Preferences</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              { label: 'Journey conflict alerts', enabled: true },
              { label: 'Experiment status updates', enabled: true },
              { label: 'AI model audit reminders', enabled: true },
              { label: 'Consent rate threshold alerts', enabled: false },
              { label: 'Weekly CRM digest email', enabled: true },
              { label: 'Co-creation workspace updates', enabled: false },
            ].map(n => (
              <div key={n.label} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '0.85rem' }}>{n.label}</span>
                <div style={{
                  width: '40px', height: '22px', borderRadius: '11px',
                  background: n.enabled ? 'var(--samsung-blue)' : '#d0d3e0',
                  padding: '2px',
                  cursor: 'pointer',
                  transition: 'background 0.2s',
                }}>
                  <div style={{
                    width: '18px', height: '18px', borderRadius: '50%', background: 'white',
                    transform: n.enabled ? 'translateX(18px)' : 'translateX(0)',
                    transition: 'transform 0.2s',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.15)',
                  }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function SettingRow({ label, value }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0', borderBottom: '1px solid #f0f1f5' }}>
      <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>{label}</span>
      <span style={{ fontSize: '0.82rem', fontWeight: 500 }}>{value}</span>
    </div>
  )
}
