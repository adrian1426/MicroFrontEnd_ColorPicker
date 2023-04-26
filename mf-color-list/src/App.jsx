import React from "react";
import ReactDOM from "react-dom";
import ColorList from "./components/ColorList";

const App = () => (
  <div>
    <ColorList colors={['#000000']} />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
