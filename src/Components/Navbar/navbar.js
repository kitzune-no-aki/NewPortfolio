import React from 'react';
import "./navbar.css"
import Mars from '../../images/mars.jpg';

function Navbar() {
    return(
        <div class="mainNavbar">
            <img alt="Sailor Mars" src={Mars}/>
            <div class="nav home">Home</div>
            <div class="nav skills">Skills</div>
            <div class="nav projects">Projects</div>
            <div class="nav me">Me</div>
        </div>
    )
}

export default Navbar;