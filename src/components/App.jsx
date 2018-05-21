// This is where we will combine all of our components and render them based on the path user is on

import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';

import '../assets/css/all-stylesheets.css';

import HomPage from './homepage/HomePage';
import Footer from './nav/Footer';
import Team from './teampage/Team';
import HomePage from './homepage/HomePage';

class App extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return(
      <div>
        <Route exact path="/" component={HomePage} />

        <Route exact path='/team' component={Team} />
        
        <Footer />
      </div>
    );
  }
}


export default App;