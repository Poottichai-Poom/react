import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import Navbar from './features/Navbar';
import Container from './features/Container';
import Home from './features/Home';
import GlobalStyle from './features/GlobalStyle';
import AddForm from './features/Product/AddForm';
import UpdateForm from './features/Product/UpdateForm';
import { fetchProducts } from './features/Product/actions';

function App() {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    async function getProducts() {
      const products = await axios.get(
        "https://mocki.io/v1/1c0ef530-d6ec-4512-97ff-73a5d560d961"
      );
      // setProducts(products.data);
      dispatch(fetchProducts(products.data));
    }

    getProducts();
  }, []);
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Container>
        {products.length > 0 ? (
          <Routes>
            <Route path="/create-product" element={<AddForm />} />
            <Route path="/update-product/:id" element={<UpdateForm products={products} />} />
            <Route path="/" element={<Home products={products} />} />
          </Routes>
        ) : (
          <div>Loading products....</div>
        )}
      </Container>

    </>
  );
}

export default App;