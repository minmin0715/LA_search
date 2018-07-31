import React, { Component } from 'react';

class SearchCard extends Component {
    render() {
    const cardMessage = "What are the claim processing activities by week?"
        return (
            <div className="search-card-section">
                <p className="card-content">{cardMessage}</p>
                <div className="times-number">
                    89
                </div>
            </div>
        );
    }
  }

  export default SearchCard;