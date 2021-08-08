import React, { Component } from "react";
import { logProps } from "../hof/logWrapper";

class CustomComp extends Component {
  state = {
    value: "initialValue",
  };

  handleEvent(textValue, boolValue) {
    console.log("this", this); // `this` is an instance of class component
    console.log("textValue", textValue);
    console.log("boolValue", boolValue);
    this.setState({ value: "secondvalue" }); // setState should work without any error
  }

  render() {
    return (
      <div>
        <button
          style={this.props.buttonStyle}
          onClick={this.handleEvent.bind(this, "vinay", true)}
        >
          {this.state.value}
        </button>
      </div>
    );
  }
}

export default logProps(CustomComp);
