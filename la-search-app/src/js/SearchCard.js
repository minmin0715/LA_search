import React, { Component } from 'react';

class SearchCard extends Component {
    render() {
    
        return (
            <div className="search-card-section">
                <p className="card-content" dangerouslySetInnerHTML={{ __html: this.props.question }}></p>
                <div className="times-number">{this.props.number}</div>
            </div>
        );
    }
  }

  export default SearchCard;