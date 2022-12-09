import React from "react";
import styled from "styled-components";
import trashImage from "../../image/trash.svg";
import { formatCurrency, totalPriceItems } from "../Functions/secondaryFunction";


const OrderItemStyled = styled.li`
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
`;

const ItemName = styled.span``;

const ItemPrice = styled.span`
  margin-left: 20px;
  margin-right: 10px;
  min-width: 65px;
  text-align: right;
`;

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

export const OrderListItem = ({ order }) => (
  <OrderItemStyled>
    <ItemName>{order.name}</ItemName>
    <span>{order.count}</span>
    <ItemPrice>
      {formatCurrency(totalPriceItems(order))}
    </ItemPrice>
    <TrashButton />
  </OrderItemStyled>
);
