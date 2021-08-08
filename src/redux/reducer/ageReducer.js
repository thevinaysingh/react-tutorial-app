const initialState = {
  age: 18,
  loading: false
};

const ageReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOADING":
      return { ...state, loading: true };
    case "INCREMENT_AGE":
      return { ...state, age: state.age + 1, loading: false };
    case "DECREMENT_AGE":
      return { ...state, age: state.age - 1 };
    default:
      return state;
  }
};

export default ageReducer;
