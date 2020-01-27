import React from 'react';
import logo from './logo.svg';
import './App.css';
import FunctionalComponent from './functionalComponent';

class App extends React.Component {
  state = {
    value: 1
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({value: 1});
    }, 1000);
  }

  render() {
    console.log("This console should be shown in every 1 sec as state update using set timeout");
    return (
      <div className="default-container">
        <p>{this.state.value}</p>
        <FunctionalComponent value={this.state.value}/>
      </div>
    );
  }
}

export default App;
