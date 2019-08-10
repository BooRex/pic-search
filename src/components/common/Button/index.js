import React from 'react';
import * as PropTypes from 'prop-types';
import './style.scss';

const Button = props => {
  const {
    children,
    disabled = false,
    className = '',
    onClick
  } = props;

  return (
    <button
      disabled={ disabled }
      className={ `btn ${ className ? className : '' }`.trim() }
      onClick={ onClick }
    >{ children }</button>
  );
};

Button.propTypes = {
  className: PropTypes.string,

  disabled: PropTypes.bool,

  onClick: PropTypes.func,

  children: PropTypes.any
};

export default Button;
