import React from 'react';
import './createDeck.css';

const CreateDeck = (props) => {
   return (
      <div className='create-deck'>
         <form onSubmit={(event) => { props.handleSaveDeckClick(event) }}>
            <input type="text" name="title" onChange={props.handleDeckChange} value={props.newDeck.title} placeholder='Title' /><br />
            <input type="text" name="description" onChange={props.handleDeckChange} value={props.newDeck.description} placeholder='Description' /><br />
            <div className='button-save'>
               <div><input type="submit" name='save' value='Save' /></div>
            </div>
         </form>
      </div>
   )
}

export default CreateDeck;
