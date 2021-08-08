import React from 'react';


const translateProps = props => {
  const newProp = 'This is new prop added through hoc';
  return {...props, newProp}
 }
  
 export function hocFunction(InputComponent) {
  return class NewComponent extends React.Component {
    render() {
      const newProps = translateProps(this.props);
      return (
        <InputComponent {...newProps} />
      );
    }
  }
 }
 
 
 