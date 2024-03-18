import React from "react";
import { motion } from "framer-motion";

const Test = () => {
  return (
    <div className="course">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        transition={{ duration: 2 }}
        whileHover={{ opacity: 1, scale: 2 }}
        className="box"
      ></motion.div>
    </div>
  );
};

export default Test;
