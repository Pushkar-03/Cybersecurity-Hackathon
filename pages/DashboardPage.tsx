import React from 'react';
import LiveAlertsTable from '../components/LiveAlertsTable';
import AnalyticsCards from '../components/AnalyticsCards';
import AlertDetail from '../components/AlertDetail';
import JiraIssuePanel from '../components/JiraIssuePanel';
import ActiveCasesTimeline from '../components/ActiveCasesTimeline';
import { Alert } from '../types';

interface DashboardPageProps {
  alerts: Alert[];
  selectedAlert: Alert | null;
  onSelectAlert: (alert: Alert) => void;
  onCreateJira: (alert: Alert) => void;
  onDismissAlert: (alertId: string) => void;
  onOpenJiraModal: () => void;
}

const DashboardPage: React.FC<DashboardPageProps> = ({
  alerts,
  selectedAlert,
  onSelectAlert,
  onCreateJira,
  onDismissAlert,
  onOpenJiraModal,
}) => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <LiveAlertsTable 
            alerts={alerts} 
            selectedAlert={selectedAlert}
            onSelectAlert={onSelectAlert}
            onCreateJira={onCreateJira}
            onDismissAlert={onDismissAlert}
          />
        </div>
        <AnalyticsCards />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AlertDetail alert={selectedAlert} onOpenJiraModal={onOpenJiraModal} />
        <JiraIssuePanel alert={selectedAlert} />
      </div>

      <ActiveCasesTimeline />
    </div>
  );
};

export default DashboardPage;
