import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./cursor.scss";
const Cursor = () => {
  const [position, setPostion] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const mousemove = (e) => {
      setPostion({ x: e.clientX, y: e.clientY }, []);
    };
    window.addEventListener("mousemove", mousemove);
    return () => {
      window.removeEventListener("mousemove", mousemove);
    };
  });
  console.log(position);
  return (
    <motion.div
      className="cursor"
      animate={{ left: position.x - 25, top: position.y - 25 }}
      transition={{ transition: 0 }}
    ></motion.div>
  );
};

export default Cursor;
