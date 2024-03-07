import React, { useState, useEffect } from "react";
import closeIcon from '../images/Icons/close-icon.png';

function ImgPopup({ card, onClose }) {

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (card) {
            setIsOpen(true);
        } else {
            setIsOpen(false);
        }
    }, [card]);

    // To solve animation problem when closing.
    // First the card information was removed and then the animation was made.
    const handleClose = () => {
        setIsOpen(false);
        setTimeout(() => {
            onClose(); 
        }, 1000); 
    };

    const openImage = isOpen ? 'imgPopup_open' : '';

    return (
        <div
            className={`imgPopup ${openImage}`}
            id="imgPopup"
            onClick={handleClose}
        >
            <div className="imgPopup__content" id="imagen" onClick={(e) => e.stopPropagation()} >
                <img src={card?.link} alt={card?.name} className="imgPopup__photo" />
                <h2 className="imgPopup__title">{card?.name}</h2>
                <button className="imgPopup__close" type="button" onClick={handleClose} >
                <img
                    src={closeIcon}
                    alt="close icon"
                    className="imgPopup__close-icon"
                />
            </button>
            </div> 
        </div>
    );
};

export default ImgPopup;