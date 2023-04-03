import React from 'react';
import { createRoot } from 'react-dom/client';
 import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import store from './redux/store';
import i18n from './config/i18n';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
   <Provider store={store}> 
      <App />
   </Provider> 
  </React.StrictMode>
);

i18n.init({
  fallbackLng: 'fr',
  debug: true,
  resources: {
    en: {
      translation: require('./locales/en.json'),
    },
    fr: {
      translation: require('./locales/fr.json'),
    },
  },
})


