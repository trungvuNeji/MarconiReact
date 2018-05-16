import React from 'react';

class CoreTech extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main-box text-center technology-box padding-top padding-botom">
        <h1 className="black-text regular-font">Core Technology</h1>
        <div className="separator">
          <img src="assets/images/separator-image.png" alt="" />
        </div>
        <p className="text-size darkgrey-text">
          The Marconi protocol is designed down to the ethernet level and powers a
          <br/> decentralized networking stack that provides privacy, security, net neutrality and
          <br/> upgradability
        </p>

        <div className="box-holder col-xs-12 no-padding">
          <div className="text-box col-lg-6 col-md-6 col-sm-12 col-xs-12 pull-right text-left">
            <h2 className="text-uppercase darkgrey-text regular-font">ethernet-level <br/> encryption</h2>
            <p>Secure communication pipes established at Layer 2 of the OSI model provide packet-level encryption that’s more secure than just using SSL and TLS</p>
          </div>
          <div className="image-box col-lg-6 col-md-6 col-sm-12 col-xs-12 pull-left">
            <img src="assets/images/svg/ethernet-level.svg" width="455px" height="248px" alt="" />
          </div>
        </div>

        <div className="box-holder col-xs-12 no-padding">
          <div className="text-box col-lg-6 col-md-6 col-sm-12 col-xs-12 pull-left text-left">
            <h2 className="text-uppercase darkgrey-text regular-font">Programmable Packets</h2>
            <p className="para">Decentralized apps with direct access to network packets provide network administration and security functionality without expensive custom hardware</p>
          </div>
          <div className="image-box col-lg-6 col-md-6 col-sm-12 col-xs-12 pull-right">
            <img src="assets/images/svg/programmable-packets.svg" width="490px" height="100px" alt="" className="packets img-responsive" />
          </div>
        </div>

        <div className="box-holder col-xs-12 no-padding">
          <div className="text-box col-lg-6 col-md-6 col-sm-12 col-xs-12 pull-right text-left">
            <h2 className="text-uppercase darkgrey-text regular-font">Branch Chains</h2>
            <p>Branchable blockchains enable the creation of new decentralized networks without traditional infrastructure that's controlled by just a few entities in any given region</p>
          </div>
          <div className="image-box col-lg-6 col-md-6 col-sm-12 col-xs-12 pull-left">
            <img src="assets/images/svg/branch-chains.svg" width="445px" height="241px" alt="" />
          </div>
        </div>

        <div className="bottom-text-box col-xs-12">
          <p>Learn more about the Marconi Platform</p>
          <div className="blue-btn btn1">
            <a href="https://docsend.com/view/5zragmb">Read White Paper</a> 
          </div>
        </div>
      </div>
    );
  }
}

export default CoreTech;