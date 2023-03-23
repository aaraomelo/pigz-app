import React from 'react';
import './IMG.css';

export default function IMG({ className, src, alt = 'pigz', ...rest }) {
  return (
    <img
      className={`img ${className}`}
      src={`${process.env.REACT_APP_IMAGES_PATH}/${src}`}
      alt={alt}
      {...rest}
    />
  );
}
