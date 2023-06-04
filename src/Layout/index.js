import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import { listDecks } from "../utils/api/index";

import Header from "./Header";
import NotFound from "./NotFound";
import DeckView from "../Decks/DeckView";
import Decks from "../Decks/Decks";
import CardList from "../Cards/CardList";

function Layout() {
  const [flashDecks, setFlashDecks] = useState([]);

  useEffect(() => {
    async function getFlashDecks() {
      const flashDecksFromAPI = await listDecks();
      console.log("gettingDecks", flashDecksFromAPI);
      setFlashDecks(flashDecksFromAPI);
    }
    getFlashDecks();
  }, [setFlashDecks]);

  return (
    <>
      <Header />
      <div className="container">
      <Switch>
        <Route exact={true} path="/">
          <Decks decks={flashDecks} />
        </Route>
        <Route path="/decks/:deckId">
          <DeckView />
          <CardList />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
      </div>
    </>
  );
}

export default Layout;
