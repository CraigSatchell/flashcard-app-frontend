import axios from 'axios';

// get all card decks
export const getAllCardDecks = () => {
   return axios.get('http://localhost:5000/api/carddecks/').then((res) => (res.data)).catch((err)=> console.log(err)) ;
}

// get card decks by id
export const getCardDeckById = (deckId) => {
   return axios.get(`http://localhost:5000/api/carddecks/${deckId}`).then((res) => (res.data)).catch((err)=> console.log(err)) ;
}

// add new card deck
export const addCardDeck = (data) => {
   return axios.post(`http://localhost:5000/api/carddecks`, data).then((res) => (res.data)).catch((err)=> console.log(err)) ;
}


// Get flashcard collection by cardDeck id
export const getFlashCardArray = (deckId) => {
   return axios.get(`http://localhost:5000/api/carddecks/${deckId}/cards`).then((res) => (res.data)).catch((err)=> console.log(err)) ;
}


// Get flashcard collection by cardDeck & flashCard id
export const getFlashCardById = (deckId, cardId) => {
   return axios.get(`http://localhost:5000/api/carddecks/${deckId}/cards/${cardId}`).then((res) => (res.data)).catch((err)=> console.log(err)) ;
}


// Add flashcard to deck
export const addFlashCard2Deck = (deckId, data) => {
   return axios.post(`http://localhost:5000/api/carddecks/${deckId}/cards`, data).then((res) => (res.data)).catch((err)=> console.log(err)) ;
}

// Update flashcard
export const updateFlashCard = (deckId, cardId, data) => {
   return axios.put(`http://localhost:5000/api/carddecks/${deckId}/cards/${cardId}`, data).then((res) => (res.data)).catch((err)=> console.log(err)) ;
}
