import React from 'react';
import './Profile.css'
import { Link } from 'react-router-dom';
import Header from "../Header/Header";

function Profile({
  isLoggiedIn,
  handleNavigateButtonClick
}) {

  const isEditing = false;

  return (
    <>
      < Header isLoggiedIn={isLoggiedIn} handleNavigateButtonClick={handleNavigateButtonClick} />
      <main className="content__container">
        <section className="profile">
          <div className="profile__container">
            <h1 className="profile__title">Привет, {'Виталий'}!</h1>
            <form className="profile__form" name='profile' noValidate="">
              <label className="profile__input-container">
                <span className="profile__input-label">Имя</span>
                <input
                  className="profile__input"
                  type="text"
                  placeholder='Имя'
                  value={'Виталий'}
                  name="name"
                  id="profile-name"
                  required
                  minLength={2}
                  maxLength={100}
                />
              </label>
              <span className="profile__text-error profile-name-text-error" ></span>
              <label className="profile__input-container">
                <span className="profile__input-label">E-mail</span>
                <input
                  className="profile__input"
                  type="text"
                  placeholder='E-mail'
                  value={'pochta@yandex.ru'}
                  name="email"
                  id="profile-email"
                  required
                  minLength={2}
                  maxLength={100}
                />
              </label>
              <span className="profile__text-error profile-email-text-error" ></span>
            </form>
          </div>

          {isEditing ? (
            <div className="profile__submit-container">
              <span className="profile__submit-error profile__submit-error_visible" >При обновлении профиля произошла ошибка.</span>
              <input
                className="profile__submit-button profile__submit-button_disabled"
                type="submit"
                value='Сохранить'
              />
            </div>
          ) : (
            <div className="profile__submit-container">
              <input
                className="profile__submit-button profile__submit-button_edit"
                type="submit"
                value='Редактировать'
              />
              <Link to="/"><button className="profile__submit-button profile__submit-button_exit">Выйти из аккаунта</button></Link>
            </div>)
          }
        </section>
      </main>
    </>
  );
}

export default Profile;