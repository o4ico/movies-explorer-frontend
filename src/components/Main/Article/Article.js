import React from 'react';
import './Article.css';
function Article({
  title,
  children
}) {
  return (
    <article className="article">
      <h3 className="article__title">{title}</h3>
      {children}
    </article>
  );
}

export default Article;