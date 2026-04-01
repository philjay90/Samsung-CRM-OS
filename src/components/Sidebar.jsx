import { NavLink, useLocation } from 'react-router-dom'

const navItems = [
  { path: '/', label: 'Dashboard', icon: 'dashboard' },
  { path: '/customer-intelligence', label: 'Customer Intelligence', icon: 'people' },
  { path: '/journey-orchestration', label: 'Journey Orchestration', icon: 'journey' },
  { path: '/rewards-epp', label: 'Rewards & EPP Hub', icon: 'rewards' },
  { path: '/personalization', label: 'Personalization Engine', icon: 'personalize' },
  { path: '/governance', label: 'Governance & Risk', icon: 'shield' },
  { path: '/experimentation', label: 'Experimentation', icon: 'experiment' },
  { path: '/co-creation', label: 'Co-Creation Workspace', icon: 'collaborate' },
  { path: '/settings', label: 'Settings', icon: 'settings' },
]

function NavIcon({ type }) {
  const icons = {
    dashboard: (
      <svg viewBox="0 0 20 20" fill="currentColor">
        <rect x="2" y="2" width="7" height="7" rx="1.5"/>
        <rect x="11" y="2" width="7" height="4" rx="1.5"/>
        <rect x="2" y="11" width="7" height="4" rx="1.5"/>
        <rect x="11" y="8" width="7" height="7" rx="1.5"/>
      </svg>
    ),
    people: (
      <svg viewBox="0 0 20 20" fill="currentColor">
        <circle cx="7" cy="6" r="3"/>
        <circle cx="14" cy="6" r="2.5"/>
        <path d="M1 16c0-3 2.5-5 6-5s6 2 6 5z"/>
        <path d="M13 16c0-2.2 1.5-4 4-4s3.5 1.8 3.5 4z" opacity="0.6"/>
      </svg>
    ),
    journey: (
      <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M2 10h4l2-5 3 10 2-5h5"/>
      </svg>
    ),
    rewards: (
      <svg viewBox="0 0 20 20" fill="currentColor">
        <path d="M10 2l2.4 4.8 5.3.8-3.8 3.7.9 5.3L10 14.1l-4.8 2.5.9-5.3L2.3 7.6l5.3-.8z"/>
      </svg>
    ),
    personalize: (
      <svg viewBox="0 0 20 20" fill="currentColor">
        <path d="M3 3h5v5H3zM12 3h5v5h-5zM3 12h5v5H3z"/>
        <circle cx="14.5" cy="14.5" r="3" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M14.5 12.5v4M12.5 14.5h4" fill="none" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    shield: (
      <svg viewBox="0 0 20 20" fill="currentColor">
        <path d="M10 1L3 4.5v5c0 4.3 3 8.2 7 9.5 4-1.3 7-5.2 7-9.5v-5L10 1zm-1 13l-3-3 1.4-1.4L9 11.2l4.6-4.6L15 8l-6 6z"/>
      </svg>
    ),
    experiment: (
      <svg viewBox="0 0 20 20" fill="currentColor">
        <path d="M7 2h6v3l-2 3v5l4 4H5l4-4V8L7 5V2zm1 1v1.5l2 3v5.5l-2 2h4l-2-2V7.5l2-3V3z"/>
      </svg>
    ),
    collaborate: (
      <svg viewBox="0 0 20 20" fill="currentColor">
        <rect x="2" y="2" width="16" height="12" rx="2" fill="none" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M6 7h8M6 10h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M10 14v4M6 18h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    settings: (
      <svg viewBox="0 0 20 20" fill="currentColor">
        <path d="M10 13a3 3 0 100-6 3 3 0 000 6z"/>
        <path d="M17.4 11c.1-.3.1-.7.1-1s0-.7-.1-1l2.1-1.6a.5.5 0 00.1-.6l-2-3.5a.5.5 0 00-.6-.2l-2.5 1a7.5 7.5 0 00-1.7-1L12.4.6a.5.5 0 00-.5-.4h-4a.5.5 0 00-.5.4l-.4 2.7a7.5 7.5 0 00-1.7 1l-2.5-1a.5.5 0 00-.6.2l-2 3.5a.5.5 0 00.1.6L2.5 9c-.1.3-.1.7-.1 1s0 .7.1 1l-2.1 1.6a.5.5 0 00-.1.6l2 3.5a.5.5 0 00.6.2l2.5-1c.5.4 1.1.7 1.7 1l.4 2.7a.5.5 0 00.5.4h4a.5.5 0 00.5-.4l.4-2.7c.6-.3 1.2-.6 1.7-1l2.5 1a.5.5 0 00.6-.2l2-3.5a.5.5 0 00-.1-.6L17.4 11z" transform="scale(0.85) translate(1.8, 1.8)" opacity="0.3"/>
      </svg>
    ),
  }
  return <span className="nav-icon">{icons[type]}</span>
}

export default function Sidebar({ collapsed, onToggle }) {
  const location = useLocation()

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-brand">
          <span className="sidebar-brand-name">Samsung</span>
          <span className="sidebar-brand-sub">CRM OS</span>
        </div>
        <button className="sidebar-toggle" onClick={onToggle} title={collapsed ? 'Expand' : 'Collapse'}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {collapsed ? (
              <>
                <line x1="3" y1="4" x2="15" y2="4"/>
                <line x1="3" y1="9" x2="15" y2="9"/>
                <line x1="3" y1="14" x2="15" y2="14"/>
              </>
            ) : (
              <>
                <line x1="3" y1="4" x2="15" y2="4"/>
                <line x1="3" y1="9" x2="11" y2="9"/>
                <line x1="3" y1="14" x2="15" y2="14"/>
              </>
            )}
          </svg>
        </button>
      </div>
      <nav className="sidebar-nav">
        {navItems.map(item => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === '/'}
            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
          >
            <NavIcon type={item.icon} />
            <span className="nav-label">{item.label}</span>
          </NavLink>
        ))}
      </nav>
      <div className="sidebar-footer">
        <div className="user-avatar">BB</div>
        <div className="user-info">
          <div className="user-name">Brian Best</div>
          <div className="user-role">Head of Group (xLOB CRM)</div>
        </div>
      </div>
    </aside>
  )
}
