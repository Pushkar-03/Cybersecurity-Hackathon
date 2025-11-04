import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import CreateJiraModal from './components/CreateJiraModal';
import { Alert } from './types';
import { MOCK_ALERTS } from './constants';
import DashboardPage from './pages/DashboardPage';
import IncidentsPage from './pages/IncidentsPage';
import PlaybooksPage from './pages/PlaybooksPage';
import ReportsPage from './pages/ReportsPage';
import IntegrationsPage from './pages/IntegrationsPage';

// FIX: Remove explicit JSX.Element return type to fix compile error and rely on type inference.
export default function App() {
  const [alerts, setAlerts] = useState<Alert[]>(MOCK_ALERTS);
  const [selectedAlert, setSelectedAlert] = useState<Alert | null>(alerts[0]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [activePage, setActivePage] = useState('Dashboard');

  const handleSelectAlert = (alert: Alert) => {
    setSelectedAlert(alert);
  };
  
  const handleCreateJira = (alert: Alert) => {
    setSelectedAlert(alert);
    setIsModalOpen(true);
  };
  
  const handleDismissAlert = (alertId: string) => {
    setAlerts(prevAlerts => prevAlerts.filter(a => a.id !== alertId));
    if (selectedAlert?.id === alertId) {
        setSelectedAlert(null);
    }
  };

  const handleNavigate = (page: string) => {
    setActivePage(page);
  };

  const renderPage = () => {
    const currentPage = (activePage === 'Alerts') ? 'Dashboard' : activePage;
    switch (currentPage) {
      case 'Dashboard':
        return <DashboardPage 
            alerts={alerts}
            selectedAlert={selectedAlert}
            onSelectAlert={handleSelectAlert}
            onCreateJira={handleCreateJira}
            onDismissAlert={handleDismissAlert}
            onOpenJiraModal={() => setIsModalOpen(true)}
        />;
      case 'Incidents (Jira)':
        return <IncidentsPage />;
      case 'Playbooks':
        return <PlaybooksPage />;
      case 'Reports':
        return <ReportsPage />;
      case 'Integrations':
        return <IntegrationsPage />;
      default:
        return <DashboardPage 
            alerts={alerts}
            selectedAlert={selectedAlert}
            onSelectAlert={handleSelectAlert}
            onCreateJira={handleCreateJira}
            onDismissAlert={handleDismissAlert}
            onOpenJiraModal={() => setIsModalOpen(true)}
        />;
    }
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-dark-bg to-dark-bg-2 text-text-primary overflow-hidden">
      <Sidebar activePage={activePage} onNavigate={handleNavigate}/>
      <div className="flex-1 flex flex-col pl-20 overflow-y-auto">
        <Header />
        <main className="flex-1 p-6">
          {renderPage()}
        </main>
      </div>
      {isModalOpen && selectedAlert && (
        <CreateJiraModal
          alert={selectedAlert}
          onClose={() => setIsModalOpen(false)}
        />
      )}
      <style>{`
          @keyframes fade-in {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          .animate-fade-in { animation: fade-in 0.4s ease-out forwards; }
        `}</style>
    </div>
  );
}