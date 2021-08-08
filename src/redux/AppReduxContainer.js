import React, { Component } from "react";
import { connect } from "react-redux";
import "../App.css";
import * as ActionCreators from "./action/index";
import { watchCounterSaga } from "./sagas/sagas";
import { sagaMiddleware } from "./store";

class AppReduxContainer extends Component {
  constructor(props) {
    super(props);
    sagaMiddleware.run(watchCounterSaga);
  }

  render() {
    const {
      loadingForAge,
      ageFromAgeReducer,
      incrementAgeAsyc,
      decrementAge,
      loadingForCounter,
      counterFromCounterReducer,
      increment,
      incrementBySaga,
      decrement,
      incrementByValue,
      incrementByValue,
      decrementByValue,
    } = this.props;

    return (
      <div className="default-container">
        {loadingForAge && <p>Age increment is loading ...</p>}
        <p>{ageFromAgeReducer}</p>
        <button onClick={incrementAgeAsyc}>
          Increment Age after 2 seconds
        </button>
        <button onClick={decrementAge}>Decrement Age from other reducer</button>
        <br />
        <br />
        <br />
        {loadingForCounter && <p>Counter increment is loading ...</p>}
        <p>{counterFromCounterReducer}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={incrementBySaga}>
          Increment after 2 by redux saga{" "}
        </button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={incrementByValue(10)}>Increment by 10</button>
        <button onClick={() => decrementByValue(10)}>Decrement by 10</button>
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => ({
  counterFromCounterReducer: reduxState.counterReducer.counter,
  ageFromAgeReducer: reduxState.ageReducer.age,
  loadingForAge: reduxState.ageReducer.loading,
  loadingForCounter: reduxState.counterReducer.loading,
});

const mapDispatchToProps = (dispatch) => ({
  incrementAgeAsyc: () => dispatch(ActionCreators.incrementAgeAsyc()),
  increment: () => dispatch({ type: "INCREMENT" }),
  incrementBySaga: () => dispatch({ type: "COUNTER_INCREMENT_SAGA" }),
  decrement: () => dispatch({ type: "DECREMENT" }),
  decrementAge: () => dispatch({ type: "DECREMENT_AGE" }),
  incrementByValue: (valueToIncrement) =>
    dispatch({ type: "INCREMENT_BY_VALUE", value: valueToIncrement }),
  decrementByValue: (valueToDecrement) =>
    dispatch({ type: "DECREMENT_BY_VALUE", value: valueToDecrement }),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppReduxContainer);
