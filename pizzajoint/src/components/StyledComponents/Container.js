import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled(motion.section)`
  /* max-width: 800px; */
  margin: 100px auto 40px;
  text-align: center;
  max-width: ${props => props.narrow ? `300px` : `800px`}
`;

export default Container;