import React from "react";
import { useParams, Link } from "react-router-dom";

function FormDeck() {
    const { deckId } = useParams();

    const placeHolder = <p>Edit Deck with id {deckId}</p>;

    const breadcrumb = (
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to={`/decks/${deckId}`}>Name of Deck {deckId}</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Edit Deck
            </li>
          </ol>
        </nav>
      );
    
    return (
        <div>
            {breadcrumb}
            {placeHolder}
        </div>
    );
}

export default FormDeck;