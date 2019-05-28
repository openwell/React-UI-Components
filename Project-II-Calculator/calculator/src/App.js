import React, { useState } from "react";
import "./App.css";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import NumberButton from "./components/ButtonComponents/NumberButton";
import ActionButton from "./components/ButtonComponents/ActionButton";
const App = () => {
  const [myState, updateMyState] = useState({
    screen: { output: 1 }
  });
  console.log(myState, updateMyState);
  const style = {
    flex2: { flex: "25%" },
    flex2Red: { flex: "25%", background: "#A0001E" },
    flex3: { flex: "75%" },
  };

  const clickHandler = event => {
    console.log(event.target.innerText);
  };
  return (
    <div className="container">
      <div className="layerOne">
        <CalculatorDisplay output={myState.screen.output} />
      </div>
      <div className="layerTwo">
        <ActionButton
          click={clickHandler}
          style={style.flex3}
          symbol={"Clear"}
        />
        <ActionButton click={clickHandler} style={style.flex2Red} symbol={"÷"} />
      </div>
      <div className="layerThree">
        <NumberButton click={clickHandler} style={style.flex2} number={"7"} />
        <NumberButton click={clickHandler} style={style.flex2} number={"8"} />
        <NumberButton click={clickHandler} style={style.flex2} number={"9"} />
        <ActionButton click={clickHandler} style={style.flex2Red} symbol={"x"} />
        <NumberButton click={clickHandler} style={style.flex2} number={"4"} />
        <NumberButton click={clickHandler} style={style.flex2} number={"5"} />
        <NumberButton click={clickHandler} style={style.flex2} number={"6"} />
        <ActionButton click={clickHandler} style={style.flex2Red} symbol={"-"} />
        <NumberButton click={clickHandler} style={style.flex2} number={"1"} />
        <NumberButton click={clickHandler} style={style.flex2} number={"2"} />
        <NumberButton click={clickHandler} style={style.flex2} number={"3"} />
        <ActionButton click={clickHandler} style={style.flex2Red} symbol={"+"} />
      </div>
      <div className="layerFour">
        <NumberButton click={clickHandler} style={style.flex3} number={"0"} />
        <ActionButton click={clickHandler} style={style.flex2Red} symbol={"="} />
      </div>
    </div>
  );
};

export default App;
