import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import ResponsiveCanvas from "./ResponsiveCanvas";
import Lights from "@components/Lights";
import NavBar from "@components/NavBar";
import MainScene from "@components/MainScene";
import { Environment, Sky } from "@react-three/drei";

const MainCanvas = () => {
  const [section, setSection] = useState(0);
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  console.log(section);

  return (
    <div className="w-screen h-screen">
      <Canvas
        gl={{ antialias: true }}
        shadows={"soft"}
        camera={{
          fov: 60,
          near: 0.1,
          far: 1000,
          position: [0, 0, 0],
          rotation: [0, 0, 0],
        }}
      >
        <Lights />
        <Environment preset="night" />
        <ResponsiveCanvas />
        <MainScene section={section} setSection={setSection} />
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
