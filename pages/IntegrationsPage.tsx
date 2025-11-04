import React from 'react';
import GlassCard from '../components/GlassCard';
import PageHeader from '../components/PageHeader';
import ToggleSwitch from '../components/ToggleSwitch';

const integrations = [
    {
        name: 'Wazuh',
        description: 'Endpoint and security monitoring.',
        logo: 'https://wazuh.com/wp-content/uploads/2021/04/wazuh-logo-e1619022131976.png',
        settings: [
            { label: 'API URL', value: 'https://wazuh.acme.corp:55000', type: 'text' },
            { label: 'API User', value: 'sentinelops_api', type: 'text' },
        ],
        enabled: true,
    },
    {
        name: 'Jira',
        description: 'Case management and ticketing.',
        logo: 'https://cdn.icon-icons.com/icons2/2699/PNG/512/atlassian_jira_logo_icon_170511.png',
        settings: [
            { label: 'Base URL', value: 'https://acme.atlassian.net', type: 'text' },
            { label: 'API Email', value: 'soc@acme.corp', type: 'text' },
            { label: 'API Token', value: '••••••••••••••••••••••••', type: 'password' },
            { label: 'Default Project', value: 'Security Operations (SOC)', type: 'text' },
        ],
        enabled: true,
    }
];

const IntegrationsPage: React.FC = () => {
    return (
        <div className="animate-fade-in">
            <PageHeader title="Integrations" subtitle="Connect SentinelOps to your security and operations tools." />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {integrations.map(integration => (
                    <GlassCard key={integration.name} className="p-6">
                        <div className="flex justify-between items-start mb-4">
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-white/10 rounded-lg p-1 flex items-center justify-center">
                                    <img src={integration.logo} alt={`${integration.name} logo`} className="max-w-full max-h-full object-contain"/>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold font-heading">{integration.name}</h3>
                                    <p className="text-sm text-text-secondary">{integration.description}</p>
                                </div>
                            </div>
                            <ToggleSwitch enabled={integration.enabled} onChange={() => {}} />
                        </div>

                        <div className="space-y-4 pt-4 border-t border-dark-border">
                            {integration.settings.map(setting => (
                                <div key={setting.label}>
                                    <label className="text-xs font-semibold text-text-secondary">{setting.label}</label>
                                    <input 
                                        type={setting.type}
                                        readOnly
                                        value={setting.value}
                                        className="mt-1 block w-full bg-dark-bg/50 border border-dark-border rounded-md p-2 focus:outline-none font-mono"
                                    />
                                </div>
                            ))}
                        </div>
                         <div className="mt-6 flex justify-end space-x-3">
                             <button className="px-5 py-2 rounded-md text-sm font-semibold text-text-secondary hover:bg-dark-border transition-colors">
                                Test Connection
                            </button>
                             <button className="px-5 py-2 rounded-md text-sm font-semibold bg-secondary text-white hover:shadow-glow-primary transition-all duration-300">
                                Save Changes
                            </button>
                         </div>
                    </GlassCard>
                ))}
            </div>
        </div>
    );
};

export default IntegrationsPage;
