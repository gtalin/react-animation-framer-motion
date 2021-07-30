import React from 'react';
import { Link } from 'react-router-dom';
import ListItem from './StyledComponents/ListItem';
import {H3} from './StyledComponents/Headings';

import Button from './StyledComponents/Button';
import Container from './StyledComponents/Container';
const Toppings = ({ addTopping, pizza }) => {
  let toppings = ['mushrooms', 'peppers', 'onions', 'olives', 'extra cheese', 'tomatoes'];

  return (
    <Container narrow>
      <H3>Step 2: Choose Toppings</H3>
      <ul>
        {toppings.map(topping => {
          // let spanClass = pizza.toppings.includes(topping) ? 'active' : '';
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
        <Button
         whileHover={{
           scale: 1.1,
           textShadow: "0px 0px 8px rgb(255,255,255)",
           boxShadow: "0px 0px 8px rgb(255,255,255)",
           transition: {duration: .3}
         }}
        >
          Order
        </Button>
      </Link>

    </Container>
  )
}

export default Toppings;