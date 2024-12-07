import { motion } from "motion/react";

/**
 * Passed a string, this component chops it up into individual
 * characters and returns those to animation station.
 */
const FadeInText = ({ line }: { line: string }) => {
  return line.split("").map((char, index) => {
    const key = `${char === " " ? "x" : char}-${index}-${
      Math.floor(Math.random() * 9000) + 1000
    }`;

    return (
      <motion.span
        key={key}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        {char}
      </motion.span>
    );
  });
};

export default FadeInText;
