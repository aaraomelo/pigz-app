import React from 'react';

export default function CardYellow({
  title,
  subtitle,
  body,
  price,
  button,
}) {
  return (
    <div className='card card-yellow'>
      <div className='card-title card-yellow-title'>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
      </div>
      <div className='card-body card-yellow-body'>
        <ul>
          {body.map((line, index) => <li key={index}>{line}</li>)}
        </ul>
      </div>
      <div className='card-price card-yellow-price'>
        {price}
      </div>
      <button className='button card-button card-yellow-button'>
        {button}
      </button>
    </div>
  );
}
