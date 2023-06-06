import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { readDeck } from "../utils/api/index";

import DeckButtons from "./DeckButtons";
import CardList from "../Cards/CardList";

function DeckView() {
  const { deckId } = useParams();
  const [flashDeck, setFlashDeck] = useState([]);
  const { id, name, description, cards } = flashDeck;

  useEffect(() => {
    async function getFLashDeck() {
      const flashDeckFromAPI = await readDeck(deckId);
      console.log(`getting deck ${deckId}`, flashDeckFromAPI);
      setFlashDeck(flashDeckFromAPI);
    }
    getFLashDeck();
  }, [deckId]);

  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {name}
          </li>
        </ol>
      </nav>
      <div className="mb-4" key={id}>
        <h5>{name}</h5>
        <p>{description}</p>
        <DeckButtons id={id} />
      </div>
      <CardList cards={cards}/>
    </div>
  );
}

export default DeckView;