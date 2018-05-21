import React, { Component } from 'react';

import heroImage from "../../assets/images/svg/heroimage.svg";

class Banner extends Component {

  render() {
    return (
      <div className="banner col-xs-12 no-padding" id="top-page" >
        <div className="v-align">
          <div className="banner-text col-lg-6 col-md-7 col-sm-12 col-xs-12 no-padding">
            <h1 className="banner-heading">Smart Ethernet Protocol</h1>
            <p>A new blockchain protocol using programmable 
              <br/> 
              packets to enhance security, privacy and net 
              <br/> 
              neutrality
              <span className="text-uppercase bold-font">Get early access to the SDK </span>
            </p>
            <div className="blue-btn btn1 joinBtn" data-toggle="modal" data-target="#myModal"><a href="#">Join Community</a> 
            </div>
            
            <div className="transparent-btn btn2"><a className="click-btn" href="#samplecode" data-scroll-nav="2">View Sample Code</a> 
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

export default Banner;