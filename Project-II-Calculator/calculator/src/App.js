import React from "react";
import "./App.css";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";

const App = () => {
  return (
    <div className="container">
      <CalculatorDisplay />
      <div className="layerOne" />
      <div className="layerTwo" />
      <div className="layerThree" />
    </div>
  );
};

export default App;
