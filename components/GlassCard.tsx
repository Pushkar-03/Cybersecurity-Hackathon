
import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = '' }) => {
  return (
    <div
      className={`bg-dark-card border border-dark-border rounded-xl backdrop-blur-xl transition-all duration-300 hover:shadow-glow-primary hover:border-primary/50 ${className}`}
      style={{
        background: 'radial-gradient(circle at top left, rgba(255, 255, 255, 0.05), transparent), rgba(18, 18, 18, 0.5)',
        WebkitBackdropFilter: 'blur(24px)',
      }}
    >
      {children}
    </div>
  );
};

export default GlassCard;
