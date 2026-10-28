import React, { useState } from 'react';
import { ModalContext } from './modalContextInstance';

export function ModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const openStrategyModal = () => setIsOpen(true);
  const closeStrategyModal = () => setIsOpen(false);

  return (
    <ModalContext.Provider value={{ isOpen, openStrategyModal, closeStrategyModal }}>
      {children}
    </ModalContext.Provider>
  );
}

export default ModalProvider;
