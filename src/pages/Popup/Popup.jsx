import React, { useEffect } from 'react';
import logo from '../../assets/img/logo.svg';
import Greetings from '../../containers/Greetings/Greetings';
import './Popup.css';

const Popup = () => {
  return (
    <div className="App">
      <h1>Fiverr secret</h1>
      <p>Please report to us if you found an issue.</p>
      <p class="eric">
        by the Love of{' '}
        <a target="_blank" href="https://ericgit.me">
          https://ericgit.me
        </a>
      </p>
    </div>
  );
};

export default Popup;
