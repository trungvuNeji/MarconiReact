// This is where we will combine all of our components

import React, { Component } from 'react';
import '../assets/css/all-stylesheets.css';

import Splash from './splash/Splash';
import CoreTech from './homepage/CoreTech';
import UseCases from './homepage/UseCases';
import Developers from './developers/Developers';
import Footer from './nav/Footer';

class App extends Component {
  
  render() {
    return(
      <div>
        <Splash />
        <CoreTech />
        <UseCases />
        <Developers />
        <Footer />
      </div>
    );
  }
}


export default App;