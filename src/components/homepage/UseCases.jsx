import React, { Component } from 'react';

import separator from "../../assets/images/separator-image.png";
import adminApps from "../../assets/images/svg/admin-apps.svg";
import virtualizedBlockchain from "../../assets/images/svg/virtualized-blocckchain.svg";
import securityApps from "../../assets/images/svg/security-apps.svg";
import tokenMigration from "../../assets/images/svg/token-migration.svg";
import secureNetworks from "../../assets/images/svg/secure-networks.svg";
import iot from "../../assets/images/svg/iot.svg";

class UseCases extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="content-box  blue-bg">
        <section className="container">
          <div className="row">

            <div className="main-box text-center case-section padding-top padding-botom">
              <h1 className="black-text regular-font">Use Cases</h1>
              <div className="separator"> <img src={separator} alt="" /></div>
              <div className="case-box col-xs-12 no-padding">
                <div className="small-box">
                  <figure>
                    <img src={adminApps} width="67px" height="67px" alt="" />
                  </figure>
                  <h3 className="light-font black-text">Network Admin Apps</h3>
                  <p>Create administrative applications for network load balancing, changing network topology and IOT device management.</p>
                </div>
                <div className="small-box">
                  <figure>
                    <img src={virtualizedBlockchain} width="93px" height="75px" alt="" />
                  </figure>
                  <h3 className="light-font black-text">Virtualized Blockchain</h3>
                  <p>Jump start new blockchains that leverage the Marconi Network for secure block creation and persistence.</p>
                </div>
                <div className="small-box">
                  <figure>
                    <img src={securityApps} width="48px" height="63px" alt="" />
                  </figure>
                  <h3 className="light-font black-text">Security Apps</h3>
                  <p>Create decentralized security apps like Anti-Phishing, Anti-Malware, Intrusion Prevention Systems and dVPNs</p>
                </div>
              </div>

              <div className="spacer col-xs-12"></div>

              <div className="case-box col-xs-12 no-padding">
                <div className="small-box">
                  <figure>
                    <img src={tokenMigration} width="93px" height="70px" alt="" />
                  </figure>
                  <h3 className="light-font black-text">Token to Blockchain Migration</h3>
                  <p>Migrate token projects (i.e. ERC20) to their own chain where the tokens now provide utility by powering the blockchain</p>
                </div>
                <div className="small-box">
                  <figure>
                    <img src={secureNetworks} width="72px" height="72px" alt="" />
                  </figure>
                  <h3 className="light-font black-text">Dynamic Networks</h3>
                  <p>Rapidly deploy dynamic networks in battlefields and disaster recovery areas. Record network activity on a ledger for after action reviews.</p>
                </div>
                <div className="small-box">
                  <figure>
                    <img src={iot} width="116px" height="64px" alt="" />
                  </figure>
                  <h3 className="light-font black-text">IOT Device Management</h3>
                  <p>Develop apps that address security, privacy and connectivity issues for IOT device management.</p>
                </div>
              </div>

            </div>
          </div>
        </section>
      </section>
    );
  }
}

export default UseCases;