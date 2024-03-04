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
    useFont,
    Html
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

/*jacket parts */
/*RIB */
import WHITE_RIB from "../../Assets/Media/JACKET/Rib.png";
import BEIGE_RIB from "../../Assets/Media/JACKET/RIB/Rib_beige.png";
import BLACK_RIB from "../../Assets/Media/JACKET/RIB/Rib_beige.png";
import BLUE_RIB from "../../Assets/Media/JACKET/RIB/Rib_beige.png";
import BURGUNDY_RIB from "../../Assets/Media/JACKET/RIB/Rib_beige.png";
import GREEN_RIB from "../../Assets/Media/JACKET/RIB/Rib_beige.png";
import NAVY_RIB from "../../Assets/Media/JACKET/RIB/Rib_beige.png";

/*BUTTONS */
import DEFAULT_BUTTONS from "../../Assets/Media/JACKET/buttons.png";
import BLACK_BUTTONS from "../../Assets/Media/JACKET/BUTTONS/buttons_blk.png";
import GOLD_BUTTONS from "../../Assets/Media/JACKET/BUTTONS/buttons_gold.png";

/*LEFT_CHEST */
import WHITE_LEFT_CHEST from "../../Assets/Media/JACKET/left_chest.png";
import BEIGE_LEFT_CHEST from "../../Assets/Media/JACKET/LEFT_CHEST/left_chest_beig.png";
import BLACK_LEFT_CHEST from "../../Assets/Media/JACKET/LEFT_CHEST/left_chest_blk.png";
import BLUE_LEFT_CHEST from "../../Assets/Media/JACKET/LEFT_CHEST/left_chest_blue.png";
import BURGUNDY_LEFT_CHEST from "../../Assets/Media/JACKET/LEFT_CHEST/left_chest_burg.png";
import GREEN_LEFT_CHEST from "../../Assets/Media/JACKET/LEFT_CHEST/left_chest_green.png";
import NAVY_LEFT_CHEST from "../../Assets/Media/JACKET/LEFT_CHEST/left_chest_navy.png";

/*LEFT_SLEEVE */
import WHITE_LEFT_SLEEVE from "../../Assets/Media/JACKET/left_sleeve.png";
import BEIGE_LEFT_SLEEVE from "../../Assets/Media/JACKET/LEFT_SLEEVE/left_sleeve_beige.png";
import BLACK_LEFT_SLEEVE from "../../Assets/Media/JACKET/LEFT_SLEEVE/left_sleeve_blk.png";
import BLUE_LEFT_SLEEVE from "../../Assets/Media/JACKET/LEFT_SLEEVE/left_sleeve_blue.png";
import BURGUNDY_LEFT_SLEEVE from "../../Assets/Media/JACKET/LEFT_SLEEVE/left_sleeve_burg.png";
import GREEN_LEFT_SLEEVE from "../../Assets/Media/JACKET/LEFT_SLEEVE/left_sleeve_green.png";
import NAVY_LEFT_SLEEVE from "../../Assets/Media/JACKET/LEFT_SLEEVE/left_sleeve_navy.png";

/*LEFT_POCKET */
import WHITE_LEFT_POCKET from "../../Assets/Media/JACKET/left_pocket.png";
import BEIGE_LEFT_POCKET from "../../Assets/Media/JACKET/LEFT_POCKET/left_pocket_beige.png";
import BLACK_LEFT_POCKET from "../../Assets/Media/JACKET/LEFT_POCKET/left_pocket_blk.png";
import BLUE_LEFT_POCKET from "../../Assets/Media/JACKET/LEFT_POCKET/left_pocket_blue.png";
import BURGUNDY_LEFT_POCKET from "../../Assets/Media/JACKET/LEFT_POCKET/left_pocket_burg.png";
import GREEN_LEFT_POCKET from "../../Assets/Media/JACKET/LEFT_POCKET/left_pocket_green.png";
import NAVY_LEFT_POCKET from "../../Assets/Media/JACKET/LEFT_POCKET/left_pocket_navy.png";

/*RIGHT_CHEST */
import WHITE_RIGHT_CHEST from "../../Assets/Media/JACKET/right_chest.png";
import BEIGE_RIGHT_CHEST from "../../Assets/Media/JACKET/RIGHT_CHEST/right_chest_beige.png";
import BLACK_RIGHT_CHEST from "../../Assets/Media/JACKET/RIGHT_CHEST/right_chest_blk.png";
import BLUE_RIGHT_CHEST from "../../Assets/Media/JACKET/RIGHT_CHEST/right_chest_blue.png";
import BURGUNDY_RIGHT_CHEST from "../../Assets/Media/JACKET/RIGHT_CHEST/right_chest_burg.png";
import GREEN_RIGHT_CHEST from "../../Assets/Media/JACKET/RIGHT_CHEST/right_chest_green.png";
import NAVY_RIGHT_CHEST from "../../Assets/Media/JACKET/RIGHT_CHEST/right_chest_navy.png";

