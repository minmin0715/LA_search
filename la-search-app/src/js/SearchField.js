import React, { Component } from 'react';
class SearchField extends Component {
    render() {
		return (
			<div className="search-wrapper">
				<div className="search-section">
					<form className="search-form">
						<div>
							<span className="gw-logo-blue"></span>
						</div>
						<div className="md-form">
							<input className="form-control border-top-0 border-left-0 border-right-0" type="text" placeholder="What would you like to explore in your data?" aria-label="Search"/>
							<span className="icon-search"></span>
						</div>
					</form>
				</div>
			</div>
		);
    }
}

export default SearchField;