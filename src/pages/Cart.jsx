import { Add, RemoveOutlined } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const CartContainer = styled.div`
  padding-top: 20px;
  padding-bottom: 50px;
  width: 90%;
  margin: auto;
`;
const Container = styled.div``;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
  padding-top: 10px;
  padding-bottom: 30px;
`;
const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
`;
const Button = styled.button`
  padding: 10px;
  background-color: ${props =>
    props.type === "fill" ? "transparent" : "black"};

  color: #${props => props.type || "fff"};
  border: ${props => props.type || "none"};
`;

const LinksWrapper = styled.div``;

const CartLink = styled.a`
  margin-right: 20px;
  text-decoration: underline;
  cursor: pointer;
  font-size: 20px;
  :last-child {
    margin-right: 0px;
  }
`;

const Bottom = styled.div`
  padding: 20px 5px 5px 5px;
  margin-top: 30px;
`;
const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Product = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
`;
const ProductDetail = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4rem;
  max-height: 40vh;
  :last-child {
    margin-bottom: 0rem;
    ::before {
      content: "";
      width: 0px;
      height: 0px;
    }
  }

  position: relative;
  ::before {
    content: "";
    height: 2px;
    width: 90%;
    background-color: #eeeeee;
    position: absolute;
    bottom: -2rem;
    left: 0;
  }
`;
const Fixed = styled.div`
  flex: 3;
  display: flex;
`;
const Image = styled.img`
  width: 35%;
  margin-right: 20px;
  border-radius: 5px;
`;
const Details = styled.div`
  padding: 5px 0px;
`;
const Detail = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  b {
    margin-right: 5px;
  }
`;

const ColorSpan = styled.div`
  height: 20px;
  width: 20px;
  background-color: ${props => props.color};
  border-radius: 50%;
  margin-left: 5px;
`;

const Change = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const QuantityChange = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  margin-bottom: 20px;
  svg {
    cursor: pointer;
  }
`;
const Quantity = styled.div`
  margin-left: 10px;
  margin-right: 10px;
`;
const Price = styled.div`
  font-size: 30px;
  font-weight: 300;
`;
const Summary = styled.div`
  flex: 1;
  border: 2px solid #eeeeee;
  border-radius: 10px;
  height: 50%;
`;
const SummaryDetails = styled.div`
  padding: 10px 20px;
`;
const SummaryTitle = styled.h1`
  padding-bottom: 30px;
  padding-top: 15px;
  font-weight: 300;
  text-align: center;
`;
const SummaryDetail = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  font-size: ${props => (props.type === "total" ? "28px" : "20px")};
`;
const Text = styled.div``;
const Value = styled.div``;
const CheckOut = styled.button`
  margin: 10px 0px 20px 0px;
  padding: 10px;
  width: 100%;
  background-color: black;
  color: white;
  border: none;
`;

const Cart = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <CartContainer>
        <Title>YOUR CART</Title>
        <Top>
          <Button type="fill">CONTINUE SHOPPING</Button>
          <LinksWrapper>
            <CartLink>Shopping cart (2)</CartLink>
            <CartLink>Wishlist (0)</CartLink>
          </LinksWrapper>
          <Button>CHECKOUT NOW</Button>
        </Top>
        <Bottom>
          <BottomContainer>
            <Product>
              <ProductDetail>
                <Fixed>
                  <Image src="https://cdn.pixabay.com/photo/2016/06/03/17/35/shoes-1433925_960_720.jpg" />
                  <Details>
                    <Detail>
                      <b>Product:</b> JESSIE THUNDER
                    </Detail>
                    <Detail>
                      <b>ID:</b> 945388764545
                    </Detail>
                    <Detail>
                      <b>Color:</b> <ColorSpan color="gray"></ColorSpan>
                    </Detail>
                    <Detail>
                      <b>Size:</b> 37.5
                    </Detail>
                  </Details>
                </Fixed>
                <Change>
                  <QuantityChange>
                    <RemoveOutlined></RemoveOutlined>
                    <Quantity>1</Quantity>
                    <Add></Add>
                  </QuantityChange>
                  <Price>$ 30</Price>
                </Change>
              </ProductDetail>

              <ProductDetail>
                <Fixed>
                  <Image src="https://cdn.pixabay.com/photo/2013/07/12/15/40/gown-150290_960_720.png" />
                  <Details>
                    <Detail>
                      <b>Product:</b> Red Gown
                    </Detail>
                    <Detail>
                      <b>ID:</b> 945388764545
                    </Detail>
                    <Detail>
                      <b>Color:</b> <ColorSpan color="red"></ColorSpan>
                    </Detail>
                    <Detail>
                      <b>Size:</b> 37.5
                    </Detail>
                  </Details>
                </Fixed>
                <Change>
                  <QuantityChange>
                    <RemoveOutlined></RemoveOutlined>
                    <Quantity>2</Quantity>
                    <Add></Add>
                  </QuantityChange>
                  <Price>$ 30</Price>
                </Change>
              </ProductDetail>
            </Product>

            <Summary>
              <SummaryTitle>ORDER SUMMARY</SummaryTitle>
              <SummaryDetails>
                <SummaryDetail>
                  <Text>Subtotal</Text>
                  <Value>$80</Value>
                </SummaryDetail>
                <SummaryDetail>
                  <Text>Estimated Shipping</Text>
                  <Value>$5.90</Value>
                </SummaryDetail>
                <SummaryDetail>
                  <Text>Shipping Discount</Text>
                  <Value>$ -5.90</Value>
                </SummaryDetail>
                <SummaryDetail type="total">
                  <Text>Total</Text>
                  <Value>$80</Value>
                </SummaryDetail>
                <CheckOut>CHECKOUT NOW</CheckOut>
              </SummaryDetails>
            </Summary>
          </BottomContainer>
        </Bottom>
      </CartContainer>
      <Footer />
    </Container>
  );
};

export default Cart;
