import React, { Component } from 'react';

import { translate, Trans } from 'react-i18next';
import i18n from '../../utils/i18n';

const Panes = [
  { title: 'M3 Tab2 Title' },
  { title: 'M3 Tab1 Title' },
  { title: 'M3 Tab3 Title' }
];

class TabHeaders extends Component {

  render() {
    let selected = this.props.selectedPane;
    let num = parseInt(selected, 10) + 1;
    
    let headers = Panes.map((pane, index) => {
      let title = pane.title;
      let klass = '';
      if (index === selected) {
        klass = 'active';
      }

      return (
        <li
          key={index}
          className={'tab-selector ' + klass}
          onClick={this.props.onTabChosen.bind(null, index)}
          >
          <a href={"#tab" + num}><Trans>{title}</Trans></a>
        </li>
      );
    });
    return (
      <ul className="mb10 nav nav-pills nav-justified form-tabs hidden-xs">
        {headers}
      </ul>
    );
  }
}

export default translate("translations")(TabHeaders);