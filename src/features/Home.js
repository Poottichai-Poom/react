import React, { Fragment, useState } from 'react';
import axios from 'axios';

import data from '../app/data';
import Product from './Product/index';
import AddForm from './Product/AddForm';

let currentProductId = 9;
export default function Home() {
  const [products, setProducts] = useState(data);

  async function getProducts() {
    const products = await axios.get(
      'https://apimocha.com/react-redux-class/products'
    );
    setProducts(products.data);
  }

  getProducts();

  function addProduct(product) {
    const newProduct = { id: ++currentProductId, ...product };
    setProducts([...products, newProduct]);
  }

  return (
    <Fragment>
      <h1>New Products</h1>
      {products.length > 0 ? (
        <ul className="Home__products">
          {products.map((product) => (
            <Product key={product.id} item={product} />
          ))}
        </ul>
      ) : (
        <div>Loading products....</div>
      )}
      <AddForm addProduct={addProduct} />
    </Fragment>
  );
}