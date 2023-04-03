import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {IntlProvider} from 'react-intl';
import {initializePhraseAppEditor} from 'react-intl-phraseapp'

var config = {
  projectId: '554fe040bdb0fad1f9241345900a9511',
  phraseEnabled: true,
  prefix: '[[__',
  suffix: '__]]'
}

initializePhraseAppEditor(config);

const messages = {
  'welcome.headline': 'This headline is visible when "phraseEnabled" config option is set to false'
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <IntlProvider locale="en" messages={messages}>
    <App />
    </IntlProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
