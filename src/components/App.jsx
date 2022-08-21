import Header from './Header';
import React from 'react';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';

import '../index.css';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsImagePopupOpen(false);
  };
  return (
    <div className="root">
      <div className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
        />
        <Footer />
        <PopupWithForm
          title="Редактировать профиль"
          name="edit-profile"
          isOpen={isEditProfilePopupOpen}
          buttonText="Сохранить"
          onClose={closeAllPopups}
          children={
            <fieldset className="form__set" id="profile__edit-fields">
              <label className="form__field">
                <input
                  type="text"
                  className="form__item"
                  id="profile-name"
                  name="name"
                  placeholder="Введите ваше имя"
                  required
                  minLength="2"
                  maxLength="20"
                />
                <span className="form__item-error profile-name-input-error"></span>
              </label>
              <label className="form__field">
                <input
                  type="text"
                  className="form__item"
                  id="profile-status"
                  name="about"
                  placeholder="Введите ваш статус"
                  required
                  minLength="2"
                  maxLength="200"
                />
                <span className="form__item-error profile-status-input-error"></span>
              </label>
            </fieldset>
          }
        />
        <PopupWithForm
          title="Новое место"
          name="add-place"
          onClose={closeAllPopups}
          isOpen={isAddPlacePopupOpen}
          buttonText="Сохранить"
          children={
            <fieldset className="form__set" id="profile__add-place-fields">
              <label className="form__field">
                <input
                  type="text"
                  className="form__item"
                  id="place-name"
                  name="title"
                  placeholder="Название"
                  required
                  minLength="2"
                  maxLength="30"
                />
                <span className="form__item-error place-name-input-error"></span>
              </label>
              <label className="form__field">
                <input
                  type="url"
                  className="form__item"
                  id="place-link"
                  name="link"
                  placeholder="Ссылка на картинку"
                  required
                />
                <span className="form__item-error place-link-input-error"></span>
              </label>
            </fieldset>
          }
        />
        <PopupWithForm
          title="Обновить аватар"
          name="edit-avatar"
          onClose={closeAllPopups}
          isOpen={isEditAvatarPopupOpen}
          buttonText="Сохранить"
          children={
            <fieldset className="form__set" id="profile__edit-avatar-fields">
              <label className="form__field">
                <input
                  type="url"
                  className="form__item"
                  id="edit-avatar-url"
                  name="avatar"
                  placeholder="Введите ссылку"
                  required
                />
                <span className="form__item-error edit-avatar-url-input-error"></span>
              </label>
            </fieldset>
          }
        />

        <div className="popup popup_you-sure">
          <div className="popup__container">
            <h3 className="popup__title">Вы уверены?</h3>
            <form className="form form_you-sure">
              <button type="submit" name="sure__yes" value="Да" className="form__save-btn">
                Да
              </button>
            </form>
            <button
              className="popup__close-btn"
              type="button"
              aria-label="Закрыть добавление"></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
