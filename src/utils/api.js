export default class Api {
  constructor({ url, headers }) {
    this._url = url;
    this._headers = headers;
  }

  _handleServerResponse(res) {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
  }

  getCards() {
    this._cards = fetch(`${this._url}/cards`, {
      headers: this._headers,
    }).then(this._handleServerResponse);
    return this._cards;
  }

  getProfile() {
    this._profileInfo = fetch(`${this._url}/users/me`, {
      headers: this._headers,
    }).then(this._handleServerResponse);
    return this._profileInfo;
  }

  setProfile(name, about) {
    this._settedProfile = fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        about: about,
      }),
    }).then(this._handleServerResponse);
    return this._settedProfile;
  }

  setAvatar(avatar) {
    this._newAvatar = fetch(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar,
      }),
    }).then(this._handleServerResponse);
    return this._newAvatar;
  }

  addLike(id) {
    this._like = fetch(`${this._url}/cards/${id}/likes`, {
      method: 'PUT',
      headers: this._headers,
    }).then(this._handleServerResponse);
    return this._like;
  }

  deleteLike(id) {
    this._deleteLike = fetch(`${this._url}/cards/${id}/likes`, {
      method: 'DELETE',
      headers: this._headers,
    }).then(this._handleServerResponse);
    return this._deleteLike;
  }

  addCard(obj) {
    this._addedCard = fetch(`${this._url}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: obj.title,
        link: obj.link,
      }),
    }).then(this._handleServerResponse);
    return this._addedCard;
  }

  deleteCard(id) {
    this._deletedCard = fetch(`${this._url}/cards/${id}`, {
      method: 'DELETE',
      headers: this._headers,
    }).then(this._handleServerResponse);
    return this._deletedCard;
  }
}

export const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-47',
  headers: {
    authorization: '9cd7abe3-5559-4a23-a51d-befd5fe922ed',
    'Content-Type': 'application/json',
  },
});
