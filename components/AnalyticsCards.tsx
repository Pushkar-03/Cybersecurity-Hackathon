
import React from 'react';
import { MOCK_ANALYTICS } from '../constants';
import { AnalyticsCardData } from '../types';
import GlassCard from './GlassCard';
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, LineChart, Line, AreaChart, Area } from 'recharts';

const ChangeIndicator: React.FC<{ change?: string, changeType?: 'increase' | 'decrease' }> = ({ change, changeType }) => {
    if (!change || !changeType) return null;
    const isIncrease = changeType === 'increase';
    return (
        <span className={`text-xs font-semibold ml-2 ${isIncrease ? 'text-red-400' : 'text-green-400'}`}>
            {isIncrease ? '▲' : '▼'} {change}
        </span>
    );
}

const AnalyticsCard: React.FC<{ card: AnalyticsCardData }> = ({ card }) => {
    return (
        <GlassCard className="p-4">
            <p className="text-sm text-text-secondary">{card.title}</p>
            <div className="flex items-baseline">
                <p className="text-3xl font-bold font-heading">{card.value}</p>
                <ChangeIndicator change={card.change} changeType={card.changeType} />
            </div>
            {card.chartData && card.chartData.length > 0 && (
                <div className="h-16 mt-2">
                    <ResponsiveContainer width="100%" height="100%">
                         <AreaChart data={card.chartData} margin={{ top: 5, right: 0, left: 0, bottom: 0 }}>
                            <defs>
                                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#00C6FF" stopOpacity={0.8}/>
                                <stop offset="95%" stopColor="#00C6FF" stopOpacity={0}/>
                                </linearGradient>
                            </defs>
                            <Tooltip
                                contentStyle={{
                                    background: 'rgba(10, 10, 10, 0.8)',
                                    border: '1px solid #00C6FF',
                                    borderRadius: '8px',
                                    color: '#E0E0E0'
                                }}
                                itemStyle={{ color: '#E0E0E0' }}
                                cursor={{ fill: 'rgba(0, 198, 255, 0.1)' }}
                            />
                            <Area type="monotone" dataKey="value" stroke="#00C6FF" fillOpacity={1} fill="url(#colorValue)" strokeWidth={2}/>
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            )}
        </GlassCard>
    )
}

const AnalyticsCards: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-6">
      {MOCK_ANALYTICS.map((card) => (
        <AnalyticsCard key={card.title} card={card} />
      ))}
    </div>
  );
};

export default AnalyticsCards;
