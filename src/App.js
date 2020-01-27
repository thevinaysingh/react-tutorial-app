import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import * as ActionCreators from './action/index';
import { sagaMiddleware } from "./store";
import { watchCounterSaga } from "./sagas/sagas";

class App extends Component {
  constructor(props) {
    super(props);
    sagaMiddleware.run(watchCounterSaga);
  }
  render() {
    return (
      <div className="default-container">
        {this.props.loadingForAge && <p>Age increment is loading ...</p>}
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
        {this.props.loadingForCounter && <p>Counter increment is loading ...</p>}
        <p>{this.props.counterFromCounterReducer}</p>
        <button onClick={() => this.props.increment()}>Increment</button>
        <button onClick={() => this.props.incrementBySaga()}>Increment after 2 by redux saga </button>
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
  loadingForAge: reduxState.ageReducer.loading,
  loadingForCounter: reduxState.counterReducer.loading
});

const mapDispatchToProps = dispatch => ({
  incrementAgeAsyc: () => dispatch(ActionCreators.incrementAgeAsyc()),
  increment: () => dispatch({ type: "INCREMENT" }),
  incrementBySaga: () => dispatch({ type: "COUNTER_INCREMENT_SAGA" }),
  decrement: () => dispatch({ type: "DECREMENT" }),
  decrementAge: () => dispatch({ type: "DECREMENT_AGE" }),
  incrementByValue: valueToIncrement =>
    dispatch({ type: "INCREMENT_BY_VALUE", value: valueToIncrement }),
  decrementByValue: valueToDecrement =>
    dispatch({ type: "DECREMENT_BY_VALUE", value: valueToDecrement })
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
