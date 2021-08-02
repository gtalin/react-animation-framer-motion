import React from 'react';
import { motion, useCycle } from 'framer-motion';
import styled from 'styled-components';
import Button from './StyledComponents/Button';

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
  animationTwo: {
    y: [0, -40],
    x:0,
    transition: {
      y: {
        yoyo: Infinity,
        duration:.25,
        ease: 'easeOut'
      }
    }
  }
}

const CenteredButton = styled(Button)`
  display: inline-block;
  margin-left: auto;
  margin-right: auto;
`;

const Logo = () => {
  const [animation, cycleAnimation] = useCycle("animationOne", "animationTwo");
  return (
    <>
    {console.log("Loading the loader")}
    <Dot variants={loaderVariants} animate={animation}/>
    <CenteredButton onClick={() => cycleAnimation()}>Change Animation</CenteredButton>
    </>
  )
  
}

export default Logo;