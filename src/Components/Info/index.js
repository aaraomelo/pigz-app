import React from 'react';
import InfoContact from './InfoContact';
import './Info.css';

export default Object.assign(({ children, className = '' }) => (
  <div className={`info ${className}`}>
    {children}
  </div>
), {
  Contact: InfoContact,
});
