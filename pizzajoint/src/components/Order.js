import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import Container from './StyledComponents/Container';
import { H2 } from './StyledComponents/Headings';
import ListItem from './StyledComponents/ListItem';
import { containerVariants } from './utils/variants';

// containerVariants.visible.transition = {delay:null, when: "beforeChildren"}

const newContainerVariants = {...containerVariants, visible: {...containerVariants.visible, transition: {
  type: 'spring',
  mass: .4,
  damping: 8,
  when:'beforeChildren',
  staggerChildren: .4
}}}

console.log("The newContainerVariants is**********", newContainerVariants);

const childVariants = {
  hidden: {
    opacity: 0,
    
  },
  visible: {
    opacity: 1,
  }
}

const StyledP = styled(motion.p)`
  margin: 1.5rem auto;
`;

const StyledUl = styled(motion.ul)`
  max-width: 200px;
  margin-left: auto;
  margin-right: auto;
  li {
    cursor: default;
  }
  
`;

const Order = ({ pizza }) => {

  return (
    <Container
    variants={newContainerVariants}
    initial="hidden"
    animate="visible"
    exit="exit"
    >
      <H2>Thank you for your order!</H2>
      <StyledP 
      variants={childVariants}
      >You ordered a {pizza.base} pizza with:</StyledP>
      {pizza.toppings.length=== 0 ? <StyledP 
      variants={childVariants}>No Toppings</StyledP> : <StyledUl 
      variants={childVariants}
      >
        {pizza.toppings.map(topping => (<ListItem key={topping} >{topping}</ListItem>))}
      </StyledUl>}
    </Container>
  );
}

export default Order;