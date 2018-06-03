import React, { Component } from 'react';

import { translate, Trans } from 'react-i18next';
import i18n from '../../utils/i18n';

import separator from "../../assets/images/separator-image.png";
import ethernetImg from "../../assets/images/svg/ethernet-level.svg";
import packetImg from "../../assets/images/svg/programmable-packets.svg";
import branchImg from "../../assets/images/svg/branch-chains.svg";

class CoreTech extends Component {

  componentDidMount() {
    // Centering the packet img for mobile viewing
    var width = window.innerWidth;
    var packet = document.getElementsByClassName('packets')[0];
    if (width < 992) {
      packet.classList.remove('img-responsive');
    }
  }

  render() {
    const whitePaperLink = i18n.t('White Paper Link');

    return (
      <section className="content-box js-sticky" data-scroll-index="1"><a id="technology"></a>
        <section className="container">
          <div className="row">
            <div className="main-box text-center technology-box  padding-top padding-botom">
              <h1 className="black-text regular-font"><Trans>M1 Title</Trans></h1>
              <div className="separator">
                <img src={separator} alt="" />
              </div>
              <p className="text-size darkgrey-text">
                <Trans i18nKey="M1 Description">
                  The Marconi Protocol is designed down to the ethernet level and powers a <br /> decentralized networking stack that enhances privacy, security, net neutrality and <br /> upgradability.
                </Trans>
              </p>

              <div className="box-holder col-xs-12 no-padding">
                <div className="image-box col-lg-6 col-md-6 col-sm-12 col-xs-12 pull-left">
                  <img src={ethernetImg} width="455px" height="248px" alt="" />
                </div>
                <div className="text-box col-lg-6 col-md-6 col-sm-12 col-xs-12 pull-right text-left">
                  <h2 className="text-uppercase darkgrey-text regular-font"><Trans>M1 Sub1 Title</Trans></h2>
                  <p><Trans>M1 Sub1 Description</Trans></p>
                </div>
              </div>

              <div className="box-holder col-xs-12 no-padding">
                <div className="image-box col-lg-6 col-md-6 col-sm-12 col-xs-12 pull-right">
                  <img src={packetImg} width="490px" height="100px" alt="" className="packets img-responsive" />
                </div>
                <div className="text-box col-lg-6 col-md-6 col-sm-12 col-xs-12 pull-left text-left">
                  <h2 className="text-uppercase darkgrey-text regular-font"><Trans>M1 Sub2 Title</Trans></h2>
                  <p className="para"><Trans>M1 Sub2 Description</Trans></p>
                </div>
              </div>

              <div className="box-holder col-xs-12 no-padding">
                <div className="image-box col-lg-6 col-md-6 col-sm-12 col-xs-12 pull-left">
                  <img src={branchImg} width="445px" height="241px" alt="" />
                </div>
                <div className="text-box col-lg-6 col-md-6 col-sm-12 col-xs-12 pull-right text-left">
                  <h2 className="text-uppercase darkgrey-text regular-font"><Trans>M1 Sub3 Title</Trans></h2>
                  <p><Trans>M1 Sub3 Description</Trans></p>
                </div>
              </div>

              <div className="bottom-text-box col-xs-12">
                <p><Trans>Learn More Prompt</Trans></p>
                <div className="blue-btn btn1">
                  <a href={whitePaperLink}><Trans>Learn More CTA</Trans></a> 
                </div>
              </div>

            </div>
          </div>
        </section>
      </section>
    );
  }
}

export default translate("translations")(CoreTech);