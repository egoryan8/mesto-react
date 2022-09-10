import React from 'react';
import PopupWithForm from './PopupWithForm';

const AddPlacePopup = ({ isOpen, onClose, onAddPlace }) => {
  const [title, setTitle] = React.useState('');
  const [link, setLink] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    onAddPlace(title, link);
  };
  return (
    <PopupWithForm
      title="Новое место"
      name="add-place"
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleSubmit}
      buttonText="Сохранить">
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
            value={title}
            onChange={(e) => setTitle(e.target.value)}
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
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
          <span className="form__item-error place-link-input-error"></span>
        </label>
      </fieldset>
    </PopupWithForm>
  );
};

export default AddPlacePopup;
