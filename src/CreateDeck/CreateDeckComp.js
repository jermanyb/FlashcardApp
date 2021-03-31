import React from "react";
import { useHistory, Link } from "react-router-dom";
import DeckForm from "../Components/DeckForm";
import { createDeck } from "../utils/api";

function CreateDeckComp() {
  const history = useHistory();

  function submitHandler(deck) {
    createDeck(deck).then((savedDeck) =>
      history.push(`/decks/${savedDeck.id}`)
    );
  }
  function cancel() {
    history.goBack();
  }
  return (
    <div>
      <div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Create Deck
            </li>
          </ol>
        </nav>
      </div>
      <h2>Create Deck</h2>
      <DeckForm
        idType="cancelcreate"
        onCancel={cancel}
        onSubmit={submitHandler}
      />
    </div>
  );
}
export default CreateDeckComp;




// The Create Deck screen has the following features:

// The path to this screen should be /decks/new.
// There is a breadcrumb navigation bar with a link to home / followed by the text Create Deck (i.e., Home/Create Deck).
// A form is shown with the appropriate fields for creating a new deck.
// The name field is an <input> field of type text.
// The description field is a <textarea> field that can be multiple lines of text.
// If the user clicks "submit", the user is taken to the Deck screen.
// If the user clicks "cancel", the user is taken to the Home screen.



// The Deck screen has the following features:

// The path to this screen should include the deckId (i.e., /decks/:deckId).
// There is a breadcrumb navigation bar with a link to home / followed by the name of the deck (e.g., Home/React Router).
// The screen includes the deck name (e.g., "React Router") and deck description (e.g., "React Router is a collection of navigational components that compose declaratively in your application").
// The screen includes "Edit", "Study", "Add Cards", and "Delete" buttons. Each button takes the user to a different destination, as follows:

// | Button Clicked | Destination |
// | -------------- | ---------------------------------------------------------------------------------------------- |
// | "Edit" | Edit Deck Screen |
// | "Study" | Study screen |
// | "Add Cards" | Add Card screen |
// | "Delete" | Shows a warning message before deleting the deck]( See the "Delete Card Prompt" section below) |

// Each card in the deck:

// is listed on the page under the "Cards" heading.
// shows a question and the answer to the question.
// has an “Edit” button that takes the user to the Edit Card screen when clicked.
// has a “Delete” button that allows that card to be deleted.
// Delete Card Prompt

// When the user clicks the "Delete" button associated with a card, a warning message is shown and the user can click "OK" or "Cancel". If the user clicks "OK", the card is deleted.

// You can use window.confirm() to create the modal dialog shown in the screenshot below.