import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import PasswordGate from './components/PasswordGate'
import Sidebar from './components/Sidebar'
import TopBar from './components/TopBar'
import GuidedTour from './components/GuidedTour'
import Dashboard from './pages/Dashboard'
import CustomerIntelligence from './pages/CustomerIntelligence'
import JourneyOrchestration from './pages/JourneyOrchestration'
import RewardsEPP from './pages/RewardsEPP'
import PersonalizationEngine from './pages/PersonalizationEngine'
import BrandCenter from './pages/BrandCenter'
import CreativeIntelligence from './pages/CreativeIntelligence'
import GovernanceRisk from './pages/GovernanceRisk'
import Experimentation from './pages/Experimentation'
import CoCreation from './pages/CoCreation'
import Settings from './pages/Settings'
import './styles/layout.css'

function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [tourActive, setTourActive] = useState(false)

  return (
    <PasswordGate>
    <div className={`app-layout ${sidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
      <Sidebar collapsed={sidebarCollapsed} onToggle={() => setSidebarCollapsed(!sidebarCollapsed)} />
      <div className="main-area">
        <TopBar />
        <div className="content-area">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/customer-intelligence" element={<CustomerIntelligence />} />
            <Route path="/journey-orchestration" element={<JourneyOrchestration />} />
            <Route path="/rewards-epp" element={<RewardsEPP />} />
            <Route path="/personalization" element={<PersonalizationEngine />} />
            <Route path="/brand-center" element={<BrandCenter />} />
            <Route path="/creative-intelligence" element={<CreativeIntelligence />} />
            <Route path="/governance" element={<GovernanceRisk />} />
            <Route path="/experimentation" element={<Experimentation />} />
            <Route path="/co-creation" element={<CoCreation />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </div>

      {/* Guided Tour */}
      <GuidedTour active={tourActive} onClose={() => setTourActive(false)} />

      {/* See How It Works button */}
      {!tourActive && (
        <button
          onClick={() => setTourActive(true)}
          style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            zIndex: 800,
            background: 'linear-gradient(135deg, var(--samsung-blue), var(--accent))',
            color: 'white',
            border: 'none',
            borderRadius: '28px',
            padding: '12px 24px',
            fontSize: '0.88rem',
            fontWeight: 600,
            cursor: 'pointer',
            fontFamily: 'var(--font-display)',
            boxShadow: '0 4px 20px rgba(0, 178, 255, 0.35), 0 2px 8px rgba(0,0,0,0.15)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            transition: 'all 0.2s ease',
            animation: 'tourBtnPulse 3s ease-in-out infinite',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = 'translateY(-2px)'
            e.currentTarget.style.boxShadow = '0 6px 28px rgba(0, 178, 255, 0.45), 0 4px 12px rgba(0,0,0,0.2)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 178, 255, 0.35), 0 2px 8px rgba(0,0,0,0.15)'
          }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="8" cy="8" r="7" stroke="white" strokeWidth="1.5"/>
            <polygon points="6.5,4.5 12,8 6.5,11.5" fill="white"/>
          </svg>
          See How It Works
        </button>
      )}

      <style>{`
        @keyframes tourBtnPulse {
          0%, 100% { box-shadow: 0 4px 20px rgba(0, 178, 255, 0.35), 0 2px 8px rgba(0,0,0,0.15); }
          50% { box-shadow: 0 4px 28px rgba(0, 178, 255, 0.5), 0 2px 12px rgba(0,0,0,0.2); }
        }
      `}</style>
    </div>
    </PasswordGate>
  )
}

export default App
