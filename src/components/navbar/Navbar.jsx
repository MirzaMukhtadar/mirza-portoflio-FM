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
          Zubair
        </motion.span>
        <div className="social">
          <a href="">
            <img src="../../../public/instagram.png" alt="" />
          </a>
          <a href="">
            <img src="../../../public/dribbble.png" alt="" />
          </a>
          <a href="">
            <img src="../../../public/dribbble.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
