import "./navbar.scss";
import Sidebar from "../Sidbar/sIdebarr.jsx";
import { motion } from "framer-motion";
import LOGO from "./logo artin.png";

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
          {/* <a href="https://instagram.com/artin._ap?igshid=OGQ5ZDc2ODk2ZA=="> */}
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png"
            alt="instagram"
          />
          {/* </a> */}
          <a href="#">
            <img
              src="data:image/png;base64,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"
              alt="youtube"
            />
          </a>
          <a href="tel:09363431760">
            <img
              src="https://static.vecteezy.com/system/resources/previews/023/986/679/original/telegram-logo-telegram-logo-transparent-telegram-icon-transparent-free-free-png.png"
              alt="telegram"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
