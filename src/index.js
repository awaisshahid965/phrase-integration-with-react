import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {IntlProvider} from 'react-intl';
import {initializePhraseAppEditor} from 'react-intl-phraseapp'
import EnglishLang from './config/en.json';

var config = {
  projectId: process.env.REACT_APP_PROJECT_ID,
  phraseEnabled: false,
  prefix: '[[__',
  suffix: '__]]'
}

initializePhraseAppEditor(config);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <IntlProvider locale="en" messages={EnglishLang}>
    <App />
    </IntlProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
