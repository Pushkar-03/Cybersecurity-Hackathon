
import React from 'react';
import { Alert } from '../types';
import GlassCard from './GlassCard';
import { MOCK_PLAYBOOKS } from '../constants';
import Icon from './Icon';

interface AlertDetailProps {
  alert: Alert | null;
  onOpenJiraModal: () => void;
}

const AlertDetail: React.FC<AlertDetailProps> = ({ alert, onOpenJiraModal }) => {
  if (!alert) {
    return (
      <GlassCard className="p-4 h-full flex items-center justify-center">
        <p className="text-text-secondary">Select an alert to view details</p>
      </GlassCard>
    );
  }

  return (
    <GlassCard className="p-6 flex flex-col space-y-4">
      <div>
        <h3 className="font-heading font-semibold text-lg">{alert.title}</h3>
        <p className="text-sm text-text-secondary">Entity: <span className="font-mono text-accent">{alert.entity}</span></p>
      </div>

      <details className="group" open>
        <summary className="cursor-pointer text-text-secondary flex justify-between items-center list-none">
          <span className="font-semibold">Raw JSON Data</span>
          <Icon name="chevron-down" className="w-5 h-5 transition-transform group-open:rotate-180" />
        </summary>
        <div className="mt-2 bg-dark-bg/50 rounded-lg p-3 max-h-48 overflow-auto">
          <pre className="text-xs font-mono text-text-primary whitespace-pre-wrap">
            {JSON.stringify(alert.rawJson, null, 2)}
          </pre>
        </div>
      </details>
      
      <div className="pt-2">
        <h4 className="font-semibold text-text-secondary mb-2">CyberAI Copilot: Suggested Playbooks</h4>
        <div className="space-y-2">
            {MOCK_PLAYBOOKS.slice(0, 2).map(playbook => (
                <div key={playbook.id} className="bg-dark-bg/50 p-3 rounded-lg flex justify-between items-center group hover:bg-primary/10 transition-colors">
                    <div>
                        <p className="font-semibold text-sm">{playbook.title}</p>
                        <p className="text-xs text-text-secondary">{playbook.description}</p>
                    </div>
                    <button className="text-xs bg-secondary text-white px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">Apply</button>
                </div>
            ))}
        </div>
      </div>

      {!alert.jiraIssue && (
          <div className="pt-4 border-t border-dark-border">
            <button onClick={onOpenJiraModal} className="w-full bg-gradient-to-r from-primary to-secondary text-white font-bold py-2 px-4 rounded-lg hover:shadow-glow-primary transition-all duration-300 transform hover:scale-105">
                Create Jira Issue
            </button>
          </div>
      )}
    </GlassCard>
  );
};

export default AlertDetail;
