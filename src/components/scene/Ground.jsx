import { Box } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

export default function Ground() {
  const texture = useLoader(TextureLoader, "/textures/concrete.jpg");

  return (
    <>
      <Box
        args={[10, 0.02, 5]}
        position={[-2, -0.06, -4]}
        rotation={[0, Math.PI / 5, 0]}
      >
        <meshStandardMaterial map={texture} color="#636363" />
      </Box>
    </>
  );
}
