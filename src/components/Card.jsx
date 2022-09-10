import React from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext';

const Card = ({ link, name, likesCount, onCardClick, card }) => {
  const { _id } = React.useContext(CurrentUserContext);
  const isOwn = card.owner._id === _id;
  const isLiked = card.likes.some((i) => i._id === _id);
  const cardLikeButtonClassName = `card__like-btn ${isLiked ? 'card__like-btn_active' : ''}`;

  return (
    <li className="card">
      <img src={link} alt={name} className="card__image" onClick={() => onCardClick(card)} />
      {isOwn && <button type="button" className="card__delete-btn"></button>}
      <div className="card__title-wrapper">
        <h2 className="card__title">{name}</h2>
        <div className="card__like-wrapper">
          <button
            className={cardLikeButtonClassName}
            type="button"
            aria-label="Поставить лайк"></button>
          <p className="card__likes-count">{likesCount}</p>
        </div>
      </div>
    </li>
  );
};

export default Card;
