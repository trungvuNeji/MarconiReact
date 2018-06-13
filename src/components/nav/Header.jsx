import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
          <button className="cn-btn-mobile" onClick={() => this.props.changeLanguage('ja')}>日本語</button>
        </div>
      );
    }
    else {
      return (
        <div id="myDropdown" className="dropdown-content show">
          <button className="en-btn" onClick={() => this.props.changeLanguage('en')}>English</button>
          <button className="cn-btn" onClick={() => this.props.changeLanguage('cn')}>中文</button>
          <button className="cn-btn" onClick={() => this.props.changeLanguage('ja')}>日本語</button>
        </div>
      );
    }
  }
}

class Language extends Component {
  render() {
    const { lang, width } = this.props;

    if (lang === 'cn') {
      return ('中文 ');
    } 
    else if (lang === 'ja'){
      return('日本語 ');
    }
    else {
      if (width > 767) {
        return ('English ');
      } else {
        return ('EN ');
      }
    } 
  }
}

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      check: false,
      languageModal: false,
    };

    this.width = window.innerWidth;
    this.navigateHome = this.navigateHome.bind(this);
    this.toggleLanguageModal = this.toggleLanguageModal.bind(this);
    this.toggleState = this.toggleState.bind(this);
    this.changeLanguage = this.changeLanguage.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.toggleMobileNav = this.toggleMobileNav.bind(this);
  }

  navigateHome() {
    this.props.history.push('/');
  }

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
    // Closing modal
    if (this.state.languageModal) {
      this.toggleLanguageModal();
    }
  }

  toggleMobileNav() {
    var mobileNav = document.getElementById('bs-example-navbar-collapse-1');
    mobileNav.classList.toggle("in");
  }

  render() {
    const { language } = i18n;
    const whitePaperLink = i18n.t('White Paper Link');
    
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
                {this.state.languageModal && <DropDownModal changeLanguage={this.changeLanguage}/>}
              </div>
              <Link to='/' className="navbar-brand"><img src={logo} alt=""/></Link>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav pull-right regular-font ">
                <Link className="navbar-brand logo-mobile-modal" to="/"><img src={logo} alt=""/></Link>
                <li><a className="bold-font" href={whitePaperLink}><Trans>Navigation 1</Trans></a></li>
                <li>
                  <a className="click-btn nav-btn" href="#developers" onClick={this.toggleMobileNav}><Trans>Navigation 2</Trans></a>
                </li>
                <li>
                  <a className="click-btn nav-btn" href="#technology" onClick={this.toggleMobileNav}><Trans>Navigation 3</Trans></a>
                </li>
                <li><Link to='/team'><Trans>Navigation 4</Trans></Link></li>
                <li><a href="mailto:hello@marconi.org"><Trans>Navigation 5</Trans></a></li>
                <li>
                  <div id="lang-dropdown">
                    <button onClick={this.toggleLanguageModal} className="dropbtn">
                      <Language width={this.width} lang={language} /> 
                      <i className="fa fa-caret-down dropbtn"></i>
                    </button>
                    {this.state.languageModal && <DropDownModal changeLanguage={this.changeLanguage}/>}
                  </div>
                </li>
              </ul>
              <a id="close-nav" className="menuClose"><button onClick={this.toggleMobileNav}><i className="fa fa-times-circle"></i></button></a>
            </div>

          </div>
        </nav>
      </div>
    );
  }

}

export default translate("translations")(onClickOutside(Header));