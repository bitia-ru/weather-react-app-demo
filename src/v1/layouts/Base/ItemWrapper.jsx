import React from 'react';
import PropTypes from 'prop-types';


const ItemWrapper = ({children, fixedSize}) => {
  let conditionalStyles = {};

  if(fixedSize === false) {
    conditionalStyles = {
      ...conditionalStyles, flexGrow: 1, flexShrink: 1,
    };
  }

  return React.cloneElement(children, {style: {...style, ...conditionalStyles}});
};

const style = {
};

ItemWrapper.propTypes = {
  children: PropTypes.element.isRequired,
  fixedSize: PropTypes.bool,
};

ItemWrapper.defaultProps = {
  fixedSize: false,
};

export default ItemWrapper;
