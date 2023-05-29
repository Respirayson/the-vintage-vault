// "Pile of Clothes" (https://skfb.ly/o8PQ9) by lyricizt is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).

import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { easing } from "maath"
import { useSnapshot } from 'valtio';
import state from '../store';

const Clothes = () => {

    const snap = useSnapshot(state);
    const { nodes, materials } = useGLTF("./pile_of_clothes.glb");

    useFrame((state, delta) => easing.dampC(materials.Default_OBJ.color, snap.color, 0.25, delta));

    const stateString = JSON.stringify(snap);

    return (
        <group key={stateString}>
            <group rotation={[-Math.PI / 4, 0, 0]}>
                <mesh
                scale={[0.1, 0.1, 0.1]}
                position={[0, 0, 0]}
                castShadow
                receiveShadow
                geometry={nodes.Object_2.geometry}
                material={materials.Default_OBJ}
                dispose={null}
                />
            </group>
        </group>
    );
}

export default Clothes;