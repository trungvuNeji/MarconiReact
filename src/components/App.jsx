// This is where we will combine all of our components and render them based on the path user is on

import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';

import '../assets/css/all-stylesheets.css';

import Splash from './splash/Splash';
import CoreTech from './homepage/CoreTech';
import UseCases from './homepage/UseCases';
import Developers from './developers/Developers';
import Footer from './nav/Footer';
import Team from './teampage/Team';

class App extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return(
      <div>
        <Route path="/" component={Splash} />
        <CoreTech />
        <UseCases />
        <Developers />
        <Footer />
        <Route exact path='/team' component={Team} />
      </div>
    );
  }
}


export default App;