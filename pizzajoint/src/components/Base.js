import React from 'react';
import { Link } from 'react-router-dom';
// import styled from 'styled-components';

import Button from './StyledComponents/Button';
import Container from './StyledComponents/Container';
import {H3} from './StyledComponents/Headings';
import ListItem from './StyledComponents/ListItem';

import { containerVariants, buttonVariants } from './utils/variants';

const Base = ({ addBase, pizza }) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

  return (
    <Container narrow
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    exit="exit"
    >
      <H3>Step 1: Choose Your Base</H3>
      <ul>
        {bases.map(base => {
          
          return (
            <ListItem 
            key={base} 
            onClick={() => addBase(base)} 
            active={pizza.base === base}
            whileHover={{
              scale: 1.2,
              originX: 0,
              color: '#FFD700'
            }}
            transition={{type:'tween'}}
            whileTap={{ scale: 0.9 }}
            > 
              <span >{ base }</span>
            </ListItem>
          )
        })}
      </ul>

      {pizza.base && (
        /* <div className="next"> */
          <Link to="/toppings">
            {/* <button>Next</button> */}
            <Button variants={buttonVariants}
            whileHover="hover"
            >Next</Button>
          </Link>
        /* </div> */
      )}

    </Container>
  )
}

export default Base;