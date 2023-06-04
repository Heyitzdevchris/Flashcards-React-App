import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { readDeck } from "../utils/api/index";

import DeckButtons from "./DeckButtons";

function DeckView() {
  const { deckId } = useParams();
  const [flashDeck, setFlashDeck] = useState([]);
  const { id, name, description } = flashDeck;

  useEffect(() => {
    async function getFLashDeck(deckId) {
      const flashDeckFromAPI = await readDeck(deckId);
      console.log(`getting deck ${deckId}`, flashDeckFromAPI);
      setFlashDeck(flashDeckFromAPI);
    }
    getFLashDeck(deckId);
  }, [setFlashDeck]);

  return (
    <div className="card" key={id}>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <DeckButtons id={id} />
      </div>
    </div>
  );
}

export default DeckView;