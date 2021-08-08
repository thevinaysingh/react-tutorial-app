import React, { Component } from "react";

class Login extends Component {
  gotoBack = () => {
    this.props.history.goBack();
  };

  gotoSignup = () => {
    this.props.history.push("/signup");
  };

  jumpToNext2Screen = () => {
    // we can jump 2 screens ahead if screens are available
    this.props.history.go(2);
  };

  render() {
    console.log("===========> Props on Login Route", this.props);
    return (
      <div className="default-container">
        <span>This is login page</span>
        <button onClick={this.gotoBack}>Go back</button>
        <button onClick={this.gotoSignup}>Signup</button>
        <button onClick={this.jumpToNext2Screen}>
          jump To Next 2 Screen with go fun if stack has entry avaiable
        </button>
      </div>
    );
  }
}

export default Login;
