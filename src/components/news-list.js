import React from 'react';
import News from './news';

const NewsList = ({ news }) => (
  <div className="row"> {/*row es para tener acceso al grid de materialize*/}
    {
      news.map((currentNew) => (
        <News key={currentNew.url} currentNew={currentNew} />
      ))
    }
  </div>
)

export default NewsList;
