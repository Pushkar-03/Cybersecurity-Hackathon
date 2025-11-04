import React, { useState } from 'react';

interface ToggleSwitchProps {
  enabled: boolean;
  onChange: (enabled: boolean) => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ enabled, onChange }) => {
  const [isEnabled, setIsEnabled] = useState(enabled);

  const handleToggle = () => {
    const newState = !isEnabled;
    setIsEnabled(newState);
    onChange(newState);
  };


  return (
    <button
      onClick={handleToggle}
      className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark-bg-2 ${isEnabled ? 'bg-primary' : 'bg-gray-600'}`}
    >
      <span
        className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform duration-300 ${isEnabled ? 'translate-x-6' : 'translate-x-1'}`}
      />
    </button>
  );
};

export default ToggleSwitch;