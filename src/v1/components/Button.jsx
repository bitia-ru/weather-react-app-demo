import React from 'react';
import Radium from 'radium';
import { composeStyle } from '../../Utils';

const Button = ({busy, disabled, children, onClick}) => (
  <button
    className={disabled ? 'clickable-disabled' : 'clickable'}
    style={
      composeStyle(style, {
        active: !(disabled || busy),
        inactive: (disabled || busy),
        disabled,
        busy
      })
    }
    onClick={(disabled || busy) ? null : () => onClick && onClick()}
    disabled={(disabled || busy)}
  >
    {children}
  </button>
);

const style = {
  base: {
    background: '#4293EB',
    border: 'none',
    borderRadius: '2px',
    fontSize: '16px',
    lineHeight: '17px',
    color: 'white',
    height: '42px',
    paddingBottom: '13px',
    padding: '13px 50px',
  },
  active: {
    ':hover': {
      background: '#3c89db',
      cursor: 'pointer',
    },
  },
  inactive: {
    background: '#979797',
    color: '#cccccc',
  },
  disabled: {
    cursor: 'not-allowed',
  },
  busy: {
    color: '#cccccc',
    cursor: 'wait',
  }
};

export default Radium(Button);
