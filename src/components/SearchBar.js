import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import debounce from 'lodash/debounce'
import Autosuggest from 'react-autosuggest'

import languages from '../utils/searchTerm'

const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : languages.filter(lang =>
    lang.name.toLowerCase().slice(0, inputLength) === inputValue
  );
};

const getSuggestionValue = suggestion => suggestion.name;

const renderSuggestion = suggestion => (
  <div key={suggestion.name}>
    {suggestion.name}
  </div>
);


class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: '',
      suggestions: []
    }

    this.changed = debounce(this.props.throttledSearch, 300)
  }

  onChange = (event, { newValue }) => {
    this.setState({ value: newValue }, () => {
      this.changed(newValue)
    })
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  onSearchHandler = e => {
    const value = e.target.value
    console.log(value)
    this.setState({ value }, () => {
      this.changed(value)
    })
  }

  render() {

    const inputProps = {
      placeholder: 'Search by title or author',
      value: this.state.value,
      onChange: this.onChange
    };

    return (
      <div className="search-books-bar">
        <Link to="/" className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
        <Autosuggest
          style={{listStyleType: 'none'}}
          suggestions={this.state.suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
        />
        </div>
      </div>
    )
  }
}

export default SearchBar
