import React from 'react';
import {motion} from 'framer-motion';
import styled from 'styled-components';

import {H1} from './StyledComponents/Headings';

const StyledHeader = styled(motion.header)`
  display: flex;
  padding: 2.5rem;
  align-items: center;
`;


const Header = () => {
  return (
    <StyledHeader>
      <div className="logo">
        <svg className="pizza-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <path
            fill="none"
            d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
          />
          <path
            fill="none"
            d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z"
          />
        </svg>
      </div>
      {/* <div className="title"> */}
        <H1 
        initial={{y:-200}}
        animate={{ y: 0 }} 
        transition={{ delay: .2, type:'spring', stiffness: 100}}
        >
          Pizza Joint
        </H1>
      {/* </div> */}
    </StyledHeader>
  )
}

export default Header;