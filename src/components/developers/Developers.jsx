import React, { Component } from 'react';
import TabHeaders from './TabHeaders';
import TabContents from './TabContents';

class Developers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPane: 0
    };

    this.selectTab = this.selectTab.bind(this);
  }

  selectTab(num) {
    this.setState({ selectedPane: num });
  }
  
  render() {
    return (
      <section className="content-box" data-scroll-index="0"><a id="developers"></a>
        <section className="container">
          <div className="row">
            <div className="main-box text-center developers-box  padding-top padding-botom">

              <h1 className="black-text regular-font">Developers</h1>

              <div className="separator">
                <img src="assets/images/separator-image.png" alt="" />
              </div>

              <div className="text-section col-lg-6 col-md-6 col-sm-12 col-xs-12 text-left">
                <h3><span className="blue-text">marconi</span> applications</h3>
                <p>Write decentralized applications using Marconi Script, a Turing-complete language with access to network packets. </p>
                <p>Decentralized Apps can be submitted to the global chain or branch chains for public and private networks.</p>
              </div>

              <div className="text-section text-section2 col-lg-6 col-md-6 col-sm-12 col-xs-12 text-left">
                <h3><span className="blue-text">marconi</span> library</h3>
                <p>APIs enable traffic routing, packet analysis, pattern recognition, branch chain creation and token migration.</p>
                <p><span className="darkgrey-text bold-font text-uppercase"> Get early access to the SDK</span></p>
                <div className="clearfix"></div>
                <div className="blue-btn btn1" data-toggle="modal" data-target="#myModal"><a href="#">Join Community</a> </div>
              </div>

              <div className="tabs-section col-xs-12 no-padding padding-top" data-scroll-index="2"><a id="samplecode"></a>
                <h3><span className="blue-text">sample </span> code</h3>
                
                <div className="tabbable">
                  <TabHeaders 
                    selectedPane={this.state.selectedPane} 
                    onTabChosen={this.selectTab}>
                  </TabHeaders>
                  <select class="mb10 form-control visible-xs" id="tab_selector">
                    <option value="0">Network Admin</option>
                    <option value="1">Network Creation</option>
                    <option value="2">Anti-phishing</option>
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

export default Developers;