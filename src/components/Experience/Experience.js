import React from 'react';
import './Experience.css';

function TextLine({ time, company, position }) {
    return (
        <div className="experienceText">
            <small className="timeText">{time}</small>
            <strong> {company}</strong>
            <p className="positionText"> {position} </p>
        </div>
    )
}

function Experience() { 
    return (
        <div className="container">
            <h3 className="titles">Experience</h3>
            {/* <hr class="custom-line"></hr> */}
            <hr></hr>
            <div className="below-line">
                <TextLine time="Jan 2024 - present" company="Forest Change Analysis Lab" position="Software Engineer" />
                <TextLine time="Jun 2023 - Sep 2023" company="Lawrence Livermore National Laboratory" position="Software Engineer Intern" />
                <TextLine time="Jan 2023 - Jun 2023" company="Solidigm" position="SSD Technical Intern" />
            </div>
        </div>
    );
}

export default Experience;