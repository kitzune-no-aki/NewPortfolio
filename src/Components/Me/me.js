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
                    <p>Ich bin wissbegierig, lernfreudig, fast immer gut gelaunt, aber immer auf der Suche nach neuen
                        Herausforderungen. 2022 habe ich meine Reise in die Softwareentwicklung begonnen. Zunächst habe
                        ich eigenständig Wissen angeeignet und experimentiert, um dann das Studium der B.Sc. Softwareentwicklung
                        aufzunehmen und eine Tätigkeit im technischen Support anzunehmen.
                    </p>
                    <p>
                        Neben Studium und Beruf setze ich meine Leidenschaft fort, indem ich mir weiter neue Techniken
                        aneigne und mich an neuen Projekten probiere. Dabei liegt mein Fokus auf das Frontend, Designen,
                        alles rund um die Themen UI und UX.
                    </p>
                </div>
                <img className='lebenslauf' alt='Frauenbild' src={Lebenslauf}/>
            </div>
            <div className='baerContainer'>
                <img className='baer' alt='Person vor Riesenbären von line' src={Baer}/>
                <div className='textBaer'>
                    Wenn ich mich mal nicht kreativ betätige, sei es digital durch Programmieren oder die Nutzung der
                    Adobe Creative Cloud, oder auch analog mit Stift, Pinsel und Papier, suche ich den Ausgleich, indem
                    ich in andere Welten eintauche. Ich genieße es, alleine oder mit meinem Husky in der Natur zu laufen
                    und dabei meine Gedanken über Landschaften und Szenerien schweifen zu lassen. Zusätzlich tauche ich
                    in ferne Welten ein, indem ich Anime schaue, Manga und Bücher lese oder Videospiele spiele.
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