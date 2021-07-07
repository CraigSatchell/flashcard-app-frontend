import React from 'react';
import './viewDecks.css';

const ViewDecks = (props) => {
   const deckList = props.decks.map((deck, index) => (props.selectedDeck === index ?
      <li className='active-deck' key={deck._id} onClick={() => { props.handleSwitchDecks(index) }}>{deck.title}</li> :

      <li key={deck._id} onClick={() => { props.handleSwitchDecks(index) }}>{deck.title}</li>));

   // const deckList = props.decks.map((deck, index) => (props.selectedDeck === index ?
   //    <li className='active-deck' key={deck._id} onClick={() => { props.handleSwitchDecks(index) }}><button className='deck-edit' onClick={() => { props.handleEditDeckClick(deck._id) }}>Edit</button>&nbsp;&nbsp;{deck.title}</li> :

   //    <li key={deck._id} onClick={() => { props.handleSwitchDecks(index) }}><button className='deck-edit' onClick={() => { props.handleEditDeckClick(deck._id) }}>Edit</button>&nbsp;&nbsp;{deck.title}</li>));

   return (
      <div className='view-decks'>
         <h2>Card Decks</h2>
         <ul>
            {deckList}
         </ul>
         <div>
            <button>Create New Deck</button>
         </div>
      </div>
   )
}

export default ViewDecks;
