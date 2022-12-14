import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { RecoilRoot } from 'recoil';
import WebFont from 'webfontloader';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './locales/i18n';
import './App.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>
);

/**
 * The Material UI is designed with the Roboto font in mind,
 * but it doesn't load automatically in the MUI.
 *
 * @link https://mui.com/material-ui/getting-started/installation/
 * @link https://mui.com/material-ui/react-typography/
 */
const webFontConfig = {
  google: {
    families: ['Roboto'],
  },
  classes: false,
  timeout: 3000,
};
WebFont.load(webFontConfig);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
