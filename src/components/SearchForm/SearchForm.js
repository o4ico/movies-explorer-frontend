import React from 'react';
import './SearchForm.css';
import { useLayoutEffect, useState } from 'react';
import Checkbox from '../Checkbox/Checkbox';

function SearchForm() {

  const [pageWidth, setPageWidth] = useState([]);
  const [isSmartphone, setIsSmartphone] = useState(false);

  useLayoutEffect(() => {
    function updateSize() {
      setPageWidth([window.innerWidth]);
    }

    window.addEventListener('resize', updateSize);
    updateSize();

    return () => window.removeEventListener('resize', updateSize);
  }, []);

  useLayoutEffect(() => {
    if (pageWidth <= 640) {
      setIsSmartphone(true);
    } else {
      setIsSmartphone(false);
    }
  }, [pageWidth]);


  return (
    <section className="search-form">

      {isSmartphone ? (
        <>
          <div className="search-form__container">
            <form className="search-form__form" name='searchMovie' noValidate="">
              <input
                className="search-form__input"
                type="text"
                placeholder="Фильм"
                name="movie"
                id="movie-search"
                required
                minLength={2}
                maxLength={100}
              />
              <input
                className="search-form__submit-button"
                type="submit"
                value='Найти'
              />
            </form>

          </div>
          < Checkbox />
        </>
      ) : (
        <div className="search-form__container">
          <div className="search-form__loupe"></div>
          <form className="search-form__form" name='searchMovie' noValidate="">
            <input
              className="search-form__input"
              type="text"
              placeholder="Фильм"
              name="movie"
              id="movie-search"
              required
              minLength={2}
              maxLength={100}
            />
            <input
              className="search-form__submit-button"
              type="submit"
              value='Найти'
            />
          </form>
          < Checkbox />
        </div>
      )}
      <div className="search-form__line"></div>
    </section>
  );
}

export default SearchForm;