import React from 'react';
import PropTypes from 'prop-types';
import './index.css';
import { ModalContext } from '../../modules/modalable';

const onClick = event => {
  event.stopPropagation();
};

const Modal = ({ controls, children }) => (
  <ModalContext.Consumer>
    {
      ({onClose}) => (
        <div className="v1__modal" onClick={onClick}>
          <div className="v1__modal-controls">
            <button
              type="button"
              className="close"
              onClick={onClose}
              style={{
                width: '17px',
                height: '17px',
              }}
            />
            {controls}
          </div>
          {children}
        </div>
      )
    }
  </ModalContext.Consumer>
);

Modal.propTypes = {
  controls: PropTypes.arrayOf(PropTypes.element),
  onClose: PropTypes.func,
};

export default Modal;
