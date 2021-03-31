import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useParams } from "react-router-dom";
import { readDeck } from "../utils/api/index";
import StudyNav from "./StudyNav";
import AddingCard from "../DeckScreen/AddingCard";

const StudyScreen = () => {
  const [deck, setDeck] = useState({});
  const [cardIndex, setCardIndex] = useState(0);
  const [frontSide, setFrontSide] = useState(true);
  const { deckId } = useParams();
  const history = useHistory();

  useEffect(() => {
    const abortController = new AbortController();
    readDeck(deckId, abortController.signal).then(setDeck);
    return () => abortController.abort();
  }, [deckId]);
  if (Object.keys(deck).length === 0) return null;
  if (!deck.cards) {
    return null;
  }
  const NotEnoughMessage = (
    <div>
      <StudyNav deck={deck} />
      <h3>Not enough cards.</h3>
      <p>
        You need at least 3 cards to study. There are {deck.cards.length} in
        this deck.
      </p>
      <AddingCard deck={deck} />
    </div>
  );
  const handleFlip = (event) => {
    setFrontSide(!frontSide);
  };
  const handleNext = (event) => {
    if (cardIndex < deck.cards.length - 1) {
      setCardIndex(cardIndex + 1);
    } else {
      if (
        window.confirm(
          `Restart cards?\n\nClick 'cancel' to return to the home page.`
        )
      ) {
        setCardIndex(0);
      } else {
        history.push("/");
      }
    }
    setFrontSide(true);
  };
  const renderNextBtn = () => {
    if (frontSide === false) {
      return (
        <button onClick={handleNext} id="next" className="btn btn-primary">
          Next
        </button>
      );
    } else {
      return null;
    }
  };
  if (deck.cards.length < 3) {
    return NotEnoughMessage;
  } else if (deck.cards.length >= 3) {
    return (
      <div>
        <StudyNav deck={deck} />
        <div className="card mb-1">
          <div className="card-body">
            <div className="d-flex w-100">
              <h5 className="card-title">
                Card {cardIndex + 1} of {deck.cards.length}
              </h5>
            </div>
            {frontSide === true ? (
              <p className="card-text">{deck.cards[cardIndex].front}</p>
            ) : (
              <p className="card-text">{deck.cards[cardIndex].back}</p>
            )}
            <div className="btn-toolbar ">
              <div className="btn-group">
                <button
                  onClick={handleFlip}
                  id="flip"
                  className="btn btn-secondary"
                >
                  Flip
                </button>
                {renderNextBtn()}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default StudyScreen;

// The Study screen has the following features:

// The path to this screen should include the deckId (i.e., /decks/:deckId/study).
// There is a breadcrumb navigation bar with links to home /, followed by the name of the deck being studied and finally the text Study (e.g., Home/Rendering In React/Study).
// The deck title (i.e., "Study: Rendering in React" ) is shown on the screen.
// Cards are shown one at a time, front-side first.
// A button at the bottom of each card "flips" it to the other side.
// After flipping the card, the screen shows a next button (see the "Next button" section below) to continue to the next card.
// After the final card in the deck has been shown, a message (see the "Restart prompt" section below) is shown offering the user the opportunity to restart the deck.
// If the user does not restart the deck, they should return to the home screen.
// Studying a deck with two or fewer cards should display a "Not enough cards" message (see the "Not enough cards" section below) and a button to add cards to the deck.
// Next button

// The next button appears after the card is flipped.

// Restart prompt

// When all cards are finished, a message is shown and the user is offered the opportunity to restart the deck. If the user does not restart the deck, they return to the home screen.

// You can use window.confirm() to create the modal dialog shown in the screenshot below.



// Not enough cards

// Studying a Deck with two or fewer cards should display a "Not enough cards" message and a button to add cards to the deck.


// Clicking the "Add Cards" button should take the user to the Add Card screen.

// Create Deck

// The Home screen has a "Create Deck" button that brings the user to the Create Deck screen.