import React from 'react';


const translateProps = props => {
  const newProp = 'This is new prop added through hoc';
  return {...props, newProp}
 }
  
 export function hocFunction(InputComponent) {
  InputComponent.getDerivedStateFromProps = function(nextProps) {
    return { value: 'newTextToSetInState' }
  };
  return (inputCompnentProps) => {
    const newProps = translateProps(inputCompnentProps);
    // While using for the class component without creating new component:
    return <InputComponent {...newProps}/>;
  }
 }
 