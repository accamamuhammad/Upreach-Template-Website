"use client";

import { motion } from "framer-motion";

const PrimaryBtn = ({ title }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="bg-green-400 hover:bg-green-500 text-green-950 font-medium py-3 px-7 rounded-full shadow-md hover:shadow-green-400/30 transition-all duration-300"
    >
      {title}
    </motion.button>
  );
};

export default PrimaryBtn;