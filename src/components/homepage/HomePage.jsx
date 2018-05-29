import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import i18n from '../../utils/i18n';

import Splash from '../splash/Splash';
import CoreTech from './CoreTech';
import UseCases from './UseCases';
import Developers from '../developers/Developers';

class HomePage extends Component {
  componentDidMount() {
    document.title = "Marconi - Smart Ethernet Protocol";

    var language = i18n.language;
    if (language === 'cn') {
      document.title = "Marconi - 智能以太网协议";
    }

    window.scrollTo(0,0);

    const { hash } = window.location;
    if (hash !== '') {
      // Push onto callback queue so it runs after the DOM is updated,
      // this is required when navigating from a different page so that
      // the element is rendered on the page before trying to getElementById.
      setTimeout(() => {
        const id = hash.replace('#/', '');
        const element = document.getElementById(id);
        if (element) element.scrollIntoView();
        window.scrollBy(0, -90);
        // offset for the height of the navbar
      }, 0);
    }
  }

  render() {
    return (
      <div>
        <Splash />
        <CoreTech />
        <UseCases />
        <Developers />
      </div>
    );
  }
}

export default HomePage;