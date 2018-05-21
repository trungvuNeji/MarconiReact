import React, { Component } from 'react';

import logo from "../../assets/images/svg/logo.svg";
import email from "../../assets/images/svg/email-icon.svg";

class Footer extends Component {
  constructor(props) {
    super(props);

    this.scrollTop = this.scrollTop.bind(this);
  }

  scrollTop() {
    window.scrollTo(0,0);
  }

  render() {
    return(
      <footer className="footer-section blue-bg col-xs-12 no-padding">
        <section className="container">
          <div className="row">

            <div className="footer-box col-xs-12 text-center">
              <div className="footer-logo pull-left">
                <a href="#top-page" data-scroll-nav="3">
                  <img src={logo} alt="" />
                  <div className="copyright">
                    © 2018 Marconi Foundation
                  </div>
                </a>
              </div>
              <ul>
                <li><a href="https://docsend.com/view/5zragmb">White Paper</a></li>
                <li><a href="#developers" data-scroll-nav="0" className="click-btn">Developers</a></li>
                <li><a href="#technology" data-scroll-nav="1" className="click-btn">Core Tech</a></li>
                <li><a href="team.html">Team</a></li>
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

export default Footer;