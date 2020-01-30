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


/**
 * 
 * Form submit button event params
nativeEvent: null
type: (...)
target: (...)
currentTarget: (...)
eventPhase: (...)
bubbles: (...)
cancelable: (...)
timeStamp: (...)
defaultPrevented: (...)
isTrusted: (...)
isDefaultPrevented: (...)
isPropagationStopped: (...)
preventDefault: (...)
stopPropagation: (...)
dispatchConfig: null
_targetInst: null
_dispatchListeners: null
_dispatchInstances: null
get nativeEvent: ƒ ()
set nativeEvent: ƒ (val)
get type: ƒ ()
set type: ƒ (val)
get target: ƒ ()
set target: ƒ (val)
get currentTarget: ƒ ()
set currentTarget: ƒ (val)
get eventPhase: ƒ ()
set eventPhase: ƒ (val)
get bubbles: ƒ ()
set bubbles: ƒ (val)
get cancelable: ƒ ()
set cancelable: ƒ (val)
get timeStamp: ƒ ()
set timeStamp: ƒ (val)
get defaultPrevented: ƒ ()
set defaultPrevented: ƒ (val)
get isTrusted: ƒ ()
set isTrusted: ƒ (val)
get isDefaultPrevented: ƒ ()
set isDefaultPrevented: ƒ (val)
get isPropagationStopped: ƒ ()
set isPropagationStopped: ƒ (val)
get preventDefault: ƒ ()
set preventDefault: ƒ (val)
get stopPropagation: ƒ ()
set stopPropagation: ƒ (val)
*/