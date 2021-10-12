import {
  ArrowBackIosNewOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";
import { left, right } from "@popperjs/core";
import { useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../data";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  display: flex;
  overflow: hidden;
`;

const Arrow = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: #d6d6d6;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  cursor: pointer;
  left: ${props => props.direction === left && "15px"};
  right: ${props => props.direction === right && "15px"};
  z-index: 10;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(${props => props.slideIndex * -100}vw);
  transition: all 1s ease;
`;

const Slide = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #${props => props.bg};
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: 80%;
  width: 90%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
  text-transform: uppercase;
`;

const Desc = styled.p`
  font-style: 20px;
  letter-spacing: 4px;
  margin: 50px 0px;
  font-weight: 500;
`;
const Heading = styled.h1`
  font-size: 50px;
  font-weight: 700;
`;
const Button = styled.button`
  padding: 10px;
  background: transparent;
  font-size: 20px;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleSlider = direction => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow onClick={() => handleSlider("left")} direction="left">
        <ArrowBackIosNewOutlined></ArrowBackIosNewOutlined>
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map(slider => (
          <Slide key={slider.id} bg={slider.bg}>
            <ImgContainer>
              <Image src={slider.img} />
            </ImgContainer>
            <InfoContainer>
              <Heading> {slider.title}</Heading>
              <Desc>{slider.desc}</Desc>
              <Button>{"shop now".toUpperCase()}</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow onClick={() => handleSlider("right")} direction="right">
        <ArrowForwardIosOutlined></ArrowForwardIosOutlined>
      </Arrow>
    </Container>
  );
};

export default Slider;
