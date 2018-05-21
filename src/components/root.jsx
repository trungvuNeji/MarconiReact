
import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from '../utils/i18n';

import App from './App';

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </HashRouter>
  </Provider>
);

export default Root;