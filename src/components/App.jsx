// This is where we will combine all of our components and render them based on the path user is on

import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import '../assets/css/all-stylesheets.css';

import Footer from './nav/Footer';
import TeamPage from './teampage/TeamPage';
import HomePage from './homepage/HomePage';

class App extends Component {
  
  render() {

    return(
      <div>
        <Switch>
          <Route path='/team' component={TeamPage} />
          <Route path="/" component={HomePage} />
        </Switch>

        <Footer />
      </div>
    );
  }
}


export default App;