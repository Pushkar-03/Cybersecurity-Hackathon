
import React from 'react';
import Icon from './Icon';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 bg-dark-bg-2/50 backdrop-blur-lg px-6 py-4 flex items-center justify-between z-20 border-b border-dark-border">
      <div className="flex items-center space-x-4">
        <button className="text-text-secondary hover:text-primary">
          <Icon name="menu" className="w-6 h-6" />
        </button>
        <div className="relative">
          <Icon name="search" className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" />
          <input
            type="text"
            placeholder="Global Search (Ctrl+K)"
            className="bg-dark-card border border-dark-border rounded-lg pl-10 pr-4 py-2 w-80 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
          />
        </div>
      </div>
      <div className="flex items-center space-x-6">
        <div className="bg-green-500/20 text-green-300 text-xs font-mono px-2 py-1 rounded">
          DEMO
        </div>
        <button className="relative text-text-secondary hover:text-primary transition-colors">
          <Icon name="bell" className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header;