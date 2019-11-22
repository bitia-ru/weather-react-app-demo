import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import ItemWrapper from './ItemWrapper';
import {
  functionComponentPropType as fcPropType
} from '../../../Workarounds/functionComponentPropType';
import { SpecificChildrenType } from '../../../Utils';


const Col = ({children, style}) => (
  <div style={{...defaultStyle, ...style}}>
    {children}
  </div>
);

const defaultStyle = {
  display: 'flex',
  flexFlow: 'column',
  height: '100%',
};

Col.propTypes = {
  children: SpecificChildrenType([
    fcPropType(Item),
    fcPropType(ItemWrapper),
  ]),
  style: PropTypes.object,
};

export default Col;
