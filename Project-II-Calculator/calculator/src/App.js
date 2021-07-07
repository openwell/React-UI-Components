import React, { Component } from "react";
import "./App.css";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import NumberButton from "./components/ButtonComponents/NumberButton";
import ActionButton from "./components/ButtonComponents/ActionButton";

class App extends Component {
  state = {
    screen: "0",
    prev: null,
    operator: null,
    operatorClicked: false
  };
  // console.log(myState, updateMyState);
  style = {
    flex2: { flex: "25%" },
    flex2Red: {
      flex: "25%",
      background: `linear-gradient(to bottom, rgba(252,156,23,1) 0%, rgba(247,126,27,1) 100%)`,
      color: "white"
    },
    flex3: { flex: "75%" }
  };

  clearHandler = () => {
    this.setState({
      screen: "0",
      prev: null,
      operator: null,
      operatorClicked: false
    });
  };
  appendHandler = num => {
    if (this.state.operatorClicked) {
      this.setState({
        screen: String(num),
        operatorClicked: false
      });
    } else {
      this.setState(state => ({
        screen: state.screen === "0" ? num + "" : state.screen + String(num)
      }));
    }
  };
  helper=()=>{
    if (this.state.prev === null) {
      this.setState(state => ({
        prev: state.screen
      }));
    }

    if (typeof this.state.operator === "function") {
      this.setState(state => ({
        screen: parseFloat(
          `${state.operator(parseFloat(state.prev), parseFloat(state.screen))}`
        ),
        prev: parseFloat(
          `${state.operator(parseFloat(state.prev), parseFloat(state.screen))}`
        )
      }));
    }
  }
  addHandler = () => {
    this.helper()
    this.setState({
      operator: (a, b) => a + b,
      operatorClicked: true
    });
  };
  subtractHandler = () => {
    this.helper()
    this.setState({
      operator: (a, b) => a - b,
      operatorClicked: true
    });
  };
  multiplyHandler = () => {
    this.helper()
    this.setState({
      operator: (a, b) => a * b,
      operatorClicked: true
    });
  };
  divideHandler = () => {
    this.helper()
    this.setState({
      operator: (a, b) => a / b,
      operatorClicked: true
    });
  };
  equalHandler = () => {
    if (typeof this.state.operator === "function") {
      this.setState(state => ({
        screen: `${state.operator(
          parseFloat(state.prev),
          parseFloat(state.screen)
        )}`,
        operatorClicked: false,
        prev: null,
        operator: null
      }));
    }
  };

  render() {
    return (
      <div className="container">
        <div className="layerOne">
          <CalculatorDisplay output={this.state.screen} />
        </div>
        <div className="layerTwo">
          <ActionButton
            click={() => this.clearHandler()}
            style={this.style.flex3}
            symbol={"Clear"}
          />
          <ActionButton
            click={() => this.divideHandler()}
            style={this.style.flex2Red}
            symbol={"÷"}
          />
        </div>
        <div className="layerThree">
          <NumberButton
            click={() => this.appendHandler(7)}
            style={this.style.flex2}
            number={"7"}
          />
          <NumberButton
            click={() => this.appendHandler(8)}
            style={this.style.flex2}
            number={"8"}
          />
          <NumberButton
            click={() => this.appendHandler(9)}
            style={this.style.flex2}
            number={"9"}
          />
          <ActionButton
            click={() => this.multiplyHandler()}
            style={this.style.flex2Red}
            symbol={"x"}
          />
          <NumberButton
            click={() => this.appendHandler(4)}
            style={this.style.flex2}
            number={"4"}
          />
          <NumberButton
            click={() => this.appendHandler(5)}
            style={this.style.flex2}
            number={"5"}
          />
          <NumberButton
            click={() => this.appendHandler(6)}
            style={this.style.flex2}
            number={"6"}
          />
          <ActionButton
            click={() => this.subtractHandler()}
            style={this.style.flex2Red}
            symbol={"-"}
          />
          <NumberButton
            click={() => this.appendHandler(1)}
            style={this.style.flex2}
            number={"1"}
          />
          <NumberButton
            click={() => this.appendHandler(2)}
            style={this.style.flex2}
            number={"2"}
          />
          <NumberButton
            click={() => this.appendHandler(3)}
            style={this.style.flex2}
            number={"3"}
          />
          <ActionButton
            click={() => this.addHandler()}
            style={this.style.flex2Red}
            symbol={"+"}
          />
        </div>
        <div className="layerFour">
          <NumberButton
            click={() => this.appendHandler(0)}
            style={this.style.flex3}
            number={"0"}
          />
          <ActionButton
            click={() => this.equalHandler()}
            style={this.style.flex2Red}
            symbol={"="}
          />
        </div>
      </div>
    );
  }
}

export default App;
