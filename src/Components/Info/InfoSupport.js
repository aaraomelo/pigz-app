import React from 'react';
import Info from '.';
import SVG from '../SVG';

export default function InfoSupport({ }) {
  return (
    <Info className='info-support'>
      <h1 className='info-support-title'>
        E mais: suporte<br />que realmente<br />funciona!
      </h1>
      <p className='info-support-body'>
        Respostas automáticas e robôs? Aqui não. Nossa equipe está sempre disponível pra ajudar você e seus clientes.
      </p>
    </Info>
  );
}
