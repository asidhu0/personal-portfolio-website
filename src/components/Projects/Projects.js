import React from 'react';
import Rectangle from './Rectangle';
import dcAppPicture from './../../assets/dcApp.svg';
import grata1 from './../../assets/grata.png'
import swiftUILogo from './../../assets/swift.png'
import mongo from './../../assets/mongodb-seeklogo2.svg'
import express from './../../assets/ex.png'
import react from './../../assets/reactNew.png'
import node from './../../assets/node-js-seeklogo.svg'
import cocoaPods from './../../assets/cocoapods.svg'
// import ticTacToe from './../../assets/ticTacToe.png'
import ticTacToe from './../../assets/new.png'
import python from './../../assets/python.png'
import c from './../../assets/c.png'
import tensorFlow from './../../assets/Tensorflow.svg.png'
import numpy from './../../assets/numpy.png'
import terminalDemo from './../../assets/terminalDemo.gif'
import threading from './../../assets/multithreadingFinal.png'
import server from './../../assets/server.png'
import pandas from './../../assets/Pandas.svg'
// import tuneHunt from './../../assets/tuneHunt.png'
import tuneHunt from './../../assets/csu.png'
import securityCamera from './../../assets/securityCameraReal.png'
import './Projects.css';

function Projects() { 
    const dcDescription = 'Developed the UC Davis Dining Hall App using the MERN stack while mentoring a cross-functional team of developers and designers. The app displays menus, allows dietary-based filtering, tracks calories, and saves favorite food items.'
    const grataDescription = 'Built an iOS native application with five other developers. The app allows building managers to easily pair Bluetooth locks to tenant units, lock and unlock units, change lock PINs, unpair locks, and perform other minor account management features.'
    const labSchedulerDescription = 'Implemented software to display live server data and availability status using host/client scripts with TCP sockets. This allows engineers to monitor server availability status so they can reserve it accordingly on Microsoft Teams.'
    const userThreadLibraryDescription = 'Developed a Linux-based user-level thread library, offering an interface for simulating multi-threading and concurrency. Implemented user-thread, semaphore, and preemption API\'s for thread management and proper thread synchronization.'
    const tuneHuntDescription = 'Implemented an interactive map-based game built with React Native. Users can collect album covers around their location, add them to their library, and have the Spotify page linked to discover new music!'
    const ticTacToeDescription = 'Designed and implemented a native iOS Tic-Tac-Toe Application using SwiftUI. The game consists of one/two-player modes, 4 levels of difficulty ranging from easy to impossible, customizable names, score tracker, and game sounds.'
    const terminalDescription = 'Developed a custom shell that handles basic built-in commands, supports multi-piping and output redirection, and manages simple environmental variables, ensuring efficient parsing of commands with error handling and memory management.'
    const securityCameraDescription = 'Leveraged machine learning and image processing to detect and track people in live camera feed. Utilizing TensorFlow\'s convolutional neural networks, the system provides accurate, hardware-independent security monitoring with live alerts.'

    const dcDetails = `
        - Mentored developers, designers, and the project manager by providing technical guidance and fostering interpersonal skill development
        - Developed the UC Davis Dining Commons App with daily macro tracking, food option filtering, and notifications for favorite foods
        - Oversaw the design processm which involved market and user research, competitive analysis, user flow creation, wireframing from low to high fidelity, and finally establishing a comprehensive design system.
        - Implemented Google Authentication and notifications using Firebase, and web scraped food items using Python
        `
    const grataDetails = `
        - Utilized the Alfred iOS SDK to enable direct pairing and control of locks via Bluetooth
        - Built a Network class to handle all API communications with Grata\'s server via HTTP requests, including authentication and operational commands
        - Integrated the Local Authentication framework to support Face ID, requiring an initial username and password login followed by biometric authentication for ease of use
        - Used CocoaPods for managing external libraries and frameworks, ensuring stable project dependencies through a Podfile configuration.
        - The application is now officially published and available for download on the App Store: https://apps.apple.com/ca/app/grata-manager/id6447966708
        `
    const labSchedulerDetails = `
        - Client script on the host machine communicates sequentially with multiple server scripts requesting system information
        - Utilized pandas to store data received by the client script (server data) in an Excel sheet to allow easy accessibility for Wiki page parsing
        - Solidigm's internal Wiki page extracts data from the Excel sheet enabling engineers to monitor server availability and characteristics
        - Configured a cron job with a Python virtual environment to run the client script every minute, ensuring server availability data remains updated
        - Engineers can reserve the server for long usage by creating an event on Microsoft Teams, and the Wiki page will show the server is occupied
        - Resulted in streamlined server resource allocation, and the product is implemented company-wide
        `
    const threadDetails = `
        - Provides an interface for creating, running, and managing threads concurrently on Linux
        - Utilized a doubly-linked list for efficient queue management, aiding in operations like enqueue, dequeue, and node deletion
        - Managed threads across various states (ready, blocked, zombie) with specific queues for each, excluding the singular running thread
        - Implemented semaphores for thread synchronization, managing thread blocking and unblocking based on resource availability
        - Features preemptive scheduling through an interrupt-based scheduler to ensure fair CPU time distribution among threads
        - Employs thread yield functions for context switching between the running and ready threads
        `
    const tuneHuntDetails = `
        - Developed a mobile application that allows users to discover and collect music album covers based on their geographical location
        - Integrated the Spotify API to randomly fetch and display music album covers on a map based on the user's location
        - Users can select album covers if they are in close proximity and add them to their personal library within the app
        - Provided each album's Spotify link so users can have instant access to listen to the respective album
        `
    const ticTacToeDetails = `
        - Utilized Xcode and Swift to create a user-friendly and interactive iOS Tic Tac Toe application
        - Refactored the app architecture to Model-View-ViewModel (MVVM) to enhance code separation and improve manageability
        - Added animations for X and O pieces and alerts for wins, losses, and draws to enrich the user experience
        `
    const shellDetails = `
        - All user input is parsed into a linked list to efficiently manage commands, arguments, and symbols like pipes and redirection
        - The system call fork() is used to create a new child process which uses the input data to run the command using execvp()
        - The shell supports output redirection and piping, including complex scenarios with multiple pipes by properly managing file descriptors
        - Environment variables can be set and used, and robust error management ensures incorrect command usage does not occur
        - There are three built-in commands (pwd, cd, exit) that execute without forking new processes, using functions such as chdir() and getcwd()
        `
    const cameraDetails = `
        - Processed live video frames to detect the presence of persons through a webcam using OpenCV, and resulted in an accuracy of 90%
        - Designed a convolutional neural netwrok with three layers, dropout for overfitting prevention, ReLU activation, and ending with a sigmoid for binary classification
        - Utilized maxpooling layers to reduce spatial dimensions of the feature maps and convolutional layers to decreas computational complexity
        - Implemented class weighting to ensure the model does not become biased towards majority classes and used adam optimizer for efficient convergence by adapting the learning rate
        `

    const projects = [
        { id: 1, name: 'Grata Manager', description: grataDescription, image: grata1, logos: [{ image: swiftUILogo, caption: 'SwiftUI' }, { image: cocoaPods, caption: 'CocoaPods' }], details: grataDetails},
        { id: 2, name: 'Lab Scheduler', description: labSchedulerDescription, image: server, logos: [{ image: python, caption: 'Python' }, { image: pandas, caption: 'Pandas' }], details: labSchedulerDetails},
        { id: 3, name: 'Dining Hall Menu App', description: dcDescription, image: dcAppPicture, logos: [{ image: mongo, caption: 'MongoDB' }, { image: express, caption: 'Express' }, { image: react, caption: 'React' }, { image: node, caption: 'Node.js' }], details: dcDetails},
        { id: 4, name: 'Security Camera', description: securityCameraDescription, image: securityCamera, logos: [{ image: python, caption: 'Python' }, { image: tensorFlow, caption: 'TensorFlow' }, { image: numpy, caption: 'NumPy' }], details: cameraDetails},
        { id: 5, name: 'User Thread Library', description: userThreadLibraryDescription, image: threading, logos: [{ image: c, caption: 'C' }], details: threadDetails},
        { id: 6, name: 'Simple Shell', description: terminalDescription, image: terminalDemo, logos: [{ image: c, caption: 'C' }], details: shellDetails},
        { id: 7, name: 'Tune Hunt', description: tuneHuntDescription, image: tuneHunt, logos: [{ image: react, caption: 'React' }], details: tuneHuntDetails},
        { id: 8, name: 'Tic Tac Toe', description: ticTacToeDescription, image: ticTacToe, logos: [{ image: swiftUILogo, caption: 'SwiftUI' }], details: ticTacToeDetails},
    ];
    const cells = [
        { id: 1, name: 'Grata Manager', description: grataDescription, image: grata1, logos: [swiftUILogo, cocoaPods], details: grataDetails},
        { id: 2, name: 'Lab Scheduler', description: labSchedulerDescription, image: server, logos: [python, pandas], details: labSchedulerDetails},
        { id: 3, name: 'Dining Hall Menu App', description: dcDescription, image: dcAppPicture, logos: [mongo, express, react, node], details: dcDetails},
        { id: 4, name: 'Security Camera', description: securityCameraDescription, image: securityCamera, logos: [python, tensorFlow, numpy], details: cameraDetails},
        { id: 5, name: 'User Thread Library', description: userThreadLibraryDescription, image: threading, logos: [c], details: threadDetails},
        { id: 6, name: 'Simple Shell', description: terminalDescription, image: terminalDemo, logos: [c], details: shellDetails},
        { id: 7, name: 'Tune Hunt', description: tuneHuntDescription, image: tuneHunt, logos: [react], details: tuneHuntDetails},
        { id: 8, name: 'Tic Tac Toe', description: ticTacToeDescription, image: ticTacToe, logos: [swiftUILogo], details: ticTacToeDetails},
    ];
    // const cells = new Array(8).fill(null);
    return (
        <div className="projects-container">
            <div>
                <h3 className="titles">Projects</h3>
                <hr class="custom-line"></hr>
            </div>
            <div className="grid">
            {/* {cells.map((cell, index) => (
                <div key={index} className="cell">
                    <img src={cell.imageUrl} alt={cell.title} className="cell-image" />
                    <h3>{cell.name}</h3>
                    <p>{cell.description}</p>
                </div>
            ))} */}

                {projects.map(project => (
                    <Rectangle
                        key={project.id}
                        name={project.name}
                        description={project.description}
                        image={project.image}
                        logos={project.logos}
                        // imageClassName={project.id === 5 ? 'special-image-style' : 'image'}
                        // imageClassName={'image'}
                        details={project.details}
                    />
                ))}
            </div>
        </div>
    );
}

export default Projects;