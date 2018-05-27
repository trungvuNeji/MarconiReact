import React, { Component } from 'react';

import { translate, Trans } from 'react-i18next';
import i18n from '../../utils/i18n';

import Separator from '../../assets/images/separator-image.png';
import JongImg from '../../assets/images/core-team-1.png';
import DarrylImg from '../../assets/images/core-team-2.png';
import AlbertImg from '../../assets/images/core-team-3.png';
import DiImg from '../../assets/images/core-team-di.png';
import KyleImg from '../../assets/images/core-team-6.png';
import PeterImg from '../../assets/images/core-team-5.png';
import ChrisImg from '../../assets/images/core-team-4.png';

class CoreTeam extends Component {

  render() {
    return (
      <div className="main-box text-center team-box">
        <h1 className="black-text regular-font"><Trans>Team Bio Title</Trans></h1>

        <div className="separator">
          <img src={Separator} alt="" />
        </div>

        <div className="team-section col-xs-12 no-padding">
          <div className="team-small-box">
            <figure>
              <img src={JongImg} className="profile-pic" alt="" />
            </figure>
            <h3>Jong Kim
              <span className="blue-text"><Trans>Jong Title</Trans></span>
            </h3>
            <p><Trans>Jong Description</Trans></p>
            <a href="https://www.linkedin.com/in/jonghyeopkim/"> <i className="fab fa-linkedin-in"></i></a>
          </div>
          <div className="team-small-box">
            <figure>
              <img src={DarrylImg} className="profile-pic" alt="" />
            </figure>
            <h3>Darryl DeWeese
              <span className="blue-text"><Trans>Darryl Title</Trans></span>
            </h3>
            <p><Trans>Darryl Description</Trans></p>
            <a href="https://www.linkedin.com/in/darryl-j-deweese/"> <i className="fab fa-linkedin-in"></i></a>
          </div>
          <div className="team-small-box">
            <figure>
              <img src={AlbertImg} className="profile-pic" alt="" />
            </figure>
            <h3>Albert Yuen
              <span className="blue-text"><Trans>Albert Title</Trans></span>
            </h3>
            <p><Trans>Albert Description</Trans></p>
            <a href="https://www.linkedin.com/in/albert-yuen-/"> <i className="fab fa-linkedin-in"></i></a>
          </div>
          <div className="team-small-box">
            <figure>
              <img src={DiImg} className="profile-pic" alt="" />
            </figure>
            <h3>Di Wu
              <span className="blue-text"><Trans>Di Title</Trans></span>
            </h3>
            <p><Trans>Di Description</Trans></p>
            <a href="https://www.linkedin.com/in/di-wu-23351930/"> <i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>

        <div className="spacer2 col-xs-12"></div>

        <div className="team-section col-xs-12 no-padding">
          <div className="team-small-box">
            <figure>
              <img src={KyleImg} className="profile-pic" alt="" />
            </figure>
            <h3>Kyle Fischer
              <span className="blue-text"><Trans>Kyle Title</Trans></span>
            </h3>
            <p><Trans>Kyle Description</Trans></p>
            <a href="https://www.linkedin.com/in/kyle-fischer-35169712/"> <i className="fab fa-linkedin-in"></i></a>
          </div>
          
          <div className="team-small-box">
            <figure>
              <img src={PeterImg} className="profile-pic" alt="" />
            </figure>
            <h3>Peter Lai
              <span className="blue-text"><Trans>Peter Title</Trans></span>
            </h3>
            <p><Trans>Peter Description</Trans></p>
            <a href="https://www.linkedin.com/in/paolai/"> <i className="fab fa-linkedin-in"></i></a>
          </div>
          <div className="team-small-box">
            <figure>
              <img src={ChrisImg} className="profile-pic" alt="" />
            </figure>
            <h3>Chris Lee
              <span className="blue-text"><Trans>Chris Title</Trans></span>
            </h3>
            <p><Trans>Chris Description</Trans></p>
            <a href="https://www.linkedin.com/in/thechrislee/"> <i className="fab fa-linkedin-in"></i></a>
          </div>
          <div className="empty-div"></div>
        </div>
        
      </div>
    );
  }
}

export default translate("translations")(CoreTeam);