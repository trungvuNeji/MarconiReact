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
  }

  render() {
    let selected = this.props.selectedPane;
    let content = '';

    if (selected === 0) {
      content = <NetworkAdmin />;
    } 
    else if (selected === 1) {
      content = <NetworkCreation />;
    }
    else {
      content = <AntiPhishing />;
    }

    return (
      <div className="tab-content">
        {content}
      </div>
    );
  }
}

export default TabContents;
