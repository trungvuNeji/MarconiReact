import React, { Component } from 'react';

import { translate, Trans } from 'react-i18next';
// import i18n from '../../utils/i18n';

import separator from "../../assets/images/separator-image.png";
import adminApps from "../../assets/images/svg/admin-apps.svg";
import virtualizedBlockchain from "../../assets/images/svg/virtualized-blocckchain.svg";
import securityApps from "../../assets/images/svg/security-apps.svg";
import tokenMigration from "../../assets/images/svg/token-migration.svg";
import secureNetworks from "../../assets/images/svg/secure-networks.svg";
import iot from "../../assets/images/svg/iot.svg";

class UseCases extends Component {

  render() {
    return (
      <section className="content-box  blue-bg">
        <section className="container">
          <div className="row">

            <div className="main-box text-center case-section padding-top padding-botom">
              <h1 className="black-text regular-font"><Trans>M2 Title</Trans></h1>
              <div className="separator"> <img src={separator} alt="" /></div>
              <div className="case-box col-xs-12 no-padding">
                <div className="small-box">
                  <figure>
                    <img src={adminApps} width="67px" height="67px" alt="" />
                  </figure>
                  <h3 className="light-font black-text"><Trans>M2 Sub5 Title</Trans></h3>
                  <p><Trans>M2 Sub5 Description</Trans></p>
                </div>
                <div className="small-box">
                  <figure>
                    <img src={virtualizedBlockchain} width="93px" height="75px" alt="" />
                  </figure>
                  <h3 className="light-font black-text"><Trans>M2 Sub2 Title</Trans></h3>
                  <p><Trans>M2 Sub2 Description</Trans></p>
                </div>
                <div className="small-box">
                  <figure>
                    <img src={securityApps} width="48px" height="63px" alt="" />
                  </figure>
                  <h3 className="light-font black-text"><Trans>M2 Sub4 Title</Trans></h3>
                  <p><Trans>M2 Sub4 Description</Trans></p>
                </div>
              </div>

              <div className="spacer col-xs-12"></div>

              <div className="case-box col-xs-12 no-padding">
                <div className="small-box">
                  <figure>
                    <img src={tokenMigration} width="93px" height="70px" alt="" />
                  </figure>
                  <h3 className="light-font black-text"><Trans>M2 Sub1 Title</Trans></h3>
                  <p><Trans>M2 Sub1 Description</Trans></p>
                </div>
                <div className="small-box">
                  <figure>
                    <img src={secureNetworks} width="72px" height="72px" alt="" />
                  </figure>
                  <h3 className="light-font black-text"><Trans>M2 Sub3 Title</Trans></h3>
                  <p><Trans>M2 Sub3 Description</Trans></p>
                </div>
                <div className="small-box">
                  <figure>
                    <img src={iot} width="116px" height="64px" alt="" />
                  </figure>
                  <h3 className="light-font black-text"><Trans>M2 Sub6 Title</Trans></h3>
                  <p><Trans>M2 Sub6 Description</Trans></p>
                </div>
              </div>

            </div>
          </div>
        </section>
      </section>
    );
  }
}

export default translate("translations")(UseCases);