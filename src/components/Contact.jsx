import React from 'react';
import Social from './Social';

function Contact() {
    return (
        <div className="contact">
            <h3>Get in touch with me!</h3>
            {/*<div className="contact-input">
                <input type="email" placeholder="youremail@provider.com" />
                <a href="#">Continue</a>
            </div>*/}
            <div className="social" id="social">
                <a href="https://www.linkedin.com/in/rasesh-kumar-rout-97508766/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                <a href="https://github.com/ShaunFrost" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                <a href="https://www.instagram.com/rasesh_rout/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                <a href="https://www.facebook.com/rasesh.rout/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                <a href="mailto:raseshrout@gmail.com" rel="noopener noreferrer"><i className="fab fa-google"></i></a>
            </div>
        </div>
    )
}

export default Contact