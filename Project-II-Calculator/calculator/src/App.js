import React, { Component }  from "react";
import "./App.css";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import NumberButton from "./components/ButtonComponents/NumberButton";
import ActionButton from "./components/ButtonComponents/ActionButton";
class App extends Component {
  state={
    screen: 1
  };
  // console.log(myState, updateMyState);
  style = {
    flex2: { flex: "25%" },
    flex2Red: { flex: "25%", background: "#A0001E", color: 'white' },
    flex3: { flex: "75%" },
  };

  clickHandler = event => {
    let toUpdate = {...this.state}
    toUpdate.screen = event.target.innerText;
    this.setState = ({
      screen: toUpdate
    });
    console.log(event.target.innerText, toUpdate);
  };
  render() {
  return (
    <div className="container">
      <div className="layerOne">
        <CalculatorDisplay output={this.state.screen} />
      </div>
      <div className="layerTwo">
        <ActionButton
          click={this.clickHandler}
          style={this.style.flex3}
          symbol={"Clear"}
        />
        <ActionButton click={this.clickHandler} style={this.style.flex2Red} symbol={"÷"} />
      </div>
      <div className="layerThree">
        <NumberButton click={this.clickHandler} style={this.style.flex2} number={"7"} />
        <NumberButton click={this.clickHandler} style={this.style.flex2} number={"8"} />
        <NumberButton click={this.clickHandler} style={this.style.flex2} number={"9"} />
        <ActionButton click={this.clickHandler} style={this.style.flex2Red} symbol={"x"} />
        <NumberButton click={this.clickHandler} style={this.style.flex2} number={"4"} />
        <NumberButton click={this.clickHandler} style={this.style.flex2} number={"5"} />
        <NumberButton click={this.clickHandler} style={this.style.flex2} number={"6"} />
        <ActionButton click={this.clickHandler} style={this.style.flex2Red} symbol={"-"} />
        <NumberButton click={this.clickHandler} style={this.style.flex2} number={"1"} />
        <NumberButton click={this.clickHandler} style={this.style.flex2} number={"2"} />
        <NumberButton click={this.clickHandler} style={this.style.flex2} number={"3"} />
        <ActionButton click={this.clickHandler} style={this.style.flex2Red} symbol={"+"} />
      </div>
      <div className="layerFour">
        <NumberButton click={this.clickHandler} style={this.style.flex3} number={"0"} />
        <ActionButton click={this.clickHandler} style={this.style.flex2Red} symbol={"="} />
      </div>
    </div>
  );
  }
};

export default App;


