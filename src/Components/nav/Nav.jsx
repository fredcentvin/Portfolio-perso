import React, { useState } from "react";
import { Link } from "react-router-dom";
import moncv from '../../assets/images/moncv.pdf';
import './nav.css';

function Nav() {
    const [showEmail, setShowEmail] = useState(false);

    const handleContactClick = () => {
        setShowEmail(true);
    };

    const handleEmailClick = () => {
        setShowEmail(false);
    };

    return (
        <div>
            <div className="navContainer">
                <Link className="pApropos" to="/apropos">A PROPOS</Link>
                <a className="fixCv" href={moncv} target="_blank" rel="noopener noreferrer">CV</a>
                <p className="pNav" onClick={handleContactClick}>CONTACT</p>
                <a href="#projects">NOS PROJETS</a>
            </div>
            {showEmail && (
                <div className="emailDisplay">
                    <a href="mailto:frederic@agence-devcode.fr" onClick={handleEmailClick}>frederic@agence-devcode.fr</a>
                </div>
            )}
        </div>
    );
}

export default Nav;






