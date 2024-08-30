import PropTypes from "prop-types";
import classNames from "classnames";
import { motion } from "framer-motion";

/**
 * 커스텀 섹션 컴포넌트.
 *
 * 이 컴포넌트는 다양한 애니메이션 효과와 섹션 크기, 위치 조정을 지원합니다.
 * `framer-motion` 라이브러리를 사용해 부드럽고 직관적인 애니메이션을 제공하며,
 * 크기 및 위치 설정을 통해 다양한 레이아웃을 구현할 수 있습니다.
 *
 * 주요 속성 및 기능:
 * - `size`: 섹션의 크기를 정의합니다 ("large", "medium", "small").
 * - `position`: 섹션의 수직 정렬을 정의합니다 ("left", "center", "right").
 * - `hasMotion`: 애니메이션 활성화 여부를 정의합니다. 기본값은 true입니다.
 * - `initial`, `animate`, `exit`: 애니메이션 상태를 정의합니다.
 * - `whileHover`, `whileTap`, `whileDrag`: 사용자 상호작용 시 발생하는 애니메이션을 정의합니다.
 * - `drag`, `dragConstraints`, `dragElastic`: 드래그 동작 및 제약 조건을 설정합니다.
 * - `layout`, `layoutId`: 레이아웃 애니메이션 관련 속성을 정의합니다.
 * - `onAnimationComplete`, `onAnimationStart`: 애니메이션 시작 및 완료 시 호출되는 콜백 함수를 정의합니다.
 *
 * 컴포넌트 간 상호작용:
 * - 이 컴포넌트는 일반적으로 상위 컴포넌트로부터 전달받은 콘텐츠를 래핑하며,
 *   애니메이션과 레이아웃 설정을 통해 화면에 적절히 표시합니다.
 *
 * @example
 * function CustomSection({ size, position, hasMotion, children }) {
 *   const widthClass = classNames({
 *     "flex w-[100vw]": size === "large",
 *     "flex w-[50vw]": size === "medium",
 *     "flex w-[25vw]": size === "small",
 *   });
 *
 *   const positionClass = classNames({
 *     "items-start": position === "left",
 *     "items-center": position === "center",
 *     "items-end": position === "right",
 *     "ml-auto": position === "right",
 *   });
 *
 *   const commonProps = {
 *     className: `h-screen p-20 max-w-screen-2xl flex flex-col justify-center ${positionClass} ${widthClass}`,
 *   };
 *
 *   const motionProps = hasMotion ? { ...otherMotionProps } : {};
 *
 *   const SectionElement = hasMotion ? motion.section : "section";
 *
 *   return (
 *     <SectionElement {...commonProps} {...motionProps}>
 *       {children}
 *     </SectionElement>
 *   );
 * }
 *
 * 이 코드 블록은 크기와 위치를 조정할 수 있는 커스텀 섹션을 렌더링하는 구조를 보여줍니다.
 *
 * @param {Object} props 컴포넌트에 전달된 속성 객체
 * @returns {JSX.Element} 커스텀 섹션 요소를 반환합니다.
 */
export default function CustomSection({
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
    "ml-auto": position === "right", // 섹션을 오른쪽으로 정렬
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

CustomSection.propTypes = {
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
