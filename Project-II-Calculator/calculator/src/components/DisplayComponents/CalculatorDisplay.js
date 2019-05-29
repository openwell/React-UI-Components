import React from "react";
import "./Display.css";

const calculatorDisplay = (props) => {
  return (
    <div className="DisplayScreen">
      <h1>{props.output}</h1>
    </div>
  );
};

export default calculatorDisplay;
