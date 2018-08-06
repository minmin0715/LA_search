import React, { Component } from 'react';
import SearchCard from './SearchCard';

class ResultsTabs extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showMoreFrequentlyQuestions: true,
			showMoreMyQuestions: true,
			disabled: true
		};
		this.toggleFrequentlyQuestions = this.toggleFrequentlyQuestions.bind(this);
		this.toggleMyQuestions = this.toggleMyQuestions.bind(this);
	}
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
			<div className="tabs-group">
				<div className="tabs-container">
					<div className="tab-section-active" onClick={this.toggleFrequentlyQuestions}>
						<span className="text">Most frequently asked questions</span>
						{
							this.state.showMoreFrequentlyQuestions &&
							<span className="icon-arrow-down"></span>
						}
						{
							!this.state.showMoreFrequentlyQuestions &&
							<span className="icon-arrow-up"></span>
						}
					</div>
					<div className={this.state.disabled?"tab-section-disabled" : "tab-section-active"} onClick={this.toggleMyQuestions}>
						<span className="text">My questions</span>
						{
						this.state.showMoreMyQuestions &&
						<span className="icon-arrow-down"></span>
						}
						{
						!this.state.showMoreMyQuestions &&
						<span className="icon-arrow-up"></span>
						}
					</div>
				</div>
				<hr/>
				<SearchCard 
					showMoreFrequentlyQuestions={this.state.showMoreFrequentlyQuestions}
					showMoreMyQuestions={this.state.showMoreMyQuestions}/>
			</div>
			
		);
	}
}

export default ResultsTabs;