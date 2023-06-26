import { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

import "./index.css";

const OfficeWorld = () => {
    const Desk = () => {
        return (
            <>
                <mesh position={[0, 0, 0]} rotation={[0, 0, 0]}>
                    <planeBufferGeometry attach="geometry" args={[5, 7.9]} />
                    <meshBasicMaterial attach="material" transparent={false}  alphaTest={0.5}/>
                </mesh>
            </>
        )
    }

    const Monitor = () => {
        return (
            <>
            
            </>
        )
    }
    return (
        <>
            <div id="office-world">
                <div className="enter-world-container">
                    <button id="enter-world-button"> ENTER THE OFFICE </button>
                </div>
                <div className="canvas">
                    <Suspense>
                        <Canvas frameloop="always" camera={{fov: 75, near: 0.1, far: 10000, position: [0, 0, 0]}}>
                            <ambientLight intensity={1} />
                            <OrbitControls enableZoom={false} maxAzimuthAngle={0.4} minAzimuthAngle={-0.4} maxPolarAngle={1.9} minPolarAngle={0.9} />
                        </Canvas>
                    </Suspense>
                </div>
            </div>
        </>
    )
}

export default OfficeWorld;