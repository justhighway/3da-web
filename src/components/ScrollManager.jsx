import gsap from "gsap";
import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";

export default function ScrollManager({ section, onSectionChange }) {
  const scrollData = useScroll();
  const lastScroll = useRef(0);
  const isAnimating = useRef(false);

  useEffect(() => {
    if (scrollData.fill) {
      // tailwindCSS 클래스 적용
      scrollData.fill.classList.add("top-0", "absolute");
    }
  }, [scrollData.fill]);

  useEffect(() => {
    if (scrollData.el) {
      gsap.to(scrollData.el, {
        duration: 0.5,
        scrollTop: section * scrollData.el.clientHeight,
        onStart: () => {
          isAnimating.current = true;
        },
        onComplete: () => {
          isAnimating.current = false;
        },
      });
    }
  }, [section, scrollData.el]);

  useFrame(() => {
    if (isAnimating.current) {
      lastScroll.current = scrollData.scroll.current;
      return;
    }

    /** 매 프레임마다 (현재 스크롤 값 * 페이지 수)를 통한 현재 섹션 값을 갱신 (저장)
     ** 예: scroll.current(0.3) * scroll.pages(5) = 1.5 (섹션1) */
    const currentSection = Math.floor(
      scrollData.scroll.current * scrollData.pages
    );

    if (
      /* 현재 scroll 데이터가 마지막 scroll current보다 크고,
       * currentSection이 0이라면
       * section을 1로 전환
       ** 예: scroll.current(0.3) > lastScroll.current(0.6) => true */
      scrollData.scroll.current > lastScroll.current &&
      currentSection === 0
    ) {
      onSectionChange(1);
    }
    if (
      // 현재 scroll 데이터가 마지막 scroll current보다 작고, currentSection이 0이라면
      // section을 0으로 전환
      scrollData.scroll.current < lastScroll.current &&
      currentSection === 0
    ) {
      onSectionChange(0);
    }

    // lastScroll.current 값을 현재 scroll 값으로 재할당
    lastScroll.current = scrollData.scroll.current;
  });

  return null;
}
