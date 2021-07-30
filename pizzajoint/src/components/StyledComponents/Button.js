import styled from 'styled-components';
import {motion} from 'framer-motion';

const Button = styled(motion.button)`
  color: #fff;
  font-size: 1rem;
  /* border: 3px solid #fff; */
  border-radius: 2rem;
  text-decoration: none;
  display: inline-block;
  padding: .5rem 1rem;
  cursor: pointer;
  background: transparent;
  margin-bottom: 2rem;
  margin-top: 2rem;
  opacity: .7; 
  /* line-height: 1; */
  
  border: ${props => props.big ? "3px solid #fff" : "1px solid #fff"};
  /* Border property can also be modified as below but wanted to try this other method too */
  ${props => props.big && `padding: .75rem 2rem; font-size: 1.6rem;` }
`;

export default Button;