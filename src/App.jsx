import React, { useState, useRef, useEffect } from "react";

import Hero from "./Components/Hero";
import Embroidery from "./Components/Embroidery";
import Hat from "./Components/Hat";
import ThousandJacket from "./Components/ThousandJacket";
import OfficeWorld from "./Components/OfficeWorld";
/*3D world */
/*FAQ */
/*GALLERY */

import "./root.css";

const App = () => {
    window.onbeforeunload = function () {
        document.body.scrollTo(0, 0);
    }
    
    return (
        <>
            <Hero />
            <Embroidery />
            <Hat />
            <ThousandJacket />
        </>
    )
}

export default App;