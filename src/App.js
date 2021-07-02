import React from 'react'
import { Link, Switch, Route } from 'react-router-dom';
import { Container } from '@material-ui/core';
import Header from './components/pagelayout/header/header';
import Footer from './components/pagelayout/footer/footer';
import './App.css';


const App = () => {
   return (
      <div id="wrapper">
         <Header />
         <Container>
            <div id="contents">

            </div>
         </Container>
         <Footer />
      </div>
   )
}


export default App;