import React from 'react';

const header = ({title}) => (
  <nav>
    <div className="nav-wrapper white darken-3">
      <a className="brand-logo center black-text header-title">{title}</a>
    </div>
  </nav>
)

export default header;
