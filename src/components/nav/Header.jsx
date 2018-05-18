import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Trans } from 'react-i18next';

import i18n from '../../utils/i18n';

import logo from "../../assets/images/svg/logo.svg";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      check: false
    };
    // this.i18n = this.props.i18n;

    this.navigateHome = this.navigateHome.bind(this);
    this.languageToggleMobile = this.languageToggleMobile.bind(this);
    this.changeLanguage = this.changeLanguage.bind(this);
  }

  navigateHome() {
    this.props.history.push('/');
  }

  languageToggleMobile() {

  }

  changeLanguage(lng) {
    i18n.changeLanguage(lng);
    this.setState({ check: !this.state.check });
  }

  render() {

    return (
      <div className="header-box col-xs-12 no-padding">
        <nav className="navbar navbar-default main-navigation">
          <div className="container-fluid">

            <div className="navbar-header">
              <button 
                type="button" 
                className="navbar-toggle collapsed" 
                id="menuButton" 
                data-toggle="collapse" 
                data-target="#bs-example-navbar-collapse-1" 
                aria-expanded="false"> 
                <span className="sr-only">close</span> 
                <span className="icon-bar"></span> 
                <span className="icon-bar"></span> 
                <span className="icon-bar"></span> 
              </button>
              <div id="lang-dropdown-mobile">
                <button onClick={this.languageToggleMobile} className="dropbtn">EN <i className="fa fa-caret-down dropbtn"></i></button>
                <div id="myDropdown-mobile" className="dropdown-content">
                  <a href="#">EN</a>
                  <a href="cn.html">中文</a>
                </div>
              </div>
              <Link to='/' className="navbar-brand"><img src={logo} alt=""/></Link>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav pull-right regular-font ">
                <Link className="navbar-brand logo-mobile-modal" to="/"><img src={logo} alt=""/></Link>
                <li><a href="https://docsend.com/view/5zragmb">White Paper</a></li>
                <li><a className="click-btn" href="#developers" data-scroll-nav="0">Developers</a></li>
                <li><a className="click-btn" href="#technology" data-scroll-nav="1">Core Tech</a></li>
                <li><a href="team.html"><Trans>Team</Trans></a></li>
                <li><a href="mailto:hello@marconi.org">Contact</a></li>
                <div id="lang-dropdown">
                  <button onClick={this.languageToggleMobile} className="dropbtn">English <i className="fa fa-caret-down dropbtn"></i></button>
                    <button onClick={() => this.changeLanguage('en')}>English</button>
                    <button onClick={() => this.changeLanguage('cn')}>中文</button>
                  <div id="myDropdown" className="dropdown-content">
                    <a href="#">English</a>
                    <a href="cn.html">中文</a>
                  </div>
                </div>
              </ul>
              <a href="#" id="close" className="menuClose"></a>
            </div>

          </div>
        </nav>
      </div>
    );
  }

}

export default Header;