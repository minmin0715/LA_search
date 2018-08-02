import React, { Component } from 'react';
import logo from './assets/images/gw_logo_white.svg';
import './App.scss';
import SearchField from './js/SearchField';
import ResultsTabs from './js/ResultsTabs';
import SearchCard from './js/SearchCard';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMoreFrequentlyQuestions: true,
      showMoreMyQuestions: true
    };
    this.toggleFrequentlyQuestions = this.toggleFrequentlyQuestions.bind(this);
    this.toggleMyQuestions = this.toggleMyQuestions.bind(this);
  }
  toggleFrequentlyQuestions = () => {
    this.setState(prevState => ({
      showMoreFrequentlyQuestions: !prevState.showMoreFrequentlyQuestions
    }));
  }

  toggleMyQuestions = () => {
    this.setState(prevState => ({
      showMoreMyQuestions: !prevState.showMoreMyQuestions
    }));
  }
  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Live Analytics Search</h1>
        </header>
        <div className="search-content">
          <SearchField />
              <ResultsTabs
                toggleFrequentlyQuestions={this.toggleFrequentlyQuestions}
                showMoreFrequentlyQuestions={this.state.showMoreFrequentlyQuestions}
                toggleMyQuestions={this.toggleMyQuestions}
                showMoreMyQuestions={this.state.showMoreMyQuestions}/>
         
          <SearchCard/>
        </div>
      </div>
    );
  }
}



export default App;
