import React, {
  useState
} from 'react';

import {
  Link
} from "react-router-dom";

import logo from './logo_ML.png';
import './SearchBanner.scss';

function SearchBanner(props) {

  const [query, setQuery] = useState(props.query || "");
  // aria-label: https://www.aditus.io/aria/aria-label
  //https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label
  //https://www.aditus.io/patterns/breadcrumbs/

  return (
    <div className="header">
      <Link to="/"><img src={logo} className="mlLogo" alt="logo" /></Link>
      <form action="/items" method="get" autoComplete="off" >
          <input
              type="text"
              name="search"
              className="search"
              id="query"
              placeholder="Nunca dejes de buscar"
              aria-label="Productos a buscar"
              aria-required="true"
              onChange={(e) => setQuery(e.target.value)}
              value={query}/>
          <button type="submit" className="button"><i className="fa-solid fa-search"></i></button>
      </form>
    </div>
  )
}

export default SearchBanner;