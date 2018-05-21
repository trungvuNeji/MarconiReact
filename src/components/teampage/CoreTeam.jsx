import React, { Component } from 'react';

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
        <h1 className="black-text regular-font">Core Team</h1>

        <div className="separator">
          <img src="assets/images/separator-image.png" alt="" />
        </div>

        <div className="team-section col-xs-12 no-padding">
          <div className="team-small-box">
            <figure>
              <img src={JongImg} className="profile-pic" alt="" />
            </figure>
            <h3>Jong Kim
              <span className="blue-text">Blockchain</span>
            </h3>
            <p>Bitcoin miner, blockchain developer & investor since 2011. Founder of HashLayer (2014-15) - one of the first multi-blockchain explorers. Led teams at Google that built networking technologies. CS from USC.</p>
            <a href="https://www.linkedin.com/in/jonghyeopkim/" target="_blank"> <i className="fa fa-linkedin"></i></a>
          </div>
          <div className="team-small-box">
            <figure>
              <img src={DarrylImg} className="profile-pic" alt="" />
            </figure>
            <h3>Darryl DeWeese
              <span className="blue-text">Networking</span>
            </h3>
            <p>Led engineering teams that optimize networking and search systems at Google. Also developed software defined radios and network drivers at Qualcomm. CS from USC.</p>
            <a href="https://www.linkedin.com/in/darryl-j-deweese/"> <i className="fa fa-linkedin"></i></a>
          </div>
          <div className="team-small-box">
            <figure>
              <img src={AlbertImg} className="profile-pic" alt="" />
            </figure>
            <h3>Albert Yuen
              <span className="blue-text">Security</span>
            </h3>
            <p>Developed security systems and cryptographic services to secure consumer and internal data at CreditKarma. Software Engineering - UWaterloo.</p>
            <a href="https://www.linkedin.com/in/albert-yuen-/"> <i className="fa fa-linkedin"></i></a>
          </div>
          <div className="team-small-box">
            <figure>
              <img src={DiImg} className="profile-pic" alt="" />
            </figure>
            <h3>Di Wu
              <span className="blue-text">Platform</span>
            </h3>
            <p>Led engineering teams that created big data platforms at Credit Karma and Service Now. Previously, software engineer at tech giants like Microsoft and Intel. Software Engineering - UWaterloo.</p>
            <a href="https://www.linkedin.com/in/di-wu-23351930/"> <i className="fa fa-linkedin"></i></a>
          </div>
        </div>

        <div className="spacer2 col-xs-12"></div>

        <div className="team-section col-xs-12 no-padding">
          <div className="team-small-box">
            <figure>
              <img src={KyleImg} className="profile-pic" alt="" />
            </figure>
            <h3>Kyle Fischer
              <span className="blue-text">Infrastructure</span>
            </h3>
            <p>Built data center infrastructure at Google for scaling high density and wireless networks. CS at Gavilan, BA from UC Berkeley.</p>
            <a href="https://www.linkedin.com/in/kyle-fischer-35169712/"> <i className="fa fa-linkedin"></i></a>
          </div>
          
          <div className="team-small-box">
            <figure>
              <img src={PeterImg} className="profile-pic" alt="" />
            </figure>
            <h3>Peter Lai
              <span className="blue-text">Operations</span>
            </h3>
            <p>Blockchain investor since 2014. Executive and management roles at startups and corporations like Zynga and Microsoft. Computer Engineering from UWaterloo, MBA from Wharton.</p>
            <a href="https://www.linkedin.com/in/paolai/"> <i className="fa fa-linkedin"></i></a>
          </div>
          <div className="team-small-box">
            <figure>
              <img src={ChrisImg} className="profile-pic" alt="" />
            </figure>
            <h3>Chris Lee
              <span className="blue-text">Product & SDK</span>
            </h3>
            <p>Developed APIs and SDKs at Apple for Mac OS X and Objective-C. Led product teams and launched apps at startups like Dropbox. CS from UCSD and MBA from Wharton.</p>
            <a href="https://www.linkedin.com/in/thechrislee/"> <i className="fa fa-linkedin"></i></a>
          </div>
          <div className="empty-div"></div>
        </div>
        
      </div>
    );
  }
}

export default CoreTeam;