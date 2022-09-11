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
import AddPlacePopup from './AddPlacePopup';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);

  const fetchCards = async () => {
    try {
      const res = await api.getCards();
      setCards(...cards, res);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchProfile = async () => {
    try {
      const res = await api.getProfile();
      setCurrentUser(res);
    } catch (err) {
      console.log(err);
    }
  };

  React.useEffect(() => {
    fetchCards();
  }, []);

  React.useEffect(() => {
    fetchProfile();
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

  const handleUpdateUser = async (name, about) => {
    try {
      const res = await api.setProfile(name, about);
      setCurrentUser(res);
      closeAllPopups();
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdateAvatar = async (avatar) => {
    try {
      const res = await api.setAvatar(avatar);
      setCurrentUser(res);
      closeAllPopups();
    } catch (err) {
      console.log(err);
    }
  };

  const handleAddPlaceSubmit = async (title, link) => {
    try {
      const res = await api.addCard(title, link);
      setCards([res, ...cards]);
      closeAllPopups();
    } catch (err) {
      console.log(err);
    }
  };

  const handleCardLike = async (card) => {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    isLiked
      ? api
          .deleteLike(card._id, !isLiked)
          .then((newCard) => {
            setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
          })
          .catch((err) => console.log(err))
      : api
          .addLike(card._id, !isLiked)
          .then((newCard) => {
            setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
          })
          .catch((err) => console.log(err));
  };

  const handleCardDelete = async (card) => {
    try {
      await api.deleteCard(card._id);
      setCards((newArray) => newArray.filter((item) => card._id !== item._id));
    } catch (err) {
      console.log(err);
    }
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
            cards={cards}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
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
          <AddPlacePopup
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            onAddPlace={handleAddPlaceSubmit}
          />

          <ImagePopup onClose={closeAllPopups} card={selectedCard} isOpen={isImagePopupOpen} />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
