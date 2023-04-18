import React from "react";
import ReactDOM from "react-dom";
import ColorList from "./components/ColorList";

const App = () => (
  <div>
    <ColorList />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
