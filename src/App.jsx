import Navbar from "./components/Navabr/navbarr.jsx";
import Hero from "./components/hero/hero.jsx";
import Services from "./components/services/servicess.jsx";
import Parallax from "./components/parallax/parallaxx.jsx";
import Contact from "./components/contact/contactt.jsx";
import Portofilo from "./components/portofilo/portofiloo.jsx";
import React from "react";

const App = () => {
  return (
    <div>
      <section id="صفحه اصلی">
        <Navbar />
        <Hero />
      </section>
      <section>
        <Parallax type="services" />
      </section>
      <section id="خدمات">
        <Services />
      </section>
      <section>
        <Parallax type="portfolio" />
      </section>
      <Portofilo />
      <section
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        id="ارتباط با من"
      >
        <Contact />
      </section>
    </div>
  );
};

export default App;
