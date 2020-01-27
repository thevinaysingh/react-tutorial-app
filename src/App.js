import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import * as ActionCreators from './action/index';

class App extends Component {
  render() {
    return (
      <div className="default-container">
        {this.props.loading && <p>Age increment is loading ...</p>}
        <p>{this.props.ageFromAgeReducer}</p>
        <button onClick={() => this.props.incrementAgeAsyc()}>
          Increment Age after 2 seconds
        </button>
        <button onClick={() => this.props.decrementAge()}>
          Decrement Age from other reducer
        </button>
        <br />
        <br />
        <br />
        <p>{this.props.counterFromCounterReducer}</p>
        <button onClick={() => this.props.increment()}>Increment</button>
        <button onClick={() => this.props.decrement()}>Decrement</button>
        <button onClick={() => this.props.incrementByValue(10)}>
          Increment by 10
        </button>
        <button onClick={() => this.props.decrementByValue(10)}>
          Decrement by 10
        </button>
      </div>
    );
  }
}

const mapStateToProps = reduxState => ({
  counterFromCounterReducer: reduxState.counterReducer.counter,
  ageFromAgeReducer: reduxState.ageReducer.age,
  loading: reduxState.ageReducer.loading
});

const mapDispatchToProps = dispatch => ({
  incrementAgeAsyc: () => dispatch(ActionCreators.incrementAgeAsyc()),
  increment: () => dispatch({ type: "INCREMENT" }),
  decrement: () => dispatch({ type: "DECREMENT" }),
  decrementAge: () => dispatch({ type: "DECREMENT_AGE" }),
  incrementByValue: valueToIncrement =>
    dispatch({ type: "INCREMENT_BY_VALUE", value: valueToIncrement }),
  decrementByValue: valueToDecrement =>
    dispatch({ type: "DECREMENT_BY_VALUE", value: valueToDecrement })
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
