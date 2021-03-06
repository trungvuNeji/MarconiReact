import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import i18n from '../../utils/i18n';

import Splash from '../splash/Splash';
import CoreTech from './CoreTech';
import UseCases from './UseCases';
import Developers from '../developers/Developers';

var COUNT = 0;

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.checkLanguage = this.checkLanguage.bind(this);
    this.toggleJoinModal = this.toggleJoinModal.bind(this);
    this.toggleBackDrop = this.toggleBackDrop.bind(this);
  }

  async componentDidMount() {
    document.title = "Marconi - Smart Ethernet Protocol";
    this.updateTitleContent();

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
        // var x = -100;
        // if (window.innerWidth <= 767) return x = -130;
        window.scrollBy(0, -130);
        // offset for the height of the navbar
      }, 0);
    }

    // Changing language based on user's preference
    if (COUNT === 0) {
      await this.redirect();
    }
    await this.checkLanguage();
    // Scroll to top
    window.scrollTo(0,0);
  }

  redirect() {
    // Grab user's language preference
    var language = navigator.language || navigator.browserLanguage;
    // Need to do this because sometimes user has en-US as default language
    language = language.split('-')[0];

    if (language === 'zh') { // Chinese
      this.toggleLanguage('cn');
      COUNT++;
    } else if (language === 'ja') { // Japanese
      this.toggleLanguage('ja');
      COUNT++;
    }
  }

  toggleLanguage(lang) {
    i18n.changeLanguage(lang);
  }

  updateTitleContent() {
    // Switch title of the page upon changing language
    var language = i18n.language;
    if (language === 'cn') {
      document.title = "Marconi - 智能以太网协议";
      document.getElementsByTagName("META")[2].content = "新的区块链协议，使用可编程的数据包提高安全性、私密性和网络中立性";
    }
    else if ( language === 'ja') {
      document.title = "Marconi - スマートイーサネットプロトコル";
      document.getElementsByTagName("META")[2].content = "プログラム可能なパケットを利用し、セキュリティ、プライバシー、ネットの中立性を強化する新しいブロックチェーンプロトコル";
    }
  }

  toggleJoinModal() {
    var modal = document.querySelector('.modal');
    modal.classList.toggle('in');
    this.toggleBackDrop();
  }

  toggleBackDrop() {
    var backdrop = document.querySelector('.backdrop');
    backdrop.classList.add('modal-backdrop', 'fade', 'in');
  }

  checkLanguage() {
    var lang = i18n.language;
    // Fixing Chinese margin
    var bannerHeading = document.querySelector('.banner-heading');
    var navbarNav = document.querySelector('.navbar-nav');
    var bannerText = document.querySelector('.banner-text');
    var textSection = Array.from(document.querySelectorAll('.text-section'));
    var tabSection = document.querySelector('.tabs-section');
    var footerNav = document.querySelector('.footer-nav');
    var blueBtn = Array.from(document.querySelectorAll('.blue-btn'));
    var transparentBtn = document.querySelector('.transparent-btn');
    var textBox = document.querySelector('.text-box');
    var tabContent = document.querySelector('.tab-content');
    var textSize = document.querySelector('.text-size');
    var bottomTextBox = document.querySelector('.bottom-text-box');
    var gdprCN = document.querySelector('.mc-field-group.input-group');

    if (lang === 'cn') {
      bannerHeading.classList.add('banner-heading-cn');
      navbarNav.classList.add('navbar-nav-cn');
      bannerText.classList.add('banner-text-cn');
      tabSection.classList.add('text-section-cn');
      footerNav.classList.add('footer-nav-cn');
      transparentBtn.classList.add('transparent-btn-cn');
      textBox.classList.add('text-box-cn');
      tabContent.classList.add('tab-content-cn');
      textSize.classList.add('text-size-cn');
      bottomTextBox.classList.add('bottom-text-box-cn');
      gdprCN.classList.add('gdpr-cn');
      textSection.forEach(section => {
        section.classList.add('text-section-cn');
      });
      blueBtn.forEach(btn => {
        btn.classList.add('blue-btn-cn');
      });
      // blueBtn.classList.add('blue-btn-cn');
    } 
    else if (lang === 'en' || 'ja') {
      bannerHeading.classList.remove('banner-heading-cn');
      navbarNav.classList.remove('navbar-nav-cn');
      bannerText.classList.remove('banner-text-cn');
      tabSection.classList.remove('text-section-cn');
      footerNav.classList.remove('footer-nav-cn');
      // blueBtn.classList.remove('blue-btn-cn');
      transparentBtn.classList.remove('transparent-btn-cn');
      textBox.classList.remove('text-box-cn');
      tabContent.classList.remove('tab-content-cn');
      textSize.classList.remove('text-size-cn');
      bottomTextBox.classList.remove('bottom-text-box-cn');
      gdprCN.classList.remove('gdpr-cn');
      textSection.forEach(section => {
        section.classList.remove('text-section-cn');
      });
      blueBtn.forEach(btn => {
        btn.classList.remove('blue-btn-cn');
      });
    }
  }

  render() {
    
    return (
      <div>
        <Splash  
          checkLanguage={this.checkLanguage} 
          toggleJoinModal={this.toggleJoinModal}
          />
        <CoreTech />
        <UseCases />
        <Developers toggleJoinModal={this.toggleJoinModal}/>
      </div>
    );
  }
}

export default HomePage;