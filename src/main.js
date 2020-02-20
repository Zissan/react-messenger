import React from "react";
import reactDOM from "react-dom";
import store from "./redux";

reactDOM.render(
  <div>
    <h1>
      {store
        .getState()
        .get("currentUser")
        .get("name")}
    </h1>
  </div>,
  document.getElementById("AppContainer")
);
