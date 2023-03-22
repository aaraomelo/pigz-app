import React from 'react';
import Img from '../Img';

export default function CardOrange({ title, body, image }) {
  return (
    <div className='card card-orange'>
      <header className='card-header card-orange-header'>
        <h2 className='card-header-title card-orange-header-title'>
          {title}
        </h2>
      </header>
      <div className='card-body card-orange-body'>
        <Img
          className='card-body-image card-orange-body-image'
          src={image}
          alt={title}
        />
        <p className='card-body-content card-orange-body-content'>
          {body}
        </p>
      </div>
    </div >
  );
}
