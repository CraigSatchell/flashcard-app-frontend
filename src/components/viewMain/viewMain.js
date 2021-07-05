import React from 'react';
import ViewDecks from '../decks/viewDecks/viewDecks';
import ViewCard from '../cards/viewCard/viewCard';
import './viewMain.css';
import { Grid } from '@material-ui/core';

const ViewMain = (props) => {
   return (
      <div className='view-main'>
         <Grid container spacing={10} justify='space-around'>
            <Grid item md={5}>
               <ViewDecks decks={props.decks}
                  handleAddDeckClick={props.handleAddDeckClick}
                  handleEditDeckClick={props.handleEditDeckClick}
                  handleSaveDeckClick={props.handleSaveDeckClick}
                  handleDeckChange={props.handleDeckChange}
                  selectedDeck={props.selectedDeck}
                  setSelectedDeck={props.setSelectedDeck}
               />
            </Grid>
            <Grid item md={7}>
               <ViewCard decks={props.decks}
                  handleEditCardClick={props.handleEditCardClick}
                  handleAddCardClick={props.handleAddCardClick}
                  handleDeleteClick={props.handleDeleteCardClick}
                  handlePrevCardClick={props.handlePrevCardClick}
                  handleNextCardClick={props.handleNextCardClick}
                  handleFlipCardClick={props.handleFlipCardClick}
                  handleSaveCardClick={props.handleSaveCardClick}
                  handleCardChange={props.handleCardChange}
                  cardCount={props.cardCount}
                  setCardCount={props.setCardCount}
                  currCardCount={props.currCardCount}
                  setCurrCardCount={props.setCurrCardCount}
                  selectedCard={props.selectedCard}
                  selectedDeck={props.selectedDeck}
                  setSelectedCard={props.setSelectedCard} />
            </Grid>
         </Grid>
      </div>
   )
}

export default ViewMain;
