
export enum AlertSeverity {
  Info = "Info",
  Low = "Low",
  Medium = "Medium",
  High = "High",
  Critical = "Critical",
}

export interface JiraIssue {
  id: string;
  key: string;
  summary: string;
  status: 'To Do' | 'In Progress' | 'Done' | 'Closed';
  assignee: string;
  priority: 'Low' | 'Medium' | 'High' | 'Highest';
}

export interface Alert {
  id: string;
  timestamp: string;
  severity: AlertSeverity;
  source: string;
  title: string;
  age: string;
  entity: string;
  rawJson: Record<string, any>;
  jiraIssue?: JiraIssue;
}

export interface Playbook {
  id: string;
  title: string;
  description: string;
}

export interface AnalyticsCardData {
  title: string;
  value: string;
  change?: string;
  changeType?: 'increase' | 'decrease';
  chartData?: { name: string; value: number }[];
}
