import React, { Component } from 'react';

import Header from '../nav/Header';
import CoreTeam from './CoreTeam';
import Advisor from './Advisor';
import Footer from '../nav/Footer';

class TeamPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    document.title = "Marconi - Team";
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