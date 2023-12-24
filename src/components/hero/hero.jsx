import { motion } from "framer-motion";
import "./hero.scss";
import HERO from "../../img/hero 2.png";
import SCROLL from "../../img/scroll.png";
import TypeWriterEffect from "react-typewriter-effect";

const textvarintes = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollbutton: {
    y: 10,
    opacity: 0,
    transition: {
      duration: 1,
      repeat: Infinity,
    },
  },
};
const textbottomvarintes = {
  initial: {
    x: 0,
  },
  animate: {
    x: "220%",
    transition: {
      repeatType: "mirror",
      repeat: Infinity,
      duration: 30,
    },
  },
};
const Hero = ({ textenter, textleave }) => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="text-container"
          variants={textvarintes}
          initial="initial"
          animate="animate"
        >
          <div className="tanzim">
            <h1 onMouseEnter={textenter} onMouseLeave={textleave}>
              <TypeWriterEffect
                textStyle={{
                  fontWeight: 500,
                  fontSize: "1.5em",
                }}
                startDelay={900}
                cursorColor="white"
                multiText={[
                  " طراح UI/UX (: ",
                  "توسعه دهنده (:",
                  "طراح وب سایت (:",
                ]}
                typeSpeed={40}
              />
            </h1>

            <motion.button variants={textvarintes}>ارتباط با من</motion.button>
            <motion.img
              variants={textvarintes}
              animate="scrollbutton"
              src={SCROLL}
              alt=""
            />
          </div>
        </motion.div>
      </div>
      <motion.div
        variants={textbottomvarintes}
        animate="animate"
        initial="initial"
        className="slidertext"
      >
        آرتین پراور وب سایت شخصی
      </motion.div>
      <div className="img-container">
        <img src={HERO} alt="" />
      </div>
    </div>
  );
};

export default Hero;
