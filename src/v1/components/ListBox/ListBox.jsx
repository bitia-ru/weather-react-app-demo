import React from 'react';
import Radium from 'radium';
import { composeStyle } from '../../../Utils';

class ListBox extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      expanded: false,
    };
  }

  onButtonClick = event => {
    const {expanded} = this.state;

    this.setState({
      expanded: !expanded,
    });

    this.props.onExpansionChanged && this.props.onExpansionChanged(expanded);

    event.stopPropagation();
  };

  render() {
    const { disabled, items } = this.props;
    const {expanded} = this.state;

    return (
      <div
        style={style.controlContainer}
      >
        <div
          className={disabled ? 'clickable-disabled' : 'clickable'}
          style={
            composeStyle(style.button, {
              disabled,
            })
          }
          onClick={this.onButtonClick}
          tabIndex={0}
        >
          <input style={style.currentItemContainer} />
          <img
            style={
              composeStyle(style.indicator, {
                up: !expanded,
              })
            }
            src={require('./icons/indicator.svg')}
          />
        </div>
        <div
          style={
            composeStyle(style.listContainer, {
              expanded,
              collapsed: !expanded,
            })
          }
        >
        </div>
      </div>
    );
  }
}

const style = {
  controlContainer: {
    position: 'relative',
  },
  button: {
    base: {
      width: '100%',
      border: '2px solid #d8e2e6',
      borderRadius: '2px',
      lineHeight: '17px',
      color: '#393c51',
      height: '42px',
      padding: '8px 15px',
      boxSizing: 'border-box',
      ':hover': {
        border: '2px solid #c9d3d7',
        backgroundColor: '#fafafa',
      },
      ':active': {
        border: '2px solid #abb5b9',
        color: '#595f73',
      },
    },
  },
  currentItemContainer: {
    padding: '3px 0px 2px',
    width: '100%',
  },
  indicator: {
    base: {
      position: 'absolute',
      right: '16px',
      top: '16px',
      transform: 'rotate(180deg)',
      transition: '.3s',
    },
    up: {
      transform: 'rotate(0deg)',
    },
  },
  listContainer: {
    base: {
      position: 'absolute',
      width: '100%',
      top: '56px',
      left: '-2px',
      border: '2px solid #d8e2e6',
      backgroundColor: 'white',
      transition: '.3s',
      borderRadius: '2px',
    },
    expanded: {
      height: '300px',
    },
    collapsed: {
      height: 0,
      border: 0,
    },
  },
};

export default Radium(ListBox);
