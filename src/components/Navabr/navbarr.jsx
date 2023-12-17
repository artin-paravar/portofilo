import "./navbar.scss";
import Sidebar from "../Sidbar/sIdebarr.jsx";
import { motion } from "framer-motion";
import LOGO from "./logo artin.png";
import TELEGRAM from "./telegram.png";
import YOUTUBE from "./youtube.png";
import INSTAGRAM from "./instagram.png";
const Navbar = () => {
  return (
    <div className="navbar">
      {/* {sidebar} */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          className="logo"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img src={LOGO} alt="" />
        </motion.span>
        <div className="social">
          <a href="https://instagram.com/artin._ap?igshid=OGQ5ZDc2ODk2ZA==">
            <img src={INSTAGRAM} alt="" />
          </a>
          <a href="#">
            <img src={YOUTUBE} alt="" />
          </a>
          <a href="tel:09363431760">
            <img src={TELEGRAM} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
