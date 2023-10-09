import React from 'react';
import './Techs.css';
import Article from '../Article/Article';

function Techs() {
  return (
    < Article
      title='Технологии'>
      <section className="techs">
        <div className="techs__container">
          <h3 className="techs__title">7 технологий</h3>
          <p className="techs__subtitle">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        </div>
        <div className="techs__group">
          <div className="techs__text">HTML</div>
          <div className="techs__text">CSS</div>
          <div className="techs__text">JS</div>
          <div className="techs__text">React</div>
          <div className="techs__text">Git</div>
          <div className="techs__text">Express.js</div>
          <div className="techs__text">mongoDB</div>
        </div>
      </section>
    </Article>
  );
}

export default Techs;