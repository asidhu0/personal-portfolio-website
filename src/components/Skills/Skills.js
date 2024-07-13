import swiftUILogo from './../../assets/swift.png'
import mongo from './../../assets/mongodb-seeklogo2.svg'
import express from './../../assets/ex.png'
import react from './../../assets/reactNew.png'
import node from './../../assets/node-js-seeklogo.svg'
import python from './../../assets/python.png'
import tensorFlow from './../../assets/Tensorflow.svg.png'
import numpy from './../../assets/numpy.png'
import pandas from './../../assets/Pandas.svg'
import cpp from './../../assets/cpp.png'
import bash from './../../assets/bash.svg.png'
import './Skills.css';

function Skills() {
    return (
        <div className="skills-top-container">
            <h3 className="titles">Skills</h3>
            <hr class="custom-line"></hr>
            <div className="skills-container">
                <div className="skill-category">
                    <h4 className="skill-name">Programming Languages</h4>
                    <div className="logo-caption-container">
                        <div className="logo-caption-combo">
                            <img src={cpp} className="skills-logo" alt="C++" />
                            <span className="logo-caption">C++</span>
                        </div>
                        <div className="logo-caption-combo">
                            <img src={python} className="skills-logo" />
                            <span className="logo-caption">Python</span>
                        </div>
                        <div className="logo-caption-combo">
                            <img src={swiftUILogo} className="skills-logo" />
                            <span className="logo-caption">Swift</span>
                        </div>
                        <div className="logo-caption-combo">
                            <img src={bash} className="skills-logo" />
                            <span className="logo-caption">Bash</span>
                        </div>
                    </div>
                </div>
                <div className="skill-category">
                    <h4 className="skill-name">Web Development</h4>
                    <div className="logo-caption-container">
                        <div className="logo-caption-combo">
                            <img src={mongo} className="skills-logo" />
                            <span className="logo-caption">MongoDB</span>
                        </div>
                        <div className="logo-caption-combo">
                            <img src={express} className="skills-logo" />
                            <span className="logo-caption">Express.js</span>
                        </div>
                        <div className="logo-caption-combo">
                            <img src={node} className="skills-logo" />
                            <span className="logo-caption">Node.js</span>
                        </div>
                        <div className="logo-caption-combo">
                            <img src={react} className="skills-logo" />
                            <span className="logo-caption">React.js</span>
                        </div>
                    </div>
                </div>

                <div className="skill-category">
                    <h4 className="skill-name">Data Science Libraries</h4>
                    <div className="logo-caption-container">
                        <div className="logo-caption-combo">
                            <img src={tensorFlow} className="skills-logo" />
                            <span className="logo-caption">TensorFlow</span>
                        </div>
                        <div className="logo-caption-combo">
                            <img src={numpy} className="skills-logo" />
                            <span className="logo-caption">NumPy</span>
                        </div>
                        <div className="logo-caption-combo">
                            <img src={pandas} className="skills-logo" />
                            <span className="logo-caption">Pandas</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Skills;