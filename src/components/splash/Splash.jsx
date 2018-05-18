import React, { Component } from 'react';

import Header from '../nav/Header';
import Banner from './Banner';
import Modal from './Modal';

class Splash extends Component  {
  constructor(props) {
    super(props);
  }

  render() {
    const { i18n } = this.props;
    console.log("inside Splash: " + this.props.i18n);
    return (
      <div className="outer-box blue-bg col-xs-12 no-padding">
        <section className="container">
          <div className="row">
            <Header i18n={i18n}/>
            <Banner />
            <Modal />
          </div>
        </section>
      </div>
    );
  }
}

export default Splash;