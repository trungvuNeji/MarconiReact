import React, { Component } from 'react';

import { translate, Trans } from 'react-i18next';

import Separator from '../../assets/images/separator-image.png';

class Investor extends Component {
  render() {
    return (
      <div className="main-box text-center advisor-box investor-box team-box padding-botom">
        <h1 className="black-text regular-font"><Trans>Investors Title</Trans></h1>
        <div className="separator">
          <img src={Separator} alt="" />
        </div>
        <div className="investor">
          <div className="investor-img">
            <div className="img1"></div>
            <div className="overlay1"></div>
          </div>
          <div className="investor-img">
            <div className="img2"></div>
            <div className="overlay2"></div>
          </div>
        </div>

      </div>
    );
  }
}

export default translate("translations")(Investor);