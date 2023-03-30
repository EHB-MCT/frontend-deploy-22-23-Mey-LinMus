import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function App() {
  return (
    <>
      <Canvas>
        <OrbitControls />

        <mesh position={[0, 0.5, 2]}>
          <boxGeometry />
          <meshBasicMaterial color="blue" />
        </mesh>

        <mesh position={[0, 2.5, 0]} rotation={[Math.PI / 15, 0, 0]}>
          <coneGeometry args={[1, 5, 12]} />
          <meshBasicMaterial color="red" />
        </mesh>

        <mesh position={[2.5, 1, 1]}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshBasicMaterial color="green" />
        </mesh>

        <mesh position={[2, 1.5, 0]}>
          <capsuleGeometry args={[1, 2, 16]} />
          <meshBasicMaterial color="yellow" />
        </mesh>

        {/* Plane */}
        <mesh position={[0, 0, 0]} rotation-x={-Math.PI / 2}>
          <planeGeometry args={[10, 10]} />
          <meshBasicMaterial color="gray" />
        </mesh>
      </Canvas>
    </>
  );
}

export default App;
