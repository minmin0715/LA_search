import React, { Component } from 'react';
import logo from './gw_logo_white.svg';
import './App.scss';

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
      <div className="search-wrapper">
        <div className="search-section">
          <form>
            <span className="gw-logo-blue"></span>
            <div>
              <input type="text" className="form-control border-top-0 border-left-0 border-right-0"></input>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
