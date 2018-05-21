import React, { Component } from 'react';

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
        <h1 className="black-text regular-font">Advisors</h1>

        <div className="separator">
          <img src={Separator} alt="" />
        </div>

        <div className="team-section col-xs-12 no-padding">
          <div className="team-small-box">
            <figure>
              <img src={GeorgeImg} className="profile-pic" alt="" />
            </figure>
            <h3>George Li
              <span className="blue-text">CEO of WeTrust</span></h3>
            <p>Co-Founder of WeTrust - blockchain insurance platform backed by Vitalik Buterin, Bo Shen and Fenbushi Capital. Previously at Google and McKinsey. MS from Stanford.</p>
            <a href="https://www.linkedin.com/in/ligeorge/"><i className="fab fa-linkedin-in"></i></a>
          </div>
          <div className="team-small-box">
            <figure>
              <img src={MatthewImg} className="profile-pic" alt="" />
            </figure>
            <h3>Matthew Liu
              <span className="blue-text">Co-Founder of Origin</span></h3>
            <p>Co-Founder of Origin - protocol for creating sharing economy marketplaces using Ethereum and IPFS. Backed by Pantera Capital. Previously at Google. EE and MS from Stanford.</p>
            <a href="https://www.linkedin.com/in/matthewliu/"> <i className="fab fa-linkedin-in"></i></a>
          </div>
          <div className="team-small-box">
            <figure>
              <img src={JayImg} className="profile-pic" alt="" />
            </figure>
            <h3>Jay Srinivasan, PhD
              <span className="blue-text">CEO of Spoke</span></h3>
            <p>Co-founded Appurify - mobile platform (acquired by Google) and Spoke - workplace AI. Accomplished researcher in microprocessor reliability. EE from IIT, PhD from UI Urbana-Champaign.</p>
            <a href="https://www.linkedin.com/in/jaysrinivasan1/"> <i className="fab fa-linkedin-in"></i></a>
          </div>
          <div className="team-small-box">
            <figure>
              <img src={JoyceImg} className="profile-pic" alt="" />
            </figure>
            <h3>Joyce Kim, PhD
              <span className="blue-text">ML & IOT Researcher</span></h3>
            <p>Pioneering researcher and author in machine learning comfort prediction using IOT. Previously, researcher in smart grids at Berkeley Labs. Engineering from UWaterloo, PhD from UCBerkeley.</p>
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
              <span className="blue-text">Serial Entrepreneur</span></h3>
            <p>Co-Founded PDI (studio that produced the <em>Shrek</em> and <em>Madagascar</em> series) and VanEdge Capital. CEO of DreamWorks Interactive. Advisor for corporations including Zynga & Citigroup.</p>
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

export default Advisor;