import React, {useEffect} from "react";
import "./index.css";

/*DEFAULT HAT*/
import ORANGE_BUTTON from "../../Assets/Media/HAT/BUTTON/orange_button.png";
import ORANGE_BADGE from "../../Assets/Media/HAT/BADGE/badge_1.png";
import ORANGE_BRIM from "../../Assets/Media/HAT/BRIM/orange_brim.png";
import ORANGE_HAT_FRONT_LEFT from "../../Assets/Media/HAT/FRONT/orange_front.png";
import ORANGE_HAT_FRONT_RIGHT from "../../Assets/Media/HAT/LEFT/orange_left.png";
import ORANGE_HAT_LEFT_PANEL from "../../Assets/Media/HAT/RIGHT/orange_right.png";

/*BADGE*/
import BADGE_1 from "../../Assets/Media/HAT/BADGE/badge_1.png";
import BADGE_2 from "../../Assets/Media/HAT/BADGE/badge_2.png";
import BADGE_3 from "../../Assets/Media/HAT/BADGE/badge_3.png";

/*BRIM*/
import WHITE_BRIM from "../../Assets/Media/HAT/BRIM/white_brim.png";
import BEIGE_BRIM from "../../Assets/Media/HAT/BRIM/beige_brim.png";
import GREEN_BRIM from "../../Assets/Media/HAT/BRIM/green_brim.png";
import BURGUNDY_BRIM from "../../Assets/Media/HAT/BRIM/burgundy_brim.png";
import NAVY_BRIM from "../../Assets/Media/HAT/BRIM/navy_brim.png";

/*BUTTON*/
import WHITE_BUTTON from "../../Assets/Media/HAT/BUTTON/white_button.png";
import BEIGE_BUTTON from "../../Assets/Media/HAT/BUTTON/beige_button.png";
import GREEN_BUTTON from "../../Assets/Media/HAT/BUTTON/green_button.png";
import BURGUNDY_BUTTON from "../../Assets/Media/HAT/BUTTON/burgundy_button.png";
import NAVY_BUTTON from "../../Assets/Media/HAT/BUTTON/navy_button.png";

/*LEFT*/
import WHITE_LEFT from "../../Assets/Media/HAT/LEFT/white_left.png";
import BEIGE_LEFT from "../../Assets/Media/HAT/LEFT/beige_left.png";
import GREEN_LEFT from "../../Assets/Media/HAT/LEFT/green_left.png";
import BURGUNDY_LEFT from "../../Assets/Media/HAT/LEFT/burgundy_left.png";
import NAVY_LEFT from "../../Assets/Media/HAT/LEFT/navy_left.png";

/*FRONT*/
import WHITE_FRONT from "../../Assets/Media/HAT/FRONT/white_front.png";
import BEIGE_FRONT from "../../Assets/Media/HAT/FRONT/beige_front.png";
import GREEN_FRONT from "../../Assets/Media/HAT/FRONT/green_front.png";
import BURGUNDY_FRONT from "../../Assets/Media/HAT/FRONT/burgundy_front.png";
import NAVY_FRONT from "../../Assets/Media/HAT/FRONT/navy_front.png";

/*RIGHT*/
import WHITE_RIGHT from "../../Assets/Media/HAT/RIGHT/white_right.png";
import BEIGE_RIGHT from "../../Assets/Media/HAT/RIGHT/beige_right.png";
import GREEN_RIGHT from "../../Assets/Media/HAT/RIGHT/green_right.png";
import BURGUNDY_RIGHT from "../../Assets/Media/HAT/RIGHT/burgundy_right.png";
import NAVY_RIGHT from "../../Assets/Media/HAT/RIGHT/navy_right.png";

/*HAT VARIANTS*/
import FIVE_PANEL from "../../Assets/Media/HAT/5panel.png";
import BUCKET from "../../Assets/Media/HAT/bucket.png";
import CAMPCAP from "../../Assets/Media/HAT/campcap.png";
import SNAPBACK from "../../Assets/Media/HAT/snapback.png";

