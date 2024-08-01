// ScrollManager.jsx:
import { useEffect, useRef } from "react";
import { useScroll } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { gsap } from "gsap";

export default function ScrollManager({ currentSection, handleSectionChange }) {
  const { camera } = useThree();
  const data = useScroll();
  const lastScroll = useRef(0);
  const isAnimating = useRef(false);

  // useEffect(() => {
  //   data.fill.classList.add("top-0", "absolute");
  // }, [data.fill]);

  useEffect(() => {
    if (!isAnimating.current) {
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
    }
  }, [currentSection, data.el]);

  useFrame(() => {
    if (isAnimating.current) {
      lastScroll.current = data.scroll.current;
      return;
    }

    /** 현재 섹션 계산 값
     **  예: 스크롤 오프셋이 0.3이고, 전체 페이지가 6페이지라면
     *   (0.3*6)에서 나머지 버린 값 = 1(페이지) */
    const curSection = Math.floor(data.scroll.current * data.pages);

    if (curSection !== currentSection) {
      handleSectionChange(curSection);
      animateSectionChange(curSection, camera);
    }

    lastScroll.current = data.scroll.current;
  });

  return null;
}

function animateSectionChange(section, camera) {
  if (section === 1) {
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
  } else if (section === 0) {
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
  } else if (section === 2) {
    gsap
      .timeline()
      .to(camera.position, {
        duration: 2,
        x: 8,
        y: 3,
        z: 3,
        onUpdate: () => camera.updateProjectionMatrix(),
      })
      .to(
        camera.rotation,
        {
          duration: 2,
          x: 0.5,
          y: 1.5,
          z: 0,
          onUpdate: () => camera.updateProjectionMatrix(),
        },
        "<"
      )
      .to(
        camera.position,
        {
          duration: 2,
          x: 7,
          y: 3,
          z: 2,
          onUpdate: () => camera.updateProjectionMatrix(),
        },
        ">"
      )
      .to(
        camera.rotation,
        {
          duration: 1,
          x: 0.5,
          y: 1,
          z: 0,
          onUpdate: () => camera.updateProjectionMatrix(),
        },
        "<"
      );
  }
}
