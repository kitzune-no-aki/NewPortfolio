import React from 'react';
import "./home.css"
import Mars from "../../images/mars.jpg";
import Typewriter from "typewriter-effect";

function Home() {
    return(
        <div className="wrapper">
            <div>
                <div className="mainNavbar">
                    <img alt="Sailor Mars" src={Mars}/>
                    <div className="nav home">Home</div>
                    <div className="nav skills">Skills</div>
                    <div className="nav projects">Projects</div>
                    <div className="nav me">Me</div>
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
                                strings: ['Developer', 'Optimist', 'Creator','Learner'],
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