import React from 'react';
import './viewDecks.css';

const ViewDecks = (props) => {
   const deckList = props.decks.map((deck, index) => (<li key={deck._id} onClick={() => { props.handleSwitchDecks(index)}}><button className='deck-edit' onClick={()=>{props.handleEditDeckClick(deck._id)}}>Edit</button>&nbsp;&nbsp;{deck.title}</li>));
   return (
      <div className='view-decks'>
         <h2>Card Decks</h2>
         <ul>
            {deckList}
         </ul>
      </div>
   )
}

export default ViewDecks;
