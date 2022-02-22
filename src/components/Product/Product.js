import React from 'react';

import './Product.scss';

function Product(props) {

  return (
    <a className="product" href={'/items/' + props.data.id}>
      <img className="picture" src={props.data.picture} alt={props.data.title} />
      <div className="description">
        <div className="price">${props.data.price.amount}</div>
        <div className="title">{props.data.title}</div>
      </div>
      <div className="location">{props.data.location}</div>
    </a>
  )
}

export default Product;
