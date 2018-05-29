import React, { Component } from 'react';

import { translate, Trans } from 'react-i18next';
// import i18n from '../../utils/i18n';

import Separator from '../../assets/images/separator-image.png';
import GeorgeImg from '../../assets/images/advisor-1.jpg';
import MatthewImg from '../../assets/images/advisor-2.jpg';
import JayImg from '../../assets/images/advisor-3.jpg';
import JoyceImg from '../../assets/images/advisor-4.jpg';
import GlennImg from '../../assets/images/advisor-5.jpg';

class Advisor extends Component {

  render() {
    return (
      <div className="main-box text-center advisor-box team-box padding-top padding-botom">
        <h1 className="black-text regular-font"><Trans>Advisors Title</Trans></h1>

        <div className="separator">
          <img src={Separator} alt="" />
        </div>

        <div className="team-section col-xs-12 no-padding">
          <div className="team-small-box">
            <figure>
              <img src={GeorgeImg} className="profile-pic" alt="" />
            </figure>
            <h3>George Li
              <span className="blue-text"><Trans>George Title</Trans></span></h3>
            <p><Trans>George Description</Trans></p>
            <a href="https://www.linkedin.com/in/ligeorge/"><i className="fab fa-linkedin-in"></i></a>
          </div>
          <div className="team-small-box">
            <figure>
              <img src={MatthewImg} className="profile-pic" alt="" />
            </figure>
            <h3>Matthew Liu
              <span className="blue-text"><Trans>Matt Title</Trans></span></h3>
            <p><Trans>Matt Description</Trans></p>
            <a href="https://www.linkedin.com/in/matthewliu/"> <i className="fab fa-linkedin-in"></i></a>
          </div>
          <div className="team-small-box">
            <figure>
              <img src={JayImg} className="profile-pic" alt="" />
            </figure>
            <h3>Jay Srinivasan, PhD
              <span className="blue-text"><Trans>Jay Title</Trans></span></h3>
            <p><Trans>Jay Description</Trans></p>
            <a href="https://www.linkedin.com/in/jaysrinivasan1/"> <i className="fab fa-linkedin-in"></i></a>
          </div>
          <div className="team-small-box">
            <figure>
              <img src={JoyceImg} className="profile-pic" alt="" />
            </figure>
            <h3>Joyce Kim, PhD
              <span className="blue-text"><Trans>Joyce Title</Trans></span></h3>
            <p><Trans>Joyce Description</Trans></p>
            <a href="https://www.linkedin.com/in/joyce-kim-a8951322/"> <i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>

        <div className="spacer2 col-xs-12"></div>
        
        <div className="team-section col-xs-12 no-padding">
          <div className="team-small-box">
            <figure>
              <img src={GlennImg} className="profile-pic" alt="" />
            </figure>
            <h3>Glenn Entis
              <span className="blue-text"><Trans>Glenn Title</Trans></span></h3>
            <p><Trans i18nKey="Glenn Description">Co-Founded PDI (studio that produced the <em>Shrek</em> and <em>Madagascar</em> series) and VanEdge Capital. CEO of DreamWorks Interactive. Advisor for corporations including Zynga & Citigroup.</Trans></p>
            <a href="https://www.linkedin.com/in/glenn-entis-40066a7/"> <i className="fab fa-linkedin-in"></i></a>
          </div>
          <div className="empty-div"></div>
          <div className="empty-div"></div>
          <div className="empty-div"></div>
        </div>

      </div>
    );
  }
}

export default translate("translations")(Advisor);