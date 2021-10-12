import React from "react";
import styled from "styled-components";
import { Container, Wrapper, Input, Button, Title } from "../Common";

const Privacy = styled.p`
  margin: 20px 0px;
  font-weight: 200;
`;
const Strong = styled.span`
  font-weight: 600;
  font-style: italic;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <form action="">
          <Input type="text" placeholder="name" />
          <Input type="text" placeholder="Last name" />
          <Input type="text" placeholder="username" />
          <Input type="text" placeholder="email" />
          <Input type="text" placeholder="password" />
          <Input type="text" placeholder="confirm password" />

          <Privacy>
            By creating an accoun, I consent to the processing of my personal
            data in accordance to the <Strong>PRIVACY POLICY</Strong>
          </Privacy>
          <Button>CREATE</Button>
        </form>
      </Wrapper>
    </Container>
  );
};

export default Register;