/*RIGHT_SLEEVE */
import WHITE_RIGHT_SLEEVE from "../../Assets/Media/JACKET/right_sleeve.png";
import BEIGE_RIGHT_SLEEVE from "../../Assets/Media/JACKET/RIGHT_SLEEVE/right_sleeve_beige.png";
import BLACK_RIGHT_SLEEVE from "../../Assets/Media/JACKET/RIGHT_SLEEVE/right_sleeve_blk.png";
import BLUE_RIGHT_SLEEVE from "../../Assets/Media/JACKET/RIGHT_SLEEVE/right_sleeve_blue.png";
import BURGUNDY_RIGHT_SLEEVE from "../../Assets/Media/JACKET/RIGHT_SLEEVE/right_sleeve_burg.png";
import GREEN_RIGHT_SLEEVE from "../../Assets/Media/JACKET/RIGHT_SLEEVE/right_sleeve_green.png";
import NAVY_RIGHT_SLEEVE from "../../Assets/Media/JACKET/RIGHT_SLEEVE/right_sleeve_navy.png";

/*RIGHT_POCKET */
import WHITE_RIGHT_POCKET from "../../Assets/Media/JACKET/right_pocket.png";
import BEIGE_RIGHT_POCKET from "../../Assets/Media/JACKET/RIGHT_POCKET/right_pocket_beige.png";
import BLACK_RIGHT_POCKET from "../../Assets/Media/JACKET/RIGHT_POCKET/right_pocket_blk.png";
import BLUE_RIGHT_POCKET from "../../Assets/Media/JACKET/RIGHT_POCKET/right_pocket_blue.png";
import BURGUNDY_RIGHT_POCKET from "../../Assets/Media/JACKET/RIGHT_POCKET/right_pocket_burg.png";
import GREEN_RIGHT_POCKET from "../../Assets/Media/JACKET/RIGHT_POCKET/right_pocket_green.png";
import NAVY_RIGHT_POCKET from "../../Assets/Media/JACKET/RIGHT_POCKET/right_pocket_navy.png";


const bloomColor = new THREE.Color('#F5EBA0');
bloomColor.multiplyScalar(1.5);

