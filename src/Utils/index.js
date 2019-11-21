import PropTypes from 'prop-types';

const {oneOfType, arrayOf} = PropTypes;


export const GenericChildrenType = PropTypes.oneOfType([
  PropTypes.arrayOf(PropTypes.node),
  PropTypes.node,
]);

export const SpecificChildrenType = componentClasses => (
  oneOfType([
    arrayOf(oneOfType(componentClasses)),
    ...componentClasses,
  ])
);
