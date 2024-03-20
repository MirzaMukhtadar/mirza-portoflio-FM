import React, { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Todo",
    img: "https://plus.unsplash.com/premium_photo-1684331678124-ff62c82cef7a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VG9kb3xlbnwwfDB8MHx8fDA%3D",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur voluptate, dolorem ea vitae delectus ullam nulla sint nostrum accusantium optio eligendi, error soluta eveniet cum?",
  },
  {
    id: 2,
    title: "Book Search",
    img: "https://images.unsplash.com/photo-1704121355552-10ac4d5b1677?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8fA%3D%3D",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur voluptate, dolorem ea vitae delectus ullam nulla sint nostrum accusantium optio eligendi, error soluta eveniet cum?",
  },
  {
    id: 3,
    title: "Login Page",
    img: "https://images.unsplash.com/photo-1704026437902-699fa6a8c98d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTN8fHxlbnwwfHx8fHw%3D",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur voluptate, dolorem ea vitae delectus ullam nulla sint nostrum accusantium optio eligendi, error soluta eveniet cum?",
  },
  {
    id: 4,
    title: "Rock Paper Scissors",
    img: "https://plus.unsplash.com/premium_photo-1669234305308-c2658f1fbf12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTl8fHxlbnwwfHx8fHw%3D",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur voluptate, dolorem ea vitae delectus ullam nulla sint nostrum accusantium optio eligendi, error soluta eveniet cum?",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Portfolio;
