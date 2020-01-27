import { createStore } from "redux";
import counterReducer from '../reducer/counterReducer';
import ageReducer from '../reducer/ageReducer';
import { combineReducers, applyMiddleware } from "redux";

const logMiddlewareOne = store => {
  return dispatch => {
    return action => {    
      const actionToBeExecuted = dispatch(action);
      console.log('==========>log action from first middleware', JSON.stringify(actionToBeExecuted));
      return actionToBeExecuted;
      
    }
  }
};

const logMiddlewareTwo = store => dispatch => action => {
  const actionToBeExecuted = dispatch(action);
      console.log('==========>log action from second middleware', JSON.stringify(actionToBeExecuted));
      return actionToBeExecuted;
};

const appReducers = combineReducers({
  counterReducer,
  ageReducer,
});

export const store = createStore(appReducers, applyMiddleware(logMiddlewareOne, logMiddlewareTwo));

