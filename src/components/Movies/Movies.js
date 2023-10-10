import React from 'react';
import Header from "../Header/Header";
import Footer from '../Footer/Footer';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoreMovies from './MoreMovies/MoreMovies';

function Movies({
  isLoggiedIn,
  handleNavigateButtonClick
}) {
  return (
    <>
      < Header isLoggiedIn={isLoggiedIn} handleNavigateButtonClick={handleNavigateButtonClick} />
      <main className="content__container">
        < SearchForm />
        < MoviesCardList />
        < MoreMovies />
      </main>
      < Footer />
    </>
  );
}

export default Movies;