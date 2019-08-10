import React, { useState } from 'react';
import * as PropTypes from 'prop-types';
import './style.scss';
import GalleryItem from './GalleryItem';
import ModalImage from '../../../common/ModalImage';
import { isEmptyObject } from '../../../../helpers';

const Gallery = ({ items = [], isFirstSearch }) => {
  const [selectedImage, setSelectedImage] = useState({});

  const onCloseModal = () => {
    setSelectedImage({});
  };

  return (
    <>
      { !isEmptyObject(selectedImage) &&
      <ModalImage
        imageUrl={ selectedImage.webformatURL }
        alt={ selectedImage.tags }
        onClose={ onCloseModal }
      />
      }
      <div className={ `gallery ${ isFirstSearch ? 'gallery--first' : '' }` }>
        { items.length === 0 ? (
          <div className="no-results">
            <img className="img" src="https://i.imgur.com/qvqOaHc.png" alt="emoji"/>
            <span className="text">No results found!</span>
          </div>
        ) : (
          <div className="gallery-grid">
            { items.map(item =>
              <GalleryItem
                key={ item.id }
                className="gallery-item"
                imageUrl={ item.webformatURL }
                alt={ item.tags }
                onClick={ () => setSelectedImage(item) }
              />
            ) }
          </div>
        ) }
      </div>
    </>
  );
};

Gallery.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,

    webformatURL: PropTypes.string,
    tags        : PropTypes.string
  })),

  isFirstSearch: PropTypes.bool
};

export default Gallery;
