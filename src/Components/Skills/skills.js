import React from 'react';
import Navbar from "../Navbar/navbar";
import Typewriter from "typewriter-effect";
import Css from '../../images/skillsIcons/icons8-css3-50-2.png'
import Figma from '../../images/skillsIcons/icons8-figma-50-2.png'
import Github from '../../images/skillsIcons/icons8-github-50-2.png'
import Html from '../../images/skillsIcons/icons8-html-5-50-2.png'
import Javascript from '../../images/skillsIcons/icons8-javascript-50-2.png'
import ReactIcon from '../../images/skillsIcons/icons8-react-native-50.png'
import Sass from '../../images/skillsIcons/icons8-sass-50-2.png'
import Graduation from '../../images/skillsIcons/icons8-graduation-cap-48.png'

function Skills() {
    return(
        <div>
            <Navbar/>
            <h2>Skills</h2>
            <h3>Developement</h3>
            <img src={Html}/>
            <img src={Css}/>
            <img src={Javascript}/>
            <img src={ReactIcon}/>
            <img src={Github}/>
            <h3>
                    <img src={Graduation}/>
                    B.Sc. Softwareentwicklung
            </h3>
            <div>Wirtschaftsethik</div>
            <div>BWL Einführung und Grundlagen</div>
            <div>BWL Vertiefung</div>
            <div>Mobile Software Engineering am Beispiel der Android- Plattform</div>
            <div>Computer Training</div>
            <div>Einführung in das wissenschaftliche Arbeiten</div>
            <div>Kollaboratives Arbeiten</div>
            <h2>Coming soon
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
            <h3>Developement</h3>
            <img src={Figma}/>
            <img src={Sass}/>
            <h3>
                    <img src={Graduation}/>
                    B.Sc. Softwareentwicklung
            </h3>
            <div>Gestaltung und Ergonomie von User Interfaces</div>
            <div>Cloud Programming</div>
        </div>
    )
}

export default Skills;