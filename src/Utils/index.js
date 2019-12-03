import PropTypes from 'prop-types';
import * as R from 'ramda';

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

export const composeStyle = (style, conditions) => {
  let resStyle = R.clone(style.base ? style.base : {});

  for (const condition in conditions) {
    if (!Object.prototype.hasOwnProperty.call(conditions, condition))
      continue;

    if (conditions[condition]) {
      resStyle = {...resStyle, ...style[condition]};
    }
  }

  return resStyle;
};
