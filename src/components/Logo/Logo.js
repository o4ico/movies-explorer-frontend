import React from 'react';
import { useLocation } from 'react-router-dom';
import './Logo.css';
import headerLogo from '../../images/logo.svg'; // Путь к изображению внутри сборки

function Logo() {

  const logoPlace = `${'logo'} ${useLocation().pathname !== "/signup" || "/signin" ? 'logo_header' : ''}`;
  return (
    <img
      className={logoPlace}
      src={headerLogo}
      alt="логотип"
    />
  );
}

export default Logo;