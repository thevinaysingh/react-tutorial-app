import React, { Component } from "react";
import CustomComponentWithHooks from "./components/CustomComponentWithHooks";
import CustomComponentWithRouter from "./components/CustomComponentWithRouter";

class Dashboard extends Component {
  componentDidMount() {
    this.useOfBlock();
    // this.useOfBlockAndUnblock();
  }

  historyisMutable = (prevProps) => {
    // will be true
    let locationChanged = this.props.location !== prevProps.location;

    // INCORRECT, will *always* be false because history is mutable.
    locationChanged =
      this.props.history.location !== prevProps.history.location;
  };

  useOfBlock = () => {
    // Or use a function that returns the message when it's needed.
    this.props.history.block((location, action) => {
      // The location and action arguments indicate the location
      // we're transitioning to and how we're getting there.

      // A use case is to prevent the user from leaving the
      if (action === "POP" && location.pathname.startsWith("/signup"))
        return "Are you sure you want to leave this page?";
    });
  };

  useOfBlockAndUnblock = () => {
    /* Register a simple prompt message that will be shown the */
    const unblock = this.props.history.block(
      "Are you sure you want to leave this page?"
    );
    /* To stop blocking transitions, call the function returned from block(). */
    unblock();
  };

  render() {
    console.log("===========> Props on Dashboard Route", this.props);
    return (
      <div className="default-container">
        <span>
          This is Dashboard page for {this.props.match.params.username}
        </span>
        <CustomComponentWithHooks />
        <CustomComponentWithRouter />
      </div>
    );
  }
}

export default Dashboard;
