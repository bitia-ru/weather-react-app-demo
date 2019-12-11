import React from 'react';
import Radium from 'radium';


class FormRow extends React.PureComponent {
  render() {
    const {children, title, description, left, right} = this.props;

    return (
      <div
        className={'form-row'}
        style={style.container}
      >
        {
          left && (
            <div style={style.leftBlock}>
              {left}
            </div>
          )
        }
        <div style={style.row}>
          { title && ( <div style={style.title} className={'form-row__title'}>{title}</div> ) }
          { description && ( <div style={style.description}>{description}</div> ) }
          <div style={style.body} className={'form-row__body'}>
            {children}
          </div>
        </div>
        {
          right && (
            <div style={style.rightBlock}>
              {right}
            </div>
          )
        }
      </div>
    );
  }
}

const style = {
  container: {
    flex: 1,
    flexFlow: 'row',
    display: 'flex',
  },
  row: {
    display: 'flex',
    flex: 1,
    flexFlow: 'column',
  },
  title: {
    flex: 1,
  },
  description: {
  },
  body: {
    flex: 1,
    display: 'flex',
    flexFlow: 'row',
  },
  leftBlock: {
    left: 0,
  },
  rightBlock: {
    right: 0,
  },
};

export default Radium(FormRow);
