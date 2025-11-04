import React from 'react';
import GlassCard from '../components/GlassCard';
import PageHeader from '../components/PageHeader';
import Icon from '../components/Icon';
import { MOCK_ALERTS } from '../constants';
import { Alert, JiraIssue } from '../types';

const statusStyles: { [key in JiraIssue['status']]: string } = {
  'To Do': 'bg-gray-500/20 text-gray-300 border-gray-500/50',
  'In Progress': 'bg-blue-500/20 text-blue-300 border-blue-500/50',
  'Done': 'bg-green-500/20 text-green-300 border-green-500/50',
  'Closed': 'bg-purple-500/20 text-purple-300 border-purple-500/50',
};

const IncidentsPage: React.FC = () => {
    const incidents: (Alert & { jiraIssue: JiraIssue })[] = MOCK_ALERTS.filter((a): a is Alert & { jiraIssue: JiraIssue } => !!a.jiraIssue);

    return (
        <div className="animate-fade-in">
            <PageHeader title="Incidents (Jira)" subtitle="A list of all active and resolved security incidents." />
            <GlassCard className="p-0 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-dark-card/80 backdrop-blur-sm">
                            <tr>
                                <th className="px-6 py-3 font-semibold text-text-secondary">Jira Key</th>
                                <th className="px-6 py-3 font-semibold text-text-secondary">Summary</th>
                                <th className="px-6 py-3 font-semibold text-text-secondary">Status</th>
                                <th className="px-6 py-3 font-semibold text-text-secondary">Assignee</th>
                                <th className="px-6 py-3 font-semibold text-text-secondary">Priority</th>
                                <th className="px-6 py-3 font-semibold text-text-secondary">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-dark-border">
                            {incidents.map((incident) => (
                                <tr key={incident.jiraIssue.id} className="hover:bg-primary/5 transition-colors">
                                    <td className="px-6 py-4 font-mono text-secondary">{incident.jiraIssue.key}</td>
                                    <td className="px-6 py-4 max-w-md truncate">{incident.jiraIssue.summary}</td>
                                    <td className="px-6 py-4">
                                        <span className={`px-2 py-1 rounded-full text-xs font-semibold border ${statusStyles[incident.jiraIssue.status]}`}>
                                            {incident.jiraIssue.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-text-secondary">{incident.jiraIssue.assignee}</td>
                                    <td className="px-6 py-4 text-text-primary">{incident.jiraIssue.priority}</td>
                                    <td className="px-6 py-4">
                                        <a href="#" className="flex items-center text-secondary hover:text-primary transition-colors text-xs font-semibold">
                                            Open in Jira <Icon name="external-link" className="w-4 h-4 ml-1.5" />
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </GlassCard>
        </div>
    );
};

export default IncidentsPage;
