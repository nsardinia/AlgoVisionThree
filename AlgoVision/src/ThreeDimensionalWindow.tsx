import { Canvas } from '@react-three/fiber'
import { OrbitControls } from "@react-three/drei";

function ThreeDimensionalWindow() {
  return (
    <div style={{margin: "3px", border: "8px solid #2d2d2d", borderRadius: "8px", width: "50vw", height: "80vh"}}>
        <Canvas
        camera={{ position: [0, 3, 3], near: 0.025 }}
        style={{ backgroundColor: "black" }}
        >
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
            <OrbitControls />
            <mesh>
                <boxGeometry args={[2, 2, 2]}/>
                <meshStandardMaterial />
            </mesh>
        <gridHelper />
        <axesHelper args={[5]} />
        </Canvas>
        </div>
  )
}

export default ThreeDimensionalWindow

