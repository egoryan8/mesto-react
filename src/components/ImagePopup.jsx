import React from 'react';

const ImagePopup = () => {
  return (
    <div className="popup popup_open-card">
      <div className="popup__image-wrapper">
        <img src="#" alt="" className="popup__image" />
        <h3 className="popup__image-caption"></h3>
        <button className="popup__close-btn" type="button" aria-label="Закрыть картинку"></button>
      </div>
    </div>
  );
};

export default ImagePopup;
