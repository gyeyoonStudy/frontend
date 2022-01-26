import React from "react";
import Header from "./Layout/Header/Header";

function AppLayout() {
  return (
    <div className="AppLayout">
      <Header />
      <div id="portal"></div>
    </div>
  );
}

export default AppLayout;
