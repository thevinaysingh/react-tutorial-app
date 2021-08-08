import React, { Component } from "react";

class Profile extends Component {
  render() {
    console.log("===========> Props on Profile Route", this.props);
    return (
      <div className="default-container">
        <span>This is Profile page</span>
      </div>
    );
  }
}

export default Profile;
