import React from 'react';
import '../index.css';

const Card = ({ name, email, id, lname}) => {
  //Displays all the information in a card format
    return (
      <div className='tc grow bg-light-green br2 pa5 ma4 dib bw2 shadow-10'>
        <img alt='robots' src={`https://reqres.in/img/faces/${id}-image.jpg`} />
        <div>
		  <br />
          <h2>{name} {lname}</h2>
		  <br />
          <h3>{email}</h3>
        </div>
      </div>
    );
  }

export default Card;
