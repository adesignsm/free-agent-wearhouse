import { Suspense, useState, useRef, useEffect } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { 
    Environment, 
    OrbitControls, 
    PointerLockControls, 
    Clone, 
    MeshReflectorMaterial, 
    useTexture, 
    CameraControls, 
    useFont 
} from "@react-three/drei";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import $ from "jquery";

import "./index.css";

import DESK from "../../Assets/Models/Desk.glb";
import MONITOR from '../../Assets/Models/Monitor.glb';
import KEYBOARD from '../../Assets/Models/keyboard.glb';
import MOUSE from '../../Assets/Models/Mouse.glb';
import PC from '../../Assets/Models/Computer.glb';
import PRINTER from '../../Assets/Models/Printer.glb';

import WHITEBOARD from '../../Assets/Models/whiteboard.glb';
import WINDOW from '../../Assets/Models/Window.glb';

import FLOOR_TEXTURE from '../../Assets/Textures/floor.jpg';

const bloomColor = new THREE.Color('#F5EBA0');
bloomColor.multiplyScalar(1.5);

const OfficeWorld = () => {
    const [officeOpen, setOfficeOpen] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);
    const [cameraZoom, setCameraZoom] = useState(0.9);
    const controls = useRef();
    const meshFitCamera = useRef();

    const DeskSetup = () => {
        const desk = useLoader(GLTFLoader, DESK)
        const monitor = useLoader(GLTFLoader, MONITOR)
        const keyboard = useLoader(GLTFLoader, KEYBOARD);
        const mouse = useLoader(GLTFLoader, MOUSE);
        const pc = useLoader(GLTFLoader, PC);
        const printer = useLoader(GLTFLoader, PRINTER);

        return (
            <>
                <mesh rotation={[0, 1.57, 0]} position={[-.4, 0, 0]}>
                    <primitive object={desk.scene} position={[-.4, 0, 0]}/>
                    <primitive object={monitor.scene} position={[-0.4, .01, .4]} rotation={[0, 3.15, 0]}/>
                    <primitive object={keyboard.scene} position={[-0.55, -0.185, .4]} rotation={[0, 3.15, 0]}/>
                    <primitive object={mouse.scene} position={[-0.55, -0.185, .6]} rotation={[0, -1, 0]}/>
                    <primitive object={pc.scene} position={[-0.55, -0.35, .68]} rotation={[0, 0, 0]} scale={0.9}/>
                    <primitive object={printer.scene} position={[-0.45, -.14, 0]} rotation={[0, -0.8, 0]} scale={0.9}/>

                    <Clone object={desk.scene} position={[1.4, 0, 0]} />
                    <Clone object={desk.scene} position={[0, 0, -1.3]} rotation={[0, 1.6, 0]}/>
                </mesh>
            </>
        )
    }

    const WhiteboardSetup = () => {
        const whiteboard = useLoader(GLTFLoader, WHITEBOARD);

        return (
            <>
                <mesh>
                    <primitive object={whiteboard.scene} position={[.5, -.2, .6]}/>

                    <Clone object={whiteboard.scene} position={[.5, -.2, -.6]}/>
                    <Clone object={whiteboard.scene} position={[.3, -.2, 1.4]} rotation={[0, -1.55, 0]}/>
                </mesh>
            </>
        )
    }

    const WindowSetup = () => {
        const window = useLoader(GLTFLoader, WINDOW);

        return (
            <>
                <mesh>
                    <primitive object={window.scene} position={[-.6, .35, -1.65]} rotation={[0, -1.55, 0]} scale={1.5}/>
                </mesh>
            </>
        )
    }

    const RoomSetup = () => {
        const floorTexture = useTexture(FLOOR_TEXTURE);

        return (
            <>
                <mesh position-y={-0.6} rotation-x={-Math.PI / 2}>
                    <planeBufferGeometry args={[4, 4]}/>
                        <MeshReflectorMaterial
                            blur={[200, 200]}
                            resolution={1000}
                            mixBlur={1}
                            mixStrength={10}
                            roughness={1}
                            depthScale={0.5}
                            opacity={1}
                            minDepthThreshold={0.4}
                            maxDepthThreshold={1}
                            metalness={1}
                            color={'#ddd'}
                            map={floorTexture}
                        />
                </mesh>
                <mesh position-y={0.8} rotation-x={-Math.PI / 2}>
                    <planeBufferGeometry args={[4, 4]}/>
                    <meshBasicMaterial color='#808080' side={THREE.DoubleSide}/>
                </mesh>
                <mesh position-y={0.1} position-x={0.8} rotation-x={-Math.PI / 2} rotation-y={1.57}>
                    <planeBufferGeometry args={[1.4, 4]}/>
                    <meshStandardMaterial color='#808080' side={THREE.DoubleSide}/>
                </mesh>
                <mesh position-y={0.1} position-x={-2} position-z={-0.5} rotation-x={-Math.PI / 2} rotation-y={1.57}>
                    <planeBufferGeometry args={[1.4, 2.5]}/>
                    <meshStandardMaterial color='#808080' side={THREE.DoubleSide}/>
                </mesh>
                <mesh position-y={0.1} position-x={0} position-z={1.7} rotation-y={0} rotation-z={1.565}>
                    <planeBufferGeometry args={[1.4, 4]}/>
                    <meshStandardMaterial color='#808080' side={THREE.DoubleSide}/>
                </mesh>
                <mesh position-y={0.1} position-x={0.3} position-z={-1.7} rotation-y={0} rotation-z={1.565}>
                    <planeBufferGeometry args={[1.4, 1]}/>
                    <meshStandardMaterial color='#808080' side={THREE.DoubleSide}/>
                </mesh>
                <mesh position-y={0.1} position-x={-1.5} position-z={-1.7} rotation-y={0} rotation-z={1.565}>
                    <planeBufferGeometry args={[1.4, 1]}/>
                    <meshStandardMaterial color='#808080' side={THREE.DoubleSide}/>
                </mesh>
                <mesh position-y={-0.4} position-x={-0.6} position-z={-1.7} rotation-y={0} rotation-z={1.565}>
                    <planeBufferGeometry args={[0.6, 1]}/>
                    <meshStandardMaterial color='#808080' side={THREE.DoubleSide}/>
                </mesh>
            </>
        )
    }

    const LightSetup = () => {
        return (
            <>
                <mesh position-y={0.75} position-x={-1} position-z={-0.4} rotation={[1.57, 0, 0]}>
                    <planeBufferGeometry args={[0.3, 0.6]} />
                    <meshBasicMaterial color={bloomColor} toneMapped={false} side={THREE.DoubleSide} />
                </mesh>
                <mesh position-y={0.75} position-x={-1} position-z={0.8} rotation={[1.57, 0, 0]}>
                    <planeBufferGeometry args={[0.3, 0.6]} />
                    <meshBasicMaterial color={bloomColor} toneMapped={false} side={THREE.DoubleSide} />
                </mesh>

                <mesh position-y={0.75} position-x={0.1} position-z={-0.4} rotation={[1.57, 0, 1.55]}>
                    <planeBufferGeometry args={[0.3, 0.6]} />
                    <meshBasicMaterial color={bloomColor} toneMapped={false} side={THREE.DoubleSide} />
                </mesh>
                <mesh position-y={0.75} position-x={0.1} position-z={0.8} rotation={[1.57, 0, 1.55]}>
                    <planeBufferGeometry args={[0.3, 0.6]} />
                    <meshBasicMaterial color={bloomColor} toneMapped={false} side={THREE.DoubleSide} />
                </mesh>
            </>
        )
    }

    const fitCamera = async () => {
        controls.current.fitToBox(meshFitCamera.current, true);
    }

    const handleEnterOffice = () => {
        setOfficeOpen(true);
        if (officeOpen) {
            $("#office-world .enter-world-container").fadeOut(400);
            $("#office-world-canvas").delay(1000).fadeIn(200);
        }
    }

    useEffect(() => {
        if (width <= 768) {
            setCameraZoom(1.1);
        } else {
            setCameraZoom(0.9)
        }
        window.addEventListener("resize", fitCamera);
        return () => window.removeEventListener("resize", fitCamera);

    }, [officeOpen]);

    return (
        <>
            <div id="office-world">
                <div className="enter-world-container">
                    <button id="enter-world-button" onClick={() => handleEnterOffice()}> ENTER THE OFFICE </button>
                </div>
                {officeOpen && 
                    <div id="office-world-canvas" className="canvas">
                        <Suspense>
                            <Canvas frameloop="always" color={"#fff"} camera={{fov: 75, near: 0.1, far: 10000, position: [0, 0, cameraZoom]}}>
                                <ambientLight intensity={0} />
                                <mesh ref={meshFitCamera} rotateZ={[1.5]} position-z={0.6}>
                                    <boxGeometry args={[0.5, 0.5, 0.6]}/>
                                    <meshBasicMaterial color="red" transparent opacity={0.5} visible={false} />
                                </mesh>
                                <DeskSetup />
                                <WhiteboardSetup />
                                <WindowSetup />
                                <RoomSetup />
                                <LightSetup />
                                <EffectComposer>
                                    <Bloom mipmapBlur intensity={1} />
                                </EffectComposer>
                                {/* <OrbitControls enableZoom={true}/> */}
                                {width <= 768 ? <CameraControls ref={controls} /> : <PointerLockControls />}
                                <Environment preset="city" />
                            </Canvas>
                        </Suspense>
                    </div>
                }
            </div>
        </>
    )
}

export default OfficeWorld;

useFont.preload("../../Assets/Models/Desk.glb");
useFont.preload("../../Assets/Models/Computer.glb");
useFont.preload("../../Assets/Models/keyboard.glb");
useFont.preload("../../Assets/Models/Mouse.glb");
useFont.preload("../../Assets/Models/Monitor.glb");
useFont.preload("../../Assets/Models/Printer.glb");
useFont.preload("../../Assets/Models/Window.glb");
useFont.preload("../../Assets/Models/whiteboard.glb");