export const containerVariants = {
  hidden: {
    opacity: 0,
    x: '100vw'
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring', 
      delay: .5,
    }
  },
  exit: {
    x:'-100vw',
    transition: {ease: 'easeInOut'}
  }
  // hover: {
  //   scale: 1.1,
  //   textShadow: "0px 0px 8px rgb(255,255,255)",
  //   boxShadow: "0px 0px 8px rgb(255,255,255)",
  //   transition: {duration:.3},
  // }
}

export const buttonVariants = {
  hidden: {
    x:'-100vw'
  },
  visible: {
    x: 0,
    transition: {type:'spring', stiffness:120}
  },
  hover: {
    scale:1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {duration:.3, yoyo: Infinity},
  }
}