import React from 'react';
import * as PropTypes from 'prop-types';
import './style.scss';

const TextInput = props => {
  const {
    placeholder = '',
    className = '',
    disabled = false,
    name,
    value,
    onChange
  } = props;

  return (
    <input
      className={ `text-input ${ className }` }
      type={ 'text' }
      name={ name }
      placeholder={ placeholder }
      value={ value }
      disabled={ disabled }
      onChange={ e => onChange(name, e.target.value) }
    />
  );
};

TextInput.propTypes = {
  name       : PropTypes.string,
  className  : PropTypes.string,
  placeholder: PropTypes.string,

  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  disabled: PropTypes.bool,

  onChange: PropTypes.func,
};

export default TextInput;
