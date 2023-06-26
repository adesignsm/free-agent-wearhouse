import React, { useEffect, useState } from "react";

import F from "../../Assets/Media/EMBROIDERY/F.png";
import F1 from "../../Assets/Media/EMBROIDERY/F1.png";
import F2 from "../../Assets/Media/EMBROIDERY/F2.png";
import F3 from "../../Assets/Media/EMBROIDERY/F3.png";
import F4 from "../../Assets/Media/EMBROIDERY/F4.png";

import "./index.css";

/**
    Step 1: Digitizing
    Artwork generated into an embroidery file.

    Step 2: Fully embroidered application
    Step 3: Twill Applique
    Step 4: Felt Applique
    Step 5: Printed Applique
*/

let animationCounter = 0;

const Embroidery = () => {
    const images = [F, F1, F2, F3, F4];
    const descriptionBank = [
        "Artwork generated into an embroidery file",
        "Fully embroidered application",
        "Felt Applique",
        "Twill Applique",
        "Printed Applique"
    ];

    const [imgSrc, setImgSrc] = useState(images[0]);
    const [descriptionSrc, setDescriptionSrc] = useState(descriptionBank[0]);

    const handleMouseDownAnimation = () => {
        animationCounter++;

        if (animationCounter == 5) animationCounter = 0;

        setImgSrc(images[animationCounter]);
        setDescriptionSrc(descriptionBank[animationCounter]);
    }

    return (
        <>
            <div id="embroidery-container">
                <div className="animation-container" onMouseDown={() => handleMouseDownAnimation()}>
                    <img id="animation-image" src={imgSrc}/>
                </div>
                <div className="description-container">
                    <p>{descriptionSrc}</p>
                </div>
            </div>
        </>
    )
}

export default Embroidery;