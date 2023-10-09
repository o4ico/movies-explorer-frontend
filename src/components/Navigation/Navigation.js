import React from 'react';
import './Navigation.css';
import { Link, useLocation } from 'react-router-dom';
import Account from '../Account/Account';

function Navigation({
  isLoggiedIn
}) {

  const navigationMoviesRoute = `${'navigation__link'} ${useLocation().pathname === "/movies" ? 'navigation__link_active' : ' '}`;
  const navigationSavedMoviesRoute = `${'navigation__link'} ${useLocation().pathname === "/saved-movies" ? 'navigation__link_active' : ' '}`;

  return (
    <>
      {isLoggiedIn ? (
        <div className="navigation__container">
          <nav className="navigation__links">
            <Link className={navigationMoviesRoute} to="/movies" >Фильмы</Link>
            <Link className={navigationSavedMoviesRoute} to="/saved-movies" >Сохранённые фильмы</Link>
          </nav>
          < Account />
        </div>
      ) : (
        <div className="navigation__container navigation__container_unauthorized">
          <Link to="/signup"><button className="navigation__button">Регистрация</button></Link>
          <Link to="/signin"><button className="navigation__button navigation__button_login">Войти</button></Link>
        </div>
      )
      }
    </>
  );
}

export default Navigation;