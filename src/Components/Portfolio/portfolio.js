import React, {useState} from 'react';
import Navbar from "../Navbar/navbar";
import Footer from "../Footer/footer";
import './portfolio.css';
import ai from '../../images/skillsIcons/icons8-adobe-illustrator-100.png'
import portfolioFigma from '../../images/portfolioImg/portfolioFigma.mp4'
import fresco from '../../images/skillsIcons/icons8-fresco-64.png'

function Portfolio(){
    return(
        <div className='portfolioContainer'>
            <Navbar></Navbar>
            <div className='case'>
                <div className='portfolio case1'>
                    <img alt='ai icon' src={ai}/>
                </div>
                <div className='portfolio case2'>
                    <img alt='ai icon' src={ai}/>
                </div>
                <div className='portfolio case3'>
                    <img alt='ai icon' src={ai}/>
                </div>
                <div className='portfolio case4'>

                    <video autoPlay muted loop id='figmaScreen'>
                        <source src={portfolioFigma}/>
                    </video>
                </div>
                <div className='portfolio case5'>
                    <img alt='Fresco icon' src={fresco}/>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Portfolio;