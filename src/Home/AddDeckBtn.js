import React from "react";
import { Link } from "react-router-dom";

const AddDeckBtn = () => {
  return (
    <div>
      <Link to="/decks/new" className="btn btn-secondary btn-lg mb-2">
        + Create Deck
      </Link>
    </div>
  );
};

export default AddDeckBtn;