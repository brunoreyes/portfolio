import React, { Component } from 'react';
import { HashRouter as Router, Redirect, Switch } from 'react-router-dom';
import './App.css';
import HomePage from '../HomePage/HomePage';
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Redirect exact from="/" to="/home" />
            <HomePage />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
