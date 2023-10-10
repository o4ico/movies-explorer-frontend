import React from 'react';
import './Header.css';
import { useLayoutEffect, useState } from 'react';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';

function Header({
  children,
  isLoggiedIn,
  handleNavigateButtonClick
}) {

  const [pageWidth, setPageWidth] = useState([]);
  const [isBurgerMenu, setIsBurgerMenu] = React.useState(false);

  useLayoutEffect(() => {
    function updateSize() {
      setPageWidth([window.innerWidth]);
    }

    window.addEventListener('resize', updateSize);
    updateSize();

    return () => window.removeEventListener('resize', updateSize);
  }, []);

  useLayoutEffect(() => {
    if (pageWidth <= 771) {
      setIsBurgerMenu(true);
    } else {
      setIsBurgerMenu(false);
    }
  }, [pageWidth]);

  return (
    <header className="header">
      < Logo />
      {children}

      {isLoggiedIn ? (
        <>
          {isBurgerMenu ? (
            <button className='header__menu' onClick={handleNavigateButtonClick}></button>
          ) : (
            <Navigation isLoggiedIn={isLoggiedIn} />
          )}
        </>
      ) : (
        <Navigation isLoggiedIn={isLoggiedIn} />
      )}

    </header>
  );
}

export default Header;