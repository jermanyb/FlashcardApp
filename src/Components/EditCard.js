import React, { useEffect, useState } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import { readCard, readDeck, updateCard } from "../utils/api/index";
import CardForm from "./CardForm";

function EditCard() {
  const history = useHistory();
  const { deckId, cardId } = useParams();

  const [card, setCard] = useState({ front: "", back: "" });
  const [deck, setDeck] = useState({ cards: [] });

  useEffect(() => {
    readDeck(deckId).then(setDeck);
    readCard(cardId).then(setCard);
  }, [deckId, cardId]);

  function handleSubmit(card) {
    updateCard(card).then(doneHandler);
  }

  function doneHandler() {
    history.push(`/decks/${deck.id}`);
  }

  const child = card.id ? (
    <CardForm
      onSubmit={handleSubmit}
      onDone={doneHandler}
      deckName={deck.name}
      initialState={card}
      doneButtonLabel="Cancel"
    />
  ) : (
    <p>Loading...</p>
  );

  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">
              <span className="oi oi-home" /> Home
            </Link>
          </li>
          <li className="breadcrumb-item">
            <Link to={`/decks/${deckId}`}>Deck {deck.name}</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Edit Card {cardId}
          </li>
        </ol>
      </nav>
      <h2>Edit Card</h2>
      {child}
    </div>
  );
}
export default EditCard;


// The Edit Card screen has the following features:

// The path to this screen should include the deckId and the cardId (i.e., /decks/:deckId/cards/:cardId/edit).
// There is a breadcrumb navigation bar with a link to home /, followed by the name of the deck of which the edited card is a member, and finally the text Edit Card :cardId (e.g., Home/Deck React Router/Edit Card 4).
// It displays the same form as the Add Card screen, except it is pre-filled with information for the existing card. It can be edited and updated.
// If the user clicks on either "Save" or "Cancel", the user is taken to the Deck screen.
