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
    return (
      <Switch>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/contact">
          <ContactUs />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
      </Switch>
    );
  }

  render() {
    console.log("===========> Props on Home Route", this.props);
    return (
      <div className="default-container">
        <span>This is Home page</span>
        <Link to={"/about"} >About</Link>
        <NavLink to={"/contact"} >Contact us</NavLink>
        <NavLink to={"/profile"} >Profile</NavLink>
        <button onClick={this.gotoLogin}>Go to Login</button>
        <button onClick={this.gotoLoginWithLocationObject}>
          Go to Login passing location object
        </button>
        {this.renderNestingRoutes()}
      </div>
    );
  }
}

export default Home;
