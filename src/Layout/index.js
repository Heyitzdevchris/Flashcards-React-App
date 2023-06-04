import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./Header";
import NotFound from "./NotFound";
import Decks from "../Decks/Decks";

function Layout() {
  //! NotFound route isnt set up correctly yet.
  return (
    <>
      <Header />
      <div className="container">
      <Switch>
        <Route path="/">
          <Decks />
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
