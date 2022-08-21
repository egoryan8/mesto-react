import React from 'react';
import { api } from '../utils/api';
import Card from './Card';

const Main = ({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) => {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getProfile()
      .then((res) => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);
      })
      .catch((err) => {
        console.log(err);
      });

    api
      .getCards()
      .then((res) => setCards(...cards, res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-wrapper">
          <img src={userAvatar} alt="Аватар профиля" className="profile__avatar" />
          <div className="profile__avatar-edit" onClick={onEditAvatar}></div>
        </div>

        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <button type="button" className="profile__edit-btn" onClick={onEditProfile}></button>
          <p className="profile__status">{userDescription}</p>
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
            />
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Main;
