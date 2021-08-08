import React, { Component } from "react";

class Signup extends Component {
  gotoDasboard = () => {
    this.props.history.push("/user/vinay", { loggedIn: true });
  };

  gotoDasboardByReplacingThispage = () => {
    this.props.history.replace("/user/vinay", { loggedIn: true });
  };

  render() {
    console.log("===========> Props on Signup Route", this.props);
    return (
      <div className="default-container">
        <span>This is Signup page</span>
        <button onClick={this.gotoDasboard}>Go to dashboard using push</button>
        <button onClick={this.gotoDasboardByReplacingThispage}>
          Goto dashboard using replace
        </button>
      </div>
    );
  }
}

export default Signup;
