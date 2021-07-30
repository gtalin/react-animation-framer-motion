import React from 'react';
import { Link } from 'react-router-dom';
import ListItem from './StyledComponents/ListItem';
import {H3} from './StyledComponents/Headings';

import Button from './StyledComponents/Button';
import Container from './StyledComponents/Container';
import { containerVariants, buttonVariants } from './utils/variants';

const Toppings = ({ addTopping, pizza }) => {
  let toppings = ['mushrooms', 'peppers', 'onions', 'olives', 'extra cheese', 'tomatoes'];

  return (
    <Container narrow 
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    >
      <H3>Step 2: Choose Toppings</H3>
      <ul>
        {toppings.map(topping => {
          
          return (
            <ListItem key={topping} onClick={() => addTopping(topping)} active={pizza.toppings.includes(topping)}
            whileHover={{
              scale: 1.2,
              originX: 0,
              color: '#FFD700'
            }}
            transition={{type:'tween'}}
            whileTap={{ scale: 0.9 }}
            >
              <span >{ topping }</span>
            </ListItem>
          )
        })}
      </ul>

      <Link to="/order">
        <Button variants={buttonVariants}
        whileHover="hover"
        >
          Order
        </Button>
      </Link>

    </Container>
  )
}

export default Toppings;