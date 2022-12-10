import './style.css'
import ReactDOM from 'react-dom'
import React, { ReactNode } from 'react'

interface modalState {
    children: ReactNode,
    isOpen: boolean,
    closeModal: () => {}
}

export const ModalPortal =  ({children, isOpen, closeModal} : modalState) => {

    const modalPortal = document.getElementById('modal')

    const handleModalContainerClick = 
    (e: React.BaseSyntheticEvent<MouseEvent, EventTarget & HTMLDivElement, EventTarget>) => e.stopPropagation();

    return modalPortal ? ReactDOM.createPortal(
        <article className={`modal ${isOpen && 'is-open'} `} onClick={closeModal}>
            <div className="modal-container" onClick={handleModalContainerClick}>
                {/* <img className="modal-close" onClick={closeModal} src={abort} alt="btnAbort" /> */}
                {children}
            </div>
        </article>,
        modalPortal
    ) : null
}