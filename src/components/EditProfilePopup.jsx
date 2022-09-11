import React from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext';
import PopupWithForm from './PopupWithForm';

const EditProfilePopup = ({ isOpen, onClose, onUpdateUser }) => {
  const [name, setName] = React.useState('');
  const [about, setAbout] = React.useState('');
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setName(currentUser.name);
    setAbout(currentUser.about);
  }, [currentUser, isOpen]);

  function handleSubmit(e) {
    e.preventDefault();

    onUpdateUser(name, about);
  }

  return (
    <PopupWithForm
      title="Редактировать профиль"
      name="edit-profile"
      isOpen={isOpen}
      buttonText="Сохранить"
      onClose={onClose}
      onSubmit={handleSubmit}>
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
            value={name || ''}
            onChange={(e) => setName(e.target.value)}
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
            value={about || ''}
            onChange={(e) => setAbout(e.target.value)}
          />
          <span className="form__item-error profile-status-input-error"></span>
        </label>
      </fieldset>
    </PopupWithForm>
  );
};

export default EditProfilePopup;
