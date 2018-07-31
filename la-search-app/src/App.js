import React, { Component } from 'react';
import logo from './assets/images/gw_logo_white.svg';
import './App.scss';
import SearchField from './js/SearchField';
import ResultsTabs from './js/ResultsTabs';
import SearchCard from './js/SearchCard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Live Analytics Search</h1>
        </header>
        <div className="search-content">
          <SearchField/>
          <div className="tabs-group">
            <div className="most-questions">
              <ResultsTabs title="Most frequently asked questions"/>
              <hr/>
            </div>
            <div className="my-questions">
              <ResultsTabs title="My questions"/>
              <hr/>
            </div>
          </div>
          <div className="search-card">
            <SearchCard/>
            <SearchCard/>
            <SearchCard/>
            <SearchCard/>
          </div>
        </div>
        
      </div>
    );
  }
}



export default App;
