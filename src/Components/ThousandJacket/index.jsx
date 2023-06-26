import { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

import "./index.css";

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

const ThousandJacket = () => {
    const [targetPart, setTargetPart] = useState("");

    const RIB_ARRAY = [WHITE_RIB, BEIGE_RIB, BLACK_RIB, BLUE_RIB, BURGUNDY_RIB, GREEN_RIB, NAVY_RIB];
    const BUTTONS_ARRAY = [DEFAULT_BUTTONS, BLACK_BUTTONS, GOLD_BUTTONS];

    const LEFTCHEST_ARRAY = [WHITE_LEFT_CHEST, BEIGE_LEFT_CHEST, BLACK_LEFT_CHEST, BLUE_LEFT_CHEST, BURGUNDY_LEFT_CHEST, GREEN_LEFT_CHEST, NAVY_LEFT_CHEST];
    const LEFTSLEEVE_ARRAY = [WHITE_LEFT_SLEEVE, BEIGE_LEFT_SLEEVE, BLACK_LEFT_SLEEVE, BLUE_LEFT_SLEEVE, BURGUNDY_LEFT_SLEEVE, GREEN_LEFT_SLEEVE, NAVY_LEFT_SLEEVE];
    const LEFTPOCKET_ARRAY = [WHITE_LEFT_POCKET, BEIGE_LEFT_POCKET, BLACK_LEFT_POCKET, BLUE_LEFT_POCKET, BURGUNDY_LEFT_POCKET, GREEN_LEFT_POCKET, NAVY_LEFT_POCKET];

    const RIGHTCHEST_ARRAY = [WHITE_RIGHT_CHEST, BEIGE_RIGHT_CHEST, BLACK_RIGHT_CHEST, BLUE_RIGHT_CHEST, BURGUNDY_RIGHT_CHEST, GREEN_RIGHT_CHEST, NAVY_RIGHT_CHEST];
    const RIGHTSLEEVE_ARRAY = [WHITE_RIGHT_SLEEVE, BEIGE_RIGHT_SLEEVE, BLACK_RIGHT_SLEEVE, BLUE_RIGHT_SLEEVE, BURGUNDY_RIGHT_SLEEVE, GREEN_RIGHT_SLEEVE, NAVY_RIGHT_SLEEVE];
    const RIGHTPOCKET_ARRAY = [WHITE_RIGHT_POCKET, BEIGE_RIGHT_POCKET, BLACK_RIGHT_POCKET, BLUE_RIGHT_POCKET, BURGUNDY_RIGHT_POCKET, GREEN_RIGHT_POCKET, NAVY_RIGHT_POCKET];

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
            <div id="thousand-jacket-container">
                <Suspense>
                    <Canvas frameloop="always" camera={{fov: 75, near: 0.1, far: 100000, position: [0, 0, 16]}}>
                        <ambientLight intensity={1} />
                        <LeftChest />
                        <LeftBodyPocket />
                        <LeftSleeve />

                        <RightChest />
                        <RightBodyPocket />
                        <RightSleeve />

                        <Rib />
                        <Buttons />
                        <OrbitControls enableZoom={false} maxAzimuthAngle={0.4} minAzimuthAngle={-0.4} maxPolarAngle={1.9} minPolarAngle={0.9} />
                    </Canvas>
                    <div className="description">
                        <p>
                            Introducing our Custom Headwear Program: Elevate your style with personalized Accesories!
                            <br />
                            Discover the perfect blend of fashion and individuality with pur Custom Headwear Program.
                            Wether you're looking to express ypur unique personality, promote your brand, or create
                            eye-catching team merchandise, we've got your covered. With our program, you have the freedom
                            to design headwear that truly reflects your vision. Choose from a wide range of high-quality
                            hats, caps, beanies, and more, all from premium materials and built to last. From classic 
                            styles to trendy designs, we offer a variety of options to suit every taste.
                        <br />
                            Wether you're an individual, a business, or an organization, our Custom Headwear Program serves
                            any size company.
                        </p>
                    </div>
                </Suspense>
            </div>
        </>
    )
}

export default ThousandJacket;