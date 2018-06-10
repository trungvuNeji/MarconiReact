// This is where we will combine all of our components and render them based on the path user is on

import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import '../assets/css/all-stylesheets.css';

import Footer from './nav/Footer';
import TeamPage from './teampage/TeamPage';
import HomePage from './homepage/HomePage';
import TermsPage from './extrapage/TermsPage';
import PrivacyPage from './extrapage/PrivacyPage';

class App extends Component {
  
  render() {

    return(
      <div>
        <Switch>
          <Route path='/team' component={TeamPage} />
          <Route path="/terms" component={TermsPage} />
          <Route path="/privacy" component={PrivacyPage} />
          <Route path="/" component={HomePage} />
        </Switch>

        <Footer />
        <div className="backdrop"></div>
      </div>
    );
  }
}


export default App;
