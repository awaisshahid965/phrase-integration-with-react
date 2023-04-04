import logo from './logo.svg';
import './App.css';
import { FormattedMessage, injectIntl } from 'react-intl-phraseapp';


function App(props) {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>{props.translate("welcome.headline")}</h2>
      
        <p className="App-intro">
          <FormattedMessage
            id="welcome.intro"
            defaultMessage={`We hope this example will help you integrate PhraseApp into your react app using react-intl`}
          />
        </p>
        <p>{props.formatMessage({ id: "welcome.text" })}</p>
      </div>
    </div>
  );
}

export default injectIntl(App);
