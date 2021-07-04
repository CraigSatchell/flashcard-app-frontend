import React from 'react';
import ViewDecks from '../decks/viewDecks/viewDecks';
import ViewCard from '../cards/viewCard/viewCard';
import './viewMain.css';
import { Grid } from '@material-ui/core';

const ViewMain = (props) => {
   return (
      <div>
         <Grid container spacing={2} justify='space-around'>
            <Grid xs={5}>
               <ViewDecks decks={props.decks} />
            </Grid>
            <Grid md={7}>
              <ViewCard decks={props.decks} />
            </Grid>
         </Grid>
      </div>
   )
}

export default ViewMain;
