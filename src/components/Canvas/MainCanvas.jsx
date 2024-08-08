import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import ResponsiveCanvas from "./ResponsiveCanvas";
import MainScene from "@components/MainScene";
import Lights from "@components/Lights";
import { Leva } from "leva";
import useCameraPositionLeva from "@hooks/useCameraPositionLeva";
import useCameraRotationLeva from "@hooks/useCameraRotationLeva";
import NavBar from "@components/NavBar";

const MainCanvas = () => {
  const [section, setSection] = useState(0);
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  return (
    <div className="w-screen h-screen overflow-hidden">
      <Leva collapsed={false} />
      <Canvas
        gl={{ antialias: true }}
        shadows={"soft"}
        camera={{
          fov: 60,
          near: 0.1,
          far: 1000,
          position: [0, 0, 4],
        }}
      >
        <Lights />
        <MainScene section={section} setSection={setSection} />
        <gridHelper />
        <ResponsiveCanvas />
        <CameraController />
      </Canvas>
      <NavBar
        onSectionChange={setSection}
        isMenuOpened={isMenuOpened}
        setIsMenuOpened={setIsMenuOpened}
      />
    </div>
  );
};

const CameraController = () => {
  useCameraPositionLeva();
  useCameraRotationLeva();
  return null;
};

export default MainCanvas;
