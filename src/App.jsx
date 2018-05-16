import React, { Component } from 'react';

import Header from './Header';
import Banner from './Banner';
import Modal from './Modal';
import CoreTech from './CoreTech';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <Header />
        <Banner />
        <Modal />
        <CoreTech />
      </div>
    );
  }
}


export default App;