/* eslint-disable react/prop-types */

import { motion } from "framer-motion";

export default function Section({ children }) {
  return (
    <motion.section
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
      className="flex flex-col items-center justify-center w-screen h-screen p-8 mx-auto max-w-screen-2xl"
    >
      {children}
    </motion.section>
  );
}
