import React, { Component } from 'react';

import { translate, Trans } from 'react-i18next';
import i18n from '../../utils/i18n';

import Header from '../nav/Header';
import CoreTeam from './CoreTeam';
import Advisor from './Advisor';

class TeamPage extends Component {

  componentDidMount() {
    document.title = "Marconi - Team";

    var language = i18n.language;
    if (language === 'cn') {
      document.title = "Marconi - 团队";
    }

    window.scrollTo(0,0);
    
    var navBar = document.querySelector('.header-box');
    navBar.classList.add('sticky');
  }

  render() {
    return (
      <div>
        <div className="outer-box blue-bg col-xs-12 no-padding">
          <section className="container">
            <div className="row">
              <Header />
            </div>
          </section>
        </div>
        <section className="content-box padding-top team-padding">
          <section className="container">
            <div className="row">
              <CoreTeam />
              <Advisor />
            </div>
          </section>
        </section>
      </div>
    );
  }
}

export default TeamPage;