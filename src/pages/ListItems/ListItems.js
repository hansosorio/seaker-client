import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import Product from '../../components/Product/Product';
import SearchBanner from '../../components/SearchBanner/SearchBanner';

import './ListItems.scss';

import React, {
  useEffect,
  useState
} from 'react';
import {
  useSearchParams
} from "react-router-dom";

const axios = require('axios');

function ListItems() {

  const [products, setProducts] = useState([]);
  const [breadcrumbs, setBreadcrumbs] = useState([]);

  const [isLoaded, setIsLoaded] = useState(false);

  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");

  useEffect(() => {
    let ignore = false;
    const fetchItems = async () => {
      const response = await axios.post(`http://localhost:3001/api/items?q=${search}`, {
        author: {
          firstName: 'Hans',
          lastName: 'Osorio'
        }
      })
      setIsLoaded(true);
      console.log("Products::::", response);
      const results = response.data.items.map(
        p => <Product key={p.id} data={p} />
      )
      const categories = response.data.categories.map(
        b => <Breadcrumb key={b} data={b} />
      )
      if (!ignore) {
        setProducts(results);
        setBreadcrumbs(categories);
      }
    };
    fetchItems();
    return () => {
      ignore = true;
    }
  }, [searchParams]);


  return (
    <div className="listItems">
      <SearchBanner query={search} />
      { (!isLoaded) && <div>Loading...</div> }
      { (isLoaded) && (
          <nav aria-label="breadcrumbs" className="breadcrumbs">
            <ol>
              {breadcrumbs}
            </ol>
          </nav>
        )
      }
      { (isLoaded) && (
          <ul className="products">
            {products}
          </ul>
        )
      }
    </div>
  );

}

export default ListItems;
