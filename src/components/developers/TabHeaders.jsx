import React, { Component } from 'react';

const Panes = [
  { title: 'Network Admin' },
  { title: 'Network Creation' },
  { title: 'Anti-Phising' }
];

class TabHeaders extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let selected = this.props.selectedPane;
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
          {title}{' '}
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

export default TabHeaders;