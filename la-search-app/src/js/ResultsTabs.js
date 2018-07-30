import React, { Component } from 'react';

class ResultsTabs extends Component {
    render() {
      return (
        <div className="tabs-group">
            <div className="tab-section">
                <span className="text">Most frequently asked questiones</span>
                <span className="icon-arrow"></span>
            </div>
            <div>
            </div>
            <div className="tab-section">
                <span className="text">My questions</span>
                <span className="icon-arrow"></span>
            </div>
        </div>
      );
    }
  }

  export default ResultsTabs;