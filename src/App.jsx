import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./Routes/Home";
import { Workshops } from "./Routes/Workshops";
import { Inquiries } from "./Routes/Inquiries";

/*GALLERY */

import "./root.css";

const App = () => {
    window.onbeforeunload = function () {
        document.body.scrollTo(0, 0);
    }
    
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route path='/workshops' element={<Workshops />} />
                    <Route path='/inquiries' element={<Inquiries />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;