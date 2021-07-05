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
   const [decks, setDecks] = useState();
   const [cardCount, setCardCount] = useState(0);
   const [currCardCount, setCurrCardCount] = useState(0);
   const [selectedCard, setSelectedCard] = useState(0);
   const [selectedDeck, setSelectedDeck] = useState(0);



   /******************************
    *  API routes
    ******************************/
   const apiPath = 'http://localhost:5000/api/carddecks';


   const getAllCardDecks = () => {
      axios.get(apiPath).then((res) => { setDecks(res.data); setSelectedDeck(0); setCardCount(res.data[0].cards.length); setSelectedCard(res.data[0].cards[0] ? 0 : null) }).catch((err) => console.log(err));
   }

   // Use effect
   useEffect(() => {
      getAllCardDecks();
   }, []);

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
      alert('card edit');
   }

   const handleAddCardClick = () => {
      alert('card add');
   }

   const handleDeleteCardClick = () => {
      alert('card delete');
   }

   const handlePrevCardClick = () => {
      alert('card prev');
   }

   const handleNextCardClick = () => {
      alert('card next');
   }

   const handleFlipCardClick = () => {
      alert('card flip');
   }

   const handleSaveCardClick = (event) => {
      event.preventDefault();
   }

   const handleAddDeckClick = () => {
      alert('deck add')
   }

   const handleEditDeckClick = (id) => {
      alert('deck edit: ' + id)
   }


   const handleSaveDeckClick = () => {

   }

   const handleCardChange = () => {

   }

   const handleDeckChange = () => {

   }

   const handleSwitchDecks = (index) => {
      setSelectedDeck(index);
      setSelectedCard(0);
   }


   /******************************
    *  State modifiers
   ******************************/

   console.log(decks);
   // console.log(selectedDeck);
   // console.log('count:', currCardCount, cardCount);

   return (
      <div id="wrapper">
         <Header />
         <Container maxWidth='lg'>
            <div id="contents">
               <Grid container spacing={2} justify='space-around' alignItems='center'>
                  {decks ? <ViewMain decks={decks}
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
                     handleSwitchDecks={handleSwitchDecks}
                     cardCount={cardCount}
                     setCardCount={setCardCount}
                     currCardCount={currCardCount}
                     setCurrCardCount={setCurrCardCount}
                     selectedCard={selectedCard}
                     setSelectedCard={setSelectedCard}
                     selectedDeck={selectedDeck}
                     setSelectedDeck={setSelectedDeck}
                  /> : <p>Loading...</p>}
               </Grid>
            </div>
         </Container>
         <Footer />
      </div>
   )
}


export default App;