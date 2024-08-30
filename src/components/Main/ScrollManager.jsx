/* eslint-disable react/prop-types */

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
    if (scrollData.el && (section === 0 || section === 1)) {
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

    if (currentSection === 0) {
      if (scrollData.scroll.current > lastScroll.current) {
        onSectionChange(1);
      } else if (scrollData.scroll.current < lastScroll.current) {
        onSectionChange(0);
      }
    } else {
      if (currentSection !== section) {
        onSectionChange(currentSection);
      }
    }

    lastScroll.current = scrollData.scroll.current;
  });

  return null;
}
