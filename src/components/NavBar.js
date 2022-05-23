import React from "react";
import styled from "styled-components";
import logoImg from "../images/logo.svg";

const NavBarStyled = styled.header``;
export const NavBar = () => (
  <NavBarStyled>
    <img src={logoImg} alt="logo"></img>
    <h1>MrDonald's </h1>
    <button>Войти</button>
  </NavBarStyled>
);
