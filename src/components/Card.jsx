import React from 'react';

const Card = ({ link, name, likesCount }) => {
  return (
    <li className="card">
      <img src={link} alt={name} className="card__image" />
      <button type="button" className="card__delete-btn"></button>
      <div className="card__title-wrapper">
        <h2 className="card__title">{name}</h2>
        <div className="card__like-wrapper">
          <button className="card__like-btn" type="button" aria-label="Поставить лайк"></button>
          <p className="card__likes-count">{likesCount}</p>
        </div>
      </div>
    </li>
  );
};

export default Card;
