import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";

const Container = styled.div``;
const ProductContainer = styled.div`
  display: flex;
  padding: 50px;
`;
const Image = styled.img`
  flex: 1;
  width: 100%;
  height: 80vh;
  object-fit: cover;
  margin-right: 40px;
`;
const Wrapper = styled.div`
  flex: 1;
`;
const Details = styled.div``;
const Title = styled.h1`
  font-size: 40px;
  font-weight: 200;
`;
const Desc = styled.p`
  font-size: 20px;
  margin: 15px 0px;
`;
const Price = styled.span`
  font-size: 50px;
  font-weight: 100;
`;

const FilterColor = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const FilterSize = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Filter = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin: 40px 0px;
`;
const FilterTitle = styled.h3`
  font-size: 20px;
  font-weight: 200;
  margin-right: 15px;
`;
const FilterList = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
`;
const FilterItems = styled.li`
  height: 20px;
  width: 20px;
  background-color: ${props => props.color};
  border-radius: 50%;
  cursor: pointer;
  margin-right: 10px;
  &:last-child {
    margin-right: 0px;
  }
`;
const FilterSelect = styled.select`
  padding: 5px;
`;
const FilterOption = styled.option``;

const Cart = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-between;
  align-items: center;
`;
const CartButtons = styled.div`
  font-size: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
  align-items: center;
  justify-items: center;
`;
const Plus = styled.span`
  cursor: pointer;
`;
const Minus = styled.span`
  cursor: pointer;
`;
const Number = styled.input`
  font-size: 15px;
  border: 2px solid teal;
  text-align: center;
  padding: 3px;
  border-radius: 5px;
  width: 20px;
  :focus {
    outline: none;
  }
`;
const AddToCart = styled.button`
  padding: 8px;
  border: 2px solid teal;
  background-color: #fff;
  :hover {
    background-color: #dbdbdb;
  }
`;

const Product = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <ProductContainer>
        <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
        <Wrapper>
          <Details>
            <Title>Denim Jumpsuit</Title>
            <Desc>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quibusdam? Labore animi doloremque ullam deserunt voluptatum
              provident sequi magnam delectus!
            </Desc>
            <Price>$ 20</Price>
          </Details>
          <Filter>
            <FilterColor>
              <FilterTitle>Color</FilterTitle>
              <FilterList>
                <FilterItems color="#000000"></FilterItems>
                <FilterItems color="#8a8a8a"></FilterItems>
                <FilterItems color="#5620eb"></FilterItems>
              </FilterList>
            </FilterColor>

            <FilterSize>
              <FilterTitle>Size</FilterTitle>
              <FilterSelect>
                <FilterOption>XS</FilterOption>
                <FilterOption>S</FilterOption>
                <FilterOption>M</FilterOption>
                <FilterOption>L</FilterOption>
                <FilterOption>XL</FilterOption>
                <FilterOption>XXL</FilterOption>
              </FilterSelect>
            </FilterSize>
          </Filter>
          <Cart>
            <CartButtons>
              <Minus>-</Minus>
              <Number value="1" type="text" />
              <Plus>+</Plus>
            </CartButtons>
            <AddToCart>ADD TO CART</AddToCart>
          </Cart>
        </Wrapper>
      </ProductContainer>
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default Product;
