import React from 'react';
import ViewDecks from '../decks/viewDecks/viewDecks';
import ViewCard from '../cards/viewCard/viewCard';
import './viewMain.css';
import { Grid } from '@material-ui/core';

const ViewMain = (props) => {
   return (
      <div className='view-main'>
         <Grid container spacing={2} justify='space-around'>
            <Grid xs={5}>
               <ViewDecks decks={props.decks}
                  handleAddDeckClick={props.handleAddDeckClick}
                  handleEditDeckClick={props.handleEditDeckClick}
                  handleSaveDeckClick={props.handleSaveDeckClick}
               />
            </Grid>
            <Grid md={7}>
               <ViewCard decks={props.decks}
                  handleEditCardClick={props.handleEditCardClick}
                  handleAddCardClick={props.handleAddCardClick}
                  handleDeleteClick={props.handleDeleteCardClick}
                  handlePrevCardClick={props.handlePrevCardClick}
                  handleNextCardClick={props.handleNextCardClick}
                  handleFlipCardClick={props.handleFlipCardClick}
                  handleSaveCardClick={props.props.handleSaveCardClick}
                  cardCount={props.cardCount}
                  setCardCount={props.setCardCount}
                  currCardCardCount={props.currCardCount}
                  setCurrCardCount={props.setCurrCardCount}
                  selectedCard={props.selectedCard}
                  setSelectedCard={props.setSelectedCard} />
            </Grid>
         </Grid>
      </div>
   )
}

export default ViewMain;
