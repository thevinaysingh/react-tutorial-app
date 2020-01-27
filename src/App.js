import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <div className="default-container">

        <p>{this.props.ageFromAgeReducer}</p>
        <button onClick={() => this.props.incrementAge()}>Increment Age from other reducer</button>
        <button onClick={() => this.props.decrementAge()}>Decrement Age from other reducer</button>
        <br />
        <br />
        <br />
        <p>{this.props.counterFromCounterReducer}</p>
        <button onClick={() => this.props.increment()}>Increment</button>
        <button onClick={() => this.props.decrement()}>Decrement</button>
        <button onClick={() => this.props.incrementByValue(10)}>Increment by 10</button>
        <button onClick={() => this.props.decrementByValue(10)}>Decrement by 10</button>
      </div>
    );
  }
}

const mapStateToProps = reduxState => ({
  counterFromCounterReducer: reduxState.counterReducer.counter,
  ageFromAgeReducer: reduxState.ageReducer.age
});

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch({ type: "INCREMENT" }),
  decrement: () => dispatch({ type: "DECREMENT" }),
  incrementAge: () => dispatch({ type: "INCREMENT_AGE" }),
  decrementAge: () => dispatch({ type: "DECREMENT_AGE" }),
  incrementByValue: valueToIncrement => dispatch({ type: "INCREMENT_BY_VALUE", value: valueToIncrement }),
  decrementByValue: valueToDecrement => dispatch({ type: "DECREMENT_BY_VALUE", value: valueToDecrement})
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
