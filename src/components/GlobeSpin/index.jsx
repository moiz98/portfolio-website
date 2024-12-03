'use client';
import React, { Suspense } from 'react'
import Rounded from '../../components/RoundedButton';

import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import styles from './styles.module.scss';

const GlobeSpin = () => {
    const earth = useGLTF("assets/globespin.glb");
    var light = new THREE.AmbientLight(0xffffff);
    earth.scene.add(light);
    return (
        <primitive object={earth.scene} scale={2} position-y={0} rotation-y={0} />
    );
    
};

export default function Index() {

    return (
        <Rounded className={styles.digitalBall}>
            
            <Canvas
                style={{zIndex: 1}}
                shadows
                frameloop='always'
                dpr={[1, 2]}
                gl={{ preserveDrawingBuffer: true }}
                camera={{
                    fov: 45,
                    near: 0.1,
                    far: 200,
                    position: [-4, 3, 6],
                }}
            >
                <Suspense fallback={null}>
                    <OrbitControls
                        autoRotate
                        enableZoom={false}
                    />
                    <GlobeSpin />

                    <Preload all />
                </Suspense>
            </Canvas>
        </Rounded>
    )
}
