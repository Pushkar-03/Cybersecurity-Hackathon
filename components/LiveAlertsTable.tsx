import React from 'react';
import { Alert, AlertSeverity } from '../types';
import GlassCard from './GlassCard';
import Icon from './Icon';

interface LiveAlertsTableProps {
  alerts: Alert[];
  selectedAlert: Alert | null;
  onSelectAlert: (alert: Alert) => void;
  onCreateJira: (alert: Alert) => void;
  onDismissAlert: (alertId: string) => void;
}

const severityStyles: { [key in AlertSeverity]: string } = {
  [AlertSeverity.Info]: 'bg-blue-500/20 text-blue-300 border-blue-500/50',
  [AlertSeverity.Low]: 'bg-green-500/20 text-green-300 border-green-500/50',
  [AlertSeverity.Medium]: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/50',
  [AlertSeverity.High]: 'bg-orange-500/20 text-orange-300 border-orange-500/50',
  [AlertSeverity.Critical]: 'bg-red-500/20 text-red-300 border-red-500/50 animate-pulse',
};

const LiveAlertsTable: React.FC<LiveAlertsTableProps> = ({ alerts, selectedAlert, onSelectAlert, onCreateJira, onDismissAlert }) => {
  return (
    <GlassCard className="p-0 overflow-hidden h-full flex flex-col">
      <div className="p-4 border-b border-dark-border">
        <h2 className="font-heading font-semibold text-lg">Live Alerts Feed</h2>
      </div>
      <div className="overflow-y-auto flex-1">
        <table className="w-full text-sm text-left">
          <thead className="sticky top-0 bg-dark-card/80 backdrop-blur-sm">
            <tr>
              <th className="px-4 py-2 font-semibold text-text-secondary">Severity</th>
              <th className="px-4 py-2 font-semibold text-text-secondary">Source</th>
              <th className="px-4 py-2 font-semibold text-text-secondary">Title</th>
              <th className="px-4 py-2 font-semibold text-text-secondary">Age</th>
              <th className="px-4 py-2 font-semibold text-text-secondary">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-dark-border">
            {alerts.length === 0 ? (
              <tr>
                <td colSpan={5} className="text-center py-10 text-text-secondary">
                  No live alerts at the moment.
                </td>
              </tr>
            ) : (
              alerts.map((alert) => (
              <tr
                key={alert.id}
                onClick={() => onSelectAlert(alert)}
                className={`cursor-pointer transition-colors duration-200 ${
                  selectedAlert?.id === alert.id ? 'bg-primary/10' : 'hover:bg-primary/5'
                }`}
              >
                <td className="px-4 py-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold border ${severityStyles[alert.severity]}`}>
                    {alert.severity}
                  </span>
                </td>
                <td className="px-4 py-3 text-text-secondary">{alert.source}</td>
                <td className="px-4 py-3 max-w-xs truncate">{alert.title}</td>
                <td className="px-4 py-3 text-text-secondary">{alert.age}</td>
                <td className="px-4 py-3">
                  <div className="flex items-center space-x-2">
                    {alert.jiraIssue ? (
                        <a href="#" className="flex items-center text-secondary hover:text-primary text-xs" onClick={(e) => e.stopPropagation()}>
                           <Icon name="external-link" className="w-4 h-4 mr-1"/> {alert.jiraIssue.key}
                        </a>
                    ) : (
                        <button onClick={(e) => {e.stopPropagation(); onCreateJira(alert);}} className="text-accent hover:text-white text-xs font-semibold">Create Jira</button>
                    )}
                    <button onClick={(e) => {e.stopPropagation(); onDismissAlert(alert.id);}} className="text-text-secondary hover:text-red-400 text-xs">Dismiss</button>
                  </div>
                </td>
              </tr>
            )))}
          </tbody>
        </table>
      </div>
    </GlassCard>
  );
};

export default LiveAlertsTable;