// redux-thunk example
export const incrementAgeAsyc = () => {
  return dispatch => {
    dispatch({type: "LOADING" });
    setTimeout(() => {
      dispatch(increment());
    }, 2000)
  }
}

export const increment = () => ({ type: "INCREMENT_AGE" });