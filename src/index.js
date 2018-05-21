// this is out entry file, render it to the React DOM

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
    </I18nextProvider>
    , root);
  registerServiceWorker();
});