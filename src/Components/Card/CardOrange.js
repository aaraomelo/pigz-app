import React from 'react';
import IMG from '../IMG';

export default function CardOrange({ title, body, image }) {
  return (
    <div className='card card-orange'>
      <header className='card-header card-orange-header'>
        <h2 className='card-header-title card-orange-header-title'>
          {title}
        </h2>
      </header>
      <div className='card-body card-orange-body'>
        <p className='card-body-content card-orange-body-content'>
          {body}
        </p>
        <IMG
          className='card-body-image card-orange-body-image'
          src={image}
          alt={`${title} Pigz - OrangeLabs`}
        />
      </div>
    </div >
  );
}
