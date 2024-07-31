/* eslint-disable react/prop-types */

import { motion } from "framer-motion";

export default function Section({ children, className }) {
  return (
    <motion.section
      className={`flex flex-col w-screen h-screen ${className}`}
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: 0.2,
        },
      }}
    >
      {children}
    </motion.section>
  );
}
