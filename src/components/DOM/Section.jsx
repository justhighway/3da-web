import PropTypes from "prop-types";
import classNames from "classnames";
import { motion } from "framer-motion";

export default function Section({
  size = "large",
  position = "left",
  hasMotion = true,
  children,
  initial,
  animate,
  exit,
  whileHover,
  whileTap,
  whileDrag,
  whileFocus,
  whileInView,
  transition,
  drag,
  dragConstraints,
  dragElastic,
  dragMomentum,
  dragPropagation,
  dragTransition,
  layout,
  layoutId,
  onAnimationComplete,
  onAnimationStart,
  onDrag,
  onDragEnd,
  onDragStart,
  onHoverEnd,
  onHoverStart,
  onTap,
  viewport,
}) {
  const widthClass = classNames({
    "flex w-[100vw]": size === "large",
    "flex w-[50vw]": size === "medium",
    "flex w-[25vw]": size === "small",
  });

  const positionClass = classNames({
    "items-start": position === "left",
    "items-center": position === "center",
    "items-end": position === "right",
    "ml-auto": position === "right", // Ensures the section aligns to the right
  });

  const commonProps = {
    className: `h-screen p-20 max-w-screen-2xl flex flex-col justify-center ${positionClass} ${widthClass}`,
  };

  const motionProps = hasMotion
    ? {
        initial,
        animate,
        exit,
        whileHover,
        whileTap,
        whileDrag,
        whileFocus,
        whileInView,
        transition,
        drag,
        dragConstraints,
        dragElastic,
        dragMomentum,
        dragPropagation,
        dragTransition,
        layout,
        layoutId,
        onAnimationComplete,
        onAnimationStart,
        onDrag,
        onDragEnd,
        onDragStart,
        onHoverEnd,
        onHoverStart,
        onTap,
        viewport,
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
  initial: PropTypes.object,
  animate: PropTypes.object,
  exit: PropTypes.object,
  whileHover: PropTypes.object,
  whileTap: PropTypes.object,
  whileDrag: PropTypes.object,
  whileFocus: PropTypes.object,
  whileInView: PropTypes.object,
  transition: PropTypes.object,
  drag: PropTypes.bool,
  dragConstraints: PropTypes.object,
  dragElastic: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
  dragMomentum: PropTypes.bool,
  dragPropagation: PropTypes.bool,
  dragTransition: PropTypes.object,
  layout: PropTypes.bool,
  layoutId: PropTypes.string,
  onAnimationComplete: PropTypes.func,
  onAnimationStart: PropTypes.func,
  onDrag: PropTypes.func,
  onDragEnd: PropTypes.func,
  onDragStart: PropTypes.func,
  onHoverEnd: PropTypes.func,
  onHoverStart: PropTypes.func,
  onTap: PropTypes.func,
  viewport: PropTypes.object,
  children: PropTypes.node.isRequired,
};
