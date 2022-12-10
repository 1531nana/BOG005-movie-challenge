import React, { ReactNode } from "react";
import { ModalPortal } from "./ModalPortal";

interface modals {
  isOpen: boolean;
//   open: () => true;
//   close: () => false;
open: () => true;
close: () => false;
  element: ReactNode;
  content: ReactNode;
  elementClose: ReactNode;
}

export const Modals = ({
  isOpen,
  open,
  close,
  element,
  content,
  elementClose,
}: modals) => {
  return (
    <div>
      <div onClick={open}>{element}</div>
      <ModalPortal isOpen={isOpen} closeModal={close}>
        {content}
        {elementClose}
      </ModalPortal>
    </div>
  );
};
