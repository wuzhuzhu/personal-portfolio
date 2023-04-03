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
      staggerChildren: 0.3
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

export const showUpVariants = {
  hidden: {
    scale: 0.6,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.3,
      // delay: 0.6,
      ease: "easeOut",
    },
  }
}


export const floatAppearVariants = ({ x = 0, y = 50 }) => {
  return {
    hidden: {
      x,
      y,
      opacity: 0,
    },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      }
    }
  }
}

// scroll to Show/Hide Header
export const scrollHeaderVariants = {
  hidden: {
    y: -25,
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};
