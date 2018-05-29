import React, { Component } from 'react';
import TabHeaders from './TabHeaders';
import TabContents from './TabContents';

import { translate, Trans } from 'react-i18next';

import separator from "../../assets/images/separator-image.png";

class Developers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPane: 0
    };

    this.selectTab = this.selectTab.bind(this);
    this.onTabChange = this.onTabChange.bind(this);
  }

  selectTab(num) {
    this.setState({ selectedPane: num });
  }

  onTabChange(event) {
    let num = parseInt(event.target.value);
    this.setState ({ selectedPane: num });
    // this.selectTab(event.target.value);
  }
  
  render() {    
    return (
      <section className="content-box" data-scroll-index="0"><a id="developers"></a>
        <section className="container">
          <div className="row">
            <div className="main-box text-center developers-box  padding-top padding-botom">

              <h1 className="black-text regular-font"><Trans>M3 Title</Trans></h1>

              <div className="separator">
                <img src={separator} alt="" />
              </div>

              <div className="text-section col-lg-6 col-md-6 col-sm-12 col-xs-12 text-left">
                <h3><span className="blue-text">marconi</span> <Trans>M3 Header 1</Trans></h3>
                <p><Trans>M3 Description 1</Trans></p>
                <p><Trans>M3 Description 2</Trans></p>
              </div>

              <div className="text-section text-section2 col-lg-6 col-md-6 col-sm-12 col-xs-12 text-left">
                <h3><span className="blue-text">marconi</span> <Trans>M3 Header 2</Trans></h3>
                <p><Trans>M3 Description 3</Trans></p>
                <p><span className="darkgrey-text bold-font text-uppercase"> <Trans>M3 CTA Prompt</Trans></span></p>
                <div className="clearfix"></div>
                <div className="blue-btn btn1" data-toggle="modal" data-target="#myModal"><a href="#"><Trans>M3 CTA 1</Trans></a> </div>
              </div>

              <div className="tabs-section col-xs-12 no-padding padding-top" data-scroll-index="2"><a id="samplecode"></a>
                <h3><span className="blue-text"><Trans>M3 Header 3-1</Trans></span> <Trans>M3 Header 3-2</Trans></h3>
                
                <div className="tabbable">
                  <TabHeaders 
                    selectedPane={this.state.selectedPane} 
                    onTabChosen={this.selectTab}>
                  </TabHeaders>

                  <select 
                    className="mb10 form-control visible-xs" 
                    id="tab_selector"
                    value={this.state.selectedPane}
                    onChange={this.onTabChange}
                    >
                    <option value="0"><Trans>M3 Tab2 Title</Trans></option>
                    <option value="1"><Trans>M3 Tab1 Title</Trans></option>
                    <option value="2"><Trans>M3 Tab3 Title</Trans></option>
                  </select>

                  <TabContents
                    selectedPane={this.state.selectedPane}>
                  </TabContents>
                </div>
              </div>

            </div>
          </div>
        </section>
      </section>
    );
  }
}

// class ChildOption extends Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <option value={this.props.value}>{this.props.name}</option>
//     );
//   }
// }

export default translate("translations")(Developers);