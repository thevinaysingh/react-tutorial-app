import React, { Component } from "react";
import "./App.css";
import FunctionalComponent from "./components/functionalComponent";
import Logo from "./logo";

let sss = "ss";

class App extends Component {
  componentDidMount() {
    this.add({ name: "vinay" });
  }

  add() {
    console.log(arguments);
    let sum = 0;
    for (let i = 0, j = arguments.length; i < j; i++) {
      sum += arguments[i];
    }
    return sum;
  }

  handleEvent(textValue, boolValue) {
    console.log("this", this); // `this` is an instance of class component
    console.log("textValue", textValue);
    console.log("boolValue", boolValue);
    this.setState({ value: "secondvalue" }); // setState should work without any error
    function display() {
      console.log(sss);
    }

    display();
  }

  render() {
    return (
      <div className="default-container">
        <header className="App-header">
          {/* <img src={"https://img.icons8.com/material/4ac144/256/user-male.png"} className="App-logo" alt="logo" /> */}
          <a
            className="App-link"
            href="https://www.thevinaysingh.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            My Portfolio
          </a>
        </header>
        <div>
          <button onClick={this.handleEvent.bind(this, "vinay", true)}>
            Send event
          </button>
        </div>
        <div className="default-container">
          <p>State: {this.state.value}</p>
          <p>Component:</p>
          <FunctionalComponent value={this.state.value} />
          <Logo className="App-logo" />
        </div>
      </div>
    );
  }
}

export default App;
