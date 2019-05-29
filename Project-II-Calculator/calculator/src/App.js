import React, { Component } from "react";
import "./App.css";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import NumberButton from "./components/ButtonComponents/NumberButton";
import ActionButton from "./components/ButtonComponents/ActionButton";

class App extends Component {
  state = {
    screen: 1,
    hasError: false,
    operand1: [],
    operand2: [],
    operator: ""
  };
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  clickHandler = event => {
    let screen = { ...this.state.screen };
    screen = event.target.innerText;
    if (isNaN(screen)) {
      this.setState({ operator: screen });
      return this.setState({ screen: screen });
    } else {
      if (isNaN(this.state.screen) || this.state.operand2.length > 0) {
        if (this.state.operand2.length === 12) {
          return null;
        }
        let num2 = this.state.operand2.concat([screen]);
        this.setState({ operand2: num2 });
        return this.setState({ screen: num2 });
      }
      // if (this.state.operand1.length === 12) {
      //   return null;
      // }
      let num1 = this.state.operand1.concat([screen]);
      this.setState({ operand1: num1 });
      return this.setState({ screen: num1 });
    }
    // this.setState({ screen });
    // console.log(event.target.innerText, screen);
  };
  render() {
    const style = {
      flex2: { flex: "25%" },
      flex2Red: { flex: "25%", background: "#A0001E", color: "white" },
      flex3: { flex: "75%" },
      layer1: [7, 8, 9, "x", 4, 5, 6, "-", 1, 2, 3, "+"],
      layer2: [0, "="]
    };
    return (
      <div className="container">
        <div className="layerOne">
          <CalculatorDisplay output={this.state.screen} />
        </div>
        <div className="layerTwo">
          <ActionButton
            click={this.clickHandler}
            style={style.flex3}
            symbol={"Clear"}
          />
          <ActionButton
            click={this.clickHandler}
            style={style.flex2Red}
            symbol={"÷"}
          />
        </div>
        <div className="layerThree">
          {style.layer1.map(element => {
            if (!isNaN(element)) {
              return (
                <NumberButton
                  key={element}
                  click={this.clickHandler}
                  style={style.flex2}
                  number={element}
                />
              );
            } else {
              return (
                <ActionButton
                  key={element}
                  click={this.clickHandler}
                  style={style.flex2Red}
                  symbol={element}
                />
              );
            }
          })}
        </div>
        <div className="layerFour">
          <NumberButton
            click={this.clickHandler}
            style={style.flex3}
            number={"0"}
          />
          <ActionButton
            click={this.clickHandler}
            style={style.flex2Red}
            symbol={"="}
          />
        </div>
      </div>
    );
  }
}

export default App;
