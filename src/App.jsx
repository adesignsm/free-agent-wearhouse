import React, { useState, useRef, useEffect } from "react";

import Hero from "./Components/Hero";
import Hat from "./Components/Hat";

import "./root.css";

const App = () => {
    window.onbeforeunload = function () {
        document.body.scrollTo(0, 0);
    }
    
    return (
        <>
            <Hero />
            <Hat />
        </>
    )
}

export default App;