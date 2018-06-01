import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import i18n from '../../utils/i18n';

import Splash from '../splash/Splash';
import CoreTech from './CoreTech';
import UseCases from './UseCases';
import Developers from '../developers/Developers';

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.checkLanguage = this.checkLanguage.bind(this);
  }

  componentDidMount() {
    document.title = "Marconi - Smart Ethernet Protocol";

    // Switch title of the page upon changing language
    var language = i18n.language;
    if (language === 'cn') {
      document.title = "Marconi - 智能以太网协议";
    }

    // Scroll to top
    window.scrollTo(0,0);

    // Navigate to correct section if coming from other pages
    const { hash } = window.location;
    if (hash !== '') {
      // Push onto callback queue so it runs after the DOM is updated,
      // this is required when navigating from a different page so that
      // the element is rendered on the page before trying to getElementById.
      setTimeout(() => {
        const id = hash.replace('#/', '');
        const element = document.getElementById(id);
        if (element) element.scrollIntoView();
        window.scrollBy(0, -120);
        // offset for the height of the navbar
      }, 0);
    }

    // For the thank you modal
    var subscribe = document.getElementsByClassName('subscribe-modal')[0];
    var thanks = document.getElementsByClassName('thanks-modal')[0];
    var close = document.getElementsByClassName('close')[0];
    // var join = document.getElementsByClassName('joinBtn')[0];

    if (hash === '#/thankyou') {
      window.setTimeout(function() {
        subscribe.classList.add('hide');
        thanks.classList.add('reveal');
        close.click();

        setTimeout(function() {
          close.click();
        }, 2000);

        setTimeout(function() {
          thanks.classList.remove('reveal');
          subscribe.classList.remove('hide');
        }, 3000);
      }, 1000);
    }

    this.checkLanguage();
  }

  checkLanguage() {
    var lng = i18n.language;
    // Fixing Chinese margin
    var bannerHeading = document.querySelector('.banner-heading');
    var navbarNav = document.querySelector('.navbar-nav');
    var bannerText = document.querySelector('.banner-text');
    var textSection = document.querySelector('.text-section');
    var tabSection = document.querySelector('.tabs-section');
    var footerNav = document.querySelector('.footer-nav');
    var blueBtn = document.querySelector('.blue-btn');
    var transparentBtn = document.querySelector('.transparent-btn');
    var textBox = document.querySelector('.text-box');
    var tabContent = document.querySelector('.tab-content');
    var textSize = document.querySelector('.text-size');
    var bottomTextBox = document.querySelector('.bottom-text-box');
    var gdprCN = document.querySelector('.mc-field-group.input-group');

    if (lng === 'cn') {
      bannerHeading.classList.add('banner-heading-cn');
      navbarNav.classList.add('navbar-nav-cn');
      bannerText.classList.add('banner-text-cn');
      textSection.classList.add('text-section-cn');
      tabSection.classList.add('text-section-cn');
      footerNav.classList.add('footer-nav-cn');
      blueBtn.classList.add('blue-btn-cn');
      transparentBtn.classList.add('transparent-btn-cn');
      textBox.classList.add('text-box-cn');
      tabContent.classList.add('tab-content-cn');
      textSize.classList.add('text-size-cn');
      bottomTextBox.classList.add('bottom-text-box-cn');
      gdprCN.classList.add('gdpr-cn');
    } 
    else if (lng === 'en') {
      bannerHeading.classList.remove('banner-heading-cn');
      navbarNav.classList.remove('navbar-nav-cn');
      bannerText.classList.remove('banner-text-cn');
      textSection.classList.remove('text-section-cn');
      tabSection.classList.remove('text-section-cn');
      footerNav.classList.remove('footer-nav-cn');
      blueBtn.classList.remove('blue-btn-cn');
      transparentBtn.classList.remove('transparent-btn-cn');
      textBox.classList.remove('text-box-cn');
      tabContent.classList.remove('tab-content-cn');
      textSize.classList.remove('text-size-cn');
      bottomTextBox.classList.remove('bottom-text-box-cn');
      gdprCN.classList.remove('gdpr-cn');
    }
  }

  render() {
    return (
      <div>
        <Splash checkLanguage={this.checkLanguage}/>
        <CoreTech />
        <UseCases />
        <Developers />
      </div>
    );
  }
}

export default HomePage;