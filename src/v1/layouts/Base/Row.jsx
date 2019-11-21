import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import ItemWrapper from './ItemWrapper';
import {
  functionComponentPropType as fcPropType
} from '../../../Workarounds/functionComponentPropType';
import { SpecificChildrenType } from '../../../Utils';


const Row = ({children, style}) => (
  <div style={{...defaultStyle, ...style}}>
    {children}
  </div>
);

const defaultStyle = {
  display: 'flex',
};

Row.propTypes = {
  children: SpecificChildrenType([
    fcPropType(Item),
    fcPropType(ItemWrapper),
  ]),
  style: PropTypes.object,
};

export default Row;
