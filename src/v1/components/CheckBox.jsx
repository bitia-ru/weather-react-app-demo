import React from 'react';
import Radium from 'radium';
import { composeStyle } from '../../Utils';

class CheckBox extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      newValue: null,
    };
  }

  currentValue() {
    let {newValue} = this.state;
    const {value} = this.props;

    return newValue === null ? value : newValue;
  }

  onClick = (event) => {
    const {value} = this.props;

    const newValue = !this.currentValue();

    if (newValue === value)
      this.setState({newValue: null});
    else
      this.setState({newValue});

    event.stopPropagation();
  };

  render() {
    const {disabled} = this.props;

    return (
      <div
        className={disabled ? 'clickable-disabled' : 'clickable'}
        style={
          composeStyle(style.container, {
            disabled,
          })
        }
        onClick={!disabled && this.onClick}
        tabIndex={0}
      >
        <div
          style={
            composeStyle(style.pinContainer, {
              on: this.currentValue(),
              disabled,
            })
          }
        >
          <div
            style={
              composeStyle(style.pin, {
                on: this.currentValue(),
                disabled,
              })
            }
          >
          </div>
        </div>
        <div
          style={
            composeStyle(style.title, {
              on: this.currentValue(),
            })
          }
        >
          {this.props.children}
        </div>
      </div>
    );
  }
}

const style = {
  container: {
    base: {
      display: 'inline-block',
      height: '22px',
      margin: '10px',
      lineHeight: 'normal',
      whiteSpace: 'nowrap',
      verticalAlign: 'middle',
    },
    disabled: {
      cursor: 'not-allowed',
    },
  },
  pinContainer: {
    base: {
      display: 'inline-block',
      borderRadius: '2px',
      width: '12px',
      height: '12px',
      margin: '5px',
      background: 'white',
      border: '1px solid #8e989f',
      transition: 'all .3s',
    },
    on: {
      border: '1px solid #d3e8ff',
    },
    disabled: {
      border: 'solid 1px rgba(184,193,204,0.15)',
    },
  },
  pin: {
    base: {
      width: '6px',
      height: '6px',
      margin: '3px',
      background: '#4293eb',
      transition: 'all .3s ease-in-out',
      transform: 'scale(0)',
    },
    on: {
      transform: 'scale(1)',
    },
    disabled: {
      background: '#b8c1cc',
    },
  },
  title: {
    base: {
      display: 'inline-block',
      lineHeight: '17px',
      margin: '3px 5px 2px',
      verticalAlign: 'super',
    },
  },
};

export default Radium(CheckBox);
