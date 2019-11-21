import PropTypes from 'prop-types';


export const functionComponentPropType = (component) => (
  PropTypes.shape({
    type: PropTypes.oneOf([component])
  })
);
