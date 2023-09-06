import { createContext, useContext } from 'react';

export interface ModalContextProps {
  isShowModal: boolean;
  setIsShowModal: (value: boolean) => void;
}

export const ModalContext = createContext<ModalContextProps>({
  isShowModal: false,
  setIsShowModal: () => {},
});

export const useModalContext = () => useContext(ModalContext);
