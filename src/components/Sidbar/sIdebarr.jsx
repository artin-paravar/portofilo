import "./sidebar.scss";
import Toggle from "./toggle/toggle";
import Links from "./links/link";
import { motion } from "framer-motion";
import { useState } from "react";
const Sidbar = () => {
  const [open, setOpen] = useState(false);
  const varintes = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 20,
      },
    },
    closed: {
      clipPath: "circle(30px at 50px 50px)",
      transition: {
        deley: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };
  return (
    <motion.div className="sidebar">
      <motion.div
        className="bg"
        animate={open ? "open" : "closed"}
        variants={varintes}
      >
        <Links />
      </motion.div>
      <Toggle setOpen={setOpen} open={open} />
    </motion.div>
  );
};

export default Sidbar;
