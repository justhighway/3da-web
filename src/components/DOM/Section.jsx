import PropTypes from "prop-types";
import classNames from "classnames";
import { motion, transform } from "framer-motion";

export default function Section({
  size = "large",
  position = "left",
  hasMotion = true,
  children,
}) {
  const widthClass = classNames({
    "w-[100vw]": size === "large",
    "w-[50vw]": size === "medium",
    "w-[25vw]": size === "small",
  });

  const positionClass = classNames({
    "items-start": position === "left",
    "items-center": position === "center",
    "items-end": position === "right",
  });

  const commonProps = {
    className: `h-screen w-screen p-20 max-w-screen-2xl flex flex-col justify-center ${positionClass} ${widthClass}`,
  };

  const motionProps = hasMotion
    ? {
        initial: { opacity: 0, y: 50 },
        whileInView: {
          opacity: 1,
          y: 0,
          transition: { duration: 1, delay: 0.4 },
        },
        viewport: { once: true },
      }
    : {};

  const SectionElement = hasMotion ? motion.section : "section";

  return (
    <SectionElement {...commonProps} {...motionProps}>
      {children}
    </SectionElement>
  );
}

Section.propTypes = {
  size: PropTypes.oneOf(["large", "medium", "small"]),
  position: PropTypes.oneOf(["left", "center", "right"]),
  hasMotion: PropTypes.bool,
  children: PropTypes.node.isRequired,
};
