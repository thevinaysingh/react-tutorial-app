import React from "react";
import Logo from "./logo";
import "./App.css";
import FunctionalComponent from "./functionalComponent";

class App extends React.Component {
  state = {
    value: 1
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({ value: 1 });
    }, 1000);
  }

  render() {
    console.log(
      "This console should be shown in every 1 sec as state update using set timeout"
    );
    return (
      <div className="default-container">
        <p>State: {this.state.value}</p>
        <p>Component:</p>
        <FunctionalComponent value={this.state.value} />
        <Logo className="App-logo" />
      </div>
    );
  }
}

export default App;
