/* eslint-disable react/prop-types */
import gsap from "gsap";
import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";

/**
 * 스크롤 관리 컴포넌트.
 *
 * 이 컴포넌트는 사용자의 스크롤 위치를 감지하고, 섹션 상태를 동적으로 업데이트하여
 * 3D 씬의 애니메이션과 연동합니다. GSAP를 사용해 스크롤 애니메이션을 관리하고,
 * React Three Fiber의 `useFrame` 훅을 활용해 매 프레임마다 스크롤 상태를 확인합니다.
 *
 * 주요 기능:
 * - `useScroll`: 스크롤 위치와 상태를 추적하며, 이를 기반으로 섹션 전환을 제어합니다.
 *   @see https://docs.pmnd.rs/react-three-drei/usescroll
 *
 * - GSAP 타임라인을 사용해 스크롤과 애니메이션을 동기화합니다.
 *   @see https://greensock.com/docs/v3/GSAP/Timeline
 *
 * - 섹션 전환 시, 이전 스크롤 위치와 현재 위치를 비교하여 애니메이션의 흐름을 제어합니다.
 *
 * 컴포넌트 간 상호작용:
 * - `ScrollManager`는 `MainScene`으로부터 `section`과 `onSectionChange` props를 전달받아,
 *   스크롤 이벤트에 따라 섹션 상태를 업데이트합니다.
 * - 이 컴포넌트는 3D 씬의 다른 요소들과 직접 상호작용하지 않지만, 섹션 상태를 통해
 *   전체 씬의 애니메이션 흐름을 제어합니다.
 *
 * @example
 * function ScrollManager({ section, onSectionChange }) {
 *   const scrollData = useScroll();
 *   const lastScroll = useRef(0);
 *   const isAnimating = useRef(false);
 *
 *   useEffect(() => {
 *     if (scrollData.fill) {
 *       scrollData.fill.classList.add("top-0", "absolute");
 *     }
 *   }, [scrollData.fill]);
 *
 *   useEffect(() => {
 *     if (scrollData.el && (section === 0 || section === 1)) {
 *       gsap.to(scrollData.el, {
 *         duration: 1,
 *         scrollTop: section * scrollData.el.clientHeight,
 *         onStart: () => {
 *           isAnimating.current = true;
 *         },
 *         onComplete: () => {
 *           isAnimating.current = false;
 *         },
 *       });
 *     }
 *   }, [section, scrollData.el]);
 *
 *   useFrame(() => {
 *     if (isAnimating.current) {
 *       lastScroll.current = scrollData.scroll.current;
 *       return;
 *     }
 *
 *     const currentSection = Math.floor(scrollData.scroll.current * scrollData.pages);
 *
 *     if (currentSection === 0) {
 *       if (scrollData.scroll.current > lastScroll.current) {
 *         onSectionChange(1);
 *       } else if (scrollData.scroll.current < lastScroll.current) {
 *         onSectionChange(0);
 *       }
 *     } else {
 *       if (currentSection !== section) {
 *         onSectionChange(currentSection);
 *       }
 *     }
 *
 *     lastScroll.current = scrollData.scroll.current;
 *   });
 *
 *   return null;
 * }
 *
 * 이 코드 블록은 스크롤 이벤트를 관리하고 섹션 상태를 동적으로 변경하는 로직을 보여줍니다.
 *
 * @param {Object} props 컴포넌트에 전달된 속성 객체
 * @param {number} props.section 현재 활성화된 섹션 인덱스
 * @param {Function} props.onSectionChange 섹션 상태를 업데이트하는 함수
 * @returns {null} 이 컴포넌트는 DOM에 렌더링되지 않으므로 null을 반환합니다.
 */
export default function ScrollManager({ section, onSectionChange }) {
  const scrollData = useScroll(); // 스크롤 상태 추적을 위한 커스텀 훅 사용
  const lastScroll = useRef(0); // 마지막 스크롤 위치를 저장하는 ref
  const isAnimating = useRef(false); // 현재 애니메이션 중인지 여부를 저장하는 ref

  useEffect(() => {
    if (scrollData.fill) {
      // TailwindCSS 클래스를 동적으로 추가하여 스크롤 요소의 스타일을 조정
      scrollData.fill.classList.add("top-0", "absolute");
    }
  }, [scrollData.fill]);

  useEffect(() => {
    if (scrollData.el && (section === 0 || section === 1)) {
      gsap.to(scrollData.el, {
        duration: 1, // 스크롤 애니메이션의 지속 시간
        scrollTop: section * scrollData.el.clientHeight, // 스크롤 위치를 섹션에 따라 조정
        onStart: () => {
          isAnimating.current = true; // 애니메이션 시작 시 상태 변경
        },
        onComplete: () => {
          isAnimating.current = false; // 애니메이션 완료 시 상태 변경
        },
      });
    }
  }, [section, scrollData.el]);

  useFrame(() => {
    if (isAnimating.current) {
      lastScroll.current = scrollData.scroll.current;
      return;
    }

    const currentSection = Math.floor(
      scrollData.scroll.current * scrollData.pages
    );

    if (currentSection === 0) {
      if (scrollData.scroll.current > lastScroll.current) {
        onSectionChange(1); // 아래로 스크롤 시 섹션을 1로 변경
      } else if (scrollData.scroll.current < lastScroll.current) {
        onSectionChange(0); // 위로 스크롤 시 섹션을 0으로 변경
      }
    } else {
      if (currentSection !== section) {
        onSectionChange(currentSection); // 섹션 인덱스에 따라 섹션 상태 업데이트
      }
    }

    lastScroll.current = scrollData.scroll.current; // 마지막 스크롤 위치 저장
  });

  return null;
}
