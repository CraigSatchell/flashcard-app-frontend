import React from 'react';
import './viewDecks.css';

const ViewDecks = (props) => {
   const deckList = props.decks.map((deck) => (<li key={deck._id}>{deck.title}</li>));
   return (
      <div className='view-decks'>
         <h3>Card Decks</h3>
         <ul>
            {deckList}
         </ul>
      </div>
   )
}

export default ViewDecks;
