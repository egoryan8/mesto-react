import logo from './images/logo-header.svg';
import './index.css';

function App() {
  return (
    <div className="root">
      <div className="page">
        <header className="header">
          <a href="#">
            <img src={logo} alt="Лого Место" className="logo" />
          </a>
        </header>
        <main className="content">
          <section className="profile">
            <div className="profile__avatar-wrapper">
              <img
                src="<%=require('./images/Avatar.png') %>"
                alt="Аватар профиля"
                className="profile__avatar"
              />
              <div className="profile__avatar-edit"></div>
            </div>

            <div className="profile__info">
              <h1 className="profile__name"></h1>
              <button type="button" className="profile__edit-btn"></button>
              <p className="profile__status"></p>
            </div>
            <button
              className="profile__add-btn"
              type="button"
              aria-label="Добавить фото в профиль"></button>
          </section>

          <section className="places">
            <ul className="places__cards-list"></ul>
          </section>
        </main>
        <footer className="footer">
          <p className="footer__copyright">&copy; 2022 Mesto Russia</p>
        </footer>
        <div className="popup popup_edit-profile">
          <div className="popup__container">
            <form className="form form_edit-profile" name="edit-profile-form" novalidate>
              <h3 className="form__title">Редактировать профиль</h3>
              <fieldset className="form__set" id="profile__edit-fields">
                <label className="form__field">
                  <input
                    type="text"
                    className="form__item"
                    id="profile-name"
                    name="name"
                    placeholder="Введите ваше имя"
                    required
                    minlength="2"
                    maxlength="20"
                  />
                  <span className="form__item-error profile-name-input-error"></span>
                </label>
                <label className="form__field">
                  <input
                    type="text"
                    className="form__item"
                    id="profile-status"
                    name="about"
                    placeholder="Введите ваш статус"
                    required
                    minlength="2"
                    maxlength="200"
                  />
                  <span className="form__item-error profile-status-input-error"></span>
                </label>
              </fieldset>
              <button
                type="submit"
                name="profile__save"
                value="Сохранить"
                className="form__save-btn">
                Сохранить
              </button>
            </form>
            <button
              className="popup__close-btn"
              type="button"
              aria-label="Закрыть редактирование"></button>
          </div>
        </div>
        <div className="popup popup_add-place">
          <div className="popup__container">
            <form className="form form_add-place" name="add-place-form" novalidate>
              <h3 className="form__title">Новое место</h3>
              <fieldset className="form__set" id="profile__add-place-fields">
                <label className="form__field">
                  <input
                    type="text"
                    className="form__item"
                    id="place-name"
                    name="title"
                    placeholder="Название"
                    required
                    minlength="2"
                    maxlength="30"
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
              <button type="submit" name="place__save" value="Сохранить" className="form__save-btn">
                Сохранить
              </button>
            </form>
            <button
              className="popup__close-btn"
              type="button"
              aria-label="Закрыть добавление"></button>
          </div>
        </div>
        <div className="popup popup_open-card">
          <div className="popup__image-wrapper">
            <img src="#" alt="" className="popup__image" />
            <h3 className="popup__image-caption"></h3>
            <button
              className="popup__close-btn"
              type="button"
              aria-label="Закрыть картинку"></button>
          </div>
        </div>
        <div className="popup popup_you-sure">
          <div className="popup__container">
            <h3 className="popup__title">Вы уверены?</h3>
            <form className="form form_you-sure">
              <button type="submit" name="sure__yes" value="Да" className="form__save-btn">
                Да
              </button>
            </form>
            <button
              className="popup__close-btn"
              type="button"
              aria-label="Закрыть добавление"></button>
          </div>
        </div>
        <div className="popup popup_edit-avatar">
          <div className="popup__container">
            <form className="form form_edit-avatar" name="edit-avatar-form" novalidate>
              <h3 className="form__title">Обновить аватар</h3>
              <fieldset className="form__set" id="profile__edit-avatar-fields">
                <label className="form__field">
                  <input
                    type="url"
                    className="form__item"
                    id="edit-avatar-url"
                    name="avatar"
                    placeholder="Введите ссылку"
                    required
                  />
                  <span className="form__item-error edit-avatar-url-input-error"></span>
                </label>
              </fieldset>
              <button type="submit" name="place__save" value="Сохранить" className="form__save-btn">
                Сохранить
              </button>
            </form>
            <button
              className="popup__close-btn"
              type="button"
              aria-label="Закрыть добавление"></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
