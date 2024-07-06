import React from 'react';
import mailWhite from './../../assets/mailWhite.png'
import whiteLinkedin from './../../assets/whiteLinkedin.png'
import githubWhite from './../../assets/githubWhite.png'
import './Contact.css';

function Contact() { 
    return (
        <div className="container">
            <div>
                <h3 className="titles">Contact</h3>
                <hr class="custom-line"></hr>
            </div>
            <div className="contact-content">
                <p className="contact-text">Are you interested in collaborating or want to connect or chat? Feel free to reach out!</p>
                <div className="contact-icons">
                    <div className="contact-button-text">
                        <a href="mailto:asidhu359@gmail.com" className="contact-button-text">
                            <img src={mailWhite} alt="Email" />
                            <p>asidhu359@gmail.com</p>
                        </a>
                    </div>
                    <div className="contact-button-text">
                        <a href="https://linkedin.com/in/avnoor-sidhu/" target="_blank" rel="noopener noreferrer" className="contact-button-text">
                            <img src={whiteLinkedin} alt="LinkedIn" />
                            <p>linkedin.com/in/avnoor-sidhu/</p>
                        </a>
                    </div>
                    <div className="contact-button-text">
                        <a href="https://github.com/asidhu0" target="_blank" rel="noopener noreferrer" className="contact-button-text">
                            <img src={githubWhite} alt="GitHub" />
                            <p>github.com/asidhu0</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;