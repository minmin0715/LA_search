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
			filteredQuestions: [],
			moreQuestions: []
		};
		this.toggleFrequentlyQuestions = this.toggleFrequentlyQuestions.bind(this);
		this.toggleMyQuestions = this.toggleMyQuestions.bind(this);
		this.updateState = this.updateState.bind(this);
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
			return questionName.indexOf(event.target.value.toLowerCase()) !== -1
		})
		this.updateState(filteredQuestions)
		
	}
	updateState = (filteredQuestions) => {
		this.setState({
			filteredQuestions: filteredQuestions.length>4? filteredQuestions.splice(0,4):filteredQuestions,
			moreQuestions: filteredQuestions.length>4? filteredQuestions:this.state.filteredQuestions,
		}, () => {
			console.log('all filtered questions')
		})
	}

	toggleFrequentlyQuestions = () => {
		this.setState({
			showMoreFrequentlyQuestions: !this.state.showMoreFrequentlyQuestions
		}, () => {
			if(!this.state.showMoreFrequentlyQuestions) {
				this.setState({
					filteredQuestions: this.state.moreQuestions,
					moreQuestions: this.state.filteredQuestions,	
				}, () => {
				})
			}
			else {
				this.setState({
					filteredQuestions: this.state.moreQuestions,
					moreQuestions: this.state.filteredQuestions,	
				}, () => {
				})
			}
		})
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