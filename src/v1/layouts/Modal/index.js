import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const Modal = ({ controls, children, onClose }) => (
  <div className="v1__modal-wrapper">
    <div className="v1__modal">
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
  </div>
);

Modal.propTypes = {
  controls: PropTypes.arrayOf(PropTypes.element),
  onClose: PropTypes.func,
};

export default Modal;
