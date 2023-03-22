import React from 'react';
import './Img.css';

export default function Img({ className, src, ...rest }) {
  return <img
    className={`img ${className}`}
    src={`${process.env.REACT_APP_IMAGES_PATH}/${src}`}
    {...rest}
  />;
}
