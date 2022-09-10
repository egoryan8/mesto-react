import React from 'react';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import { api } from '../utils/api';
import CurrentUserContext from '../contexts/CurrentUserContext';

import '../index.css';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [currentUser, setCurrentUser] = React.useState({});

  React.useEffect(() => {
    api
      .getProfile()
      .then((res) => setCurrentUser(res))
      .catch((err) => console.log(err));
  }, []);

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setIsImagePopupOpen(true);
  };
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
    setSelectedCard({});
  };

  const handleUpdateUser = (name, about) => {
    api
      .setProfile(name, about)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  };

  const handleUpdateAvatar = (avatar) => {
    api
      .setAvatar(avatar)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  };
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="root">
        <div className="page">
          <Header />
          <Main
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            onCardClick={handleCardClick}
          />
          <Footer />
          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
          />
          <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar}
          />
          <PopupWithForm
            title="Новое место"
            name="add-place"
            onClose={closeAllPopups}
            isOpen={isAddPlacePopupOpen}
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
          </PopupWithForm>

          <ImagePopup onClose={closeAllPopups} card={selectedCard} isOpen={isImagePopupOpen} />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
