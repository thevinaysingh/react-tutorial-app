import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";

class App extends Component {
  render() {
    return (
      <div className="default-container">

        <p>{this.props.counterPropsForThisScreen}</p>
        <button onClick={() => this.props.increment()}>Increment</button>
        <button onClick={() => this.props.decrement()}>Decrement</button>
        <button onClick={() => this.props.incrementByValue(10)}>Increment by 10</button>
        <button onClick={() => this.props.decrementByValue(10)}>Decrement by 10</button>
      </div>
    );
  }
}

const mapStateToProps = reduxState => ({
  counterPropsForThisScreen: reduxState.counter
});

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch({ type: "INCREMENT" }),
  decrement: () => dispatch({ type: "DECREMENT" }),
  incrementByValue: valueToIncrement => dispatch({ type: "INCREMENT_BY_VALUE", value: valueToIncrement }),
  decrementByValue: valueToDecrement => dispatch({ type: "DECREMENT_BY_VALUE", value: valueToDecrement})
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
