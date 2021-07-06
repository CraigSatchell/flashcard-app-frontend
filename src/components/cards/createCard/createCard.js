import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Card, CardContent } from '@material-ui/core';
import './createCard.css';

const useStyles = makeStyles((theme) => ({
   card: {
      padding: theme.spacing(0),
      margin: 0,
      color: 'var(--pri-text-color)',
      backgroundColor: '#999999',
   },
   cardContent: {
      minHeight: '300px',

   },
   cardActions: {
      display: 'flex',
      marginBottom: theme.spacing(2),
      marginRight: theme.spacing(2),
      justifyContent: 'space-between',
   }
}));
const CreateCard = (props) => {
   const classes = useStyles();
   return (
      <div className='create-card'>
         <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
               <Typography gutterBottom variant="h5" component="h2">
                  <div>FlashCard - {props.decks[props.selectedDeck].title}</div>
               </Typography>
               <Typography variant="h4" >
                  <form action="">
                     <input type="text" name="term" value='' placeholder='Term' />
                     <input type="text" name="definition" value='' placeholder='Definition' />
                     <input type="submit" name='save' value='Save' />
                  </form>
               </Typography>
            </CardContent>
         </Card>
      </div>
   )
}

export default CreateCard;


