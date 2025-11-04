
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
  // FIX: Cast SvgIcon to `React.ReactElement<any>` to fix a type error where `className`
  // could not be passed to `cloneElement` because the props type was inferred as `unknown`.
  return React.cloneElement(SvgIcon as React.ReactElement<any>, { className });
};

export default Icon;
