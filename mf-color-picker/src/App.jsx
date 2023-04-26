import React from "react";
import ReactDOM from "react-dom";

import ColorPicker from "./components/ColorPicker";
import { useColorPicker } from "./hooks/useColorPicker";
import "./index.css";

const App = () => {
  const { color, handleColorChange, handleSubmitSaveColor } = useColorPicker();

  return (
    <div className="container">
      <ColorPicker {...{ color, handleColorChange, handleSubmitSaveColor }} />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
