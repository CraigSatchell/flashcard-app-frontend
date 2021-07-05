import React from 'react';
import './viewCard.css';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActions, CardContent, Typography } from '@material-ui/core';



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

const ViewCard = (props) => {
   const classes = useStyles();
   return (
      <div className='view-card'>
         <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
               <Typography gutterBottom variant="h5" component="h2">
                  <div>FlashCard - {props.decks[props.selectedDeck].title}</div>
               </Typography>
               <Typography variant="h4" >
                  {props.decks[props.selectedDeck].cards.length !== 0 ? <div>{props.decks[props.selectedDeck].cards[props.selectedCard].cardFront}</div> : <div></div>}
               </Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
               {props.decks[props.selectedDeck].cards.length !== 0 ? <div className='card-count'>{props.selectedCard + 1} of {props.cardCount}</div> : ''}
               <div className='edit-action'><div className='button' onClick={props.handleAddCardClick}>Add</div>&nbsp;&nbsp;{props.decks[props.selectedDeck].cards.length !== 0 ? <div className='button' onClick={props.handleEditCardClick}>Edit</div> : ''}</div>
            </CardActions>
         </Card>
         <div className='card-actions'>
            <ul>
               <li onClick={props.handlePrevCardClick}>Prev</li>
               <li> | </li>
               <li onClick={props.handleFlipCardClick}>Flip</li>
               <li> | </li>
               <li onClick={props.handleNextCardClick}>Next</li>
            </ul>
         </div>
      </div>
   )
}

export default ViewCard;
