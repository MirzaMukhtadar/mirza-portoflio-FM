import React from "react";
import { motion } from "framer-motion";
import "./navbar.scss";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Mirza Mukhtadar
        </motion.span>
        <div className="social">
          <a href="">
            <img src="../../../public/linkedin.svg" alt="" />
          </a>
          <a href="">
            <img src="../../../public/icons8-github-24.png" alt="" />
          </a>
          <a href="">
            <img src="../../../public/twitter.svg" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
