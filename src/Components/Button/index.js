import React from 'react';
import './Button.css';

export default function Button({ children, className, ...rest }) {
  return <button className={`button ${className}`} {...rest}>{children}</button>;
}
