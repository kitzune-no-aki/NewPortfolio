import React, {useState} from 'react';
import './footer.css'
import Git from '../../images/skillsIcons/icons8-github-50-2.png'
import Mail from '../../images/skillsIcons/icons8-mail-100.png'
import Insta from '../../images/skillsIcons/icons8-instagram-50.png'


function Footer(){
    return(
        <div className='foot'>
            <div className='verweise'>
                <div className='imgFooter'>
                    <a href='https://github.com/kitzune-no-aki' target="_blank" >
                        <img alt='Icon Github' src={Git}/>
                    </a>
                    <a href='mailto:kontakt@mpech.dev'>
                        <img alt='Mailsymbol' src={Mail}/>
                    </a>
                    <a href='https://www.instagram.com/white.rabbitdesigns/' target='_blank'>
                        <img className='insta' alt='Instagram Symbol' src={Insta}/>
                    </a>
                </div>
                <div className='icons'>icons from: <a href='https://icons8.com/' target="_blank" >https://icons8.com/</a></div>
            </div>
        </div>
    )
}

export default Footer