import React, { Component } from 'react';

import { translate, Trans } from 'react-i18next';
// import i18n from '../../utils/i18n';

import heroImage from "../../assets/images/svg/heroimage.svg";

class Banner extends Component {

  render() {
    return (
      <div className="banner col-xs-12 no-padding" id="top-page" >
        <div className="v-align">
          <div className="banner-text col-lg-6 col-md-7 col-sm-12 col-xs-12 no-padding">
            <h1 className="banner-heading"><Trans>Hero Title</Trans></h1>
            <p>
              <Trans>Hero Description</Trans>
              <span className="text-uppercase bold-font"><Trans>CTA Prompt</Trans></span>
            </p>
            <div className="blue-btn btn1 joinBtn" data-toggle="modal" data-target="#myModal"><a href="#"><Trans>CTA 1</Trans></a> 
            </div>
            
            <div className="transparent-btn btn2"><a className="click-btn" href="#samplecode" data-scroll-nav="2"><Trans>CTA 2</Trans></a> 
            </div>
          </div>

          <figure className="banner-image col-lg-6 col-md-5 col-sm-12 col-xs-12">
            <img src={heroImage} width="630px" height="auto" alt="" />
          </figure>
        </div>
      </div>
    );
  }
}

export default translate("translations")(Banner);