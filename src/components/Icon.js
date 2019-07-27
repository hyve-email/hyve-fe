import React from 'react';
import HyveLogo from '../assets/hyve-logo.png';
import Dashboard from './Dashboard/Dashboard';

const Icon = ({ icon, alt, size }) => {
  return <img height={size} width={size} src={icon} alt={alt} />;
};

Dashboard.defaultProps = {
  icon: HyveLogo,
  alt: 'hyve logo',
  size: 5,
};

export default Icon;
