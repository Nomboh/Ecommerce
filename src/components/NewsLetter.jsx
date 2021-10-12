import React from "react";
import { SendOutlined } from "@mui/icons-material";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  height: 60vh;
  align-items: center;
  justify-content: center;
  background-color: #d4dbdba7;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 70px;
`;
const Desc = styled.p`
  font-size: 25px;
  margin: 15px 0px;
`;
const InputContainer = styled.div`
  width: 50%;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Input = styled.input`
  border: none;
  padding: 7px;
  flex: 8;
  &:focus {
    outline: none;
  }
`;
const Button = styled.button`
  background-color: teal;
  color: #fff;
  flex: 2;
  border: none;
`;

const NewsLetter = () => {
  return (
    <Container>
      <Title>News Letter</Title>
      <Desc>Get timely update from your favouite products.</Desc>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <SendOutlined></SendOutlined>
        </Button>
      </InputContainer>
    </Container>
  );
};

export default NewsLetter;