const Hat = () => {
    let topContainerIncrement = 1.5;
    let leftContainerIncrement = 33.5;
    let rightContainerIncrement = -10.5;
    let bottomContainerIncrement = -10.5;
    let brimContainerIncrement = -10.5;
    let opacityCounter = 0;

    const HAT_COLOURS = {
        button: {
            white_button: WHITE_BUTTON,
            beige_button: BEIGE_BUTTON,
            orange_button: ORANGE_BUTTON,
            green_button: GREEN_BUTTON,
            burgundy_button: BURGUNDY_BUTTON,
            navy_button: NAVY_BUTTON
        },
        badge: {
            badge_1: BADGE_1,
            badge_2: BADGE_2,
            badge_3: BADGE_3
        },
        brim: {
            white_brim: WHITE_BRIM,
            beige_brim: BEIGE_BRIM,
            orange_brim: ORANGE_BRIM,
            green_brim: GREEN_BRIM,
            burgundy_brim: BURGUNDY_BRIM,
            navy_brim: NAVY_BRIM
        },
        left: {
            white_left: WHITE_LEFT,
            beige_left: BEIGE_LEFT,
            orange_left: ORANGE_HAT_FRONT_RIGHT,
            green_left: GREEN_LEFT,
            burgundy_left: BURGUNDY_LEFT,
            navy_left: NAVY_LEFT
        },
        front: {
            white_front: WHITE_FRONT,
            beige_front: BEIGE_FRONT,
            orange_front: ORANGE_HAT_FRONT_LEFT,
            green_front: GREEN_FRONT,
            burgundy_front: BURGUNDY_FRONT,
            navy_front: NAVY_FRONT
        },
        right: {
            white_right: WHITE_RIGHT,
            beige_right: BEIGE_RIGHT,
            orange_right: ORANGE_HAT_LEFT_PANEL,
            green_right: GREEN_RIGHT,
            burgundy_right: BURGUNDY_RIGHT,
            navy_right: NAVY_RIGHT  
        }
    };

    /*
    COORDINATES 
    top product container: top: 12%
    left product container: top: 23%
    brim product container: top: -21%
    */
    const handleWheel = (e) => {
        let direction = e.deltaY > 0 ? 'down' : 'up';
        
        e.preventDefault();

        let topContainer = document.querySelector(".top-product-container");
        let bottomContainer = document.querySelector(".bottom-product-container");
        let leftContainer = document.querySelector(".left-product-container");
        let rightContainer = document.querySelector(".right-product-container");
        let brimContainer = document.querySelector(".bottom-brim-product-container");
        let productContainer = document.querySelectorAll(".product-container");

        if (direction === "down") {
            document.body.style.overflowY = "hidden";
            if (opacityCounter != 1) {
                opacityCounter += 0.05;
            }

            productContainer.forEach((container) => {
                container.style.opacity = opacityCounter;
            })

            if (topContainer && topContainer.style.top != "12%") {
                if (window.innerWidth <= 690 && window.innerWidth >= 320) {
                    topContainerIncrement += 0.5;
                } else {
                    topContainerIncrement += 0.5;
                }
                topContainer.style.top = `${topContainerIncrement}%`;
            }
    
            if (leftContainer && leftContainer.style.top != "23%") {
                if (window.innerWidth <= 690 && window.innerWidth >= 320) {
                    leftContainerIncrement -= 0.5;
                } else {
                    leftContainerIncrement -= 0.5;
                }
                leftContainer.style.top = `${leftContainerIncrement}%`;
            }
    
            if (bottomContainer && bottomContainer.style.right != "0%") {
                if (window.innerWidth <= 690 && window.innerWidth >= 320) {
                    bottomContainerIncrement += 0.5;
                } else {
                    bottomContainerIncrement += 0.5;
                }
                bottomContainer.style.right = `${bottomContainerIncrement}%`;
            }
    
            if (rightContainer && rightContainer.style.left != "0%") {
                if (window.innerWidth <= 690 && window.innerWidth >= 320) {
                    rightContainerIncrement += 0.5;
                } else {
                    rightContainerIncrement += 0.5;
                }
                rightContainer.style.left = `${rightContainerIncrement}%`;
            }
    
            if (brimContainer && brimContainer.style.top != "-21%") {
                if (window.innerWidth <= 690 && window.innerWidth >= 320) {
                    brimContainerIncrement -= 0.5;
                } else {
                    brimContainerIncrement -= 0.5;
                }
                brimContainer.style.top = `${brimContainerIncrement}%`;
            }
    
            if (topContainer.style.top == "12%" &&
                leftContainer.style.top == "23%" &&
                bottomContainer.style.right == "0%" &&
                rightContainer.style.left == "0%" &&
                brimContainer.style.top == "-21%") {
                    document.body.style.overflowY = "scroll";
            }
        } else {
            document.body.style.overflowY = "hidden";
            if (opacityCounter != 0) {
                opacityCounter -= 0.05;
            }

            productContainer.forEach((container) => {
                container.style.opacity = opacityCounter;
            })

            if (topContainer && topContainer.style.top != "1.5%") {
                if (window.innerWidth <= 690 && window.innerWidth >= 320) {
                    topContainerIncrement -= 0.5;
                } else {
                    topContainerIncrement -= 0.5;
                }
                topContainer.style.top = `${topContainerIncrement}%`;
            }
    
            if (leftContainer && leftContainer.style.top != "33.5%") {
                if (window.innerWidth <= 690 && window.innerWidth >= 320) {
                    leftContainerIncrement += 0.5;
                } else {
                    leftContainerIncrement += 0.5;
                }
                leftContainer.style.top = `${leftContainerIncrement}%`;
            }
    
            if (bottomContainer && bottomContainer.style.right != "-10.5%") {
                if (window.innerWidth <= 690 && window.innerWidth >= 320) {
                    bottomContainerIncrement -= 0.5;
                } else {
                    bottomContainerIncrement -= 0.5;
                }
                bottomContainer.style.right = `${bottomContainerIncrement}%`;
            }
    
            if (rightContainer && rightContainer.style.left != "-10.5%") {
                if (window.innerWidth <= 690 && window.innerWidth >= 320) {
                    rightContainerIncrement -= 0.5;
                } else {
                    rightContainerIncrement -= 0.5;
                }
                rightContainer.style.left = `${rightContainerIncrement}%`;
            }
    
            if (brimContainer && brimContainer.style.top != "-10.5%") {
                if (window.innerWidth <= 690 && window.innerWidth >= 320) {
                    brimContainerIncrement += 0.5;
                } else {
                    brimContainerIncrement += 0.5;
                }
                brimContainer.style.top = `${brimContainerIncrement}%`;
            }
    
            if (topContainer.style.top == "1.5%" &&
                leftContainer.style.top == "33.5%" &&
                bottomContainer.style.right == "-10.5%" &&
                rightContainer.style.left == "-10.5%" &&
                brimContainer.style.top == "-10.5%") {
                    document.body.style.overflowY = "scroll";
            }
        }
    };

    let buttonCounter = 0, badgeCounter = 0, brimCounter = 0, 
        hatLeftCounter = 0, hatRightCounter = 0, hatMiddleCounter = 0;

    const handleButtonChange = (e) => {
        buttonCounter++;

        if (buttonCounter == 1) {
            e.target.src = HAT_COLOURS.button.white_button;
        } else if (buttonCounter == 2) {
            e.target.src = HAT_COLOURS.button.beige_button;
        } else if (buttonCounter == 3) {
            e.target.src = HAT_COLOURS.button.orange_button;
        } else if (buttonCounter == 4) {
            e.target.src = HAT_COLOURS.button.green_button;
        } else if (buttonCounter == 5) {
            e.target.src = HAT_COLOURS.button.burgundy_button;
        } else if (buttonCounter == 6) {
            e.target.src = HAT_COLOURS.button.navy_button;
            buttonCounter = 0;
        }
    }

    const handleBadgeChange = (e) => {
        badgeCounter++;

        if (badgeCounter == 1) {
            e.target.src = HAT_COLOURS.badge.badge_1;
        } else if (badgeCounter == 2) {
            e.target.src = HAT_COLOURS.badge.badge_2;
        } else if (badgeCounter == 3) {
            e.target.src = HAT_COLOURS.badge.badge_3;
            badgeCounter = 0;
        }
    }

    const handleHatFrontLeftChange = (el) => {
        hatRightCounter++;

        if (hatRightCounter == 1) {
            el.src = HAT_COLOURS.right.white_right;
        } else if (hatRightCounter == 2) {
            el.src = HAT_COLOURS.right.beige_right;
        } else if (hatRightCounter == 3) {
            el.src = HAT_COLOURS.right.orange_right;
        } else if (hatRightCounter == 4) {
            el.src = HAT_COLOURS.right.green_right;
        } else if (hatRightCounter == 5) {
            el.src = HAT_COLOURS.right.burgundy_right;
        } else if (hatRightCounter == 6) {
            el.src = HAT_COLOURS.right.navy_right;
            hatRightCounter = 0;
        }
    }

    const handleHatFrontRightChange = (el) => {
        hatLeftCounter++;

        if (hatLeftCounter == 1) {
            el.src = HAT_COLOURS.left.white_left;
        } else if (hatLeftCounter == 2) {
            el.src = HAT_COLOURS.left.beige_left;
        } else if (hatLeftCounter == 3) {
            el.src = HAT_COLOURS.left.orange_left;
        } else if (hatLeftCounter == 4) {
            el.src = HAT_COLOURS.left.green_left;
        } else if (hatLeftCounter == 5) {
            el.src = HAT_COLOURS.left.burgundy_left;
        } else if (hatLeftCounter == 6) {
            el.src = HAT_COLOURS.left.navy_left;
            hatLeftCounter = 0;
        }
    }

    const handleChangeMiddelPanel = (el) => {
        hatMiddleCounter++;

        if (hatMiddleCounter == 1) {
            el.src = HAT_COLOURS.front.white_front;
        } else if (hatMiddleCounter == 2) {
            el.src = HAT_COLOURS.front.beige_front;
        } else if (hatMiddleCounter == 3) {
            el.src = HAT_COLOURS.front.orange_front;
        } else if (hatMiddleCounter == 4) {
            el.src = HAT_COLOURS.front.green_front;
        } else if (hatMiddleCounter == 5) {
            el.src = HAT_COLOURS.front.burgundy_front;
        } else if (hatMiddleCounter == 6) {
            el.src = HAT_COLOURS.front.navy_front;
            hatMiddleCounter = 0;
        }
    }

    const handleBrimChange = (e) => {
        brimCounter++;

        if (brimCounter == 1) {
            e.target.src = HAT_COLOURS.brim.white_brim;
        } else if (brimCounter == 2) {
            e.target.src = HAT_COLOURS.brim.beige_brim;
        } else if (brimCounter == 3) {
            e.target.src = HAT_COLOURS.brim.orange_brim;
        } else if (brimCounter == 4) {
            e.target.src = HAT_COLOURS.brim.green_brim;
        } else if (brimCounter == 5) {
            e.target.src = HAT_COLOURS.brim.burgundy_brim;
        } else if (brimCounter == 6) {
            e.target.src = HAT_COLOURS.brim.navy_brim;
            brimCounter = 0;
        }
    }

    return (
        <>
            <div id="product-container">
                <div className="hat-container">
                    <div className="hat" onWheel={(e) => {
                        setTimeout(() => {
                            handleWheel(e)
                        }, 50)
                    }} onClick={(e) => {
                        let x = e.clientX;
                        let y = e.clientY;
                        let elements = document.elementsFromPoint(x, y);

                        console.log(elements);

                        if (elements[0].id === "top-hat-container" && elements[1].id === "HAT-FRONT-RIGHT") {
                            handleHatFrontRightChange(elements[1])
                        } else if (elements[0].id === "top-hat-container" && elements[1].id === "HAT-LEFT-PANEL") {
                            handleHatFrontLeftChange(elements[1]);
                        } else if (elements[0].id === "top-hat-container" && elements[5].id === "HAT-FRONT-LEFT") {
                            handleChangeMiddelPanel(elements[5])
                            console.log("hit")
                        } else if (elements[0].id === "top-hat-container" && elements[3].id === "HAT-FRONT-LEFT") {
                            handleChangeMiddelPanel(elements[3])
                            console.log("hit")
                        } else if (elements[0].id === "top-hat-container" && elements[6].id === "HAT-FRONT-LEFT") {
                            handleChangeMiddelPanel(elements[6])
                            console.log("hit")
                        } else if (elements[0].id === "top-hat-container" && elements[7].id === "HAT-FRONT-LEFT") {
                            handleChangeMiddelPanel(elements[7])
                            console.log("hit")
                        }

                    }}>
                        <div id="top-hat-container" className="top-product-container product-container">
                            <img id="HAT-BUTTON" src={ORANGE_BUTTON} onClick={(e) => {handleButtonChange(e)}}/>
                            <img id="HAT-BADGE" src={ORANGE_BADGE} onClick={(e) => {handleBadgeChange(e)}}/>
                        </div>
                        <div className="left-product-container product-container">
                            <img id="HAT-FRONT-LEFT" src={ORANGE_HAT_FRONT_LEFT} />
                        </div>
                        <div className="right-product-container product-container">
                            <img id="HAT-FRONT-RIGHT" src={ORANGE_HAT_FRONT_RIGHT} onClick={(e) => {handleHatFrontRightChange(e)}}/>
                        </div>
                        <div className="bottom-product-container product-container">
                            <img id="HAT-LEFT-PANEL" src={ORANGE_HAT_LEFT_PANEL}  />
                        </div>
                        <div className="bottom-brim-product-container product-container">
                            <img id="HAT-BRIM" src={ORANGE_BRIM} onClick={(e) => {handleBrimChange(e)}}/>
                        </div>
                    </div>
                    <div className="hat-variants">
                        <img id="FIVE_PANEL" src={FIVE_PANEL} />
                        <img id="BUCKET" src={BUCKET} />
                        <img id="CAMPCAP" src={CAMPCAP} />
                        <img id="SNAPBACK" src={SNAPBACK} />
                    </div>
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
                </div>
            </div>
        </>
    )
}

export default Hat;