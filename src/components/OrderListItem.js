import React from "react";
import styled from "styled-components";
import trashImage from "../images/trash.svg";

const TrashButton = styled.button`
  width: 24px;
  height: 24px;
  border-color: transparent;
  background-color: transparent;
  background-image: url(${trashImage});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const OrderListItem = () => (
  <OrderItemStyled>
    <span>JS Burger</span>
    <span>2</span>
    <span>750 Р</span>

    <TrashButton />
  </OrderItemStyled>
);
