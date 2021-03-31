import React from "react";
import { Link } from "react-router-dom";

const AddingCard = ({deck}) => {
  if(!deck) return null;

  return (
    <div>
      <Link to={`/decks/${deck.id}/cards/new`} className="btn btn-primary">
        + Add Cards
      </Link>
    </div>
  );
};

export default AddingCard;