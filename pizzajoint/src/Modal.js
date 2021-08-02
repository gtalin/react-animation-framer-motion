import React from 'react';
import {Link} from 'react-router-dom';
import {motion, AnimatePresence} from 'framer-motion';
import styled from 'styled-components';
import Button from './components/StyledComponents/Button';

const backdrop = {
  visible: {opacity:1},
  hidden: {opacity: 0},
  exit: {opacity: 0, scale:0}
}

const foreground = {
  visible:{y:0, opacity: 1},
  hidden:{
    y:'-100vh', 
    opacity: 0,
    transition: {delay: .5}
  }
}

const ModalBackground = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  /* width: 100%; */
  /* height: 100%; */
  right: 0;
  bottom: 0;
  z-index: 1;
  background: rgba(0,0,0,.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled(motion.div)`
  max-width: 900px;
  padding: 4rem 3rem;
  text-align: center;
  background: purple;
  /* width: 80%;
  height: 50%; */

  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
  border-radius: 10px;
`;

const Modal = ({showModal, setShowModal}) => {

  return (
    <>
    <AnimatePresence exitBeforeEnter>
      {showModal && (
      <ModalBackground 
      variants={backdrop} 
      initial="hidden"
      animate="visible"
      exit="exit" 
      >
        <ModalContent variants={foreground}>
          <p>Want to make another pizza?</p>
          <Link to="/">
          <Button onClick={()=>setShowModal(!showModal)}>Make Pizza</Button>
          </Link>
          
        </ModalContent>
      </ModalBackground>
    )}
    </AnimatePresence>
  </>
  )
}

export default Modal;