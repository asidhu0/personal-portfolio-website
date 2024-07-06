import React from 'react';
import profilePicture from './../../assets/Avnoor_Sidhu.jpg';
import './Home.css';

function Home() {
    return (
        <div className="home">
            <div className="text-column">
                <h1>Hello, I am Avnoor Sidhu</h1>
                <p>A Software Engineer based in the San Francisco Bay Area, currently working at FOCAL Lab. </p>
            </div>
            <div className="image-column">
                <img src={profilePicture} alt="Profile Picture" className="img" />
            </div>
        </div>
    );
}

export default Home;