import React, { Component } from 'react';
import logo from './assets/images/gw_logo_white.svg';
import './App.scss';
import SearchField from './js/SearchField';
import ResultsTabs from './js/ResultsTabs';


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
          <ResultsTabs/>
          
        </div>
        
      </div>
    );
  }
}



export default App;
