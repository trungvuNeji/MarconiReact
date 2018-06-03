import React, { Component } from 'react';

import Header from '../nav/Header';
import Banner from './Banner';
import Modal from './Modal';

class Splash extends Component  {

  componentDidMount() {
    document.addEventListener('scroll', this.addSticky);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.addSticky);
  }

  addSticky() {
    var navBar = document.querySelector('.header-box');
    const fromTop = window.scrollY;

    if (fromTop >= 560) {
      navBar.classList.add('sticky');
    } else {
      navBar.classList.remove('sticky');
    }
  }

  render() {
    
    return (
      <div className="outer-box blue-bg col-xs-12 no-padding">
        <section className="container">
          <div className="row">
            <Header checkLanguage={this.props.checkLanguage}/>
            <Banner toggleJoinModal={this.props.toggleJoinModal}/>
            <Modal />
          </div>
        </section>
      </div>
    );
  }
}

export default Splash;