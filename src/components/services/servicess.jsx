import { motion } from "framer-motion";
import "./services.scss";
import { SlArrowRight } from "react-icons/sl";
import { SlArrowLeft } from "react-icons/sl";
import { useState } from "react";

const Services = ({ textenter, textleave }) => {
  const [slide, setslide] = useState(0);

  const variants = {
    initial: {
      // x: -600,
      y: 400,
      opacity: 0,
    },
    animate: {
      y: 0,
      // x: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
        staggerChildren: 0.1,
      },
    },
  };
  const data = [
    {
      id: 1,
      title: "برندها",
      lorem:
        "لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد. معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند که صفحه طراحی یا صفحه بندی شده بعد از اینکه متن در آن قرار گیرد چگونه به نظر می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در نظر گرفته شده‌است",
    },
    {
      id: 2,
      title: "نمونه ها",
      lorem:
        "لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد. معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند که صفحه طراحی یا صفحه بندی شده بعد از اینکه متن در آن قرار گیرد چگونه به نظر می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در نظر گرفته شده‌است",
    },
    {
      id: 3,
      title: "تعرفه ها",
      lorem:
        "لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد. معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند که صفحه طراحی یا صفحه بندی شده بعد از اینکه متن در آن قرار گیرد چگونه به نظر می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در نظر گرفته شده‌است",
    },
  ];
  const handleClick = (way) => {
    way === "left"
      ? setslide(slide > 0 ? slide - 1 : 2)
      : setslide(slide < data.length - 1 ? slide + 1 : 0);
  };
  console.log(slide);
  return (
    <motion.div
      className="services"
      initial={"initial"}
      whileInView={"animate"}
    >
      <motion.div className="titilecontainer" variants={variants}>
        <div className="title">
          <img
            src="https://www.weresc.com/wp-content/uploads/2023/01/web.jpg"
            alt=""
          />
          <motion.h1 onMouseEnter={textenter} onMouseLeave={textleave}>
            <b>طراحی</b> وب سایت
          </motion.h1>
        </div>
        <div className="title">
          <motion.h1 onMouseEnter={textenter} onMouseLeave={textleave}>
            <b>برای</b> بیزنس شما!
          </motion.h1>
          <button>ما چیکار میکنیم؟</button>
        </div>
      </motion.div>
      <motion.div className="listcountainer" variants={variants}>
        <div
          className="slider"
          style={{ transform: `translateX(-${slide * 100}vw)` }}
        >
          {data.map((d) => (
            <div className="container" key={d.id}>
              <div className="item">
                <div className="itemha">
                  <h2>{d.title}</h2>
                  <p>{d.lorem}</p>
                  <button>اطلاعات بیشتر</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
      <motion.div variants={variants} className="arrow">
        <SlArrowLeft className="left" onClick={() => handleClick("left")} />
        <SlArrowRight className="right" onClick={() => handleClick()} />
      </motion.div>
    </motion.div>
  );
};

export default Services;
