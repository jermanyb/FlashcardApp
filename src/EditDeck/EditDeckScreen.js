import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { readDeck, updateDeck } from "../utils/api";
import AddEditDeckForm from "../Components/DeckForm";

function EditDeckScreen() {
  const history = useHistory();
  const { deckId } = useParams();

  const [deck, setDeck] = useState({ name: "", description: "" });
  useEffect(() => {
    readDeck(deckId).then(setDeck);
  }, [deckId]);
  function submitHandler(deck) {
    updateDeck(updateDeck).then((savedDeck) =>
      history.push(`/decks/${savedDeck.id}`)
    );
  }
  function cancel() {
    history.goBack();
  }
  const child = deck.id ? (
    <AddEditDeckForm
      idType="canceledit"
      onCancel={cancel}
      onSubmit={submitHandler}
      initialState={deck}
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
            <Link to={`/decks/${deckId}`}>{deck.name}</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Edit Deck
          </li>
        </ol>
      </nav>
      <h1>Edit Deck</h1>
      {child}
    </div>
  );
}
export default EditDeckScreen;