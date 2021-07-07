import React from 'react';
import ViewDecks from '../decks/viewDecks/viewDecks';
import ViewCard from '../cards/viewCard/viewCard';
import CreateCard from '../cards/createCard/createCard';
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
                  handleSwitchDecks={props.handleSwitchDecks}
                  selectedDeck={props.selectedDeck}
                  setSelectedDeck={props.setSelectedDeck}
               />
            </Grid>
            <Grid item md={7}>
               {props.cardAction === 'view' && props.selectedCard != null ?
                  <ViewCard decks={props.decks}
                     handleEditCardClick={props.handleEditCardClick}
                     handleAddCardClick={props.handleAddCardClick}
                     handleDeleteClick={props.handleDeleteCardClick}
                     handlePrevCardClick={props.handlePrevCardClick}
                     handleNextCardClick={props.handleNextCardClick}
                     handleFlipCardClick={props.handleFlipCardClick}
                     handleSaveCardClick={props.handleSaveCardClick}
                     cardCount={props.cardCount}
                     setCardCount={props.setCardCount}
                     currCardCount={props.currCardCount}
                     setCurrCardCount={props.setCurrCardCount}
                     selectedCard={props.selectedCard}
                     selectedDeck={props.selectedDeck}
                     setSelectedCard={props.setSelectedCard}
                     showCardBack={props.showCardBack}
                     setShowCardBack={props.setShowCardBack} /> : ''}

               {props.cardAction === 'add' ? <CreateCard decks={props.decks}
                  selectedDeck={props.selectedDeck}
                  handleSaveCardClick={props.handleSaveCardClick}
                  handleCardChange={props.handleCardChange}
                  newCard={props.newCard}


 /> : ''}

            </Grid>
         </Grid>
      </div>
   )
}

export default ViewMain;
