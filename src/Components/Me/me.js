import React, {useState} from 'react';
import Navbar from "../Navbar/navbar";
import Footer from "../Footer/footer";
import Baer from '../../images/me/baer.jpeg';
import Lebenslauf from '../../images/me/Lebenslauf.jpeg'
import Zeichnen from '../../images/Freizeit/icons8-drawing-64(1).png'
import Fitness from '../../images/Freizeit/icons8-trail-running-64.png'
import Anime from '../../images/Freizeit/icons8-totoro-100.png'
import Husky from '../../images/Freizeit/icons8-dog-48.png'
import Runner from '../../images/me/BA268BC1-912D-41C7-BE16-FBE0ECC75745_1_105_c.jpeg'


import './me.css'

function Me(){
    return(
        <div className='meContainer'>
            <Navbar></Navbar>

            <div className='lebenslaufContainer'>
                <div className='textLebenslauf'>
                    <h3>Hi, ich bin Miriam</h3>
                    <p>
                        Ich bin so wissbegierig wie ein neugieriger Fuchs, lernfreudig wie ein Schwamm und stets so gut
                        gelaunt, dass selbst die Sonne neidisch wird. In 2022 habe ich mutig meine gewohnten Wege in der
                        Sozialen Arbeit verlassen, um meine Reise in die Welt der IT zu starten.
                    </p>
                    <p>
                        Seitdem habe ich mich selbstständig in verschiedenen Programmiersprachen weitergebildet, ein Studium
                        im Bereich B.Sc. Softwareentwicklung begonnen und eine Position als Requirements Engineer
                        angenommen. Während meiner Tätigkeit als Requirements Engineer konnte ich bereits Erfahrungen
                        in den unterschiedlichsten Projekten sammeln. Diese reichen von einer Shopgestaltung inklusive ihrer Schnittstellen
                        bis hinzu umfangreichen Projekten wie Informationssysteme in öffentlichen Verkehrsmitteln.
                    </p>
                </div>
                <img className='lebenslauf' alt='Frauenbild' src={Lebenslauf}/>
            </div>
            <div className='baerContainer'>
                <img className='baer' alt='Person vor Riesenbären von line' src={Runner}/>
                <div className='textBaer'>
                    <p>Wenn ich nicht gerade meine kreative Ader auf altmodische Weise mit Stift und Papier zum Leben erwecke
                        oder etwas moderner mit der Adobe Creative Cloud, finde ich meine Inspiration beim Eintauchen in andere Welten
                        – sei es durch fesselnde Mangas, Bücher oder Animes. Mein Schreibtisch ist dabei so etwas wie meine Kommandozentrale
                        für kreative Expeditionen.
                    </p>
                    <p>Doch falls du mich dort nicht antreffen kannst, befinde ich mich wahrscheinlich in den Wäldern, entweder
                        allein oder in Gesellschaft meines Huskys. Immer auf der Suche nach neuen Ideen und Abenteuern – das ist
                        mein Lebensmotto. Denn wer braucht schon einen gewöhnlichen Spaziergang, wenn man durch die Wälder laufen
                        kann, begleitet von der Magie der Natur und einem Husky an seiner Seite?
                    </p>
                    <div className='Icons'>
                        <img alt='zeichnen' src={Zeichnen}/>
                        <img alt='Husky' src={Husky}/>
                        <img alt='Symbol zu Fitness' src={Fitness}/>
                        <img alt='Sailor Moon' src={Anime}/>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Me;