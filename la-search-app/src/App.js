import React, { Component } from 'react';
import logo from './gw_logo_white.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Live Analytics Search</h1>
        </header>
        <SearchField/>
      </div>
    );
  }
}

class SearchField extends Component {
  render() {
    return (
      <div>
        <div className="search-section">
          This is the search field.
        </div>
      </div>
    );
  }
}

export default App;
