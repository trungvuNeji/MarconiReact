import React, { Component } from 'react';

import Header from './Header';
import Banner from './Banner';
import Modal from './Modal';

class Splash extends Component  {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="outer-box blue-bg col-xs-12 no-padding">
        <section className="container">
          <div className="row">
            <Header />
            <Banner />
            <Modal />
          </div>
        </section>
      </div>
    );
  }
}

export default Splash;