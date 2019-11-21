import React from 'react';
import PropTypes from 'prop-types';


const TodayBar = ({style}) => (
  <div style={{...defaultStyle, ...style}}>
    <h3 style={{ fontSize: '24px', fontWeight: 600 }}>Today</h3>
    <h1 style={{ fontSize: '80px', fontWeight: 'normal' }}>12<span style={{fontSize: '28px', fontWeight: 500, verticalAlign: 'text-top'}}> °C</span></h1>
  </div>
);

const defaultStyle = {
  height: '100%',
  width: '62.5vh',
  borderRadius: '2.5vh',
  textAlign: 'center',
  color: 'white',
  padding: '51px',
  boxSizing: 'border-box',
  backgroundColor: '#100E3B',
  boxShadow: '0 0 10px rgba(0,0,0,0.5)',
};

TodayBar.propTypes = {
  style: PropTypes.object,
};

export default TodayBar;
