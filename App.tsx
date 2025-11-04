import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import LiveAlertsTable from './components/LiveAlertsTable';
import AnalyticsCards from './components/AnalyticsCards';
import AlertDetail from './components/AlertDetail';
import JiraIssuePanel from './components/JiraIssuePanel';
import ActiveCasesTimeline from './components/ActiveCasesTimeline';
import CreateJiraModal from './components/CreateJiraModal';
import { Alert } from './types';
import { MOCK_ALERTS } from './constants';

// FIX: Remove explicit JSX.Element return type to fix compile error and rely on type inference.
export default function App() {
  const [alerts, setAlerts] = useState<Alert[]>(MOCK_ALERTS);
  const [selectedAlert, setSelectedAlert] = useState<Alert | null>(alerts[0]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

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

  return (
    <div className="flex h-screen bg-gradient-to-br from-dark-bg to-dark-bg-2 text-text-primary overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col pl-20 overflow-y-auto">
        <Header />
        <main className="flex-1 p-6 space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <LiveAlertsTable 
                alerts={alerts} 
                selectedAlert={selectedAlert}
                onSelectAlert={handleSelectAlert}
                onCreateJira={handleCreateJira}
                onDismissAlert={handleDismissAlert}
              />
            </div>
            <AnalyticsCards />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <AlertDetail alert={selectedAlert} onOpenJiraModal={() => setIsModalOpen(true)} />
            <JiraIssuePanel alert={selectedAlert} />
          </div>

          <ActiveCasesTimeline />
        </main>
      </div>
      {isModalOpen && selectedAlert && (
        <CreateJiraModal
          alert={selectedAlert}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
}