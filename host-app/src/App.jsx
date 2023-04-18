import React from "react";
import ReactDOM from "react-dom";
import ColorPicker from "colorPicker/ColorPicker";

const App = () => (
  <div className="container">
    <div>Name: host-app</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Empty CSS</div>
    <br />
    <ColorPicker />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
