import React, { Component } from 'react';

import Splash from '../splash/Splash';
import CoreTech from './CoreTech';
import UseCases from './UseCases';
import Developers from '../developers/Developers';

class HomePage extends Component {
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