import React, {useEffect} from "react";
import "./index.css";
import Hat from "../Hat";

import WING from "../../Assets/Media/HERO/wing.png";
import ASPOT from "../../Assets/Media/HERO/ASPOT.png";

const Hero = () => {
    useEffect(() => {
        const wingImage = document.getElementById("wing-image");

        const handleWheel = () => {
            const rotationIncrement = 20; // Incremental rotation angle
            const maxRotation = 30; // Maximum rotation angle
            const minRotation = -20; // Minimum rotation angle
            const animationDelay = 100; // Delay in milliseconds

            let rotationAngle = parseFloat(wingImage.style.transform.replace("rotate(", "").replace("deg)", "")) || 0;

            if (rotationAngle === maxRotation) {
                setTimeout(() => {
                    rotationAngle -= rotationIncrement;
                    updateRotation(rotationAngle);
                }, animationDelay);
            } else if (rotationAngle === minRotation) {
                setTimeout(() => {
                    rotationAngle += rotationIncrement;
                    updateRotation(rotationAngle);
                }, animationDelay);
            } else if (rotationAngle > minRotation && rotationAngle < maxRotation) {
                setTimeout(() => {
                    rotationAngle += rotationIncrement;
                    updateRotation(rotationAngle);
                }, animationDelay);
            }

            rotationAngle = Math.max(Math.min(rotationAngle, maxRotation), minRotation);
            wingImage.style.transform = `rotate(${rotationAngle}deg)`;

            const updateRotation = (rotationAngle) => {
                rotationAngle = Math.max(Math.min(rotationAngle, maxRotation), minRotation);
                wingImage.style.transform = `rotate(${rotationAngle}deg)`;
            };

            setTimeout(() => {
                window.removeEventListener("wheel", handleWheel);
                document.body.style.overflowY = "scroll";
            }, 1300);
        };

        // Attach the wheel event listener
        window.addEventListener("wheel", handleWheel);
    
        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener("wheel", handleWheel);
        };
    }, []);

    return (
        <>
            <div id="hero-container">
                <img id="background-image" src={ASPOT} />
                <img id="wing-image" src={WING} />
            </div>
        </>
    )
}

export default Hero;