import React, { Component } from 'react';

class ResultsTabs extends Component {
    render() {
      return (
        <div className="tab-section">
            <span className="text">{this.props.title}</span>
            <span className="icon-arrow"></span>
        </div>
      );
    }
  }

  export default ResultsTabs;