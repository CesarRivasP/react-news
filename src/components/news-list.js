import React from 'react';
import PropTypes from 'prop-types';
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

NewsList.propTypes = {
  news: PropTypes.array.isRequired
}

export default NewsList;
