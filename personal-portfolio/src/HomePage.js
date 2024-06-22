import React from 'react';
import styles from "./HomePage.css";
import profilePicture from './assets/Avnoor_Sidhu.jpg';
import dcAppPicture from './assets/dcApp.svg';
import grata1 from './assets/grata-1.png'
import grata2 from './assets/grata-2.png'
import swiftUILogo from './assets/swift.png'
import mongo from './assets/mongodb-seeklogo2.svg'
import express from './assets/ex.png'
import react from './assets/reactNew.png'
import node from './assets/node-js-seeklogo.svg'
import cocoaPods from './assets/cocoapods.svg'
import ticTacToe from './assets/ticTacToe.png'
import python from './assets/python.png'
import c from './assets/c.png'
import tensorFlow from './assets/Tensorflow.svg.png'
import numpy from './assets/numpy.png'

function Home() {
    return (
        <div class="home">
            <div class="text-column">
                <h1 className='header'>Hello, I am Avnoor Sidhu</h1>
                <p>I am a Software Engineer at FOCAL Lab. </p>
            </div>
            <div class="image-column">
                <img src={profilePicture} alt="Profile Picture" className="img" />
            </div>
        </div>
    );
  }

function TextLine({ time, company, location, position }) {
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
            <hr class="custom-line"></hr>
            <div>
                <TextLine time="Jan 2024 - present" company="Forest Change Analysis Lab" position="Software Engineer" />
                <TextLine time="Jun 2023 - Sep 2023" company="Lawrence Livermore National Laboratory" position="Software Engineer Intern" />
                <TextLine time="Jan 2023 - Jun 2023" company="Solidigm" position="SSD Technical Intern" />
            </div>
        </div>
    );
}

function Rectangle({ name, image, description, style, logos }) {
    return (
        <div className="rectangle" style={style}>
            <div className="text-content">
                <h3>{name}</h3>
                <p>{description}</p>
            </div>
            <img src={image} className="projectImage" />
            <div className="logo-container">
                {logos.map((logo, index) => (
                    <img key={index} src={logo} alt="Project Logo" className="logo" />
                ))}
            </div>
        </div>
    );
}

function Projects() { 
    const projects = [
        { id: 1, name: 'DC Menu App', description: 'Description of Project One.', color: '#F0EDFA', image: dcAppPicture, logos: [mongo, express, react, node] },
        { id: 2, name: 'iOS Property Management Application', description: 'Description of Project Two.', color: '#F0EDFA', image: grata1, logos: [swiftUILogo, cocoaPods] },
        { id: 3, name: 'Lab Scheduler', description: 'Description of Project Three.', color: '#F0EDFA', image: '/path/to/image3.jpg', logos: [python] },
        { id: 4, name: 'User Thread Library', description: 'Description of Project Four.', color: '#F0EDFA', image: '/path/to/image4.jpg', logos: [c] },
        { id: 5, name: 'Tune Hunt', description: 'Description of Project Five.', color: '#F0EDFA', image: '/path/to/image5.jpg', logos: [python] },
        { id: 6, name: 'Tic Tac Toe', description: 'Description of Project Six.', color: '#F0EDFA', image: ticTacToe, logos: [swiftUILogo] },
        { id: 7, name: 'Terminal', description: 'Description of Project Seven.', color: '#F0EDFA', image: '/path/to/image7.jpg', logos: [c] },
        { id: 8, name: 'Security Camera', description: 'Description of Project Eight.', color: '#F0EDFA', image: '/path/to/image8.jpg', logos: [python, tensorFlow, numpy] }
    ];
    return (
        <div className="container">
            <div>
                <h3 className="titles">Projects</h3>
                <hr class="custom-line"></hr>
            </div>
            <div className="grid">
                {projects.map(project => (
                    <Rectangle
                        key={project.id}
                        name={project.name}
                        description={project.description}
                        image={project.image}
                        style={{ backgroundColor: project.color }}
                        logos={project.logos}
                    />
                ))}
            </div>
        </div>
    );
}

function Contact() { 
    return (
        <div className="container">
            <div>
                <h3 className="titles">Contact</h3>
                <hr class="custom-line"></hr>
            </div>
            <p>Are you interested in collaborating or want to connect or chat? If so, hit the contact button down below or contact me via LinkedIn.</p>
        </div>
    );
}

function HomePage() {
    return (
        <div className="HomePage">
            <div id="home">
                <Home />
            </div>
            <div id="experience">
                <Experience />
            </div>
            <div id="projects">
                <Projects />
            </div>
            <div id="contact">
                <Contact />
            </div>
        </div>
    );
  }
  
  export default HomePage;