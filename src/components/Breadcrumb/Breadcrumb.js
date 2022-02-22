import React from 'react';

import './Breadcrumb.scss';

function Breadcrumb(props) {

  return (
    <li className="breadcrumb">
      <a href="/category" aria-current='location'>
        {props.data}
      </a>
      <span aria-hidden="true">></span>
    </li>
  )
}

export default Breadcrumb;