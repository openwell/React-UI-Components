import React, { Component } from "react";
import "./App.css";
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay";
import NumberButton from "./components/ButtonComponents/NumberButton";
import ActionButton from "./components/ButtonComponents/ActionButton";
class App extends Component {
  state = {
    screen: 0,
    prev: "",
    operator: "",
    operatorClicked: false
  };
  // console.log(myState, updateMyState);
  style = {
    flex2: { flex: "25%" },
    flex2Red: { flex: "25%", background: "#A0001E", color: "white" },
    flex3: { flex: "75%" }
  };

  clearHandler = () => {
    this.setState({ screen: '' });
  };
  appendHandler = num => {
    if (this.state.operatorClicked) {
      this.setState({ screen: '', operatorClicked: false });
    }
    this.setState(state => ({ screen: `${state.screen}${num}` }));
  };
  addHandler = () => {
    this.setState(state => ({
      operator: (a, b) => a + b,
      operatorClicked: true,
      prev: state.screen
    }));
  };
  subtractHandler = () => {
    this.setState(state => ({
      operator: (a, b) => a - b,
      operatorClicked: true,
      prev: state.screen
    }));
  };
  multiplyHandler = () => {
    this.setState(state => ({
      operator: (a, b) => a * b,
      operatorClicked: true,
      prev: state.screen
    }));
  };
  divideHandler = () => {
    this.setState(state => ({
      operator: (a, b) => a / b,
      operatorClicked: true,
      prev: state.screen
    }));
  };
  equalHandler = () => {
    this.setState(state => ({
      screen: `${state.operator(
        parseFloat(state.screen),
        parseFloat(state.prev)
      )}`,
      prev: null
    }));
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
