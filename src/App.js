import React, { useState, useEffect } from 'react'
//import { Link, Switch, Route } from 'react-router-dom';
import { Container, Grid } from '@material-ui/core';
import Header from './components/pagelayout/header/header';
import Footer from './components/pagelayout/footer/footer';
import ViewMain from './components/viewMain/viewMain';
import './App.css';
import axios from 'axios';



const App = () => {
   /******************************
    *  Hooks
   ******************************/

   // State variables
   const [decks, setDecks] = useState(null);
   const [cardCount, setCardCount] = useState(0);
   const [currCardCount, setCurrCardCount] = useState(0);
   const [selectedCard, setSelectedCard] = useState(null);
   const [selectedDeck, setSelectedDeck] = useState(null);

   // Use effect
   useEffect(() => {
      getAllCardDecks();
   }
      , []);


   /******************************
    *  API routes
   ******************************/
   const apiPath = 'http://localhost:5000/api/carddecks';

   const getAllCardDecks = () => {
      axios.get(apiPath).then((res) => { setDecks(res.data) }).catch((err) => console.log(err));
   }

   /*
   // get card decks by id
   const getCardDeckById = (deckId) => {
      return axios.get(`${apiPath}/${deckId}`).then((res) => (res.data)).catch((err) => console.log(err));
   }

   // add new card deck
   const addCardDeck = (data) => {
      return axios.post(`${apiPath}`, data).then((res) => (res.data)).catch((err) => console.log(err));
   }


   // Get flashcard collection by cardDeck id
   const getFlashCardArray = (deckId) => {
      return axios.get(`${apiPath}/${deckId}/cards`).then((res) => (res.data)).catch((err) => console.log(err));
   }


   // Get flashcard collection by cardDeck & flashCard id
   const getFlashCardById = (deckId, cardId) => {
      return axios.get(`${apiPath}/${deckId}/cards/${cardId}`).then((res) => (res.data)).catch((err) => console.log(err));
   }


   // Add flashcard to deck
   const addFlashCard2Deck = (deckId, data) => {
      return axios.post(`${apiPath}/${deckId}/cards`, data).then((res) => (res.data)).catch((err) => console.log(err));
   }

   // Update flashcard
   const updateFlashCard = (deckId, cardId, data) => {
      return axios.put(`${apiPath}/${deckId}/cards/${cardId}`, data).then((res) => (res.data)).catch((err) => console.log(err));
   }
*/
   /******************************
    *  Event handlers
   ******************************/
   const handleEditCardClick = () => {

   }

   const handleAddCardClick = () => {

   }

   const handleDeleteCardClick = () => {

   }

   const handlePrevCardClick = () => {

   }

   const handleNextCardClick = () => {

   }

   const handleFlipCardClick = () => {

   }

   const handleSaveCardClick = (event) => {
      event.preventDefault();
   }

   const handleAddDeckClick = () => {

   }

   const handleEditDeckClick = () => {

   }


   const handleSaveDeckClick = () => {

   }

   const handleCardChange = () => {

   }

   const handleDeckChange = () => {

   }

   /******************************
    *  State modifiers
   ******************************/

   console.log(decks);

   return (
      <div id="wrapper">
         <Header />
         <Container maxWidth='lg'>
            <div id="contents">
               <Grid container spacing={2} justify='space-around' alignItems='center'>
                  {decks == null ? <p>Loading...</p> : <ViewMain decks={decks}
                     handleEditCardClick={handleEditCardClick}
                     handleAddCardClick={handleAddCardClick}
                     handleDeleteClick={handleDeleteCardClick}
                     handlePrevCardClick={handlePrevCardClick}
                     handleNextCardClick={handleNextCardClick}
                     handleFlipCardClick={handleFlipCardClick}
                     handleSaveCardClick={handleSaveCardClick}
                     handleAddDeckClick={handleAddDeckClick}
                     handleEditDeckClick={handleEditDeckClick}
                     handleSaveDeckClick={handleSaveDeckClick}
                     handleDeckChange={handleDeckChange}
                     handleCardChange={handleCardChange}
                     cardCount={cardCount}
                     setCardCount={setCardCount}
                     currCardCardCount={currCardCount}
                     setCurrCardCount={setCurrCardCount}
                     selectedCard={selectedCard}
                     setSelectedCard={setSelectedCard}
                     selectedDeck={selectedDeck}
                     setSelectedDeck={setSelectedDeck}
                  />}
               </Grid>
            </div>
         </Container>
         <Footer />
      </div>
   )
}


export default App;