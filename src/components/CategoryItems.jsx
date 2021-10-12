import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  width: 100%;
  height: 70vh;
  margin: 5px;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Info = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  color: #fff;
  margin-bottom: 2rem;
`;
const Button = styled.button`
  background: #fff;
  padding: 7px;
  border: none;
  color: gray;
  cursor: pointer;
  font-weight: 600;
`;

const CategoryItems = ({ item }) => {
  return (
    <Container>
      <Image src={item.img}></Image>
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
};

export default CategoryItems;
