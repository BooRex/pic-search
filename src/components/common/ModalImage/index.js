import React from 'react';
import * as PropTypes from 'prop-types';
import './style.scss';

const ModalImage = ({ imageUrl, alt, onClose }) => {
  return (
    <div className="modal" onClick={ onClose }>
      <img src={ imageUrl } alt={ alt }/>
    </div>
  );
};

ModalImage.propTypes = {
  imageUrl: PropTypes.string,
  alt     : PropTypes.string,

  onClose: PropTypes.func
};

export default ModalImage;
