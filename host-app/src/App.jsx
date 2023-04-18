import React from "react";
import ReactDOM from "react-dom";
import ColorPicker from "colorPicker/ColorPicker";

const App = () => (
  <div className="container">
    <ColorPicker />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
