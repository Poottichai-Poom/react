import Product from "./Product";
import styled from "styled-components";


function Home({ className, products }) {
  return (
    // <>
    <div className={className}>
      <h1>New Products</h1>
        <ul className="Home__products">
          {products.map((product) => (
            <Product key={product.id} item={product} />
          ))}
        </ul>
      {/* <AddForm addProduct={addProduct} /> */}
    </div>
    //  </> 
  );
}

export default styled(Home)`
  .Home__products {
    display: flex;
    flex-wrap: wrap;

    list-style-type: none;
    padding: 0;
    margin: 0 -12px;
  }
`;