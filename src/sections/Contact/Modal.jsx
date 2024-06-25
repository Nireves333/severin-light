import React from 'react';
import styles from './ModalStyles.module.css';

const Modal = ({ show, onClose, message }) => {
  if (!show) {
    return null;
  }

  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modal}>
        <p>{message}</p>
        <button
          className={styles.button}
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
