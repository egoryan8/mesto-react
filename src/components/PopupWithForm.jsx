import React from 'react';

const PopupWithForm = ({ title, name, isOpen, onClose, buttonText, children }) => {
  return (
    <div className={`popup popup_${name} ${isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        <form className={`form form_${name}`} name={`${name}-form`} novalidate>
          <h3 className="form__title">{title}</h3>
          {children}
          <button type="submit" name="profile__save" value="Сохранить" className="form__save-btn">
            {buttonText}
          </button>
        </form>
        <button
          onClick={onClose}
          className="popup__close-btn"
          type="button"
          aria-label="Закрыть редактирование"></button>
      </div>
    </div>
  );
};

export default PopupWithForm;
