import { Canvas } from '@react-three/fiber'
import { Environment, Center } from '@react-three/drei';

import Shirt from './Shirt';
import Background from './Background';
import Camera from './Camera';
import Clothes from './Clothes';

import { useSnapshot } from 'valtio';
import state from '../store';

const CanvasModel = () => {

  const snap = useSnapshot(state);

  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 0], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      className="w-full max-w-full h-full transition-all ease-in"
    >
      <ambientLight intensity={0.5} />
      <Environment preset="city" />

      <Camera>
        <Background />
        <Center>
          {snap.mainImage ? <Clothes /> : <Shirt />} 
        </Center>
      </Camera>
    </Canvas>
  )
}

export default CanvasModel