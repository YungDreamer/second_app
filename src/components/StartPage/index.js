import React, { Component } from 'react';

import logo from './logo.svg';
import './StartPage.css';

export default class StartPage extends Component {
  render() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              URL parser
            </p>
            <a className="App-link" href="/post" rel="noopener noreferrer">
              get started
            </a>        
          </header>
        </div>
    );
  }
}