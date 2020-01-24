import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import logo from './logo.svg';
import Dashboard from './screens/Dashboard';
import Home from './screens/Home';
import Login from './screens/Login';
import Signup from './screens/Signup';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Welcome to react roting</p>
          <a
            className="App-link"
            href="https://majavrella.github.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit My First github page url
          </a>
          <a
            className="App-link"
            href="https://majavrella.wixsite.com/thevinaysingh"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Me
          </a>
          <a
            className="App-link"
            href="https://github.com/mob-dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit My Github (mob-dev)
          </a>
          <a
            className="App-link"
            href="https://github.com/mob-dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit My Another Github (majavrella)
          </a>
        </header>
      </div>
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route path="/home" component={Home}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/user/:username" component={Dashboard}/>
        <Route path="*">
          {/* Error route */}
          <h3>Please type in url /home</h3>
        </Route>
      </Switch>
    </Router>
  );
}

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

export default App;
