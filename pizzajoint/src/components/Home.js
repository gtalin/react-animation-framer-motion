import React from 'react';
import { Link } from 'react-router-dom';

import Button from './StyledComponents/Button';
import Container from './StyledComponents/Container';
import {H2} from './StyledComponents/Headings';

const Home = () => {
  
  return (
    // <div className="home container">
    <Container
     initial={{opacity: 0}}
     animate={{opacity:1}}
     transition={{
       delay:.5,
       duration: 1.5
     }}
    >
      <H2>
        Welcome to Pizza Joint
      </H2>
      <Link to="/base">
        <Button big={true}
         whileHover={{
           scale: 1.1,
           textShadow: "0px 0px 8px rgb(255,255,255)",
           boxShadow: "0px 0px 8px rgb(255,255,255)",
           transition: {duration:.3},
         }}
         whileTap={{scale: .9}}
        >
        
          Create Your Pizza
        </Button>
      </Link>
    {/* </div> */}
    </Container>
  )
}

export default Home;