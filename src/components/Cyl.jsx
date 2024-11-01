import React , { useRef } from 'react'
import * as THREE from 'three';
import { useTexture } from '@react-three/drei';
import { Group } from 'three/examples/jsm/libs/tween.module.js';
import { useFrame } from '@react-three/fiber';

const Cyl = () => {
    let txt = useTexture("./image.png");
    let cyl = useRef(null);
    useFrame((state, delta) => {
        cyl.current.rotation.y += delta
    })
    return (
        <group>
            <mesh ref={cyl}>
                <cylinderGeometry args={[2 , 2, 12, 45, 45, true]} />
                <meshStandardMaterial map={txt} transparent side={THREE.DoubleSide} />
            </mesh>
        </group>
    );
}

export default Cyl