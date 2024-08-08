import PropTypes from "prop-types";
import { motion } from "framer-motion";

export default function CustomButton({
  variant = "primary",
  size = "medium",
  color = "blue",
  children,
  className = "",
  motionProps = {},
}) {
  const baseStyles =
    "font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline";

  const variantStyles = {
    primary: "bg-blue-500 hover:bg-blue-700 text-white",
    secondary: "bg-gray-500 hover:bg-gray-700 text-white",
    success: "bg-green-500 hover:bg-green-700 text-white",
    danger: "bg-red-500 hover:bg-red-700 text-white",
  };

  const sizeStyles = {
    small: "text-xs py-1 px-2",
    medium: "text-sm py-2 px-4",
    large: "text-lg py-3 px-6",
  };

  const colorStyles = {
    blue: "bg-blue-800 hover:bg-blue-600",
    gray: "bg-gray-500 hover:bg-gray-700",
    green: "bg-green-500 hover:bg-green-700",
    red: "bg-red-500 hover:bg-red-700",
  };

  const variantClass = variantStyles[variant];
  const sizeClass = sizeStyles[size];
  const colorClass = colorStyles[color];

  return (
    <motion.button
      {...motionProps}
      className={`${baseStyles} ${variantClass} ${sizeClass} ${colorClass} ${className}`}
    >
      {children}
    </motion.button>
  );
}

CustomButton.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary", "success", "danger"])
    .isRequired,
  size: PropTypes.oneOf(["small", "medium", "large"]).isRequired,
  color: PropTypes.oneOf(["blue", "gray", "green", "red"]).isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  motionProps: PropTypes.object,
};
