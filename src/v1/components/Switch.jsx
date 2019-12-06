import React from 'react';
import Radium from 'radium';
import { composeStyle } from '../../Utils';

class Switch extends React.PureComponent {
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
            on: this.currentValue(),
          })
        }
        onClick={this.onClick}
        tabIndex={0}
      >
        <div
          style={
            composeStyle(style.pin, {
              disabled,
              on: this.currentValue(),
            })
          }
        >
        </div>
      </div>
    );
  }
}

const style = {
  container: {
    base: {
      display: 'inline-block',
      width: '44px',
      height: '22px',
      border: '1px solid #dae5f2',
      borderRadius: '2px',
      margin: '10px',
      lineHeight: 'normal',
      verticalAlign: 'sub',
    },
    on: {
      border: '1px solid #d3e8ff',
    },
  },
  pin: {
    base: {
      display: 'inline-block',
      borderRadius: '2px',
      width: '16px',
      height: '16px',
      margin: '3px',
      transition: 'all .3s',
      marginLeft: '3px',
      background: '#b8c1cc',
    },
    on: {
      marginLeft: '25px',
      background: '#4293eb',
    },
  },
};

export default Radium(Switch);
