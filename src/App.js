import React, { Component, Fragment } from 'react';
// import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

// Page
import { Home, About } from "./pages/pages";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <Route exact path="/" component={Home}/>
          <Switch>
            <Route path="/about/:name" component={About}/>
            <Route path="/about/" component={About}/>
          </Switch>
        </Router>
      </Fragment>
    );
  }
}

export default App;