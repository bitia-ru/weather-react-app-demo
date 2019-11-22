import React from 'react';


const Logo = () => (
  <div style={style}>
    <div
      style={{
        display: 'inline-block',
        backgroundColor: '#F2FBFF',
        width: '30px',
        lineHeight: '30px',
      }}
    >
      &nbsp;We
    </div>
    ather
  </div>
);

const style = {
  width: '100px',
  height: '100px',
  fontWeight: 600,
  lineHeight: '20px',
  textAlign: 'center',
};

export default Logo;