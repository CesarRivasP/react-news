import React from 'react';
import PropTypes from 'prop-types';

const Header = ({title}) => (
  <nav>
    <div className="nav-wrapper white darken-3">
      <a href="" className="brand-logo center black-text header-title">{title}</a>
    </div>
  </nav>
)

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header;
