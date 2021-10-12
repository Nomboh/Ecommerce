import React from "react";
import styled from "styled-components";
import { categories } from "../data";
import CategoryItems from "./CategoryItems";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Categories = () => {
  return (
    <Container>
      {categories.map(item => (
        <CategoryItems key={item.id} item={item} />
      ))}
    </Container>
  );
};

export default Categories;
