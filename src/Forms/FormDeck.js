import React from "react";
import { useParams, Link } from "react-router-dom";

function FormDeck() {
    const { deckId } = useParams();

    const placeHolder = <p>Edit Deck with id {deckId}</p>;
    
    return (
        <div>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li class="breadcrumb-item">
                        <Link to={`/decks/${deckId}`}>Name of Deck {deckId}</Link>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                        Edit Page
                    </li>
                </ol>
            </nav>
            {placeHolder}
        </div>
    );
}

export default FormDeck;