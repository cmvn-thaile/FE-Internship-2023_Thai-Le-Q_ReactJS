import React from 'react';
import { useModalContext } from '../context/modalContext';
import closeIcon from '../../assets/img/ic-close.svg';

const Modal = ({ children }: any) => {
  const { isShowModal, setIsShowModal } = useModalContext();

  return (
    <div className="modal ">
      <button onClick={() => setIsShowModal(false)}>
        <img className="modal-close" src={closeIcon} alt="Close modal" />
      </button>
      <div>{children}</div>
    </div>
  );
};

export default Modal;
