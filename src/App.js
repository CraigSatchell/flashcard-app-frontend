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
   const [newCard, setNewCard] = useState({ cardFront: '', cardBack: ''});
   const [newDeck, setNewDeck] = useState({ title: '', description: '', cards: [] });
   const [showCreateDeck, setShowCreateDeck] = useState(false);



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


   // // Update flashcard
   // const updateFlashCard = (deckId, cardId, data) => {
   //    return axios.put(`${apiPath}/${deckId}/cards/${cardId}`, data).then((res) => (res.data)).catch((err) => console.log(err));
   // }


   // add new card deck
   const addCardDeck = (data) => {
      return axios.post(`${apiPath}`, data).then((res) => (res.data)).catch((err) => console.log(err));
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
   }, [selectedDeck, decks]);





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
         setShowCardBack(false);
         document.getElementById("flashcard").style.backgroundColor = '#999999';
      } else {
         setSelectedCard(cardCount - 1);
      }
   }

   const handleNextCardClick = () => {
      if (selectedCard < cardCount - 1) {
         setSelectedCard(selectedCard + 1);
         setShowCardBack(false);
         document.getElementById("flashcard").style.backgroundColor = '#999999';
      } else {
         setSelectedCard(0);
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
      try {
         console.log(newCard);
         alert('add card');
         addFlashCard2Deck(decks[selectedDeck]._id, newCard);
         console.log(decks[selectedDeck])
      } catch (error) {
         console.log(error);
      } 
   }


   const handleSaveDeckClick = (event) => {
      event.preventDefault();
      console.log('newDeck:', newDeck);
      alert('deck add');
      try {
         addCardDeck(newDeck);
      } catch (error) {
         console.log(error);
      }
      setShowCreateDeck(false); // hide CreateDeck component
   }


   const handleCardChange = (event) => {
      event.persist();
      setNewCard(prevNewCard => ({ ...prevNewCard, [event.target.name]: event.target.value }));
   }

   const handleCreateDeckClick = (event) => {
      setShowCreateDeck(true); //show CreateDeck component
   }


   const handleEditDeckClick = (id) => {
      alert('deck edit: ' + id)
   }


   const handleDeckChange = (event) => {
      event.persist();
      setNewDeck(prevNewDeck => ({ ...prevNewDeck, [event.target.name]: event.target.value }));
   }

   const handleSwitchDecks = (index) => {
      setCardAction('view');    // show ViewCard componeent, if not visible
      setShowCreateDeck(false);  // hide CreateDeck component, if visible
      setSelectedDeck(index);
      setCardCount(decks[index].cards.length);
      setSelectedCard(0);
   }

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
                     handleCreateDeckClick={handleCreateDeckClick}
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
                     newDeck={newDeck}
                     showCreateDeck={showCreateDeck}
                     setShowCreateDeck={setShowCreateDeck}
                  /> : <p>Loading...</p>}
               </Grid>
            </div>
         </Container>
         <Footer />
      </div>
   )
}


export default App;