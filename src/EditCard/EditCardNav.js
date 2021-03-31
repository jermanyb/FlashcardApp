import React from 'react'
import { Link } from "react-router-dom";

const EditCardNav = ({deck}) => {
    return (
        <div>
         <div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              Deck {deck.name}
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Edit Card {deck.card.id}
            </li>
          </ol>
        </nav>
      </div>
      <h2>Edit Card</h2>   
        </div>
    )
}

export default EditCardNav;


// The Edit Deck screen has the following features:

// The path to this screen should include the deckId(i.e., /decks/:deckId/edit).
// There is a breadcrumb navigation bar with a link to home /, followed by the name of the deck being edited, and finally the text Edit Deck (e.g., Home/Rendering in React/Edit Deck).
// It displays the same form as the Create Deck screen, except it is pre-filled with information for the existing deck. The user can edit and update the form.
// If the user clicks "Cancel", the user is taken to the Deck screen.
// Add Card

// The Add Card screen allows the user to add a new card to an existing deck.