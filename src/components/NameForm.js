import React from 'react';

export default class NameForm extends React.Component {
  state = {
    name: '',
    password: '',
  };

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('========>event.nativeEvent >> get email input field value', event.nativeEvent.target.email.value);
    console.log('========>event.nativeEvent >> get password input field value', event.nativeEvent.target.password.value);
    console.log('========>event.type', event.type);
    console.log('========>event.target', event.target);
    console.log('========>event.currentTarget', event.currentTarget);
    console.log('========>event.eventPhase', event.eventPhase);
    console.log('========>event.bubbles', event.bubbles);
    console.log('========>event.cancelable', event.cancelable);
    console.log('========>event.timeStamp', event.timeStamp);
    console.log('========>event.defaultPrevented', event.defaultPrevented);
    console.log('========>event.isTrusted', event.isTrusted);
    console.log('========>event.isDefaultPrevented', event.isDefaultPrevented);
    console.log('========>event.isPropagationStopped', event.isPropagationStopped);
    console.log('========>event.preventDefault', event.preventDefault);
    console.log('========>event.stopPropagation', event.stopPropagation);
    console.log('========>event.dispatchConfig', event.dispatchConfig);
    console.log('========>event._targetInst', event._targetInst);
    console.log('========>event._dispatchListeners', event._dispatchListeners);
    console.log('========>event._dispatchInstances', event._dispatchInstances);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Email:
          <input type="text" name="email" onClick={this.handleChange}/>
        </label>
        <label>
          Password:
          <input type="text" name="password" onClick={this.handleChange}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}