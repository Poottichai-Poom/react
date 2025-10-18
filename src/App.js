import React from "react";
import Navbar from "./features/Navbar";
import Container from "./features/Container";
import Home from "./features/Home";
import GlobalStyle from "./features/GlobalStyle";
import AddForm from "./features/Product/AddForm";
import { Routes, Route } from "react-router-dom";
import UpdateForm from "./features/Product/UpdateForm";
import { useEffect, useReducer } from "react";
import axios from "axios";

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return action.payload;
    case "ADD_PRODUCT":
      return [...state, action.payload];
    default:
      return state;
  }
};

function App() {
  const [products, dispatch] = useReducer(reducer, []);

  // function addProduct(product) {
  //   const newProduct = { id: ++currentProductId, ...product };
  //   // setProducts([...products, newProduct]);
  //   dispatch({ type: "ADD_PRODUCT", payload: newProduct });
  // }

  useEffect(() => {
    async function getProducts() {
      const products = await axios.get(
        "https://mocki.io/v1/1c0ef530-d6ec-4512-97ff-73a5d560d961"
      );
      // setProducts(products.data);
      dispatch({ type: "GET_PRODUCTS", payload: products.data });
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