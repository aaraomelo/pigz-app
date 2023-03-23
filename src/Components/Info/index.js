import React from 'react';
import InfoContact from './InfoContact';
import InfoSupport from './InfoSupport';
import './Info.css';

export default Object.assign(({ children, className = '' }) => (
  <div className={`info ${className}`}>
    {children}
  </div>
), {
  Contact: InfoContact,
  Support: InfoSupport,
});
