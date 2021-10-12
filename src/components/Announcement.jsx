import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: teal;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 0;
  h3 {
    color: #fff;
  }
`;

const Announcement = () => {
  return (
    <Container>
      <h3>Supper deal !!!! Free shipping from orders above $12</h3>
    </Container>
  );
};

export default Announcement;
