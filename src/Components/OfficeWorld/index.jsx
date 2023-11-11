import { Suspense, useState, useEffect } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { Environment, OrbitControls, PointerLockControls } from "@react-three/drei";
import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import $ from "jquery";

import "./index.css";

import TABLE from "../../Assets/Models/table.obj";

const OfficeWorld = () => {
    const [officeOpen, setOfficeOpen] = useState(false);

    const Desk = () => {
        const obj = useLoader(OBJLoader, TABLE);

        return (
            <>
                <primitive object={obj} />
            </>
        )
    }

    const handleEnterOffice = () => {
        setOfficeOpen(true);
        if (officeOpen) {
            $("#office-world .enter-world-container").fadeOut(400);
            $("#office-world-canvas").delay(1000).fadeIn(200);
        }
    }

    return (
        <>
            <div id="office-world">
                <div className="enter-world-container">
                    <button id="enter-world-button" onMouseDown={handleEnterOffice}> ENTER THE OFFICE </button>
                </div>
                {officeOpen && 
                    <div id="office-world-canvas" className="canvas">
                        <Suspense>
                            <Canvas frameloop="always" color={"#fff"} camera={{fov: 75, near: 0.1, far: 10000, position: [0, 0, 20]}}>
                                <ambientLight intensity={0.1} />
                                <Desk />
                                <OrbitControls enableZoom={false}/>
                                {/* <PointerLockControls /> */}
                            </Canvas>
                        </Suspense>
                    </div>
                }
            </div>
        </>
    )
}

export default OfficeWorld;