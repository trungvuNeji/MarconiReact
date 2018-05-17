// this is out entry file, render it to the React DOM

import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App.jsx';

import registerServiceWorker from './registerServiceWorker';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render( < App / > , root);
  registerServiceWorker();
});