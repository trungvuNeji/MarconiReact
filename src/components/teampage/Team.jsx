import React, { Component } from 'react';

import CoreTeam from './CoreTeam';
import Advisor from './Advisor';

class Team extends Component {

  render() {
    return (
      <div class="outer-box blue-bg col-xs-12 no-padding">
        <section class="container">
          <div class="row">
            <CoreTeam />
            <Advisor />
          </div>
        </section>
      </div>
    );
  }
}

export default Team;