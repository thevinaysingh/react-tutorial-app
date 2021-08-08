import React, { Component } from "react";
import "../App.css";
import NameForm from "./components/NameForm";

class AppFormsContainer extends Component {
  render() {
    return (
      <div className="default-container">
        <header className="App-header">
          {/* <img src={"https://img.icons8.com/material/4ac144/256/user-male.png"} className="App-logo" alt="logo" /> */}
          <a
            className="App-link"
            href="https://www.thevinaysingh.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            My Portfolio
          </a>
        </header>
        <NameForm />
      </div>
    );
  }
}

export default AppFormsContainer;
