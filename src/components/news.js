import React from 'react';

const News = ({ currentNew }) => {

  // extraer los datos
  const { title, description, source, urlToImage, url } = currentNew

  // condicion para cargar la imagen en caso de que la haya o no
  const image = (urlToImage) ?
                  (
                    <div className="card-image">
                      <img
                        src={urlToImage}
                        alt={title}  //texto alternativo
                        className=""/>
                        <span className="card-title">{source.name}</span> {/* Nombre de quien oublica la noticia */}
                    </div>
                  )
                  :
                  null


  return (
    <div className="col s12 m6 l4">
      <div className="card">
        { image }
        <div className="card-content">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>

        <div className="card-action">
          <a href={url} target="_blank" rel="noopener noreferrer" className="waves-effect waves-light btn">Ver Noticia</a>
        </div>
      </div>
    </div>
  );
}

export default News;
