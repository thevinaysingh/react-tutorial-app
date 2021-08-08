import React from 'react';

const functionComponent = props => {
  console.log(props.value); // this log will show only for changed props instead.
  return <p>{props.value}</p>
}

export default React.memo(functionComponent);