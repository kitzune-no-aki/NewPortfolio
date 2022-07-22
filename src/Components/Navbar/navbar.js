import React, {useState} from 'react'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {FaRegTimesCircle} from 'react-icons/fa'
import './navbar.css'
import Dino from "../../images/Favorites/icons8-dinosaurier-50.png"

const Navbar = () => {

    const[click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    return (
        <div className='navbar'>
            <div className='container'>
                <div className='left'>
                    <img src={Dino}/>
                    <h2><span>Miriam</span>Pech</h2>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>Skills</a></li>
                    <li><a href='#'>Projects</a></li>
                    <li><a href='#'>Me</a></li>
                </ul>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaRegTimesCircle className='icon' />) : (<HiOutlineMenuAlt4 className='icon' />)}
                </div>
            </div>
        </div>
    )
}

export default Navbar