import React from 'react';
import Home from './components/Home/Home';
import Experience from './components/Experience/Experience';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import './WebsitePage.css';

function WebsitePage() {
    return (
        <div className="HomePage">
            <div id="home">
                <Home />
            </div>
            <div id="experience">
                <Experience />
            </div>
            <div>
                <Skills />
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
  
  export default WebsitePage;