import React from 'react';
import Info from '.';
import SVG from '../SVG';

export default function InfoContact({ }) {
  return (
    <Info className='info-contact'>
      <span className='info-contact-label'>Fale com a Pigz</span>
      <span className='info-contact-phone'>
        <SVG.Icon.Whatsapp />
        <span className='info-contact-phone-prefix'>95</span>
        <span className='info-contact-phone-number'>3224-2603</span>
      </span>
    </Info>
  );
}
