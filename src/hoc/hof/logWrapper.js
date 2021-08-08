const translateProps = props => {
  let buttonStyle = {backgroundColor: 'green', color: 'white'}
  if(props.disable) {
    buttonStyle = {...buttonStyle, backgroundColor: 'grey'};
  }

  return {...props, buttonStyle: buttonStyle}
}

export function logProps(InputComponent) {
  // InputComponent.prototype.componentWillReceiveProps = function(nextProps) {
  //   console.log('Current props: ', this.props);
  //   console.log('Next props: ', nextProps);
  // };
  console.log(InputComponent.props);
  return InputComponent;
}