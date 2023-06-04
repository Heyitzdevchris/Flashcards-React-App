import React from "react";
import Header from "./Header";
import NotFound from "./NotFound";

function Layout() {
  return (
    <fragment>
      <Header />
      <div className="container">
        {/* TODO: Implement the screen starting here */}
        <NotFound />
      </div>
    </fragment>
  );
}

export default Layout;
