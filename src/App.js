import React from 'react';
import './App.css';
import CustomComp from './components/CustomComp';

let sss = "ss";

class App extends React.Component {
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
    console.log('this', this); // `this` is an instance of class component
    console.log('textValue', textValue);
    console.log('boolValue', boolValue);
    this.setState({ value: 'secondvalue' }); // setState should work without any error
    function display() {
      console.log(sss);
    }

    display();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={"https://img.icons8.com/material/4ac144/256/user-male.png"} className="App-logo" alt="logo" /> */}
          <a
            className="App-link"
            href="https://majavrella.wixsite.com/thevinaysingh"
            target="_blank"
            rel="noopener noreferrer"
          >
            State value
          </a>
        </header>
        <CustomComp disable={false}/>
        <div>
          <button
            onClick={this.handleEvent.bind(this, "vinay", true)}>
            Load More
          </button>
        </div>
      </div>
    );
  }
}

export default App;
