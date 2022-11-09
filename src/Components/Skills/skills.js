import React from 'react';
import Navbar from "../Navbar/navbar";
import Typewriter from "typewriter-effect";
import './skills.css'
import Footer from "../Footer/footer";
import Css from '../../images/skillsIcons/icons8-css3-50-2.png'
import Figma from '../../images/skillsIcons/icons8-figma-50-2.png'
import Github from '../../images/skillsIcons/icons8-github-50-2.png'
import Html from '../../images/skillsIcons/icons8-html-5-50-2.png'
import Javascript from '../../images/skillsIcons/icons8-javascript-50-2.png'
import ReactIcon from '../../images/skillsIcons/icons8-react-native-50.png'
import Graduation from '../../images/skillsIcons/icons8-graduation-cap-48.png'
import Bootstrap from '../../images/skillsIcons/icons8-bootstrap-48.png'
import nodelogo from '../../images/skillsIcons/icons8-nodejs-48.png'
import Python from '../../images/skillsIcons/icons8-python-64.png'

function Skills() {
    return(

        <div className='skillsContainer'>

            <Navbar></Navbar>

            <h2 className='headerSkills'>Skills</h2>

            <div className="currentSkillsContainer">

                <div className='skillsBox'>
                    <h3>Development</h3>
                    <div className='images'>
                        <img title='html' alt='html' src={Html}/>
                        <img title='CSS' alt='CSS' src={Css}/>
                        <img title='JavaScript' alt='JavaScript' src={Javascript}/>
                        <img title='React' alt='React' src={ReactIcon}/>
                        <a href='https://github.com/kitzune-no-aki' target="_blank" >
                            <img title='Github' alt='Github' src={Github}/>
                        </a>
                        <img title='bootstrap' alt='Bootstrap' src={Bootstrap}/>
                    </div>
                </div>

                <div className='skillsBox'>
                    <h3>
                        <img src={Graduation}/>
                        B.Sc. Softwareentwicklung
                    </h3>
                    <div className='module'>
                        <div>Wirtschaftsethik</div>
                        <div>BWL Einführung und Grundlagen</div>
                        <div>BWL Vertiefung</div>
                        <div>Mobile Software Engineering am Beispiel der Android- Plattform</div>
                        <div>Computer Training</div>
                        <div>Einführung in das wissenschaftliche Arbeiten</div>
                        <div>Kollaboratives Arbeiten</div>
                        <div>Gestaltung und Ergonomie von User Interfaces</div>
                        <div>Einführung in die Programmierung mit Python</div>
                        <div>Projekt Mobile Software Engineering</div>
                    </div>
                </div>
            </div>


            <h2 className='headerSkills'>Coming soon
                <span>
                        <Typewriter
                            options={{
                                strings: ['...'],
                                autoStart: true,
                                loop: true,
                                cursor: '.',
                            }}
                        />
                    </span>
            </h2>


            <div className="comingSkillsContainer">


                <div className='skillsBox'>
                    <h3>Development</h3>
                    <div className='images'>
                        <img title='Node' alt='Node' src={nodelogo}/>
                        <img title='Python' alt='Python' src={Python}/>
                        <img title='Figma' alt='Figma' src={Figma}/>
                    </div>
                </div>

                <div className='skillsBox'>
                    <h3>
                        <img alt='Barett oder auch Bachelorhut' src={Graduation}/>
                        B.Sc. Softwareentwicklung
                    </h3>
                    <div className='module'>
                        <div>Datenmodellierung und Datenbanksysteme</div>
                        <div>Algorithmen, Datenstrukturen u. Programmierspr.</div>
                    </div>
                </div>
            </div>


            <Footer></Footer>
        </div>
    )
}

export default Skills;