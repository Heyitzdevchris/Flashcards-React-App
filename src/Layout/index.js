import React, { useState, useEffect } from "react";
import { Switch, Route, } from "react-router-dom";

import { listDecks } from "../utils/api/index";

import Header from "./Header";
import NotFound from "./NotFound";
import Decks from "../Decks/Decks";


function Layout() {
  const [flashDecks, setFlashDecks] = useState([]);

  useEffect(() => {
    async function getFlashDecks() {
      const flashDecksFromAPI = await listDecks();
/**
* ! */console.log("LayoutIndex gettingDecks", flashDecksFromAPI);
      setFlashDecks(flashDecksFromAPI);
    }
    getFlashDecks();
  }, [setFlashDecks]);

  return (
    <div>
      <Header />
      <div className="container">
        <Switch>
         <Route path="/">
           <Decks decks={flashDecks} setFlashDecks={setFlashDecks} />
         </Route>
         <Route>
          <NotFound />
         </Route>
       </Switch>
      </div>
    </div>
  );
}

export default Layout;
