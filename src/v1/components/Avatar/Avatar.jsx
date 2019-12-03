import React from 'react';
import Radium from 'radium';


const Avatar = ({onClick}) => (
  <div
    className={'clickable'}
    style={{
      width: '50px',
      height: '50px',
      borderRadius: '27%',
      overflow: 'hidden',
      padding: '3px',
      border: 'solid 2px white',
      borderColor: 'rgba(255, 255, 255, 0)',
      ':hover': {
        borderColor: '#4293EB',
      },
    }}
    tabIndex={0}
    onClick={onClick}
  >
    <img width={50} height={50} src={require('./avatar.png')} />
  </div>
);

export default Radium(Avatar);
