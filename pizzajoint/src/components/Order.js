import React from 'react';
import styled from 'styled-components';
import Container from './StyledComponents/Container';
import { H2 } from './StyledComponents/Headings';
import ListItem from './StyledComponents/ListItem';
import { containerVariants } from './utils/variants';

const StyledP = styled.p`
  margin: 1.5rem auto;
`;

const StyledUl = styled.ul`
  max-width: 200px;
  margin-left: auto;
  margin-right: auto;
  cursor: default;
`;

const Order = ({ pizza }) => {

  return (
    <Container
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    >
      <H2>Thank you for your order!</H2>
      <StyledP>You ordered a {pizza.base} pizza with:</StyledP>
      {pizza.toppings.length=== 0 ? <p>No Toppings</p> : <StyledUl>
        {pizza.toppings.map(topping => (<ListItem key={topping} >{topping}</ListItem>))}
      </StyledUl>}
    </Container>
  );
}

export default Order;