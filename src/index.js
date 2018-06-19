// this is out entry file, render it to the React DOM

// ==== Backward compatible
import 'babel-polyfill';
import 'core-js';
import 'es5-shim';
import 'es6-shim';
// import 'core-js/es5';
// import 'core-js/es6/object';
// import 'core-js/es6/reflect';
// import 'web-animations-js';

import React from 'react';
import ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './utils/i18n';

import configureStore from './utils/store';
import Root from './components/root.jsx';

import registerServiceWorker from './registerServiceWorker';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  let store = configureStore();

  ReactDOM.render(
    <I18nextProvider i18n={i18n}>
      <Root store={store} /> 
    </I18nextProvider>, root);
  registerServiceWorker();
});


// import 'raf/polyfill';
// import 'core-js/es6/symbol';
// import 'core-js/es6/object';
// import 'core-js/es6/function';
// import 'core-js/es6/parse-int';
// import 'core-js/es6/parse-float';
// import 'core-js/es6/number';
// import 'core-js/es6/math';
// import 'core-js/es6/string';
// import 'core-js/es6/date';
// import 'core-js/es6/array';
// import 'core-js/es6/regexp';
// import 'core-js/es6/map';
// import 'core-js/es6/weak-map';
// import 'core-js/es6/set';
// import 'core-js/es6/weak-set';