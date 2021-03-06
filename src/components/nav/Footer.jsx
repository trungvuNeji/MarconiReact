import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { translate, Trans } from 'react-i18next';
import i18n from '../../utils/i18n';

import logo from "../../assets/images/svg/logo.svg";
import email from "../../assets/images/svg/email-icon.svg";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      check: false
    };

    this.toggleState = this.toggleState.bind(this);
  }

  toggleState() {
    this.setState({ check: !this.state.check });
  }

  render() {
    const whitePaperLink = i18n.t('White Paper Link');

    return(
      <footer className="footer-section blue-bg col-xs-12 no-padding">
        <section className="container">
          <div className="row">

            <div className="footer-box col-xs-12 text-center">
              <div className="footer-logo pull-left">
                <Link to="/">
                  <img src={logo} alt="" />
                  <div className="copyright">
                    © 2018 Marconi Foundation
                  </div>
                </Link>
                <div className="legal-links">
                  <Link to="/privacy">Privacy</Link> • <Link to="/terms">Terms of Service</Link>
                </div>
                
              </div>
              <ul className="footer-nav">
                <li><a href={whitePaperLink}><Trans>Navigation 1</Trans></a></li>
                <li><a href="#developers" data-scroll-nav="0" className="click-btn"><Trans>Navigation 2</Trans></a></li>
                <li><a href="#technology" data-scroll-nav="1" className="click-btn"><Trans>Navigation 3</Trans></a></li>
                <li><Link to="/team"><Trans>Navigation 4</Trans></Link></li>
              </ul>
              <span className="pull-right">
                <img src={email} width="22px" height="17px" alt="" />
                <a href="mailto:hello@marconi.org">hello@marconi.org</a>
              </span>
            </div>
          </div>
        </section>
      </footer>
    );
  }
}

export default translate("translations")(Footer);