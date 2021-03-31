import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteDeck, listDecks } from "../utils/api";

function DecksList() {
  const [decks, setDecks] = useState([]);

  useEffect(loadDecks, []);
  function deleteHandler(deckId) {
    const confirmed = window.confirm(
      "Delete this deck?\n\nYou will not be able to recover it."
    );
    if (confirmed) {
      deleteDeck(deckId).then(loadDecks);
    }
  }

  function loadDecks() {
    listDecks().then(setDecks);
  }

  const listOfDecks = decks.map((deck) => (
    <li
      key={deck.id}
      className="list-group-item list-group-item-action flex-column align-items-start"
    >
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">{deck.name}</h5>
        <small>{deck.cards.length} cards</small>
      </div>
      <p className="mb-1">{deck.description}</p>
      <Link
        to={`/decks/${deck.id}`}
        className="btn btn-secondary mr-2"
        title="Edit deck"
      >
        <span className="oi oi-eye" /> View
      </Link>
      <Link
        to={`/decks/${deck.id}/study`}
        className="btn btn-primary"
        title="Study deck"
      >
        <span className="oi oi-book" /> Study
      </Link>
      <button
        className="btn btn-danger float-right"
        title="Delete deck"
        onClick={() => deleteHandler(deck.id)}
      >
        <span className="oi oi-trash" />
      </button>
    </li>
  ));

  return (
    <div>
      <Link to="/decks/new" className="btn btn-secondary">
        <span className="oi oi-plus" /> Create Deck
      </Link>
      <ul className="list-group mt-2 deck-list">{listOfDecks}</ul>
    </div>
  );
}
export default DecksList;


// The Home screen has the following features:

// The path to this screen should be /.
// A "Create Deck" button is shown and clicking it brings the user to the Create Deck screen.
// Existing decks are each shown with the deck name, the number of cards, and a “Study,” “View,” and “Delete” button.
// Clicking the “Study” button brings the user to the Study screen.
// Clicking the “Edit” button brings the user to the Edit Deck screen.
// Clicking the “Delete” button shows a warning message before deleting the deck.
// Delete Deck prompt

// When the user clicks the "Delete" button, a warning message is shown and the user can click "OK" or "Cancel". If the user clicks "OK", the deck is deleted and the deleted deck is no longer visible on the Home screen.

// You can use window.confirm() to create the modal dialog shown in the screenshot below.