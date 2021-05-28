import React from 'react';
import Navbar from './Navbar/Navbar';
import CV from "../files/Resume_RaseshKumarRout.pdf";

function Header() {
 
    return (
        <div className="main">
            <Navbar />
            <div className="name">
                <p className="heading">Looking for a Software Developer?</p>

                <h1>I'm <span>Rasesh</span> Kumar Rout</h1>

                <p className="details">I'm a Software Developer 
                    experienced in building customer 
                    centric crtitical applications and contributing 
                    to digital transformation of tech stack.</p>
                <div className="header-btns">
                    <a onClick={() => window.open(CV, "_blank")} className="btn-1">View CV</a>
                    {/*<a href="#" className="btn-2">Download CV</a>*/}
                </div>
            </div>
            <div class="arrow"></div>
        </div>
    )
}

export default Header