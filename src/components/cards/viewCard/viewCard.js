import React from 'react';
import './viewCard.css';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardActions, CardContent, Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
   card: {
      padding: theme.spacing(0),
      margin: 0,
      color: '#cccccc',
      backgroundColor: '#999999',
   },
   cardContent: {
      minHeight: '300px',
   },
   cardActions: {
      display: 'flex',
      float: 'right',
      marginBottom: theme.spacing(2),
      marginRight: theme.spacing(2),

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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit sapiente nobis facilis quae, dicta itaque praesentium minus reiciendis, corrupti .
               </Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
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
