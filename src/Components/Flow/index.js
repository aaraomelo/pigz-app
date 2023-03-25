import React, { Children, Fragment } from 'react';
import { numberNames } from '../../utils';
import useStore from '../Hooks/useStore';
import './Flow.css';

export default function Flow({ children, className = '', pointer }) {
  const flow = useStore(pointer);
  const { state = 0 } = flow;
  const control = (index) => ({
    onClick: (e) => {
      e.preventDefault();
      flow[pointer] = {
        type: 'setFlowStep',
        payload: index,
      }
    }
  });
  return (
    <div className={`flow ${className}`}>
      <div className={`flow-pointers`}>
        {[...Array(children.length).keys()].map((index) => (
          <div
            key={index}
            className={`flow-pointer flow-pointer-${state === index ? 'active' : 'desactive'}`}
            {...control(index)}
          />
        ))}
      </div>
      <div className={`flow-frames`}>
        {Children.map(children, (child, index) => (
          state !== index ? <Fragment key={index} /> :
            <div
              key={index}
              className={`flow-frame flow-frame-${numberNames[index]}`}
            >
              {child}
            </div>
        ))}
      </div>
    </div>
  );
}
