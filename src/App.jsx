import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import TopBar from './components/TopBar'
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

  return (
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
    </div>
  )
}

export default App
