import React from 'react';
import "./home.css"
import Rilakuma from '../../images/me/rilakuma.jpg'
import Typewriter from "typewriter-effect";
import {Link} from 'react-router-dom'

function Home() {
    return(
        <div className="wrapper">
            <div>
                <div className="mainNavbar">
                    <img alt="Foto von mir auf einer Bank mit Rilakuma" src={Rilakuma}/>
                    <Link to="/skills">
                        <div className="nav skillsLink">Skills</div>
                    </Link>
                    <Link to="/projects">
                        <div className="nav projectsLink">Projects</div>
                    </Link>
                    <Link to="/me">
                        <div className="nav meLink">Me</div>
                    </Link>
                </div>
            </div>
            <div className="header">
                <h1>
                    Miriam Pech
                </h1>
                <h2>
                    I am a
                    <span>
                        <Typewriter
                            options={{
                                strings: ['Developer', 'Optimist','Creative', 'Curious'],
                                autoStart: true,
                                loop: true,
                                pauseFor: 2000,
                                cursor: '_',
                            }}
                        />
                    </span>
                </h2>
            </div>
        </div>
    )
}

export default Home;