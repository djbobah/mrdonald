import bannerImg from "../images/banner.svg";
import styled from "styled-components";

const StyledButton = styled.button`
  display: flex;
  background: #299b01;
  width: 250px;
  height: 65px;
  border: none;
  justify-content: center;
  align-items: center;
  font-size: 21px;
  color: #fff;
  font-family: Roboto, sans-serif;
  margin: 0 auto;
  margin-top: 10px;
`;

const Button = ({ text }) => {
  return <StyledButton>{text}</StyledButton>;
};

export default Button;
