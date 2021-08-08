import React, { Component } from "react";

class ContactUs extends Component {
  render() {
    console.log("===========> Props on ContactUs Route", this.props);
    return (
      <div className="default-container">
        <span>This is ContactUs page</span>
      </div>
    );
  }
}

export default ContactUs;
