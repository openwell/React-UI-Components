import React, { Component } from "react";
import "./Display.css";

class CalculatorDisplay extends Component {
  state = {
    scale: 1,
  };
  myRef = React.createRef()

  componentDidUpdate() {
    const scale = this.state.scale;
    const node = this.myRef.current;
    const parentNode = node.parentNode;
    const availableWidth = parentNode.offsetWidth;
    const actualWidth = node.offsetWidth;
    const actualScale = availableWidth / actualWidth;
    // console.log(availableWidth, actualWidth, (availableWidth / actualWidth))
    if (scale === actualScale) {
      return;
    }
    if (actualScale < 1) {
      this.setState({ scale: actualScale });
    }
    if (scale < 1) {
      this.setState({ scale: 1 });
    }
  }
  render() {
    return (
      <div className="DisplayScreen">
        <h1
          ref={this.myRef}
          style={{ transform: `scale(${this.state.scale})` }}
        >
          {this.props.output}
        </h1>
      </div>
    );
  }
}

export default CalculatorDisplay;
