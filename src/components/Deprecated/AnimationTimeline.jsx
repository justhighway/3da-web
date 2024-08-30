// AnimationTimeline.jsx
import { useEffect, useRef, forwardRef, useImperativeHandle } from "react";
import gsap from "gsap";
import PropTypes from "prop-types";

/**
 * AnimationTimeline 컴포넌트는 주어진 애니메이션 시퀀스를 실행하기 위해
 * gsap 타임라인을 생성하고 제어할 수 있도록 한다.
 *
 * @param {Object} groupRef - 애니메이션을 적용할 그룹의 참조 객체.
 * @param {Object} camera - 카메라 객체, 카메라의 회전 애니메이션에 사용된다.
 * @param {Array} animations - 애니메이션 설정을 포함한 배열.
 * @param {Object} ref - 부모 컴포넌트에서 타임라인을 참조할 수 있도록 제공되는 ref 객체.
 */
const AnimationTimeline = forwardRef(
  ({ groupRef, camera, animations }, ref) => {
    const tl = useRef(null); // 타임라인 객체를 참조하기 위한 ref

    // 부모 컴포넌트가 타임라인 객체에 접근할 수 있도록 useImperativeHandle을 사용
    useImperativeHandle(ref, () => ({
      getTimeline: () => tl.current,
    }));

    /**
     * 애니메이션 타임라인을 설정하고, 애니메이션 배열을 순회하며
     * 각 애니메이션을 타임라인에 추가한다.
     *
     * 의존성 배열에 있는 groupRef, camera가 준비되면 타임라인을 초기화한다.
     */
    useEffect(() => {
      // 그룹 참조나 카메라가 준비되지 않았다면 타임라인 설정을 중단
      if (!groupRef.current || !camera) return;

      // gsap 타임라인 생성 (초기에는 정지 상태로 설정)
      tl.current = setupTimeline(groupRef, camera, animations);

      // 타임라인 클린업: 컴포넌트 언마운트 시 타임라인을 제거하여 메모리 누수를 방지
      return () => {
        if (tl.current) {
          tl.current.kill();
        }
      };
    }, [animations, groupRef, camera]); // groupRef, camera, animations가 변경될 때마다 타임라인을 재설정

    return null; // 이 컴포넌트는 UI를 렌더링하지 않는다.
  }
);

// 컴포넌트의 displayName 설정
AnimationTimeline.displayName = "AnimationTimeline";

/**
 * PropTypes를 사용하여 AnimationTimeline 컴포넌트에 전달되는 props의 타입을 정의.
 */
AnimationTimeline.propTypes = {
  groupRef: PropTypes.object.isRequired, // 애니메이션 대상 그룹 참조
  camera: PropTypes.object.isRequired, // 카메라 객체
  animations: PropTypes.arrayOf(
    PropTypes.shape({
      target: PropTypes.object.isRequired, // 애니메이션 대상
      props: PropTypes.object.isRequired, // gsap에 전달할 애니메이션 속성
      start: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
        .isRequired, // 애니메이션 시작 시간 또는 이전 애니메이션과의 관계
    })
  ).isRequired,
};

/**
 * setupTimeline 함수는 gsap 타임라인을 초기화하고,
 * 주어진 애니메이션 설정을 기반으로 타임라인에 애니메이션을 추가한다.
 *
 * @param {Object} groupRef - 애니메이션 대상 그룹의 참조 객체.
 * @param {Object} camera - 카메라 객체.
 * @param {Array} animations - 애니메이션 설정 배열.
 * @returns {Object} - 생성된 gsap 타임라인 객체.
 */
function setupTimeline(groupRef, camera, animations) {
  const tl = gsap.timeline({ paused: true }); // 타임라인을 정지 상태로 생성

  // animations 배열을 순회하며 각 애니메이션을 타임라인에 추가
  animations.forEach((animation) => {
    const { target, props, start } = animation;
    tl.to(target, props, start);
  });

  return tl; // 생성된 타임라인을 반환
}

// AnimationTimeline 컴포넌트를 기본 내보내기로 설정
export default AnimationTimeline;
