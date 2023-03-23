import React, { Children, Fragment, useState } from 'react';
import './Carousel.css';

export default function Carousel({ children, className = '' }) {
  const [currentFrame, setCurrentFrame] = useState(0);
  const target = (index) => index === currentFrame;
  return (
    <div className={`carousel ${className}`}>
      <div className={`carousel-pointers`}>
        {[...Array(children.length).keys()].map((index) => (
          <div
            key={index}
            className={`carousel-pointer carousel-pointer-${target(index) ? 'active' : 'desactive'}`}
            onClick={() => { setCurrentFrame(index) }}
          />
        ))}
      </div>
      <div className={`carousel-frames`}>
        {Children.map(children, (child, index) => (
          !target(index) ? <Fragment key={index} /> :
            <div key={index} className={'carousel-frame'}>
              {child}
            </div>
        ))}
      </div>
    </div>
  );
}
