import { useRef } from "react";
import "./parallax.scss";
import SUN from "./sun.png";
import PLANETS from "./planets.png";
import { motion, useScroll, useTransform } from "framer-motion";
const Parllax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const ytext = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const ybg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg, var(--liner2), var(--liner1))"
            : "linear-gradient(180deg, var(--liner2), var(--liner3))",
      }}
    >
      <motion.h1 style={{ y: ytext }}>
        {type === "services" ? "ما چیکار میکنیم ؟" : "ما چیکار کردیم؟"}
      </motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div
        style={{
          y: ybg,
          backgroundImage: `url(${type === "services" ? PLANETS : SUN})`,
        }}
        className="planets"
      ></motion.div>
      <motion.div style={{ x: ybg }} className="stars"></motion.div>
    </div>
  );
};

export default Parllax;
