import React from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext';
import { api } from '../utils/api';
import Card from './Card';

const Main = ({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) => {
  const { name, about, avatar, _id } = React.useContext(CurrentUserContext);
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getCards()
      .then((res) => setCards(...cards, res))
      .catch((err) => console.log(err));
  }, []);

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === _id);
    isLiked
      ? api.deleteLike(card._id, !isLiked).then((newCard) => {
          setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
        })
      : api.addLike(card._id, !isLiked).then((newCard) => {
          setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
        });
  }

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-wrapper">
          <img src={avatar} alt="Аватар профиля" className="profile__avatar" />
          <div className="profile__avatar-edit" onClick={onEditAvatar}></div>
        </div>

        <div className="profile__info">
          <h1 className="profile__name">{name}</h1>
          <button type="button" className="profile__edit-btn" onClick={onEditProfile}></button>
          <p className="profile__status">{about}</p>
        </div>
        <button
          onClick={onAddPlace}
          className="profile__add-btn"
          type="button"
          aria-label="Добавить фото в профиль"></button>
      </section>

      <section className="places">
        <ul className="places__cards-list">
          {cards.map((card) => (
            <Card
              name={card.name}
              key={card._id}
              link={card.link}
              likesCount={card.likes.length}
              onCardClick={onCardClick}
              card={card}
              onCardLike={handleCardLike}
            />
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Main;
