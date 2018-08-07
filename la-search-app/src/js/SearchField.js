import React, { Component } from 'react';
import ResultsTabs from './ResultsTabs';
import SearchCard from './SearchCard';
import allQuestions from './questions.json'

class SearchField extends Component {

	constructor(props) {
		super(props);
		this.state = {
			showMoreFrequentlyQuestions: true,
			showMoreMyQuestions: true,
			allQuestions: allQuestions,
			filteredQuestions: []
		};
		this.toggleFrequentlyQuestions = this.toggleFrequentlyQuestions.bind(this);
		this.toggleMyQuestions = this.toggleMyQuestions.bind(this);
		//this.getQuestions = this.getQuestions.bind(this);
	}
	componentWillMount() {
		this.setState({
			allQuestions: this.state.allQuestions,
		})
	}

	filterQuestions = (event) => {
		let filteredQuestions = this.state.allQuestions
		filteredQuestions = filteredQuestions.filter((question) => {
			let questionName = question.name.toLowerCase();
			console.log('77777777', questionName);
			return questionName.indexOf(event.target.value.toLowerCase()) !== 1
		})

		this.setState({
			filteredQuestions
		})
	}
	// getQuestions() {
    //     let allQuestions = this.state.items;
        
    //     let lessQuestions = allQuestions.slice(0,4);
    //     let moreQuestions = allQuestions;
    //     let showQuestions = this.props.showMoreFrequentlyQuestions? lessQuestions:moreQuestions;
       
		
	// 	this.setState(prevState => ({
	// 		items: !items
	// 	}));
    // }
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
			<div className="search-wrapper">
				<div className="search-section">
					<form className="search-form">
						<div>
							<span className="gw-logo-blue"></span>
						</div>
						<div className="md-form">
							<input className="form-control border-top-0 border-left-0 border-right-0" type="text" 
								placeholder="What would you like to explore in your data?" aria-label="Search"
								onChange={this.filterQuestions}/>
							<span className="icon-search"></span>
						</div>
					</form>
				</div>
				<ResultsTabs
					showMoreFrequentlyQuestions={this.state.showMoreFrequentlyQuestions}
					showMoreMyQuestions={this.state.showMoreMyQuestions}
					toggleFrequentlyQuestions={this.toggleFrequentlyQuestions}
					toggleMyQuestions={this.toggleMyQuestions}/>
				<SearchCard allQuestions={this.state.filteredQuestions}/>
			</div>
		);
    }
}

export default SearchField;