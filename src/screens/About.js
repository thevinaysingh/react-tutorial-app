import React, { Component } from "react";

class About extends Component {
  render() {
    console.log("===========> Props on About Route", this.props);
    return (
      <div className="default-container">
        <span>This is About page</span>
      </div>
    );
  }
}

export default About;
