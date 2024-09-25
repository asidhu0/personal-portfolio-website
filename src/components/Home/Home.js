import React from 'react';
import profilePicture from './../../assets/Avnoor_Sidhu.jpg';
import './Home.css';

function Home() {
    return (
        <div className="home">
            <div className="text-column">
                <h1 className="hello">Hello, I am Avnoor Sidhu</h1>
                {/* <p className="swe-text">A Production Engineer based in the San Francisco Bay Area, currently working at Meta. </p> */}
                <p className="swe-text">A Production Engineer at Meta based in the San Francisco Bay Area. </p>
            </div>
            <div className="image-column">
                <img src={profilePicture} alt="Profile Picture" className="img" />
            </div>
        </div>
    );
}

export default Home;