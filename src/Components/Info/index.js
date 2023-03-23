import React from 'react';
import InfoContact from './InfoContact';
import './Info.css';
import InfoDisclaimer from './InfoDisclaimer';

export default Object.assign(({ children, className = '' }) => (
  <div className={`info ${className}`}>
    {children}
  </div>
), {
  Contact: InfoContact,
  Disclaimer: InfoDisclaimer,
});
