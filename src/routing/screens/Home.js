import React, { Component } from "react";
import { NavLink, Switch, Route, Link } from "react-router-dom";
import ContactUs from "./ContactUs";
import About from "./About";
import Profile from "./Profile";

class Home extends Component {

  componentDidMount() {
    this.useOfListen();
  }

  useOfListen = () => {
    const {history} = this.props;
    if(history && history.listen) {
      history.listen( location => {
        // Log if location has been change
        console.log('Listening location change', location);
      });
    }
  }

  gotoLogin = () => {
    this.props.history.push("/login", { loggedIn: false });
  };

  gotoLoginWithLocationObject = () => {
    // but you can use a location instead
    const location = {
      pathname: "/login",
      state: { loggedIn: false }
    };
    this.props.history.push(location);
  };

  renderNestingRoutes = () => {
    const { path } = this.props.match;
    return (
      <Switch>
        <Route exact path={path}>
          <h3>Please select an option</h3>
        </Route>
        <Route path={`${path}/about`}>
          <About />
        </Route>
        <Route path={`${path}/contact`}>
          <ContactUs />
        </Route>
        <Route path={`${path}/profile`}>
          <Profile />
        </Route>
      </Switch>
    );
  }

  render() {
    console.log("===========> Props on Home Route", this.props);
    const { url } = this.props.match;
    return (
      <div className="default-container">
        <span>This is Home page</span>
        {this.renderNestingRoutes()}
        <NavLink to={`${url}/about`} >About</NavLink>
        <NavLink to={`${url}/contact`} >Contact us</NavLink>
        <NavLink to={`${url}/profile`} >Profile</NavLink>
        <button onClick={this.gotoLogin}>Go to Login</button>
        <button onClick={this.gotoLoginWithLocationObject}>
          Go to Login passing location object
        </button>
      </div>
    );
  }
}

export default Home;
