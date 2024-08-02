import { Box } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

export default function BaseGround() {
  const texture = useLoader(TextureLoader, "/textures/concrete.jpg");

  return (
    <>
      <Box
        args={[15, 0.001, 20]}
        position={[0, -0.075, -6]}
        rotation={[0, 0, 0]}
      >
        <meshStandardMaterial map={texture} color="#6c6c6c" />
      </Box>
    </>
  );
}
