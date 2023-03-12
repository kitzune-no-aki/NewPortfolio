import React, {useState} from 'react';
import Navbar from "../Navbar/navbar";
import Footer from "../Footer/footer";
import Baer from '../../images/me/baer.jpeg';
import Lebenslauf from '../../images/me/Lebenslauf.jpeg'
import Zeichnen from '../../images/Freizeit/icons8-design-50.png'
import Fitness from '../../images/Freizeit/icons8-fitness-50.png'
import Yoga from '../../images/Freizeit/icons8-lotus-50.png'
import Anime from '../../images/Freizeit/icons8-sailor-moon-50.png'
import Husky from '../../images/Freizeit/icons8-siberian-husky-50.png'
import Videospiel from '../../images/Freizeit/icons8-the-legend-of-zelda-skyward-sword-50.png'

import './me.css'

function Me(){
    return(
        <div className='meContainer'>
            <Navbar></Navbar>

            <div className='lebenslaufContainer'>
                <div className='textLebenslauf'>
                    <h3>Hi, ich bin Miriam</h3>
                    <p>Ich bin wissbegierig, lernfreudig, immer gut gelaunt und bis vor kurzem war ich erfolgreich
                        im sozialen Bereich tätig. Vergangenen Sommer habe ich dann nach reiflicher Überlegung meinen Werdegang
                        in der IT begonnen. Ich habe den Studiengang B. Sc. Softwareentwicklung begonnen und eine Tätigkeit als
                        wissenschaftliche Mitarbeiterin im technischen Support begonnen.
                        Neben dem Studium erweiter ich stetig mein Wissen rund ums Thema Designen und Gestalten. Sei es dabei
                        das Frontend zu gestalten, oder auch alles rund um UI und UX.
                    </p>
                </div>
                <img className='lebenslauf' alt='Frauenbild' src={Lebenslauf}/>
            </div>
            <div className='baerContainer'>
                <img className='baer' alt='Person vor Riesenbären von line' src={Baer}/>
                <div className='textBaer'>
                    Wenn ich mal nicht am coden oder designen bin, verbringe ich meine Zeit gerne mit zeichnen
                    (ganz old School auf Papier),
                    meinen Huskys,
                    Sport/ Fitness,
                    Animes schauen, Mangas lesen,
                    oder auch mit Videospiele spielen.
                    <div className='Icons'>
                        <img alt='zeichnen' src={Zeichnen}/>
                        <img alt='Husky' src={Husky}/>
                        <img alt='Symbol zu Fitness' src={Fitness}/>
                        <img alt='Lotusblume' src={Yoga}/>
                        <img alt='Sailor Moon' src={Anime}/>
                        <img alt='Zelda Triforce' src={Videospiel}/>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Me;