import { motion } from "framer-motion";
import "./contact.scss";
const variants = {
  initial: {
    x: 500,
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
};
const Contact = () => {
  return (
    <motion.div
      className="contact"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>ارتباط با من</motion.h1>
        <motion.div variants={variants} className="item">
          <h2>ایمیل</h2>
          <span>artinparavar@gmail.com</span>
        </motion.div>
        <motion.div variants={variants} className="item">
          <h2>ادرس</h2>
          <span>همه جا هستم</span>
        </motion.div>
        <motion.div variants={variants} className="item">
          <h2>شماره تلفن</h2>
          <span>1760 343 0936</span>
        </motion.div>
      </motion.div>
      <div className="formcontainer">
        <motion.div
          className="phonesvg"
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          transition={{ delay: 0.9, duration: 1 }}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Orange_Phone_Font-Awesome.svg/512px-Orange_Phone_Font-Awesome.svg.png?20130617102919"
            alt=""
          />
        </motion.div>
        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.9, duration: 1 }}
        >
          <input type="text" required placeholder="اسم" />
          <input type="email" required placeholder="ایمیل" />
          <textarea rows={8} placeholder="پیام" />
          <button>ارسال پیام</button>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;
