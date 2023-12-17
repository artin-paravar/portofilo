import { motion } from "framer-motion";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.18,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.01,
      staggerDirection: -1,
    },
  },
};
const itemvariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};
const Links = () => {
  const items = ["صفحه اصلی", "خدمات ", "نمونه کارها", "ارتباط با من"];
  return (
    <motion.div className="links" variants={variants}>
      {items.map((item) => (
        <motion.a
          variants={itemvariants}
          href={`#${item}`}
          whileHover={{ scale: 1.1 }}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
