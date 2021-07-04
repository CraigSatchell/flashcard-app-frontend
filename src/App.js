import React, { useState, useEffect } from 'react'
//import { Link, Switch, Route } from 'react-router-dom';
import { Container } from '@material-ui/core';
import Header from './components/pagelayout/header/header';
import Footer from './components/pagelayout/footer/footer';
import ViewDecks from './components/decks/viewDecks/viewDecks';
import './App.css';
import axios from 'axios';



const App = () => {
   /******************************
    *  Hooks
   ******************************/

   // State variables
   const [decks, setDecks] = useState(null);

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
    *  State modifiers
   ******************************/

   console.log(decks);
   return (
      <div id="wrapper">
         <Header />
         <Container>
            <div id="contents">
               {decks == null ? "Loading..." : <ViewDecks decks={decks} />}
            </div>
         </Container>
         <Footer />
      </div>
   )
}


export default App;