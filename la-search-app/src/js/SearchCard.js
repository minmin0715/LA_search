import React, { Component } from 'react';

class SearchCard extends Component {
    
    render() {
        return (
            <div className="search-card">
                {this.props.allQuestions.map((question) => 
                    <div key={question.index} className="search-card-section">
                        <p className="card-content" dangerouslySetInnerHTML={{ __html: question.name}}></p>
                        <div className="times-number">{question.number}</div>
                    </div>
                )}   
            </div>
        );
    }
}

  export default SearchCard;