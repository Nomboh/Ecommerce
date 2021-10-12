import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import React from "react";
import styled from "styled-components";

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.2);
  transition: all 1s ease;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  height: 350px;
  min-width: 280px;
  margin: 5px;
  background-color: #ebebeb79;
  position: relative;

  &:hover ${Info} {
    opacity: 1;
  }
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5;
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
  background-color: #fff;
  margin: 10px;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e0e0e0;
    transform: scale(1.1);
  }
`;

const Product = ({ product }) => {
  return (
    <Container>
      <Image src={product.img} />
      <Info>
        <Icons>
          <ShoppingCartOutlined></ShoppingCartOutlined>
        </Icons>
        <Icons>
          <SearchOutlined></SearchOutlined>
        </Icons>
        <Icons>
          <FavoriteBorderOutlined></FavoriteBorderOutlined>
        </Icons>
      </Info>
    </Container>
  );
};

export default Product;
