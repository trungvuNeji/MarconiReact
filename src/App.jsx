import React, { Component } from 'react';

import Splash from './Splash';
import CoreTech from './CoreTech';
import UseCases from './UseCases';
import Footer from './Footer';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <Splash />
        <CoreTech />
        <UseCases />
        <Footer />
      </div>
    );
  }
}


export default App;