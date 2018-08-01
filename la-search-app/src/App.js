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
            <SearchCard question="What are the <span class='keywords'>claim</span> processing <span class='keywords'>activities</span> by <span class='keywords'>week</span>?" number="89"/>
            <SearchCard question="What is the <span class='keywords'>trend</span> for how long it takes <span class='keywords'>claims to close</span> by <span class='keywords'>month</span>?" number="67"/>
            <SearchCard question="How <span class='keywords'>profitable</span> was my <span class='keywords'>auto LOB year over year</span>?" number="16"/>
            <SearchCard question="What are the <span class='keywords'>claim</span> processing <span class='keywords'>activities</span> by <span class='keywords'>week</span>?" number="10"/>
          </div>
        </div>
       
      </div>
    );
  }
}



export default App;
