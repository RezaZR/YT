import React, { Component } from 'react';

// <input /> is something that user will use to type
// onChange is event handler. 
class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };
    }

    render() {
        return (
            <div className = "search-bar">  
                <input 
                    value = {this.state.term}
                    onChange = {event => this.onInputChange(event.target.value)} />
            </div>
        );
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;