import React from 'react';
import Info from '.';

export default function InfoDisclaimer({ title, body }) {
  return (
    <Info className={`info-disclaimer`}>
      <h1 className={`info-disclaimer-title`}>
        {title}
      </h1>
      <p className={`info-disclaimer-body`}>
        {body}
      </p>
    </Info>
  );
}
