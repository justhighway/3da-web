import PropTypes from "prop-types";
import { motion } from "framer-motion";

/**
 * 커스텀 버튼 컴포넌트.
 *
 * 이 컴포넌트는 다양한 스타일과 크기를 지원하는 버튼을 제공합니다. `framer-motion`을 사용하여
 * 버튼에 애니메이션을 추가할 수 있습니다.
 *
 * 주요 기능:
 * - `variant`: 버튼의 스타일을 정의합니다. 예: primary, secondary, success, danger.
 * - `size`: 버튼의 크기를 정의합니다. 예: small, medium, large.
 * - `color`: 버튼의 색상을 정의합니다. 기본적으로 제공되는 색상 팔레트에 따라 버튼의 색상을 지정합니다.
 * - `motionProps`: `framer-motion`에서 제공하는 애니메이션 속성을 직접 전달하여 버튼의 애니메이션을 제어합니다.
 *   @see https://www.framer.com/api/motion/ Component API for motion
 *
 * 컴포넌트 간 상호작용:
 * - 이 버튼 컴포넌트는 다양한 UI 요소와 함께 사용될 수 있으며, `motionProps`를 통해 애니메이션 효과를 강화할 수 있습니다.
 * - `children` 속성을 통해 버튼 안에 텍스트 또는 다른 요소를 삽입할 수 있습니다.
 *
 * @example
 * <CustomButton variant="primary" size="large" color="blue">
 *   클릭하세요
 * </CustomButton>
 *
 * 이 코드 블록은 큰 사이즈의 파란색 기본 버튼을 렌더링합니다.
 *
 * @param {Object} props 컴포넌트에 전달된 속성 객체
 * @param {string} props.variant 버튼 스타일 (primary, secondary, success, danger 중 하나)
 * @param {string} props.size 버튼 크기 (small, medium, large 중 하나)
 * @param {string} props.color 버튼 색상 (blue, gray, green, red 중 하나)
 * @param {node} props.children 버튼 내부의 콘텐츠
 * @param {string} [props.className] 추가적인 클래스 이름
 * @param {Object} [props.motionProps] `framer-motion`의 애니메이션 속성
 * @returns {JSX.Element} 커스텀 버튼 요소를 반환합니다.
 */
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
