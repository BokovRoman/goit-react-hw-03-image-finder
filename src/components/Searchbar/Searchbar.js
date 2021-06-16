import React, { Component } from 'react';

class Searchbar extends Component {
    state = {
        searchQuerry: '',
    }

    onSearchInputChange = (e) => {
        this.setState({
             searchQuerry:e.target.value,
         })
    }
    
    onSearchFormSubmit = (e) => {
        e.preventDefault();
        this.props.onFormSubmit(this.state.searchQuery)
        this.setState({ searchQuery: "" })
    }
    
    render() {
        return (
            <header className="Searchbar">
                <form className="SearchForm" onSubmit={this.onSearchFormSubmit}>
                    <button type="submit" className="SearchForm-button">
                    <span className="SearchForm-button-label">Search</span>
                    </button>

                    <input
                        value={this.state.searchQuerry}
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