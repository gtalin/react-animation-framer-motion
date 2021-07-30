import {motion} from 'framer-motion';
import styled from 'styled-components';

const ListItem = styled(motion.li)`
  margin-bottom: 1rem;
  text-align: left;
  cursor:pointer;
  text-transform: capitalize;
  
  &>span {
    ${props => {
      return props.active && `font-weight: bold;
      `}
      }
    &::before {
      ${props => props.active && `content: '>';
      position: relative;
      top: -2px;
      margin-right: 6px;
      transform: scale(0.8, 1);
      display: inline-block;`}
    }
  }
`;

export default ListItem;