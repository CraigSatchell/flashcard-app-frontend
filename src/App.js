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
   const [decks, setDecks] = useState([]);
   const [cardCount, setCardCount] = useState(0);
   const [currCardCount, setCurrCardCount] = useState(0);
   const [selectedCard, setSelectedCard] = useState(0);
   const [selectedDeck, setSelectedDeck] = useState(0);
   const [showCardBack, setShowCardBack] = useState(false);
   const [cardAction, setCardAction] = useState('view');
   const [newCard, setNewCard] = useState({ cardFront: '', cardBack: '' })



   /******************************
    *  API routes
    ******************************/
   const apiPath = 'http://localhost:5000/api/carddecks';


   const getAllCardDecks = () => {
      axios.get(apiPath).then((res) => { setDecks(res.data); }).catch((err) => console.log(err));
   }

   // Add flashcard to deck
   const addFlashCard2Deck = (deckId, data) => {
      return axios.post(`${apiPath}/${deckId}/cards`, data).then((res) => (res.data)).catch((err) => console.log(err));
   }


   // Update flashcard
   const updateFlashCard = (deckId, cardId, data) => {
      return axios.put(`${apiPath}/${deckId}/cards/${cardId}`, data).then((res) => (res.data)).catch((err) => console.log(err));
   }


   // Use effect
   useEffect(() => {
      getAllCardDecks();
   }, []);

   useEffect(() => {
      if (decks.length > 0) {
         setSelectedDeck(selectedDeck);
         setCardCount(decks[selectedDeck].cards.length);
      }
   }, [selectedDeck, decks])



   // // add new card deck
   // const addCardDeck = (data) => {
   //    return axios.post(`${apiPath}`, data).then((res) => (res.data)).catch((err) => console.log(err));
   // }



   /******************************
    *  Event handlers
   ******************************/
   const handleEditCardClick = () => {
      alert('card edit');
   }

   const handleAddCardClick = () => {
      setCardAction('add');
   }

   const handleDeleteCardClick = () => {
      alert('card delete');
   }

   const handlePrevCardClick = () => {
      if (selectedCard > 0) {
         setSelectedCard(selectedCard - 1);
      }
   }

   const handleNextCardClick = () => {
      if (selectedCard < cardCount - 1) {
         setSelectedCard(selectedCard + 1);
      }

   }

   const handleFlipCardClick = () => {

      if (!showCardBack) {
         setShowCardBack(true);
         document.getElementById("flashcard").style.backgroundColor = '#333333';
      } else {
         setShowCardBack(false);
         document.getElementById("flashcard").style.backgroundColor = '#999999';
      }
   }


   const handleSaveCardClick = (event) => {
      //event.preventDefault();
      console.log(event.currentTarget.value)
      alert('wait')
      if (event.target.value === 'Save') {
         try {
            addFlashCard2Deck(decks[selectedDeck]._id, newCard);
            console.log(decks[selectedDeck])
            console.log(newCard);
            alert('save card');
         } catch (error) {
            console.log(error);
         } finally {

         }
      }

   }

   const handleCardChange = (event) => {
      event.persist();
      setNewCard(prevNewCard => ({ ...prevNewCard, [event.target.name]: event.target.value }));
   }

   const handleAddDeckClick = () => {
      alert('deck add')
   }


   const handleEditDeckClick = (id) => {
      alert('deck edit: ' + id)
   }


   const handleSaveDeckClick = () => {

   }


   const handleDeckChange = (event) => {

   }

   const handleSwitchDecks = (index) => {
      setSelectedDeck(index);
      setCardCount(decks[index].cards.length);
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
                  {decks.length > 0 ? <ViewMain decks={decks}
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
                     showCardBack={showCardBack}
                     setShowCardBack={setShowCardBack}
                     cardAction={cardAction}
                     setCardAction={setCardAction}
                     newCard={newCard}
                     setNewCard={setNewCard}
                  /> : <p>Loading...</p>}
               </Grid>
            </div>
         </Container>
         <Footer />
      </div>
   )
}


export default App;