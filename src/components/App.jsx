// This is where we will combine all of our components and render them based on the path user is on

import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { translate, Trans } from 'react-i18next';

import '../assets/css/all-stylesheets.css';

import HomPage from './homepage/HomePage';
import Footer from './nav/Footer';
import TeamPage from './teampage/TeamPage';
import HomePage from './homepage/HomePage';

class App extends Component {
  constructor(props) {
    super(props);
  }
  
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