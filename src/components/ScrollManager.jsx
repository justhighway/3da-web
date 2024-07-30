import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

export default function ScrollManager({ currentSection, handleSectionChange }) {
  const data = useScroll();
  console.log("data: ", data);
  const lastScroll = useRef(0);
  console.log("lastScroll: ", lastScroll);
  const isAnimating = useRef(false);
  console.log("isAnimating: ", isAnimating);

  data.fill.classList.add("top-0");
  data.fill.classList.add("absolute");

  useEffect(() => {
    gsap.to(data.el, {
      duration: 1,
      scrollTop: currentSection * data.el.clientHeight,
      onStart: () => {
        isAnimating.current = true;
      },
      onComplete: () => {
        isAnimating.current = false;
      },
    });
  }, [currentSection]);

  useFrame(() => {
    if (isAnimating.current) {
      lastScroll.current = data.scroll.current;
      return;
    }

    const curSection = Math.floor(data.scroll.current * data.pages);
    console.log("curSection: ", curSection);
    if (data.scroll.current > lastScroll.current && curSection === 0) {
      handleSectionChange(1);
    }
    if (
      data.scroll.current < lastScroll.current &&
      data.scroll.current < 1 / (data.pages - 1)
    ) {
      handleSectionChange(0);
    }
    lastScroll.current = data.scroll.current;
  });

  return null;
}
