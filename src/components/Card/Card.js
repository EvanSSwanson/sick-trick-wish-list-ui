import React from 'react';
import './Card.css';

const Card = ({stance, name, obstacle, tutorial, key}) => {
  return (
    <div className='card' id={key}>
          <h3>{name}</h3>
          <p>{'stance: ' + stance}</p>
          <p>{'obstacle: ' + obstacle}</p>
          <p>{'tutorial: ' + tutorial}</p>
        </div>
  )
}

export default Card;