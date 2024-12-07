export const getSentenceVariants = (transition: Object = {}) => {
  return {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition,
    },
  };
};

const someStyles = {
  opacity: 0,
  transition: "opacity 750ms ease-in-out",
  ":hover": {
    opacity: 1,
    "h1, h3": {
      position: "absolute",
      mixBlendMode: "hard-",
      lineHeight: "48px !important",
    },
  },
};
