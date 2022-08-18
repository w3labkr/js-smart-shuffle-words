import React from "react";
import ReactDOM from "react-dom/client";
import WebFont from "webfontloader";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RecoilRoot } from "recoil";
import "./locales/i18n";
import "./App.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
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
    families: ["Roboto"],
  },
  classes: false,
  timeout: 3000
};
WebFont.load(webFontConfig);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
