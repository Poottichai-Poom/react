import React, { useState } from 'react';

import data from '../app/data';
import Product from './Product/index';
import AddForm from './Product/AddForm';

export default function Home() {
  const [products, setProducts] = useState(data);

let currentProductId =9;
  function addProduct(product) {
  const newProduct = { id: ++currentProductId, ...product };
  setProducts([...products, newProduct]);
}

  return (
    <div>
      <h1>New Products</h1>
      <ul className="Home__products">
        {products.map((product) => (
          <Product key={product.id} item={product} />
        ))}
      </ul>
      <AddForm addProduct={addProduct} />
    </div>
  );
}