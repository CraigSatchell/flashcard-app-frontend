import axios from 'axios';

// backend api routes
export const getAllCardDecks = () => {
   return axios.get('http://localhost:5000/api/carddecks/').then((res) => (res.data)).catch((err)=> console.log(err)) ;
}

export const getCardDeckById = (id) => {
   return axios.get(`http://localhost:5000/api/carddecks/${id}`).then((res) => (res.data)).catch((err)=> console.log(err)) ;
}