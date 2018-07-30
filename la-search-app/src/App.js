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
          <form className="search-form">
            <div>
              <span className="gw-logo-blue"></span>
            </div>
            <div className="md-form">
              <input className="form-control border-top-0 border-left-0 border-right-0" type="text" placeholder="What would you like to explore in your data?" aria-label="Search"/>
              <span className="icon-search"></span>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
