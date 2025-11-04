import React from 'react';
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, Legend, PieChart, Pie, Cell, YAxis } from 'recharts';
import GlassCard from '../components/GlassCard';
import PageHeader from '../components/PageHeader';
import { MOCK_ANALYTICS } from '../constants';

const AnalyticsCard: React.FC<{ card: any }> = ({ card }) => {
    const ChangeIndicator: React.FC<{ change?: string, changeType?: 'increase' | 'decrease' }> = ({ change, changeType }) => {
    if (!change || !changeType) return null;
    const isIncrease = changeType === 'increase';
    return (
        <span className={`text-xs font-semibold ml-2 ${isIncrease ? 'text-red-400' : 'text-green-400'}`}>
            {isIncrease ? '▲' : '▼'} {change}
        </span>
    );
}
    return (
        <GlassCard className="p-4">
            <p className="text-sm text-text-secondary">{card.title}</p>
            <div className="flex items-baseline">
                <p className="text-3xl font-bold font-heading">{card.value}</p>
                <ChangeIndicator change={card.change} changeType={card.changeType} />
            </div>
        </GlassCard>
    )
}

const alertSourceData = [
  { name: 'Wazuh', value: 450 },
  { name: 'CrowdStrike', value: 300 },
  { name: 'Proofpoint', value: 200 },
  { name: 'Firewall', value: 150 },
];

const alertSeverityData = [
    { name: 'Critical', value: 50 },
    { name: 'High', value: 120 },
    { name: 'Medium', value: 430 },
    { name: 'Low', value: 500 },
];

const COLORS = ['#be123c', '#f97316', '#facc15', '#4d7c0f'];

const ReportsPage: React.FC = () => {
    return (
        <div className="animate-fade-in space-y-6">
            <PageHeader title="Reports" subtitle="Analyze historical data and security trends." />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {MOCK_ANALYTICS.map(card => <AnalyticsCard key={card.title} card={card} />)}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <GlassCard className="p-6">
                    <h3 className="font-heading font-semibold mb-4">Alerts by Source</h3>
                    <div className="h-80">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={alertSourceData} layout="vertical" margin={{ top: 0, right: 30, left: 30, bottom: 0 }}>
                                <XAxis type="number" stroke="#A0A0A0" fontSize={12} />
                                <YAxis type="category" dataKey="name" stroke="#A0A0A0" fontSize={12} width={80} />
                                <Tooltip cursor={{ fill: 'rgba(0, 198, 255, 0.1)' }} contentStyle={{ background: 'rgba(10,10,10,0.8)', border: '1px solid #00C6FF', borderRadius: '8px' }}/>
                                <Bar dataKey="value" fill="url(#colorBar)" background={{ fill: 'rgba(255,255,255,0.05)' }} barSize={20} radius={[0, 4, 4, 0]}>
                                    <defs>
                                        <linearGradient id="colorBar" x1="0" y1="0" x2="1" y2="0">
                                            <stop offset="0%" stopColor="#0072FF" />
                                            <stop offset="100%" stopColor="#00C6FF" />
                                        </linearGradient>
                                    </defs>
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </GlassCard>
                <GlassCard className="p-6">
                    <h3 className="font-heading font-semibold mb-4">Alerts by Severity</h3>
                     <div className="h-80">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie data={alertSeverityData} cx="50%" cy="50%" outerRadius={110} fill="#8884d8" dataKey="value" labelLine={false} label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}>
                                    {alertSeverityData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip contentStyle={{ background: 'rgba(10,10,10,0.8)', border: '1px solid #00C6FF', borderRadius: '8px' }}/>
                                <Legend />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </GlassCard>
            </div>
        </div>
    );
};

export default ReportsPage;
