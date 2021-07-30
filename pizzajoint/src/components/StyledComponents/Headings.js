import styled from "styled-components";
import { motion } from "framer-motion";

export const H1 = styled(motion.h1)`
  font-size: 1.3rem;
  letter-spacing: 2px;
  color: #fff;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  padding-bottom: 10px;
  flex:1;
  margin-left: 1rem;
`;

export const H2 = styled(motion.h2)`
  font-size: 2rem;
  margin-bottom: 30px;
`;

export const H3 = styled(motion.h3)`
  font-size: 2rem;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;