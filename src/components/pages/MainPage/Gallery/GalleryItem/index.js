import React from 'react';
import * as PropTypes from 'prop-types';
import './style.scss';

const GalleryItem = ({ className, imageUrl, alt, onClick }) => (
  <img className={ 'gallery-item' } src={ imageUrl } onClick={ onClick } alt={ alt }/>
);

GalleryItem.propTypes = {
  className: PropTypes.string,
  imageUrl : PropTypes.string,
  alt      : PropTypes.string
};

export default GalleryItem;
