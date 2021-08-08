import React from "react";
import { useHistory, useParams } from "react-router-dom";

const callGoBackFunctionUsingHistoryFromHooks = history => {
  history.goBack();
}

const CustomComponentWithHooks = () => {
  const history = useHistory();
  const params = useParams();
  console.log(
    "CustomComponentWithHooks",
    "\n",
    'history:', history,
    "\n",
    'params', params
  );

  return (
    <div className="default-container">
      <span>Custom component cotaining router hook </span>
      <span>{params.username} </span>
      <button onClick={() => callGoBackFunctionUsingHistoryFromHooks(history)}>
        Go back
      </button>
    </div>
  );
}

export default CustomComponentWithHooks;
