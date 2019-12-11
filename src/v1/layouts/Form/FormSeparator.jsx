import React from 'react';
import Radium from 'radium';


const FormSeparator = () => (
  <div style={style.container}>
    <div style={style.separator} />
  </div>
);

const style = {
  container: {
    flex: 1,
    flexFlow: 'column',
    display: 'flex',
    margin: '19px 5px',
  },
  separator: {
    height: '1px',
    borderTop: '1px solid #D8E2E6',
  },
};

export default Radium(FormSeparator);
