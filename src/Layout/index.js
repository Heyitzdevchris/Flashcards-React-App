import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import { listDecks } from "../utils/api/index";

import Header from "./Header";
import NotFound from "./NotFound";
import Decks from "../Decks/Decks";
//import FormCard from "../Forms/FormCard";

function Layout() {
  const [flashDecks, setFlashDecks] = useState([]);

  useEffect(() => {
    async function getFlashDecks() {
      const flashDecksFromAPI = await listDecks();
      console.log("LayoutIndex gettingDecks", flashDecksFromAPI);
      setFlashDecks(flashDecksFromAPI);
    }
    getFlashDecks();
  }, [setFlashDecks]);

  return (
    <>
      <Header />
      <div className="container">
        <Switch>
         <Route path="/">
           <Decks decks={flashDecks} />
         </Route>
         {/* <Route path="/decks/:deckId/cards/:cardId/edit">
          <FormCard />
         </Route> */}
         <Route>
          <NotFound />
         </Route>
       </Switch>
      </div>
    </>
  );
}

export default Layout;
