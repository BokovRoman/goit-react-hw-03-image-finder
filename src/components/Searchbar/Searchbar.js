import React, { Component } from 'react';

class Searchbar extends Component {
    state = {
        query: '',
    };

    onSearchInputChange = (e) => {
        this.setState({
            query: e.target.value,
        });
    };
    
    onSearchFormSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.query);
        this.setState({ query: '' });
    };
    
    render() {
        return (
            <header className="Searchbar">
                <form className="SearchForm" onSubmit={this.onSearchFormSubmit}>
                    <button type="submit" className="SearchForm-button">
                    <span className="SearchForm-button-label">Search</span>
                    </button>

                    <input
                        value={this.state.query}
                        onChange={this.onSearchInputChange}
                    className="SearchForm-input"
                    type="text"
                    autocomplete="off"
                    autofocus
                    placeholder="Search images and photos"
                    />
                </form>
            </header>
        )
    }
    
}

export default Searchbar;