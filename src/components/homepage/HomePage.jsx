import React, { Component } from 'react';

import Splash from '../splash/Splash';
import CoreTech from './CoreTech';
import UseCases from './UseCases';
import Developers from '../developers/Developers';

class HomePage extends Component {
  componentDidMount() {
    document.title = "Marconi - Smart Ethernet Protocol";
    window.scrollTo(0,0);
  }

  render() {
    return (
      <div>
        <Splash />
        <CoreTech />
        <UseCases />
        <Developers />
      </div>
    );
  }
}

export default HomePage;