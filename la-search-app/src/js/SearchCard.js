import React, { Component } from 'react';

class SearchCard extends Component {
    getQuestions() {
        let allQuestions = [
            {
                name: "What are the <span class='keywords'>claim</span> processing <span class='keywords'>activities</span> by <span class='keywords'>week</span>?" ,
                number: 89,
                index: 1
            },
            {
                name: "What is the <span class='keywords'>trend</span> for how long it takes <span class='keywords'>claims to close</span> by <span class='keywords'>month</span>?",
                number: 67,
                index: 2
            },
            {
                name: "How <span class='keywords'>profitable</span> was my <span class='keywords'>auto LOB year over year</span>?",
                number: 16,
                index: 3
            },
            {
                name: "What are the <span class='keywords'>claim</span> processing <span class='keywords'>activities</span> by <span class='keywords'>week</span>?",
                number: 10,
                index: 4
            },   {
                name: "What are the <span class='keywords'>claim</span> processing <span class='keywords'>activities</span> by <span class='keywords'>week</span>?" ,
                number: 89,
                index: 5
            },
            {
                name: "What is the <span class='keywords'>trend</span> for how long it takes <span class='keywords'>claims to close</span> by <span class='keywords'>month</span>?",
                number: 67,
                index: 6
            },
            {
                name: "How <span class='keywords'>profitable</span> was my <span class='keywords'>auto LOB year over year</span>?",
                number: 16,
                index: 7
            },
            {
                name: "What are the <span class='keywords'>claim</span> processing <span class='keywords'>activities</span> by <span class='keywords'>week</span>?",
                number: 10,
                index: 8
            },
            {
                name: "What are the <span class='keywords'>claim</span> processing <span class='keywords'>activities</span> by <span class='keywords'>week</span>?" ,
                number: 89,
                index: 9
            },
            {
                name: "What is the <span class='keywords'>trend</span> for how long it takes <span class='keywords'>claims to close</span> by <span class='keywords'>month</span>?",
                number: 67,
                index: 10
            },
            {
                name: "How <span class='keywords'>profitable</span> was my <span class='keywords'>auto LOB year over year</span>?",
                number: 16,
                index: 11
            },
            {
                name: "What are the <span class='keywords'>claim</span> processing <span class='keywords'>activities</span> by <span class='keywords'>week</span>?",
                number: 10,
                index: 12
            }
        ]
        
        let lessQuestions = allQuestions.slice(0,4);
        let moreQuestions = allQuestions;
        let showQuestions = this.props.showMoreFrequentlyQuestions? lessQuestions:moreQuestions;
       
        return showQuestions;
    }
    
    render() {
        let showQuestions = this.getQuestions();
        return (
            <div className="search-card">
                {showQuestions.map((question) => 
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