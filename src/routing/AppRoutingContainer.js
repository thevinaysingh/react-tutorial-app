import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import "../App.css";
import Dashboard from "./screens/Dashboard";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Signup from "./screens/Signup";

class AppRoutingContainer extends Component {
  render() {
    // expected props for route =  {
    //   history: {
    //     length: 7,
    //     action: "POP",
    //     location: {/* Same as below */},
    //     createHref: () => {},
    //     push: () => {},
    //     replace: () => {},
    //     go: () => {},
    //     goBack: () => {},
    //     goForward: () => {},
    //     block: () => {},
    //     listen: () => {},
    //   },
    //   location: {
    //     pathname: "/user/vinay",
    //     search: "",
    //     hash: "",
    //     state: undefined},
    //   match: {
    //     path: "/user/:username",
    //     url: "/user/vinay",
    //     isExact: true,
    //     params: {/* params which are passed in url dynamically */},
    //   staticContext: undefined,
    // }
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <p>Welcome to react routing</p>
          </header>
        </div>
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="/home" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/user/:username" component={Dashboard} />
          <Route path="*">
            {/* Error route */}
            <h3>Please type in url /home</h3>
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default AppRoutingContainer;
