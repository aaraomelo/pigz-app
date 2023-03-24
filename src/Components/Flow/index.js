import React, { Children, Fragment, useState } from 'react';
import './Flow.css';

export default function Flow({ children, className = '', pointer }) {
  const [currentFrame, setCurrentFrame] = useState(0);
  const target = (index) => index === currentFrame;
  return (
    <div className={`flow ${className}`}>
      <div className={`flow-pointers`}>
        {[...Array(children.length).keys()].map((index) => (
          <div
            key={index}
            className={`flow-pointer flow-pointer-${target(index) ? 'active' : 'desactive'}`}
            onClick={() => { setCurrentFrame(index) }}
          />
        ))}
      </div>
      <div className={`flow-frames`}>
        {Children.map(children, (child, index) => (
          !target(index) ? <Fragment key={index} /> :
            <div key={index} className={'flow-frame'}>
              {child}
            </div>
        ))}
      </div>
    </div>
  );
}
