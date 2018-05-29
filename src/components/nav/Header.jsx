import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
import onClickOutside from 'react-onclickoutside';

import { translate, Trans } from 'react-i18next';
import i18n from '../../utils/i18n';

import logo from "../../assets/images/svg/logo.svg";

// For the language modal
class DropDownModal extends Component {
  render() {
    var width = window.innerWidth;

    if (width <= 767) {
      return (
        <div id="myDropdown-mobile" className="dropdown-content show">
          <button className="en-btn-mobile" onClick={() => this.props.changeLanguage('en')}>EN</button>
          <button className="cn-btn-mobile" onClick={() => this.props.changeLanguage('cn')}>中文</button>
        </div>
      );
    }
    else {
      return (
        <div id="myDropdown" className="dropdown-content show">
          <button className="en-btn" onClick={() => this.props.changeLanguage('en')}>English</button>
          <button className="cn-btn" onClick={() => this.props.changeLanguage('cn')}>中文</button>
        </div>
      );
    }
  }
}

class Language extends Component {
  render() {
    const { lang, width } = this.props;

    if (lang === 'en') {
      if (width > 767) {
        return ('English ');
      } else {
        return ('EN ');
      }
    } else {
      return ('中文 ');
    }
  }
}

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      check: false,
      languageModal: true,
    };

    this.width = window.innerWidth;
    this.navigateHome = this.navigateHome.bind(this);
    this.toggleLanguageModal = this.toggleLanguageModal.bind(this);
    this.toggleState = this.toggleState.bind(this);
    this.changeLanguage = this.changeLanguage.bind(this);
    // this.checkLanguage = this.checkLanguage.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.toggleMobileNav = this.toggleMobileNav.bind(this);
  }

  navigateHome() {
    this.props.history.push('/');
  }

  componentDidMount() {
    // this.checkLanguage();
  }

  // checkLanguage() {
  //   var lng = i18n.language;
  //   // Fixing Chinese margin
  //   var bannerHeading = document.querySelector('.banner-heading');
  //   var navbarNav = document.querySelector('.navbar-nav');
  //   var bannerText = document.querySelector('.banner-text');
  //   var textSection = document.querySelector('.text-section');
  //   var tabSection = document.querySelector('.tabs-section');
  //   var footerNav = document.querySelector('.footer-nav');
  //   var blueBtn = document.querySelector('.blue-btn');
  //   var transparentBtn = document.querySelector('.transparent-btn');
  //   var textBox = document.querySelector('.text-box');
  //   var tabContent = document.querySelector('.tab-content');
  //   var textSize = document.querySelector('.text-size');
  //   var bottomTextBox = document.querySelector('.bottom-text-box');
  //   // var gdprCN = document.querySelector('.mc-field-group.input-group');

  //   if (lng === 'cn') {
  //     bannerHeading.classList.add('banner-heading-cn');
  //     navbarNav.classList.add('navbar-nav-cn');
  //     bannerText.classList.add('banner-text-cn');
  //     textSection.classList.add('text-section-cn');
  //     tabSection.classList.add('text-section-cn');
  //     footerNav.classList.add('footer-nav-cn');
  //     blueBtn.classList.add('blue-btn-cn');
  //     transparentBtn.classList.add('transparent-btn-cn');
  //     textBox.classList.add('text-box-cn');
  //     tabContent.classList.add('tab-content-cn');
  //     textSize.classList.add('text-size-cn');
  //     bottomTextBox.classList.add('bottom-text-box-cn');
  //     // gdprCN.classList.add('gdpr-cn');
  //   } 
  //   else if (lng === 'en') {
  //     bannerHeading.classList.remove('banner-heading-cn');
  //     navbarNav.classList.remove('navbar-nav-cn');
  //     bannerText.classList.remove('banner-text-cn');
  //     textSection.classList.remove('text-section-cn');
  //     tabSection.classList.remove('text-section-cn');
  //     footerNav.classList.remove('footer-nav-cn');
  //     blueBtn.classList.remove('blue-btn-cn');
  //     transparentBtn.classList.remove('transparent-btn-cn');
  //     textBox.classList.remove('text-box-cn');
  //     tabContent.classList.remove('tab-content-cn');
  //     textSize.classList.remove('text-size-cn');
  //     bottomTextBox.classList.remove('bottom-text-box-cn');
  //     // gdprCN.classList.remove('gdpr-cn');
  //   }
  // }

  changeLanguage(lng) {
    i18n.changeLanguage(lng);    
    this.props.checkLanguage();
    this.toggleState();
  }
  
  toggleState() {
    this.setState({ check: !this.state.check });
  }

  toggleLanguageModal() {
    this.setState ({ languageModal: !this.state.languageModal });
  }

  // Close the modal when clicking outsite of it
  handleClickOutside() {
    // Change the default language shown after closing the language modal
    // if (this.width > 767) {    
    //   var dropDown = document.getElementById("myDropdown");
    //   var defaultLanguage = document.getElementsByClassName(this.language + "-btn");
    //   // remove that language from the list
    //   var item = defaultLanguage[1];
    //   item.parentNode.removeChild(item);
    //   // prepend it back onto the list
    //   dropDown.prepend(item);
    // } else {
    //   var dropDownMobile = document.getElementById("myDropdown-mobile");
    //   var defaultLanguageMobile = document.getElementsByClassName(this.language + "-btn-mobile");
  
    //   defaultLanguageMobile[0].parentNode.removeChild(defaultLanguageMobile[0]);
    //   dropDownMobile.prepend(defaultLanguageMobile[0]);
    // }
     
    // Closing modal
    if (!this.state.languageModal) {
      this.toggleLanguageModal();
    }
   
  }

  toggleMobileNav() {
    var mobileNav = document.getElementById('bs-example-navbar-collapse-1');
    mobileNav.classList.toggle("in");
  }

  render() {
    const { language } = i18n;
    
    return (
      <div className="header-box col-xs-12 no-padding">
        <nav className="navbar navbar-default main-navigation">
          <div className="container-fluid" data-scroll-index="3">

            <div className="navbar-header">
              <button 
                type="button" 
                className="navbar-toggle collapsed" 
                id="menuButton"
                onClick={this.toggleMobileNav} 
                // data-toggle="collapse" 
                // data-target="#bs-example-navbar-collapse-1" 
                aria-expanded="false"> 
                <span className="sr-only">close</span> 
                <span className="icon-bar"></span> 
                <span className="icon-bar"></span> 
                <span className="icon-bar"></span> 
              </button>
              <div id="lang-dropdown-mobile">
                <button onClick={this.toggleLanguageModal} className="dropbtn">
                  <Language width={this.width} lang={language} /> 
                  <i className="fa fa-caret-down dropbtn"></i>
                </button>
                {!this.state.languageModal && <DropDownModal changeLanguage={this.changeLanguage}/>}
              </div>
              <Link to='/' className="navbar-brand"><img src={logo} alt=""/></Link>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav pull-right regular-font ">
                <Link className="navbar-brand logo-mobile-modal" to="/"><img src={logo} alt=""/></Link>
                <li><a href="https://docsend.com/view/5zragmb"><Trans>Navigation 1</Trans></a></li>
                <li><a className="click-btn" href="#developers" data-scroll-nav="0"><Trans>Navigation 2</Trans></a></li>
                <li><a className="click-btn" href="#technology" data-scroll-nav="1"><Trans>Navigation 3</Trans></a></li>
                <li><Link to='/team'><Trans>Navigation 4</Trans></Link></li>
                <li><a href="mailto:hello@marconi.org"><Trans>Navigation 5</Trans></a></li>

                <div id="lang-dropdown">
                  <button onClick={this.toggleLanguageModal} className="dropbtn">
                    <Language width={this.width} lang={language} /> 
                    <i className="fa fa-caret-down dropbtn"></i>
                  </button>
                  {!this.state.languageModal && <DropDownModal changeLanguage={this.changeLanguage}/>}
                </div>

              </ul>
              <a href="#" id="close" className="menuClose"><button onClick={this.toggleMobileNav}></button></a>
            </div>

          </div>
        </nav>
      </div>
    );
  }

}

export default translate("translations")(onClickOutside(Header));