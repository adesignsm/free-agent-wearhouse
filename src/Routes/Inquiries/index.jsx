import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Inquiries = () => {
    const formRef = useRef();
    const [sendSuccess, setSendSuccess] = useState(false);
    const [formData, setFormData] = useState({
        from_name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
          ...formData,
          [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, formRef.current, {
            publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
        }).then((response) => {
            setFormData({
                from_name: '',
                email: '',
                subject: '',
                message: '',
            })
            setSendSuccess(true);
        }).catch((error) => {
            setSendSuccess(false);
        })
    };

    return (
        <>
            <main className="cta-page">
<h1> contact </h1>
                <div className={`message-status ${sendSuccess ? 'show' : ''}`}>
                    {sendSuccess ? (
                        <h2 className='success-message'> 
                            Thankyou, your message has been succesfully delivered. 
                            We will contact you shortly 
                        </h2>
                    ) : (
                        <h2 className='success-message'> 
                            Sorry, there has been an error at the hex e-mail factory. 
                            Please try again or contact us directly at info@hexstudio.io.
                        </h2>
                    )}
                </div>
                <div className={`form ${sendSuccess ? 'hide' : ''}`}>
                    <form onSubmit={handleSubmit} ref={formRef}>
                        <div>
                            <label htmlFor="from_name">Name:</label>
                            <input type="text" id="name" name="from_name" value={formData.from_name} onChange={handleInputChange} required/>
                        </div>
                        <div>
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required/>
                        </div>
                        <div>
                            <label htmlFor="subject">Subject:</label>
                            <select id="subject" name="subject" value={formData.subject} onChange={handleInputChange} required>
                                <option value="" disabled>Select a subject</option>
                                <option value="development">Development</option>
                                <option value="design">Design</option>
                                <option value="activation">Activation</option>
                                <option value="marketing">Marketing</option>
                                <option value='' disabled>Select a subject</option>
                            </select>
                        </div>
                        <div className='message-container'>
                            {/* <label htmlFor='message'>Message:</label> */}
                            <textarea id='message' name='message' value={formData.message} onChange={handleInputChange} placeholder='Type your message here. Looking forward to connecting.' required></textarea>
                        </div>
                        <div>
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </main>
        </>
    )
}