import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("https://cdn.pixabay.com/photo/2018/01/15/15/20/woman-3084129_960_720.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Wrapper = styled.div`
  padding: 50px;
  width: 40%;
  background-color: white;
`;
export const Input = styled.input`
  padding: 10px;
  margin: 0px 10px 10px 0px;
  width: 40%;
  :focus {
    outline: none;
  }
`;
export const Button = styled.button`
  padding: 12px 40px;
  margin-top: 4px;
  background-color: teal;
  color: white;
  border: none;
`;
export const Title = styled.h1`
  font-weight: 300;
  margin-bottom: 30px;
`;
