import React from 'react';
import './Auth.css'
import Logo from '../Logo/Logo'
import { Link, useLocation } from 'react-router-dom';

function Auth({
  formName,
  title,
  adviceText,
  adviceLink,
  adviceTextLink
}) {

  const isRegisterRoute = useLocation().pathname === "/signup";

  return (
    <section className="auth">
      <div className="auth__container">
        < Logo />
        <h1 className="auth__title">{title}</h1>
        <form className="auth__form" name={formName} noValidate="">
          <label className="auth__input-container">
            <span className="auth__input-label">Имя</span>
            <input
              className="auth__input"
              type="text"
              placeholder='Имя'
              name="name"
              id="auth-name"
              required
              minLength={2}
              maxLength={100}
            />
          </label>
          <span className="auth__text-error auth-name-text-error" ></span>
          <label className="auth__input-container">
            <span className="auth__input-label">E-mail</span>
            <input
              className="auth__input"
              type="text"
              placeholder='E-mail'
              name="email"
              id="auth-email"
              required
              minLength={2}
              maxLength={100}
            />
          </label>
          <span className="auth__text-error auth-email-text-error" ></span>
          {isRegisterRoute ? (
            <>
              <label className="auth__input-container">
                <span className="auth__input-label">Пароль</span>
                <input
                  className="auth__input auth__input_error"
                  type="password"
                  placeholder='Пароль'
                  name="email"
                  id="auth-password"
                  required
                  minLength={2}
                  maxLength={100}
                />
              </label>
              <span className="auth__text-error auth-password-text-error" >Что-то пошло не так...</span>
            </>
          ) : (
            <></>
          )}
        </form>
      </div>
      <div className="auth__submit-container">
        <input
          className="auth__submit-button"
          type="submit"
          value='Зарегистрироваться'
        />
        <p className="auth__advice">{adviceText}
          <Link className="auth__advice-link" to={adviceLink}>
            {adviceTextLink}
          </Link>
        </p>
      </div>
    </section>
  );
}

export default Auth;