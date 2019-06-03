import React from 'react';

const News = ({ currentNew }) => {

  // extraer los datos
  const { title, description, source, urlToImage, url } = currentNew

  return (
    <div className="col s12 m6 l4">
      <div className="card">
        <div className="card image">
          <img
            src={urlToImage}
            alt={title}  //texto alternativo
            className=""/>
        </div>
        <div className="card-content">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default News;
