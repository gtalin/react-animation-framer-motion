import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const Dot = styled(motion.div)`
  width: .75rem;
  height: .75rem;
  margin: 3rem auto;
  background: #fff;
  border-radius: 50%;
`;

const loaderVariants = {
  animationOne: {
    x:[-20,20],
    y:[0, -30],
    transition: {
      x: {
        yoyo: Infinity,
        duration: .5,
        
      },
      y: {
        yoyo: Infinity,
        duration: .25,
        ease: 'easeOut'
      }
    } 
  },
  
}

const Logo = () => {
  return (
    <Dot variants={loaderVariants} animate="animationOne"/>
  )
  
}

export default Logo;