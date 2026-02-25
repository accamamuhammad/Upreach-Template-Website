"use client";

import { motion } from "framer-motion";

const SecondaryBtn = ({ title }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="border border-green-400 text-green-400 py-3 px-7 rounded-full hover:bg-green-400 hover:text-green-950 transition-all duration-300"
    >
      {title}
    </motion.button>
  );
};

export default SecondaryBtn;