import React, {useState} from 'react';
import Navbar from "../Navbar/navbar";
import html from '../../images/skillsIcons/icons8-html-5-50-2.png'
import css from '../../images/skillsIcons/icons8-css3-50-2.png'
import java from '../../images/skillsIcons/icons8-javascript-50-2.png'
import bootstrap from '../../images/skillsIcons/icons8-bootstrap-48.png'
import './projects.css'
import Footer from "../Footer/footer";


function Projects(){
    return(
        <div className='skillsContainer'>
            <Navbar></Navbar>
            <div className='box'>

                <div className='project box1'>
                    <a href='https://kitzune-no-aki.github.io/Museum-of-Candy/' target="_blank" >
                        <p>
                            Umsetzung einer Website zur Übung von Bootstrap und responsive Design.
                        </p>
                    </a>
                    <div className='imgSkill'>
                        <img alt='html' src={html}/>
                        <img alt='css' src={css}/>
                        <img alt='bootstrap' src={bootstrap}/>
                    </div>
                </div>

                <div className='project box2'>
                    <a href='https://kitzune-no-aki.github.io/Document/' target="_blank" >
                        <p>
                            Übung zu DOM Events und Promises. Hier wechselt zu Anfang der Background seine Farben in einem Regenbogenverlauf und endet wieder in grau. Die Buttons, sowie die Überschriften,
                            wechseln bei Anklicken ihre Farben in eine zufällige Farbe.
                        </p>
                    </a>
                    <div className='imgSkill'>
                        <img alt='html' src={html}/>
                        <img alt='css' src={css}/>
                        <img alt='java script' src={java}/>
                    </div>
                </div>

                <div className='project box3'>
                    <a href='https://kitzune-no-aki.github.io/ScoreKeeper/' target="_blank" >
                        <p>
                            Gestaltung eines Punktezählers zur Übung von dom Manipulation mittels Javascript und erste Schritte
                            mit Bulma. Dabei soll der Punktendstand veränderbar sein und sich bei Veränderung auf den Punktestand 0|0 zurücksetzen.
                            Je nach Gewinner ändert sich das Bild.
                        </p>
                    </a>
                    <div className='imgSkill'>
                        <img alt='html' src={html}/>
                        <img alt='css' src={css}/>
                        <img alt='java script' src={java}/>
                    </div>
                </div>

                <div className='project box4'>
                    <a href='https://kitzune-no-aki.github.io/RandomColors/' target="_blank" >
                        <p>
                            Weitere Übung zu Dom Events. Beim klicken verändert sich der Hintergrund in eine beliebige Farbe
                            und die r,g,b dazu wird über dem Button angezeigt.
                        </p>
                    </a>
                    <div className='imgSkill'>
                        <img alt='html' src={html}/>
                        <img alt='css' src={css}/>
                        <img alt='java script' src={java}/>
                    </div>
                </div>

                <div className='project box5'>
                    <a href='https://kitzune-no-aki.github.io/pokemon/' target="_blank" >
                        <p>
                            Anfangsübung zu DOM. Eine fast leere Website, wird mit images der ersten 151 Pokemon und deren
                            Nummer befüllt mithilfe der DOM.
                        </p>
                    </a>
                    <div className='imgSkill'>
                        <img alt='html' src={html}/>
                        <img alt='css' src={css}/>
                        <img alt='java script' src={java}/>
                    </div>
                </div>

                <div className='project box6'>
                    <a href='https://kitzune-no-aki.github.io/Portfolio/' target="_blank" >
                        <p>
                            Erste einfache Gestaltung eines Portfolios mit Hilfe von bootstrap.
                        </p>
                    </a>
                    <div className='imgSkill'>
                        <img alt='html' src={html}/>
                        <img alt='css' src={css}/>
                        <img alt='java script' src={java}/>
                    </div>
                </div>
                <div className='project box7'>
                    <a href='https://kitzune-no-aki.github.io/weatherapp/' target='_blank'>
                        <p>Schlichte Wetter App, die die Temperatur und weitere Parameter einer gewünschten Stadt anzeigt.
                            Dabei wird im Hintergrund ein Bild abgebildet von der aktuellen Wetterbeschreibung. </p>
                    </a>
                    <div className='imgSkill'>
                        <img alt='html' src={html}/>
                        <img alt='css' src={css}/>
                        <img alt='java script' src={java}/>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Projects;