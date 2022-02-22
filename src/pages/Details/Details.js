
import SearchBanner from '../../components/SearchBanner/SearchBanner';

import './Details.scss';

import React, {
  useEffect,
  useState
} from 'react';
import {
  useParams
} from "react-router-dom";

const axios = require('axios');

function Details() {

  const { id } = useParams();

  const [product, setProduct] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let ignore = false;
    const fetchItems = async () => {
      const response = await axios.post(`http://localhost:3001/api/items/${id}`, {
        author: {
          firstName: 'Hans',
          lastName: 'Osorio'
        }
      })
      setIsLoaded(true);
      const results = response.data.item

      console.log(results);
      if (!ignore) {
        setProduct(results);
      }
    };
    fetchItems();
    return () => {
      ignore = true;
    }
  }, [id]);


  return (
    <div className="detail">
      <SearchBanner />
      { (!isLoaded) && <div>Loading...</div> }
      { (isLoaded) && (
          <div className="product">
            <div className="section">
              <img src={product.picture} alt={product.title} />
              <div className="description">
                <h3 className="title">Descripción del Producto</h3>
                <span className="text">{product.description}</span>
              </div>
            </div>
            <div className="headerdetail">
              <div className="tag">{product.condition}</div>
              <div className="title">{product.title}</div>
              <div className="price">$ {product?.price?.amount}</div>
              <button type="submit" className="button">Comprar</button>
            </div>
          </div>
        )
      }
    </div>
  );

}

export default Details;
