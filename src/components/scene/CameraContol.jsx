/* eslint-disable react/no-unknown-property */
import { useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CameraControl({ section }) {
  const { camera } = useThree();
  const timelineRef = useRef(gsap.timeline({ paused: true }));

  useEffect(() => {
    const tl = timelineRef.current;

    // GSAP Timeline 설정
    tl.to(camera.position, {
      x: 1,
      y: 1,
      z: 2,
      duration: 2,
      ease: "power2.inOut",
      onUpdate: () => camera.lookAt(0, 0, 0),
    })
      .to(camera.position, {
        x: 2,
        y: 1.5,
        z: 2.5,
        duration: 2,
        ease: "power2.inOut",
        onUpdate: () => camera.lookAt(0, 0, 0),
      })
      .to(camera.position, {
        x: 2.5,
        y: 2,
        z: 3,
        duration: 2,
        ease: "power2.inOut",
        onUpdate: () => camera.lookAt(0, 0, 0),
      })
      .to(camera.position, {
        x: 3,
        y: 2,
        z: 3,
        duration: 2,
        ease: "power2.inOut",
        onUpdate: () => camera.lookAt(3, 2, 3),
      });

    // 섹션 값에 따라 애니메이션 실행
    if (section >= 2 && section <= 5) {
      tl.play();
    } else {
      tl.reverse();
    }
  }, [section, camera]);

  return null;
}
