import React, { Component } from 'react';

import logo from "./assets/images/svg/logo.svg";

class Header extends Component {
  constructor(props) {
    super(props);

    this.navigateHome = this.navigateHome.bind(this);
  }

  navigateHome() {
    this.props.history.push('/');
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
                <button onclick="languageToggleMobile()" className="dropbtn">EN <i className="fa fa-caret-down dropbtn"></i></button>
                <div id="myDropdown-mobile" className="dropdown-content">
                  <a href="#">EN</a>
                  <a href="cn.html">中文</a>
                </div>
              </div>
              <a className="navbar-brand" href="index.html"><img src={logo} alt=""/></a>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav pull-right regular-font ">
                <a className="navbar-brand logo-mobile-modal" href="index.html"><img src={logo} alt=""/></a>
                <li><a href="https://docsend.com/view/5zragmb">White Paper</a></li>
                <li><a className="click-btn" href="#developers" data-scroll-nav="0">Developers</a></li>
                <li><a className="click-btn" href="#technology" data-scroll-nav="1">Core Tech</a></li>
                <li><a href="team.html">Team</a></li>
                <li><a href="mailto:hello@marconi.org">Contact</a></li>
                <div id="lang-dropdown">
                  <button onclick="languageToggle()" className="dropbtn">English <i className="fa fa-caret-down dropbtn"></i></button>
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