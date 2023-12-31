import Navbar from "./components/Navabr/navbarr.jsx";
import Services from "./components/services/servicess.jsx";
import Parallax from "./components/parallax/parallaxx.jsx";
import Contact from "./components/contact/contactt.jsx";
import Portofilo from "./components/portofilo/portofiloo.jsx";
import React from "react";
import Hero from "./components/hero/hero.jsx";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./components/cursor/cursor.scss";
import { infinity } from "ldrs";
infinity.register();

const App = () => {
  const [position, setPostion] = useState({ x: 0, y: 0 });
  const [cursorvarint, setsurcorvarint] = useState("default");

  useEffect(() => {
    const mousemove = (e) => {
      setPostion({ x: e.clientX, y: e.clientY }, []);
    };
    window.addEventListener("mousemove", mousemove);
    return () => {
      window.removeEventListener("mousemove", mousemove);
    };
  });
  const variants = {
    default: {
      left: position.x - 16,
      top: position.y - 16,
    },
    text: {
      height: 120,
      width: 120,
      left: position.x - 75,
      top: position.y - 75,
      mixBlendMode: "difference",
    },
  };
  const textenter = () => setsurcorvarint("text");
  const textleave = () => setsurcorvarint("default");

  const [isloading, setloading] = useState(true);
  useEffect(() => {
    const preloader = () => {
      setTimeout(() => {
        setloading(false);
      }, 500);
    };
    preloader();
  }, []);

  return (
    <div>
      {isloading ? (
        <div className="preloader" id="preloader">
          <l-infinity
            size="100"
            stroke="4"
            stroke-length="0.15"
            bg-opacity="0.1"
            speed="1.3"
            color="white"
          ></l-infinity>
        </div>
      ) : (
        <>
          <motion.div
            className="cursor"
            animate={cursorvarint}
            variants={variants}
            transition={{ transition: 0, duration: 0.1 }}
          ></motion.div>
          <section id="صفحه اصلی">
            <Navbar />
            <Hero textenter={textenter} textleave={textleave} />
          </section>
          <section>
            <Parallax
              type="services"
              textenter={textenter}
              textleave={textleave}
            />
          </section>
          <section id="خدمات">
            <Services textenter={textenter} textleave={textleave} />
          </section>
          <section>
            <Parallax
              type="portfolio"
              textenter={textenter}
              textleave={textleave}
            />
          </section>
          <Portofilo textenter={textenter} textleave={textleave} />
          <section
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            id="ارتباط با من"
          >
            <Contact textenter={textenter} textleave={textleave} />
          </section>
        </>
      )}
    </div>
  );
};

export default App;
