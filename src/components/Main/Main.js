import React from 'react';
import { useLayoutEffect, useState } from 'react';

import Promo from "./Promo/Promo";
import Background from "./Background/Background";
import Header from "../Header/Header";
import AboutProject from "./AboutProject/AboutProject";
import Techs from './Techs/Techs';
import Student from './Student/Student';
import Portfolio from './Portfolio/Portfolio';
import Footer from '../Footer/Footer';

function Main({
  isLoggiedIn,
  handleNavigateButtonClick
}) {

  const [pageWidth, setPageWidth] = useState([]);
  const [isMinWidth, setIsMinWidth] = useState(false);

  useLayoutEffect(() => {
    function updateSize() {
      setPageWidth([window.innerWidth]);
    }

    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  useLayoutEffect(() => {
    if (pageWidth <= 480) {
      setIsMinWidth(true);
    } else {
      setIsMinWidth(false);
    }
  }, [pageWidth]);

  return (
    <>
      < Background style={{ backgroundColor: '#073042' }}>
        < Header isLoggiedIn={isLoggiedIn} handleNavigateButtonClick={handleNavigateButtonClick} />
      </Background>
      <main className="content__container">
        < Background style={{ backgroundColor: '#073042' }}>
          < Promo />
        </Background>
        < AboutProject />
        {isMinWidth ? (
          < Techs />
        ) : (
          < Background style={{ backgroundColor: '#272727' }}>
            < Techs />
          </Background>
        )}
        < Student />
        < Portfolio />
      </main>
      < Footer />
    </>
  );
}

export default Main;