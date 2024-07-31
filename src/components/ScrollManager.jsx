import { useScroll } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

export default function ScrollManager({ currentSection, handleSectionChange }) {
  const { camera } = useThree();
  const data = useScroll();
  const lastScroll = useRef(0);
  const isAnimating = useRef(false);

  useEffect(() => {
    data.fill.classList.add("top-0");
    data.fill.classList.add("absolute");

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
    if (data.scroll.current > lastScroll.current && curSection === 0) {
      handleSectionChange(1);
      gsap
        .timeline()
        .to(camera.rotation, {
          duration: 2,
          x: 0,
          y: 2.6,
          z: 0,
          onUpdate: () => camera.updateProjectionMatrix(),
        })
        .to(
          camera.position,
          {
            duration: 3,
            x: 4.34,
            y: 2.065,
            z: 2.4,
            onUpdate: () => camera.updateProjectionMatrix(),
          },
          "<"
        )
        .to(
          camera.rotation,
          {
            duration: 2,
            x: 0,
            y: 2,
            z: 0,
            onUpdate: () => camera.updateProjectionMatrix(),
          },
          ">"
        )
        .to(
          camera.position,
          {
            duration: 2,
            x: 4.32,
            y: 2.065,
            z: 2.46,
            onUpdate: () => camera.updateProjectionMatrix(),
          },
          "<"
        );
    }
    if (
      data.scroll.current < lastScroll.current &&
      data.scroll.current < 1 / (data.pages - 1)
    ) {
      handleSectionChange(0);
      gsap
        .timeline()
        .to(camera.position, {
          duration: 1,
          x: 6,
          y: 2,
          z: 2,
          onUpdate: () => camera.updateProjectionMatrix(),
        })
        .to(
          camera.rotation,
          {
            duration: 1,
            x: -0.7853,
            y: 1.1302,
            z: 0.7353144,
            onUpdate: () => camera.updateProjectionMatrix(),
          },
          "<"
        );
    }
    lastScroll.current = data.scroll.current;
  });

  return null;
}
