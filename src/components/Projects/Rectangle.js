import React, { useState } from 'react';
import './Rectangle.css';

function FrontView({ name, image, description, style, logos, imageClassName, handleFlip}) {
    return (
        <div className="rectangle" style={style}>
            <div className="spacing">
                <h1 className="title-content">{name}</h1>
                <small className="text-content">{description}</small>
            </div>
            <div className="buttonstyle">
                <button onClick={handleFlip} className="flip-button">More Details</button>
            </div>
            <img src={image} alt={name} className={`default-image-class ${imageClassName}`} />
            <div className="logo-container">
                {logos.map((logo, index) => (
                    <img key={index} src={logo} alt="Project Logo" className="logo" />
                ))}
            </div>
        </div>
    );
}

function Rectangle({ name, image, description, style, logos, imageClassName, details }) {
    const [isFlipped, setFlipped] = useState(false)
    const handleFlip = () => {
        setFlipped(!isFlipped);
    };
    function renderDetails() {
        return details.split('\n')
            .map(line => line.trim())
            .filter(line => line && line.startsWith('-')) 
            .map((item, index) => {
                const urlRegex = /(https?:\/\/[^\s]+)/g;
                const content = item.substring(1).trim();
    
                const parts = content.split(urlRegex);
    
                return (
                    <li key={index}>
                        {parts.map((part, i) => {
                            if (part.match(urlRegex)) {
                                return <a key={i} href={part} target="_blank" rel="noopener noreferrer">{part}</a>;
                            }
                            return part;
                        })}
                    </li>
                );
            });
    }
    
    
    return (
        <div
            className={`flip-card ${
                isFlipped ? "flipped" : ""
            }`}
        >
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <FrontView name={name} image={image} description={description} style={style} logos={logos} imageClassName={imageClassName} handleFlip={handleFlip} />
                </div>
                <div className="flip-card-back">
                    <ul className="details-list">{renderDetails()}</ul>
                    <button className="flip-button" onClick={handleFlip}>Back</button>
                </div>
            </div>
        </div>
    );
}

export default Rectangle;