import React from 'react';
import { useModal } from '../../context/Modal';
// import { useParams } from "react-router-dom";
import './MenuItemFormCreateModalBtn.css';

export default function MenuItemFormCreateModalBtn({
    modalComponent, // component to render inside the modal
    buttonText, // text of the button that opens the modal
    onButtonClick, // optional: callback function that will be called once the button that opens the modal is clicked
    onModalClose // optional: callback function that will be called once the modal is closed
}) {
    const { setModalContent, setOnModalClose } = useModal();
    // const { restaurantId } = useParams();
    // console.log('*** in MenuItemFormCreateModalBUTTON: restaurantId ***', restaurantId)

    const onClick = () => {
        if (onModalClose) setOnModalClose(onModalClose);
        setModalContent(modalComponent);
        if (onButtonClick) onButtonClick();
    };

    return (
        <button
            onClick={onClick}
            className='menu-item-form-create-modal-button'
        // restaurantId={restaurantId}
        >
            {buttonText}
        </button>
    );
};
