import React from "react";
import { Link, useParams } from "react-router-dom";

function CardButtons({ id, handleDelete }) {
  const { deckId } = useParams();

  let buttonEdit = (
    <Link to={`/decks/${deckId}/cards/${id}/edit`}>
      <button type="button" className="btn btn-sm btn-secondary mr-2">
        Edit
      </button>
    </Link>
  );

  return (
    <div className="btn-group" role="group" aria-label="Card Buttons group">
      {buttonEdit}
      <button
        type="button"
        onClick={() => handleDelete(id)}
        className="btn btn-sm btn-danger"
      >
        Delete
      </button>
    </div>
  );
}

export default CardButtons;