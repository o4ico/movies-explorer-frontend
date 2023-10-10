import React from 'react';
import './MoviesCard.css';
import moviePoster from '../../images/moviePoster.jpg';
import { useLocation } from 'react-router-dom';

function MoviesCard() {
  const buttonIconDelete = useLocation().pathname === "/saved-movies";

  const [isLiked, setIsLiked] = React.useState(false);

  function toggleMovieSave() {
    if (isLiked) {
      handleMovieSaveDelete();
    } else {
      handleMovieSave();
    }
  }

  function handleMovieSave() {
    setIsLiked(true);
  }

  function handleMovieSaveDelete() {
    setIsLiked(false);
  }

  return (
    <li className="movies-card">
      <img className="movies-card__image" src={moviePoster} alt="постер к фильму" />
      <div className="movies-card__caption">
        <h2 className="movies-card__text">33 слова о дизайне</h2>
        {buttonIconDelete ? (
          <button className="movies-card__delete-button " type="button" /*onClick={deleteSaveCard}*/></button>
        ) : (
          <button className={`movies-card__save-button ${isLiked ? " movies-card__save-button_active" : ''}`} type="button" onClick={toggleMovieSave} />
        )}

      </div>
      <div className="movies-card__duration-container">
        <p className="movies-card__duration">1ч 42м</p>
      </div>
    </li>
  );
}

export default MoviesCard;