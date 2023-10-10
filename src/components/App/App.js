import React from "react";
import './App.css'

import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Main from "../Main/Main";
import Menu from "../Menu/Menu";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import NotFound from "../NotFound/NotFound";

function App() {
  //меню
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  //данные пользователя
  const [currentUser, setCurrentUser] = React.useState({});
  const [isLoggedIn, setIsLoggedIn] = React.useState(true);//для проверки верстки шапки для авторизованного и неавторизованного пользователя поменяйте^^

  const navigate = useNavigate();

  function closeMenu() {
    setIsMenuOpen(false);
  }

  function handleNavigateButtonClick() {
    setIsMenuOpen(true);
  }


  const handleLogin = () => {
    setIsLoggedIn(true);
  }

  const handleLogout = () => {
    setIsLoggedIn(false);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Routes>
        <Route path="/movies" element={
          <ProtectedRoute isLoggiedIn={isLoggedIn}>
            <Movies
              isLoggiedIn={isLoggedIn}
              handleNavigateButtonClick={handleNavigateButtonClick}
            />
          </ProtectedRoute>
        } />
        <Route path="/saved-movies" element={
          <ProtectedRoute isLoggiedIn={isLoggedIn}>
            < SavedMovies
              isLoggiedIn={isLoggedIn}
              handleNavigateButtonClick={handleNavigateButtonClick}
            />

          </ProtectedRoute>
        } />
        <Route path="/profile" element={
          <ProtectedRoute isLoggiedIn={isLoggedIn}>
            < Profile
              isLoggiedIn={isLoggedIn}
              handleNavigateButtonClick={handleNavigateButtonClick}
            />
          </ProtectedRoute>
        } />
        <Route path="/" element={
          <>
            < Main
              isLoggiedIn={isLoggedIn}
              handleNavigateButtonClick={handleNavigateButtonClick}
            />
          </>
        } />
        <Route path="/signup" element={
          < Register isLoggiedIn={isLoggedIn} />
        } />
        <Route path="/signin" element={
          < Login isLoggiedIn={isLoggedIn} />
        } />
        <Route
          path="*"
          element={
            < NotFound />
          } />
      </Routes>
      < Menu
        isOpen={isMenuOpen}
        onClose={closeMenu} />
    </CurrentUserContext.Provider>
  );
}

export default App;
