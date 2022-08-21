import React from 'react';

const ImagePopup = ({ isOpen, card, onClose }) => {
  return (
    <div className={`popup popup_open-card ${isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__image-wrapper">
        <img src={card.link} alt={card.name} className="popup__image" />
        <h3 className="popup__image-caption">{card.name}</h3>
        <button
          onClick={onClose}
          className="popup__close-btn"
          type="button"
          aria-label="Закрыть картинку"></button>
      </div>
    </div>
  );
};

export default ImagePopup;
