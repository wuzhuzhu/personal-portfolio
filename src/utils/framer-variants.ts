export const headerButtonVariants = {
  hover: {
    scaleX: 1.05,
    transition: {
      duration: 0.2,
      bounce: 0.3,
      damping: 7,
      type: "spring",
    }
  }
}


/* usage:
variants={staggerParentVariants}
initial="hidden"
animate="visible"
 */
export const staggerParentVariants = {
  hidden: {
  },
  visible: {
    transition: {
      staggerChildren: 0.2
    },
  },
}

export const staggerChildVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};
