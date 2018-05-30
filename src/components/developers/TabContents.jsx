import React, { Component } from 'react';

import NetworkAdmin from './NetworkAdmin';
import NetworkCreation from './NetworkCreation';
import AntiPhishing from './AntiPhishing';

class TabContents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      change: false
    };

    this.changeTab = this.changeTab.bind(this);
  }

  changeTab() {
    let selected = this.props.selectedPane;
    // let content = '';
    
    if (selected === 0) {
      return <NetworkAdmin />;
    } 
    else if (selected === 1) {
      return <NetworkCreation />;
    }
    else {
      return <AntiPhishing />;
    }

  }

  render() {

    return (
      <div className="tab-content">
        {this.changeTab()}
      </div>
    );
  }
}

export default TabContents;
