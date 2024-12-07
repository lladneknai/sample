import { motion } from "motion/react";
import { ContentContainer } from "../styles";
import { getSentenceVariants } from "../util";
import FadeInText from "./FadeInText";
import { useAppDispatch } from "@/hooks/useApp";
import { setOpen } from "@/features/code/codeSlice";

function HeroTextActivated() {
  const line1 = "You found me.";
  const line2 = "The name's Ian Kendall.";
  const line3 = "It's nice to meet you.";
  const line4 = "Would you like to...";
  const line5 = "View source code";
  const line6 = "View projects";
  const line7 = "Get in touch";

  const dispatch = useAppDispatch();

  return (
    <ContentContainer>
      <motion.div
        variants={getSentenceVariants()}
        initial="hidden"
        animate="visible"
      >
        <h1>
          Tired of <br />
          searching?
        </h1>
      </motion.div>

      <motion.div
        variants={getSentenceVariants({
          delayChildren: 0,
          staggerChildren: 0.05,
        })}
        initial="hidden"
        animate="visible"
        style={{ marginBottom: "3em" }}
      >
        <h1>
          <FadeInText line={line1} />
        </h1>
      </motion.div>
      <motion.div
        variants={getSentenceVariants({
          delayChildren: 1,
          staggerChildren: 0.05,
        })}
        initial="hidden"
        animate="visible"
      >
        <h3>
          <FadeInText line={line2} />
        </h3>
        <h3>
          <FadeInText line={line3} />
        </h3>
        <h3>
          <FadeInText line={line4} />
        </h3>
      </motion.div>

      <motion.div
        variants={getSentenceVariants({
          delayChildren: 4.5,
          staggerChildren: 0.05,
        })}
        initial="hidden"
        animate="visible"
        style={{ textDecoration: "underline", textUnderlineOffset: "5px" }}
      >
        <ul style={{ listStyle: "none" }}>
          <li>
            <h3
              onClick={() => dispatch(setOpen(true))}
              style={{ cursor: "pointer" }}
            >
              <FadeInText line={line5} />
            </h3>
          </li>
          <li>
            <h3>
              <FadeInText line={line6} />
            </h3>
          </li>
          <li>
            <h3>
              <FadeInText line={line7} />
            </h3>
          </li>
        </ul>
      </motion.div>
    </ContentContainer>
  );
}

export default HeroTextActivated;
