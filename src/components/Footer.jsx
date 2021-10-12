import {
  Facebook,
  Instagram,
  Phone,
  Pinterest,
  Room,
  Twitter,
  EmailOutlined,
} from "@mui/icons-material";

import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 10px;
  color: #b8b8b8;
`;
const Left = styled.div`
  flex: 1;
`;

const Logo = styled.h1`
  font-size: 35px;
  cursor: pointer;
`;
const Desc = styled.p`
  margin: 2rem 0;
  font-size: 20px;
`;
const SocialLinks = styled.div`
  display: flex;
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 45px;
  width: 45px;
  color: #fff;
  background-color: ${props => props.color};
  border-radius: 50%;
  cursor: pointer;
  margin-right: 1rem;
`;

const Center = styled.div`
  flex: 1;
  margin: 0px 2rem;
  font-size: 20px;
`;
const Title = styled.h3`
  font-size: 27px;
  margin-bottom: 2rem;
`;
const List = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  margin: 0px;
  padding: 0px;
`;
const ListItems = styled.li`
  width: 50%;
  margin-bottom: 12px;
  cursor: pointer;
  color: #84b396;
  transition: all 0.5s ease;
  :hover {
    transform: translateY(-2px);
  }
`;
const Right = styled.div`
  flex: 1;
`;

const ContactTitle = styled.h2`
  font-size: 28px;
  margin-bottom: 2rem;
`;
const Contact = styled.div`
  display: flex;
  flex-direction: column;
`;
const ContactItems = styled.div`
  display: flex;
  justify-items: center;
  margin-bottom: 10px;
  svg {
    margin-right: 5px;
  }
`;

const Payment = styled.img``;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Smiley</Logo>
        <Desc>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur sed
          velit, ipsa quidem dignissimos sit praesentium voluptatibus tempora
          maiores accusantium!
        </Desc>
        <SocialLinks>
          <Links color="#3b5998">
            <Facebook></Facebook>
          </Links>
          <Links color="#1da1f2">
            <Twitter></Twitter>
          </Links>
          <Links color=" #c32aa3">
            <Instagram></Instagram>
          </Links>
          <Links color=" #bd081c">
            <Pinterest></Pinterest>
          </Links>
        </SocialLinks>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItems>Home</ListItems>
          <ListItems>Cart</ListItems>
          <ListItems>Men Fashion</ListItems>
          <ListItems>Women fashion</ListItems>
          <ListItems>Accessories</ListItems>
          <ListItems>My Account</ListItems>
          <ListItems>Order Tracking</ListItems>
          <ListItems>Wishlist</ListItems>
          <ListItems>Terms</ListItems>
        </List>
      </Center>
      <Right>
        <ContactTitle>Contact Us</ContactTitle>
        <Contact>
          <ContactItems>
            <Room /> Wadong 808, Danwongo Ansan-si
          </ContactItems>
          <ContactItems>
            <Phone /> +821048601285
          </ContactItems>
          <ContactItems>
            <EmailOutlined /> smiley@gmail.com
          </ContactItems>
        </Contact>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
