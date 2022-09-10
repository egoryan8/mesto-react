import React from 'react';
import PopupWithForm from './PopupWithForm';

const EditAvatarPopup = ({ isOpen, onClose, onUpdateAvatar }) => {
  const avatarRef = React.useRef();
  function handleSubmit(e) {
    e.preventDefault();

    onUpdateAvatar(avatarRef.current.value);
  }

  return (
    <PopupWithForm
      title="Обновить аватар"
      name="edit-avatar"
      onClose={onClose}
      isOpen={isOpen}
      buttonText="Сохранить"
      onSubmit={handleSubmit}>
      <fieldset className="form__set" id="profile__edit-avatar-fields">
        <label className="form__field">
          <input
            type="url"
            className="form__item"
            id="edit-avatar-url"
            name="avatar"
            placeholder="Введите ссылку"
            required
            ref={avatarRef}
          />
          <span className="form__item-error edit-avatar-url-input-error"></span>
        </label>
      </fieldset>
    </PopupWithForm>
  );
};

export default EditAvatarPopup;
