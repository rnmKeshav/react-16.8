import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", { what: "the hell" }, "Adopt me"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "dog",
      breed: "Havaneese"
    }),
    React.createElement(Pet, {
      name: "Pepper",
      animal: "bird",
      breed: "some breed"
    })
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
