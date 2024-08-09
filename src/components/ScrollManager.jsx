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
        duration: 1,
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

    const currentSection = Math.floor(
      scrollData.scroll.current * scrollData.pages
    );

    if (
      scrollData.scroll.current > lastScroll.current &&
      currentSection === 0
    ) {
      onSectionChange(1);
    }
    if (
      scrollData.scroll.current < lastScroll.current &&
      currentSection === 0
    ) {
      onSectionChange(0);
    }

    lastScroll.current = scrollData.scroll.current;
  });

  return null;
}
