import React from 'react';
import './viewCard.css';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActions, CardContent, Typography } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
   card: {
      padding: theme.spacing(0),
      margin: 0,
      width: '100%',
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
                  FlashCard - {props.decks[0].title}
               </Typography>
               <Typography variant="h4" >

               </Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
               <div className='card-count'>{props.currCardCount + 1} of {props.cardCount}</div>
               <div className='edit-action'><a className='button' href='./'>Add</a>&nbsp;&nbsp;<a className='button' href='./'>Edit</a></div>
            </CardActions>
         </Card>
         <div className='card-actions'>
            <ul>
               <li>Prev</li>
               <li> | </li>
               <li>Flip</li>
               <li> | </li>
               <li>Next</li>
            </ul>
         </div>
      </div>
   )
}

export default ViewCard;
