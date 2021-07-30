import React from 'react';
import { Link } from 'react-router-dom';
// import styled from 'styled-components';

import Button from './StyledComponents/Button';
import Container from './StyledComponents/Container';
import {H3} from './StyledComponents/Headings';
import ListItem from './StyledComponents/ListItem';

// const BaseContainer = styled(Container)`
//   max-width: 300px
// `;

const containerVariants = {
  hidden: {
    opacity: 0,
    x: '100vw'
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {type: 'spring', delay: .5}
  },
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {duration:.3},
  }
}

const ButtonVariants = {
  hidden: {
    x:'-100vw'
  },
  visible: {
    x: 0,
    transition: {type:'spring', stiffness:120}
  },
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {duration:.3},
  }
}

const Base = ({ addBase, pizza }) => {
  const bases = ['Classic', 'Thin & Crispy', 'Thick Crust'];

  return (
    <Container narrow
    variants={containerVariants}
    initial="hidden"
    animate="visible"
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
            <Button variants={ButtonVariants}
            whileHover="hover"
            >Next</Button>
          </Link>
        /* </div> */
      )}

    </Container>
  )
}

export default Base;