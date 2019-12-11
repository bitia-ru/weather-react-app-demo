import React from 'react';
import Radium from 'radium';
import FormRow from './FormRow';

import './Form.css';


class Form extends React.PureComponent {
  render() {
    const {children, controls} = this.props;

    return (
      <div
        className={'form'}
        style={style}
      >
        {children}
        { controls && ( <FormRow left={controls} /> ) }
      </div>
    );
  }
}

const style = {
  display: 'flex',
  flexFlow: 'column',
};

export default Radium(Form);
