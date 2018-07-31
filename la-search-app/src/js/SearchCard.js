import React, { Component } from 'react';

class SearchCard extends Component {
    render() {
    
        return (
            <div className="search-card-section">
                <p className="card-content">What are the <span className="keywords">claim</span> processing <span className="keywords">activities</span> by <span className="keywords">week?</span></p>
                <div className="times-number">
                    89
                </div>
            </div>
        );
    }
  }

  export default SearchCard;