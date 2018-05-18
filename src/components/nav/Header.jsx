import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Trans } from 'react-i18next';
import onClickOutside from 'react-onclickoutside';

import i18n from '../../utils/i18n';

import logo from "../../assets/images/svg/logo.svg";

class DropDownModal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var width = window.innerWidth;

    if (width <= 767) {
      return (
        <div id="myDropdown-mobile" className="dropdown-content show">
          <button onClick={() => this.props.changeLanguage('en')}>EN</button>
          <button onClick={() => this.props.changeLanguage('cn')}>中文</button>
        </div>
      );
    }
    else {
      return (
        <div id="myDropdown" className="dropdown-content show">
          <button onClick={() => this.props.changeLanguage('en')}>English</button>
          <button onClick={() => this.props.changeLanguage('cn')}>中文</button>
        </div>
      );
    }
  }
}

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      check: false,
      modalHidden: true
    };

    this.navigateHome = this.navigateHome.bind(this);
    this.toggleHidden = this.toggleHidden.bind(this);
    this.toggleState = this.toggleState.bind(this);
    this.changeLanguage = this.changeLanguage.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0,0);
  }

  // componentWillMount() {
  //   document.addEventListener('mousedown', this.handleClickOutside, false);
  // }

  // componentWillUnMount() {
  //   document.removeEventListener('mousedown', this.handleClickOutside, false);
  // }

  navigateHome() {
    this.props.history.push('/');
  }

  changeLanguage(lng) {
    i18n.changeLanguage(lng);
    this.toggleState();
  }

  toggleHidden() {
    this.setState ({ modalHidden: !this.state.modalHidden });
  }

  toggleState() {
    this.setState({ check: !this.state.check });
  }

  handleClickOutside() {
    if (!this.state.modalHidden) {
      this.toggleHidden();
    }
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
                <button onClick={this.toggleHidden} className="dropbtn">EN <i className="fa fa-caret-down dropbtn"></i></button>
                {!this.state.modalHidden && <DropDownModal changeLanguage={this.changeLanguage}/>}
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
                  <button onClick={this.toggleHidden} className="dropbtn">English <i className="fa fa-caret-down dropbtn"></i></button>
                  {!this.state.modalHidden && <DropDownModal changeLanguage={this.changeLanguage}/>}
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

export default onClickOutside(Header);