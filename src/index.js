import React from 'react';
import { createRoot } from 'react-dom/client';
 import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import store from './redux/store';
import i18n from './config/i18n';
import { I18nextProvider } from 'react-i18next'
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </Provider>
  </React.StrictMode>
)



