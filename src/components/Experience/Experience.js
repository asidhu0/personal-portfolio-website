import React from 'react';
import './Experience.css';

function TextLine({ time, company, position }) {
    return (
        <div className="experienceText">
            <small className="timeText">{time}</small>
            <strong className="companyText"> {company}</strong>
            <p className="positionText"> {position} </p>
        </div>
    )
}

function Experience() { 
    return (
        <div className="experience-container">
            <h3 className="titles">Experience</h3>
            <hr></hr>
            <div className="below-line">
                <div className="below-line-wrapper">
                    <div>
                        <p className="left-content">My interests lie across various domains including full stack development, containerization, building scalable workflows, machine learning, and computer vision. I enjoy leading teams, continuously learning, and delivering impactful solutions. </p>
                    </div>
                </div>
                <div className = "below-right">
                    <div className="vertical-line">
                        <span className="middle-dot"></span> 
                        <span className="bottom-dot"></span>
                    </div>
                    <div className="right-content">
                        <TextLine time="Oct 2024 - present" company="Meta" position="Production Engineer" />
                        <TextLine time="Jan 2024 - Sep 2024" company="Forest Change Analysis Lab" position="Junior Software Engineer" />
                        <TextLine time="Jun 2023 - Sep 2023" company="Lawrence Livermore National Laboratory" position="Software Engineer Intern" />
                        <TextLine time="Jan 2023 - Jun 2023" company="Solidigm" position="SSD Technical Intern" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;