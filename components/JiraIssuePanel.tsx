
import React from 'react';
import { Alert } from '../types';
import GlassCard from './GlassCard';
import Icon from './Icon';

interface JiraIssuePanelProps {
  alert: Alert | null;
}

const JiraIssuePanel: React.FC<JiraIssuePanelProps> = ({ alert }) => {
  const jiraIssue = alert?.jiraIssue;

  if (!jiraIssue) {
    return (
      <GlassCard className="p-4 h-full flex items-center justify-center">
        <div className="text-center">
            <Icon name="clipboard-list" className="w-12 h-12 text-text-secondary/50 mx-auto mb-2" />
            <p className="text-text-secondary">No Jira issue linked</p>
            <p className="text-xs text-text-secondary/70">Create an issue from the alert details panel</p>
        </div>
      </GlassCard>
    );
  }

  return (
    <GlassCard className="p-6 flex flex-col space-y-4">
        <div className="flex justify-between items-start">
            <div>
                <h3 className="font-heading font-semibold text-lg text-secondary">{jiraIssue.key}: <span className="text-text-primary">{jiraIssue.summary}</span></h3>
                <div className="flex items-center space-x-4 text-sm mt-1">
                    <span className="bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded-full">{jiraIssue.status}</span>
                    <span className="text-text-secondary">Assignee: <span className="text-text-primary">{jiraIssue.assignee}</span></span>
                    <span className="text-text-secondary">Priority: <span className="text-text-primary">{jiraIssue.priority}</span></span>
                </div>
            </div>
            <a href="#" className="flex items-center text-sm text-secondary hover:text-primary transition-colors whitespace-nowrap">
                Open in Jira <Icon name="external-link" className="w-4 h-4 ml-1" />
            </a>
        </div>
        
        <div className="flex-1 space-y-4">
            <div>
                <label className="text-sm font-semibold text-text-secondary">Add Comment</label>
                <textarea className="w-full bg-dark-bg/50 border border-dark-border rounded-lg p-2 mt-1 focus:outline-none focus:ring-1 focus:ring-secondary" rows={2} placeholder="Add investigation notes... (syncs with Jira)"></textarea>
            </div>
             <div>
                <label className="text-sm font-semibold text-text-secondary">Add Evidence</label>
                <div className="mt-1 flex justify-center items-center w-full h-24 border-2 border-dark-border border-dashed rounded-lg bg-dark-bg/50 hover:border-secondary transition-colors">
                    <div className="text-center text-text-secondary">
                        <Icon name="upload-cloud" className="w-8 h-8 mx-auto" />
                        <p className="text-sm">Drag & drop files or click to upload</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="pt-4 border-t border-dark-border flex justify-end">
            <button className="bg-secondary text-white font-bold py-2 px-5 rounded-lg hover:shadow-glow-primary transition-all duration-300">
                Update Issue
            </button>
        </div>
    </GlassCard>
  );
};

export default JiraIssuePanel;
