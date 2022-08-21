import React from 'react';

const Main = ({ onEditProfile, onAddPlace, onEditAvatar }) => {
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-wrapper">
          <img
            src="<%=require('./images/Avatar.png') %>"
            alt="Аватар профиля"
            className="profile__avatar"
          />
          <div className="profile__avatar-edit" onClick={onEditAvatar}></div>
        </div>

        <div className="profile__info">
          <h1 className="profile__name"></h1>
          <button type="button" className="profile__edit-btn" onClick={onEditProfile}></button>
          <p className="profile__status"></p>
        </div>
        <button
          onClick={onAddPlace}
          className="profile__add-btn"
          type="button"
          aria-label="Добавить фото в профиль"></button>
      </section>

      <section className="places">
        <ul className="places__cards-list"></ul>
      </section>
    </main>
  );
};

export default Main;
