import { useLocation } from 'react-router-dom'

const pageTitles = {
  '/': 'Dashboard',
  '/customer-intelligence': 'Customer Intelligence',
  '/journey-orchestration': 'Journey Orchestration',
  '/rewards-epp': 'Rewards & EPP Hub',
  '/personalization': 'Personalization Engine',
  '/governance': 'Governance & Risk',
  '/experimentation': 'Experimentation',
  '/co-creation': 'Co-Creation Workspace',
  '/settings': 'Settings',
}

export default function TopBar() {
  const location = useLocation()
  const title = pageTitles[location.pathname] || 'Samsung CRM OS'

  return (
    <header className="topbar">
      <div className="topbar-left">
        <span className="topbar-page-title">{title}</span>
      </div>
      <div className="topbar-right">
        <div className="search-bar topbar-search">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#8e90a6" strokeWidth="1.8">
            <circle cx="6.5" cy="6.5" r="5"/>
            <line x1="10.5" y1="10.5" x2="14.5" y2="14.5" strokeLinecap="round"/>
          </svg>
          <input type="text" placeholder="Search customers, journeys, experiments..." />
        </div>
        <button className="topbar-icon-btn" title="Notifications">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M10 2a5 5 0 00-5 5v3l-2 2v1h14v-1l-2-2V7a5 5 0 00-5-5z"/>
            <path d="M8 16a2 2 0 004 0" strokeLinecap="round"/>
          </svg>
          <span className="notification-dot"></span>
        </button>
        <button className="topbar-icon-btn" title="Help">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8">
            <circle cx="10" cy="10" r="8"/>
            <path d="M7.5 7.5a2.5 2.5 0 015 0c0 1.5-2.5 2-2.5 3.5" strokeLinecap="round"/>
            <circle cx="10" cy="14" r="0.5" fill="currentColor"/>
          </svg>
        </button>
      </div>
    </header>
  )
}
