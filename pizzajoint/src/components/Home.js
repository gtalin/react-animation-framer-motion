import React from 'react';
import { Link } from 'react-router-dom';

import Button from './StyledComponents/Button';
import Container from './StyledComponents/Container';
import {H2} from './StyledComponents/Headings';
import Loader from './Loader';

// import { buttonVariants } from './utils/variants';

const containerVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      delay:.5,
      duration: 1.5
    }
  },
  exit: {
    x:'-100vw',
    transition: {ease: 'easeInOut'}
  }
}

const buttonVariants = {
  hover: {
    scale: [1,1.1,1,1.1,1,1.1,1],
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    // transition: {duration:.3},
  }
}
const Home = () => {
  
  return (
    // <div className="home container">
    <Container variants={containerVariants}
     initial="hidden"
     animate="visible"
     exit="exit"
    >
      <H2>
        Welcome to Pizza Joint
      </H2>
      <Link to="/base">
        <Button big={true}
        variants={buttonVariants}
         whileHover="hover"
         whileTap={{scale: .9}}
        >
        
          Create Your Pizza
        </Button>
      </Link>
    {/* </div> */}
    <Loader/>

    </Container>
  )
}

export default Home;