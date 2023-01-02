import React from 'react';
import Card from '../Card/Card';
import './Tricks.css';

const Tricks = ({tricks}) => {

    const trickCards = tricks.map(trick => {
      return (
        <div className='trick-card' key={trick.id}>
            <Card
              stance={trick.stance}
              name={trick.name}
              obstacle={trick.obstacle}
              tutorial={trick.tutorial}
              key={trick.id}
            />
        </div>
      )
    })
    
    return (
      <div className='tricks-container'>
        {trickCards}
      </div>
    )
  }

export default Tricks;