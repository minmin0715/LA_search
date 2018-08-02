import React, { Component } from 'react';

class SearchCard extends Component {
    render() {
        var questions = [
            {
                name: "What are the <span class='keywords'>claim</span> processing <span class='keywords'>activities</span> by <span class='keywords'>week</span>?" ,
                number: 89
            },
            {
                name: "What is the <span class='keywords'>trend</span> for how long it takes <span class='keywords'>claims to close</span> by <span class='keywords'>month</span>?",
                number: 67
            },
            {
                name: "How <span class='keywords'>profitable</span> was my <span class='keywords'>auto LOB year over year</span>?",
                number: 16
            },
            {
                name: "What are the <span class='keywords'>claim</span> processing <span class='keywords'>activities</span> by <span class='keywords'>week</span>?",
                number: 10
            }
        ]
        return (
            <div className="search-card">
                {questions.map((question) => 
                    <div className="search-card-section">
                    <p className="card-content" dangerouslySetInnerHTML={{ __html: question.name }}></p>
                    <div className="times-number">{question.number}</div>
                </div>
                )}   
            </div>
        );
    }
  }

  export default SearchCard;