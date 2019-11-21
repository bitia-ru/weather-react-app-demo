import React from 'react';
import PropTypes from 'prop-types';


const Item = ({children, style, fixedSize}) => {
  let conditionalStyle = {};

  if (fixedSize === false) {
    conditionalStyle = {
      ...conditionalStyle,
      flexGrow: 1,
      flexShrink: 1,
    };
  }

  return <div style={{...defaultStyle, ...conditionalStyle, ...style}}>{children}</div>;
};

const defaultStyle = {
};

Item.propTypes = {
  children: PropTypes.element.isRequired,
  fixedSize: PropTypes.bool,
  style: PropTypes.object,
};

Item.defaultProps = {
  fixedSize: false,
  style: {},
};

export default Item;
