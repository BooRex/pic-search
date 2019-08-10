import React, { useState, useEffect } from 'react';
import * as PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SearchBox from './SearchBox';
import Gallery from './Gallery';
import { fetchImagesStart } from '../../../store/pixabay/actions';

const MainPage = ({ items, fetchItems, isLoading }) => {
  const [isFirstSearch, setIsFirstSearch] = useState(true);

  useEffect(() => {
    if (items.length > 0) {
      setIsFirstSearch(false);
    }
  }, [items, setIsFirstSearch]);

  return (
    <>
      <SearchBox isLoading={ isLoading } onSearch={ value => fetchItems(value) } isFirstSearch={ isFirstSearch }/>
      { !isFirstSearch && <Gallery items={ items } isFirstSearch={ isFirstSearch }/> }
    </>
  );
};

MainPage.propTypes = {
  items: PropTypes.array,

  isLoading: PropTypes.bool,

  fetchItems: PropTypes.func
};

const mapStateToProps = state => ({
  items    : state.pixabay.items,
  isLoading: state.pixabay.isLoading
});

const mapDispatchToProps = {
  fetchItems: fetchImagesStart
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
