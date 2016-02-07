import React, { Component } from 'react';

// gives our class SearchBar all the functionality from React.Component
class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };
    }

    // must always define a render method in a class component.
    render() {
      // create an input element with a event handler property that has a value equal to onInputChange(). This event handler will run when the event (onChange) occurs.
      return (
				<div className='search-bar'>
					<input
						value={this.state.term}
						onChange={event => this.onInputChange(event.target.value)}
					/>
				</div>
			);
    }

    onInputChange(term) {
      this.setState({term});
      this.props.onSearchTermChange(term);
    }
}

// any file that imports SearchBar will get our SearchBar component.
export default SearchBar;
