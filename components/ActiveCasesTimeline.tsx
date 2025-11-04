
import React from 'react';
import GlassCard from './GlassCard';
import Icon from './Icon';
import { MOCK_ALERTS } from '../constants';

const ActiveCasesTimeline: React.FC = () => {
  const activeCases = MOCK_ALERTS.filter(a => a.jiraIssue);

  return (
    <GlassCard>
      <div className="p-4 border-b border-dark-border">
        <h2 className="font-heading font-semibold text-lg">Active Cases Timeline</h2>
      </div>
      <div className="p-6">
        <div className="flex items-center overflow-x-auto pb-4 space-x-12 relative">
          {/* Timeline track */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 h-0.5 w-full bg-gradient-to-r from-secondary to-primary/30"></div>
          
          {activeCases.map((alert, index) => (
            <div key={alert.id} className="relative flex flex-col items-center z-10">
              <div className={`w-4 h-4 rounded-full border-2 ${alert.jiraIssue?.status === 'In Progress' ? 'bg-primary border-primary animate-pulse' : 'bg-dark-bg-2 border-secondary'}`}></div>
              <div className="mt-4 text-center bg-dark-bg-2 p-3 rounded-lg min-w-[150px] border border-dark-border">
                <p className="text-sm font-bold text-secondary">{alert.jiraIssue?.key}</p>
                <p className="text-xs text-text-secondary truncate">{alert.title}</p>
                <span className={`mt-1 inline-block text-xs px-2 py-0.5 rounded-full ${alert.jiraIssue?.status === 'In Progress' ? 'bg-primary/20 text-primary' : 'bg-secondary/20 text-secondary'}`}>
                  {alert.jiraIssue?.status}
                </span>
              </div>
            </div>
          ))}
          <div className="relative flex flex-col items-center z-10 text-text-secondary">
              <div className="w-4 h-4 rounded-full border-2 border-dashed border-text-secondary/50"></div>
              <p className="mt-4 text-xs">Next case...</p>
          </div>
        </div>
      </div>
    </GlassCard>
  );
};

export default ActiveCasesTimeline;
