import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import ResponsiveCanvas from "./ResponsiveCanvas";
import MainScene from "@components/MainScene";
import Lights from "@components/Lights";
import NavBar from "@components/NavBar";
import { OrbitControls } from "@react-three/drei";
import CameraController from "@components/CameraController";

const MainCanvas = () => {
  const [section, setSection] = useState(0);
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  return (
    <div className="w-screen h-screen overflow-hidden">
      <Canvas
        gl={{ antialias: true }}
        shadows={"soft"}
        camera={{
          fov: 60,
          near: 0.1,
          far: 1000,
          position: [0, 0, 4], // 초기 카메라 위치
        }}
      >
        <Lights />
        <MainScene section={section} setSection={setSection} />
        <ResponsiveCanvas />
        <CameraController section={section} />
        {/* <OrbitControls /> */}
      </Canvas>
      <NavBar
        onSectionChange={setSection}
        isMenuOpened={isMenuOpened}
        setIsMenuOpened={setIsMenuOpened}
      />
    </div>
  );
};

export default MainCanvas;
