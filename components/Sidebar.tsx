
import React from 'react';
import Icon from './Icon';

const menuItems = [
  { icon: 'monitor', label: 'Dashboard' },
  { icon: 'alert-triangle', label: 'Alerts' },
  { icon: 'clipboard-list', label: 'Incidents (Jira)' },
  { icon: 'automation', label: 'Playbooks' },
  { icon: 'analytics', label: 'Reports' },
  { icon: 'settings', label: 'Integrations' },
];

const Sidebar: React.FC = () => {
  return (
    <aside className="fixed top-0 left-0 h-full w-20 flex flex-col items-center py-6 bg-black/30 backdrop-blur-xl border-r-2 border-primary/20 z-30 transition-all duration-300">
      <div className="font-heading text-2xl font-bold text-primary">S</div>
      <nav className="flex flex-col items-center space-y-8 mt-20 flex-1">
        {menuItems.map((item, index) => (
          <a
            key={item.label}
            href="#"
            className={`p-3 rounded-lg transition-all duration-300 ${
              index === 1
                ? 'bg-primary/20 text-primary shadow-glow-primary'
                : 'text-text-secondary hover:bg-primary/10 hover:text-primary'
            }`}
            title={item.label}
          >
            <Icon name={item.icon as any} className="w-6 h-6" />
          </a>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
