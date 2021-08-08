import React, { PureComponent } from "react";
import { withRouter } from "react-router-dom";

class CustomComponentWithRouter extends PureComponent {
  goBackToPrevious2Screens = () => {
    this.props.history.go(-2)
  }

  render() {
    console.log(
      "===========> Props returned using with router from CustomComponentWithRouter",
      this.props
    );

    return (
      <div className="default-container">
        <span>Custom component cotaining with router hoc</span>
        <button onClick={this.goBackToPrevious2Screens}>
          Move back to previous 2 screens
        </button>
      </div>
    );
  }
}

export default withRouter(CustomComponentWithRouter);
