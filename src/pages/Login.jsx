import React from "react";
import styled from "styled-components";
import { Container, Wrapper, Input, Button, Title } from "../Common";

const Link = styled.a`
  display: flex;
  margin-top: 10px;
  text-decoration: underline;
  font-weight: 300;
  cursor: pointer;
`;
const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <form>
          <Input type="email" placeholder="email" />
          <Input type="password" placeholder="password" />
          <Button>SIGN IN</Button>
        </form>
        <Link>DO NOT REMEMBER YOUR PASSWORD?</Link>
        <Link>CREATE A NEW ACCOUNT</Link>
      </Wrapper>
    </Container>
  );
};

export default Login;
