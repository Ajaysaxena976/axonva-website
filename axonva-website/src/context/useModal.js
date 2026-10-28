import { useContext } from 'react';
import { ModalContext } from './modalContextInstance';

export function useModal() {
  return useContext(ModalContext);
}

export default useModal;
