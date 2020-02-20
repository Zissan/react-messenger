import React from "react";
import reactDOM from "react-dom";
import store from "./redux";

reactDOM.render(
  <div>
    <h1>{store.getState().currentUser.name}</h1>
  </div>,
  document.getElementById("AppContainer")
);
