import React, { useState } from 'react';
import * as PropTypes from 'prop-types';
import './style.scss';
import TextInput from '../../../common/TextInput';
import Button from '../../../common/Button';

const SearchBox = ({ onSearch, isLoading, isFirstSearch }) => {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className={ `search-box ${ isFirstSearch ? 'search-box--first' : '' }` }>
      <TextInput
        name={ 'search' }
        className={ 'search-text-input' }
        placeholder={ 'What images would you like to see on Pixabay?' }
        value={ inputValue }
        onChange={ (name, value) => setInputValue(value) }
      />
      <Button
        onClick={ () => onSearch(inputValue) }
        className={ 'search-btn' }
      >{ isLoading ? 'Searching' : 'Search' }</Button>
    </div>
  );
};

SearchBox.propTypes = {
  isFirstSearch: PropTypes.bool,
  isLoading    : PropTypes.bool,

  onSearch: PropTypes.func
};

export default SearchBox;
