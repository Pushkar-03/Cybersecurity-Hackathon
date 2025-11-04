
import React from 'react';
import { ICONS } from '../constants';

interface IconProps {
  name: keyof typeof ICONS;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ name, className }) => {
  const SvgIcon = ICONS[name];
  if (!SvgIcon) {
    return null; 
  }
  return React.cloneElement(SvgIcon, { className });
};

export default Icon;
