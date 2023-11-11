import React, {useState} from "react";
import "./index.css";

const Accordian = ({title, children}) => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <div className="accordion-wrapper">
            <article className={`accordion-title ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(!isOpen)}>
                <h1>{title}</h1>
            </article>
            <article className={`accordion-item ${!isOpen ? "collapsed" : ""}`}>
                <div className="accordion-content">
                    {children}
                </div>
            </article>
        </div>
    )
}

const FAQ = () => {
    return (
        <>
            <div id="faq-container">
                <article className="service-accordion-wrapper">
                    <Accordian title="Question One">
                        <h2> Answer 1 </h2>
                    </Accordian>
                </article>
                <article className="service-accordion-wrapper">
                    <Accordian title="Question Two">
                        <h2> Answer 2 </h2>
                    </Accordian>
                </article>
                <article className="service-accordion-wrapper">
                    <Accordian title="Question Three">
                        <h2> Answer 3 </h2>
                    </Accordian>
                </article>
                <article className="service-accordion-wrapper">
                    <Accordian title="Question Four">
                        <h2> Answer 4 </h2>
                    </Accordian>
                </article>
            </div>
        </>
    )
}

export default FAQ;