const OfficeWorld = () => {
    const [officeOpen, setOfficeOpen] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);
    const [cameraZoom, setCameraZoom] = useState(0.9);
    const controls = useRef();
    const meshFitCamera = useRef();
    let toggleControls = 'pointer'

    /*jacket states */
    const RIB_ARRAY = [WHITE_RIB, BEIGE_RIB, BLACK_RIB, BLUE_RIB, BURGUNDY_RIB, GREEN_RIB, NAVY_RIB];
    const BUTTONS_ARRAY = [DEFAULT_BUTTONS, BLACK_BUTTONS, GOLD_BUTTONS];

    const LEFTCHEST_ARRAY = [WHITE_LEFT_CHEST, BEIGE_LEFT_CHEST, BLACK_LEFT_CHEST, BLUE_LEFT_CHEST, BURGUNDY_LEFT_CHEST, GREEN_LEFT_CHEST, NAVY_LEFT_CHEST];
    const LEFTSLEEVE_ARRAY = [WHITE_LEFT_SLEEVE, BEIGE_LEFT_SLEEVE, BLACK_LEFT_SLEEVE, BLUE_LEFT_SLEEVE, BURGUNDY_LEFT_SLEEVE, GREEN_LEFT_SLEEVE, NAVY_LEFT_SLEEVE];
    const LEFTPOCKET_ARRAY = [WHITE_LEFT_POCKET, BEIGE_LEFT_POCKET, BLACK_LEFT_POCKET, BLUE_LEFT_POCKET, BURGUNDY_LEFT_POCKET, GREEN_LEFT_POCKET, NAVY_LEFT_POCKET];

    const RIGHTCHEST_ARRAY = [WHITE_RIGHT_CHEST, BEIGE_RIGHT_CHEST, BLACK_RIGHT_CHEST, BLUE_RIGHT_CHEST, BURGUNDY_RIGHT_CHEST, GREEN_RIGHT_CHEST, NAVY_RIGHT_CHEST];
    const RIGHTSLEEVE_ARRAY = [WHITE_RIGHT_SLEEVE, BEIGE_RIGHT_SLEEVE, BLACK_RIGHT_SLEEVE, BLUE_RIGHT_SLEEVE, BURGUNDY_RIGHT_SLEEVE, GREEN_RIGHT_SLEEVE, NAVY_RIGHT_SLEEVE];
    const RIGHTPOCKET_ARRAY = [WHITE_RIGHT_POCKET, BEIGE_RIGHT_POCKET, BLACK_RIGHT_POCKET, BLUE_RIGHT_POCKET, BURGUNDY_RIGHT_POCKET, GREEN_RIGHT_POCKET, NAVY_RIGHT_POCKET];

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

                    <Html transform position={[40, 0.7, 0.5]} rotation={[0, 4.74, 0]}>
                        <iframe width="1300px" height="725px" src="https://www.hexstudio.io/" /> 
                    </Html>
                </mesh>
            </>
        )
    }

    const WhiteboardSetup = () => {
        const whiteboard = useLoader(GLTFLoader, WHITEBOARD);

        const handlePointerEnter = (e) => {
            if (e.object.parent.name === 'jacket') {
                toggleControls = 'orbit'
            }
        }

        const handlePointerLeave = () => {
            toggleControls = 'pointer';
        }

        return (
            <>
                <mesh>
                    <primitive object={whiteboard.scene} position={[.5, -.2, .6]}/>

                    <Clone object={whiteboard.scene} position={[.5, -.2, -.6]}/>
                    <Clone object={whiteboard.scene} position={[.3, -.2, 1.4]} rotation={[0, -1.55, 0]}/>

                    <group
                        name='jacket'
                        scale={0.05} 
                        rotation={[0, -1.6, 0]} 
                        position={[0.7, 0.2, 0.9]}
                        onPointerEnter={(e) => {handlePointerEnter(e)}}
                        onPointerLeave={(e) => handlePointerLeave()}
                    >
                        <LeftChest />
                        <LeftBodyPocket />
                        <LeftSleeve />

                        <RightChest />
                        <RightBodyPocket />
                        <RightSleeve />

                        <Rib />
                        <Buttons />
                    </group>
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

    const LeftChest = () => {
        const [leftChestCounter, setLeftChestCounter] = useState(0);

        const handleLeftChestMouseDown = (e) => {
            e.stopPropagation();
            setLeftChestCounter((prevCounter) => prevCounter + 1);
        }

        return (
            <>
                <mesh onClick={(e) => {handleLeftChestMouseDown(e)}} position={[2.4, 0, 0.15]}>
                    <planeBufferGeometry attach="geometry" args={[5, 9]} />
                    <meshBasicMaterial 
                        attach="material" 
                        transparent={true} 
                        map={new THREE.TextureLoader().load(LEFTCHEST_ARRAY[leftChestCounter % LEFTCHEST_ARRAY.length])}
                        alphaTest={0.5} 
                    />
                </mesh>
            </>
        )
    }

    const RightChest = () => {
        const [rightChestCounter, setRightChestCounter] = useState(0);

        const handleRightChestMouseDown = (e) => {
            e.stopPropagation();
            setRightChestCounter((prevCounter) => prevCounter + 1);
        }

        return (
            <>
                <mesh onClick={(e) => {handleRightChestMouseDown(e)}} position={[-2, 0, 0]}>
                    <planeBufferGeometry attach="geometry" args={[5, 9]} />
                    <meshBasicMaterial 
                        attach="material" 
                        transparent={true} 
                        map={new THREE.TextureLoader().load(RIGHTCHEST_ARRAY[rightChestCounter % RIGHTCHEST_ARRAY.length])}
                        alphaTest={0.5} 
                    />
                </mesh>
            </>
        )
    }   

    const LeftBodyPocket = () => {
        const [leftBodyPocketCounter, setLeftBodyPocketCounter] = useState(0);

        const handleLeftPocketMouseDown = (e) => {
            e.stopPropagation();
            setLeftBodyPocketCounter((prevCounter) => prevCounter + 1);
        }

        return (
            <>
                <mesh onClick={(e) => {handleLeftPocketMouseDown(e)}} position={[3.4, -1.67, 0.19]} rotation={[0, 0, -0.1]}>
                    <planeBufferGeometry attach="geometry" args={[1.8, 2.0]} />
                    <meshBasicMaterial 
                        attach="material" 
                        transparent={true} 
                        map={new THREE.TextureLoader().load(LEFTPOCKET_ARRAY[leftBodyPocketCounter % LEFTPOCKET_ARRAY.length])} 
                        alphaTest={0.5}/>
                </mesh>
            </>
        )
    }

    const RightBodyPocket = () => {
        const [rightBodyPocketCounter, setRightBodyPocketCounter] = useState(0);

        const handleRightPocketMouseDown = (e) => {
            e.stopPropagation();
            setRightBodyPocketCounter((prevCounter) => prevCounter + 1);
        }

        return (
            <>
                <mesh onClick={(e) => {handleRightPocketMouseDown(e)}} position={[-2.9, -1.8, 0.1]} rotation={[0, 0, 0]}>
                    <planeBufferGeometry attach="geometry" args={[1.8, 2.0]} />
                    <meshBasicMaterial 
                        attach="material" 
                        transparent={true} 
                        map={new THREE.TextureLoader().load(RIGHTPOCKET_ARRAY[rightBodyPocketCounter % RIGHTPOCKET_ARRAY.length])} 
                        alphaTest={0.5}/>
                </mesh>
            </>
        )
    }

    const LeftSleeve = () => {
        const [leftSleeveCounter, setLeftSleeveCounter] = useState(0);

        const handleLeftSleeveMouseDown = (e) => {
            e.stopPropagation();
            setLeftSleeveCounter((prevCounter) => prevCounter + 1);
        }

        return (
            <>
                <mesh onClick={(e) => {handleLeftSleeveMouseDown(e)}} position={[5.3, -0.3, 0.1]} rotation={[0, 0, 0]}>
                    <planeBufferGeometry attach="geometry" args={[2.5, 7.8]} />
                    <meshBasicMaterial 
                        attach="material" 
                        transparent={true} 
                        map={new THREE.TextureLoader().load(LEFTSLEEVE_ARRAY[leftSleeveCounter % LEFTSLEEVE_ARRAY.length])} 
                        alphaTest={0.5}/>
                </mesh>
            </>
        )
    }

    const RightSleeve = () => {
        const [rightSleeveCounter, setRightSleeveCounter] = useState(0);

        const handleRightSleeveMouseDown = (e) => {
            e.stopPropagation();
            setRightSleeveCounter((prevCounter) => prevCounter + 1);
        }

        return (
            <>
                <mesh onClick={(e) => {handleRightSleeveMouseDown(e)}} position={[-4.85, -0.4, 0.01]} rotation={[0, 0, 0.05]}>
                    <planeBufferGeometry attach="geometry" args={[2.5, 7.8]} />
                    <meshBasicMaterial 
                        attach="material" 
                        transparent={true} 
                        map={new THREE.TextureLoader().load(RIGHTSLEEVE_ARRAY[rightSleeveCounter % RIGHTSLEEVE_ARRAY.length])} 
                        alphaTest={0.5}/>
                </mesh>
            </>
        )
    }

    const Rib = () => {
        const [ribCounter, setRibCounter] = useState(0);

        const handleRibMouseDown = (e) => {
            e.stopPropagation();
            setRibCounter((prevCounter) => prevCounter + 1);
        }

        return (
            <>
                <mesh onClick={(e) => {handleRibMouseDown(e)}} position={[0.35, 0.2, -0.05]} rotation={[0, 0, 0]}>
                    <planeBufferGeometry attach="geometry" args={[14, 10.7]} />
                    <meshBasicMaterial 
                        attach="material" 
                        transparent={true} 
                        map={new THREE.TextureLoader().load(RIB_ARRAY[ribCounter % RIB_ARRAY.length])} 
                        alphaTest={0.5}/>
                </mesh>
            </>
        )
    }

    const Buttons = () => {
        let imageTexture = new THREE.TextureLoader().load(DEFAULT_BUTTONS);

        const handleButtonsMouseDown = (e) => {
            console.log("buttons");
        }

        return (
            <>
                <mesh onClick={(e) => {handleButtonsMouseDown(e)}} position={[0.3, -0.55, 0.2]} rotation={[0, 0, 0]}>
                    <planeBufferGeometry attach="geometry" args={[0.5, 7.9]} />
                    <meshBasicMaterial attach="material" transparent={true} map={imageTexture} alphaTest={0.5}/>
                </mesh>
            </>
        )
    }

    return (
        <>
            <div id="office-world">
                <div className="enter-world-container">
                    <button id="enter-world-button" onClick={() => handleEnterOffice()}> ENTER THE OFFICE </button>
                </div>
                <div className="cursor">
                    <h1>+</h1>
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
                                {toggleControls === 'orbit' && <OrbitControls enableZoom={true}/>}
                                {width <= 768 && toggleControls === 'pointer' 
                                    ? <CameraControls ref={controls} /> 
                                    : <PointerLockControls />
                                }
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