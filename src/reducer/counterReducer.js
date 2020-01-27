const initialState = {
  counter: 0,
  loading: false,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOADING_SAGA":
      return { ...state, loading: true };
    case "INCREMENT":
      return { ...state, counter: state.counter + 1, loading: false };
    case "DECREMENT":
      return { ...state, counter: state.counter - 1 };
    case "INCREMENT_BY_VALUE":
      return { ...state, counter: state.counter + action.value };
    case "DECREMENT_BY_VALUE":
      return { ...state, counter: state.counter - action.value };
    default:
      return state;
  }
};

export default counterReducer;
