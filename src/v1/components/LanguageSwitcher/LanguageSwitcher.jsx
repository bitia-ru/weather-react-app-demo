import React from 'react';
import Radium from 'radium';


const LanguageSwitcher = () => (
  <div className={'clickable clickable-dark'} tabIndex={0} style={style}>
    <img
      width={18}
      height={15}
      style={{marginBottom: '-1px'}}
      src={require('./icons/en.svg')}
    />
    {' '}
    <span>Eng</span>
  </div>
);

const style = {
  width: '80px',
  height: '40px',
  textAlign: 'center',
  lineHeight: '40px',
  margin: '20px 10px',
  borderRadius: '15px',
  color: '#A3AFB7',
  fontWeight: 600,
  ':hover': {
    color: '#676F77',
    backgroundColor: 'rgba(0, 0, 0, 0.03)'
  },
  ':active': {
    backgroundColor: 'rgba(0, 0, 0, 0.07)'
  }
};

export default Radium(LanguageSwitcher);