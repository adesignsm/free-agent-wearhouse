import React, {useEffect} from "react";
import "./index.css";

/*HAT PARTS*/
import BUTTON from "../../Assets/Media/HAT/button.png";
import BADGE from "../../Assets/Media/HAT/badge.png";
import BRIM from "../../Assets/Media/HAT/brim.png";
import HAT_FRONT_LEFT from "../../Assets/Media/HAT/hat_frontleft.png";
import HAT_FRONT_RIGHT from "../../Assets/Media/HAT/hat_frontright.png";
import HAT_LEFT_PANEL from "../../Assets/Media/HAT/hat_leftpanel.png";

/*BEIGE HAT*/
import BEIGE_BUTTON from "../../Assets/Media/HAT/BEIGE/beige_button.png";
import BEIGE_BRIM from "../../Assets/Media/HAT/BEIGE/beige_brim.png";
import BEIGE_BACK from "../../Assets/Media/HAT/BEIGE/beige_back_panel.png";
import BEIGE_LEFT from "../../Assets/Media/HAT/BEIGE/beige_left_panel_front.png";
import BEIGE_RIGHT from "../../Assets/Media/HAT/BEIGE/beige_right_panel_front.png";

/*HAT VARIANTS*/
import FIVE_PANEL from "../../Assets/Media/HAT/5panel.png";
import BUCKET from "../../Assets/Media/HAT/bucket.png";
import CAMPCAP from "../../Assets/Media/HAT/campcap.png";
import SNAPBACK from "../../Assets/Media/HAT/snapback.png";

const Hat = () => {
    let topContainerIncrement = -100;
    let leftContainerIncrement = 100;
    let rightContainerIncrement = -100;
    let bottomContainerIncrement = -100;
    let brimContainerIncrement = 100;
    let opacityCounter = 0;

    const HAT_COLOURS = {
        beige: {
            "button": BEIGE_BUTTON,
            "brim": BEIGE_BRIM,
            "back": BEIGE_BACK,
            "left": BEIGE_LEFT,
            "right": BEIGE_RIGHT
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
                opacityCounter += 0.1;
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
                opacityCounter -= 0.1;
            }

            productContainer.forEach((container) => {
                container.style.opacity = opacityCounter;
            })

            if (topContainer && topContainer.style.top != "-100%") {
                if (window.innerWidth <= 690 && window.innerWidth >= 320) {
                    topContainerIncrement -= 0.5;
                } else {
                    topContainerIncrement -= 0.5;
                }
                topContainer.style.top = `${topContainerIncrement}%`;
            }
    
            if (leftContainer && leftContainer.style.top != "100%") {
                if (window.innerWidth <= 690 && window.innerWidth >= 320) {
                    leftContainerIncrement += 0.5;
                } else {
                    leftContainerIncrement += 0.5;
                }
                leftContainer.style.top = `${leftContainerIncrement}%`;
            }
    
            if (bottomContainer && bottomContainer.style.right != "-100%") {
                if (window.innerWidth <= 690 && window.innerWidth >= 320) {
                    bottomContainerIncrement -= 0.5;
                } else {
                    bottomContainerIncrement -= 0.5;
                }
                bottomContainer.style.right = `${bottomContainerIncrement}%`;
            }
    
            if (rightContainer && rightContainer.style.left != "-100%") {
                if (window.innerWidth <= 690 && window.innerWidth >= 320) {
                    rightContainerIncrement -= 0.5;
                } else {
                    rightContainerIncrement -= 0.5;
                }
                rightContainer.style.left = `${rightContainerIncrement}%`;
            }
    
            if (brimContainer && brimContainer.style.top != "100%") {
                if (window.innerWidth <= 690 && window.innerWidth >= 320) {
                    brimContainerIncrement += 0.5;
                } else {
                    brimContainerIncrement += 0.5;
                }
                brimContainer.style.top = `${brimContainerIncrement}%`;
            }
    
            if (topContainer.style.top == "-100%" &&
                leftContainer.style.top == "100%" &&
                bottomContainer.style.right == "-100%" &&
                rightContainer.style.left == "-100%" &&
                brimContainer.style.top == "100%") {
                    document.body.style.overflowY = "scroll";
            }
        }
    };

    const handleButtonChange = (e) => {
        console.log(e.target.src)
        e.target.src = HAT_COLOURS.beige.button;
    }

    const handleHatFrontLeftChange = (e) => {
        console.log(e.target.src)
    }

    const handleHatFrontRightChange = (e) => {
        console.log(e.target.src)
    }

    const handleHatLeftPanelChange = (e) => {
        console.log(e.target.src)
    }

    const handleBrimChange = (e) => {
        console.log(e.target.src)
        e.target.src = HAT_COLOURS.beige.brim;
    }

    return (
        <>
            <div id="product-container">
                <div className="hat-container">
                    <div className="hat" onWheel={(e) => {
                        setTimeout(() => {
                            handleWheel(e)
                        }, 50)
                    }}>
                        <div className="top-product-container product-container">
                            <img id="HAT-BUTTON" src={BUTTON} onClick={(e) => {handleButtonChange(e)}}/>
                            <img id="HAT-BADGE" src={BADGE} />
                        </div>
                        <div className="left-product-container product-container">
                            <img id="HAT-FRONT-LEFT" src={HAT_FRONT_LEFT} onClick={(e) => {handleHatFrontLeftChange(e)}} />
                        </div>
                        <div className="right-product-container product-container">
                            <img id="HAT-FRONT-RIGHT" src={HAT_FRONT_RIGHT} onClick={(e) => {handleHatFrontRightChange(e)}} />
                        </div>
                        <div className="bottom-product-container product-container">
                            <img id="HAT-LEFT-PANEL" src={HAT_LEFT_PANEL} onClick={(e) => {handleHatLeftPanelChange(e)}} />
                        </div>
                        <div className="bottom-brim-product-container product-container">
                            <img id="HAT-BRIM" src={BRIM} onClick={(e) => {handleBrimChange(e)}}/>
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