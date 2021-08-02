import React from 'react';
import {motion} from 'framer-motion';
import styled from 'styled-components';

import {H1} from './StyledComponents/Headings';

const StyledHeader = styled(motion.header)`
  display: flex;
  padding: 2.5rem;
  align-items: center;
`;

const Logo = styled.div`
  svg {
    width: 80px;
    overflow: visible;
    stroke: #fff;
    stroke-width: 4;
    stroke-linejoin: round;
    stroke-linecap: round;
  }
`;

const svgVariants = {
  hidden: {rotate: -180},
  visible: {rotate: 0, transition : {
    duration: 1
  }},
};

const pathVariants = {
  hidden: {opacity: 0, 
    pathLength: 0},
  visible: {
    opacity: 1,
    pathLength:1,
    transition: {duration:2, ease: 'easeInOut'}
  }
}

const Header = () => {
  return (
    <StyledHeader>
      <Logo>
        <motion.svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"
        variants={svgVariants}
        initial="hidden"
        animate="visible" 
        >
          <motion.path 
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            fill="none"
            d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
          />
          <motion.path
          variants={pathVariants}
          initial="hidden"
          animate="visible"
            fill="none"
            d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z"
          />
        </motion.svg>
      </Logo>
        <H1 
        initial={{y:-200}}
        animate={{ y: 0 }} 
        transition={{ delay: .2, type:'spring', stiffness: 100}}
        >
          Pizza Joint
        </H1>
      
    </StyledHeader>
  )
}

export default Header;