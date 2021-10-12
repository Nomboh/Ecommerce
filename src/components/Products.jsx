import React from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";

const Container = styled.div`
  display: flex;
  padding: 50px 20px;
  flex-wrap: wrap;
`;

const Products = () => {
  return (
    <Container>
      {popularProducts.map(product => (
        <Product product={product} key={product.id} />
      ))}
    </Container>
  );
};

export default Products;
