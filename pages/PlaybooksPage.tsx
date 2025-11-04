import React from 'react';
import GlassCard from '../components/GlassCard';
import PageHeader from '../components/PageHeader';
import Icon from '../components/Icon';
import { MOCK_PLAYBOOKS } from '../constants';

const PlaybooksPage: React.FC = () => {
    return (
        <div className="animate-fade-in">
            <PageHeader title="Playbooks" subtitle="Manage and apply automated response workflows." />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {MOCK_PLAYBOOKS.map(playbook => (
                    <GlassCard key={playbook.id} className="p-6 flex flex-col group">
                        <div className="flex items-center space-x-4 mb-4">
                            <div className="p-3 bg-primary/10 rounded-lg">
                                <Icon name="automation" className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-lg font-bold font-heading">{playbook.title}</h3>
                        </div>
                        <p className="text-text-secondary text-sm flex-1">{playbook.description}</p>
                        <button className="mt-6 w-full bg-secondary text-white font-bold py-2 px-4 rounded-lg hover:shadow-glow-primary transition-all duration-300 transform hover:scale-105 opacity-80 group-hover:opacity-100">
                            Apply Playbook
                        </button>
                    </GlassCard>
                ))}
                <GlassCard className="p-6 flex flex-col items-center justify-center border-2 border-dashed border-dark-border hover:border-accent transition-colors cursor-pointer">
                    <Icon name="plus-circle" className="w-10 h-10 text-text-secondary/50 mb-2" />
                    <p className="font-semibold text-text-secondary">Create New Playbook</p>
                </GlassCard>
            </div>
        </div>
    );
};

export default PlaybooksPage;
