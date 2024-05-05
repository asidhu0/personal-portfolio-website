import React from 'react';
import styles from "./HomePage.css";
import profilePicture from './assets/Avnoor_Sidhu.jpg';

function HomePage() {
    return (
        <div className="HomePage">
            <header className="HomePage-header">
            <h1 className='header'>Welcome to my Portfolio</h1>
            <p>
                This is a simple portfolio site created with React.
            </p>
            </header>
            <img src={profilePicture} alt="Profile Picture" className="img" />
            <div className='outer'>
                <div class="rounded-rectangle">
                    <a href="/home"><h2 className='font'>Home</h2></a>
                </div>
                <div class="rounded-rectangle">
                    <a href="/experience"><h2 className='font'>Experience</h2></a>
                </div>
                <div class="rounded-rectangle">
                    <a href="/projects"><h2 className='font'>Projects</h2></a>
                </div>
                <div class="rounded-rectangle">
                    <a href="/contact"><h2 className='font'>Contact</h2></a>
                </div>
            </div>
        </div>
    );
  }
  
  export default HomePage;