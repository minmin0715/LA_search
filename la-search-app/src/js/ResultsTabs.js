import React, { Component } from 'react';

class ResultsTabs extends Component {
  
  render() {
    return (
      <div className="tabs-group">
        <div className="tabs-container">
          <div className="tab-section" onClick={this.props.toggleFrequentlyQuestions}>
              <span className="text">Most frequently asked questions</span>
              {
                this.props.showMoreFrequentlyQuestions &&
                <span className="icon-arrow-down"></span>
              }
              {
                !this.props.showMoreFrequentlyQuestions &&
                <span className="icon-arrow-up"></span>
              }
          </div>
          <div className="tab-section" onClick={this.props.toggleMyQuestions}>
            <span className="text">My questions</span>
            {
              this.props.showMoreMyQuestions &&
              <span className="icon-arrow-down"></span>
            }
            {
              !this.props.showMoreMyQuestions &&
              <span className="icon-arrow-up"></span>
            }
          </div>
        </div>
        <hr/>
      </div>
    );
  }
}

  export default ResultsTabs;