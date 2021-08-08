import { default as React, default as React } from "react";
import "./App.css";
import NameForm from './components/NameForm';
import FunctionalComponent from "./functionalComponent";
import Logo from "./logo";

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
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <NameForm />
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
