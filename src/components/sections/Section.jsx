/* eslint-disable react/prop-types */
import classNames from "classnames";
import { motion } from "framer-motion";

export default function Section({
  size = "large",
  hasMotion = true,
  children,
}) {
  const widthClass = classNames({
    "w-[100vw]": size === "large",
    "w-[50vw]": size === "medium",
    "w-[25vw]": size === "small",
  });

  const SectionTag = hasMotion ? motion.section : "section";

  const motionProps = hasMotion
    ? {
        initial: { opacity: 0, y: 50 },
        whileInView: {
          opacity: 1,
          y: 0,
          transition: { duration: 1, delay: 0.6 },
        },
        viewport: { once: true },
      }
    : {};

  return (
    <SectionTag
      className={`h-[100vh] p-20 max-w-screen-2xl flex flex-col justify-center items-start ${widthClass}`}
      {...motionProps}
    >
      {children}
    </SectionTag>
  );
}
