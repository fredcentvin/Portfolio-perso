import React, { useState } from "react";
import { Link } from "react-router-dom";
import moncv from '../../assets/images/moncv.pdf';
import './nav.css';

function Nav() {
    const [showEmail, setShowEmail] = useState(false);

    const handleContactClick = () => {
        setShowEmail(prevShowEmail => !prevShowEmail);
    };

    return (
        <div>
            <div className="navContainer">
                <Link className="pApropos" to="/apropos">A PROPOS</Link>
                <a className="fixCv" href={moncv} target="_blank" rel="noopener noreferrer" aria-label="Téléchargement du CV au format PDF">PDF CV</a>
                <p className="pNav" onClick={handleContactClick}>CONTACT</p>
                <Link to="/projects">NOS PROJETS</Link>
                <Link to="/nosservices">NOS SERVICES</Link> 
            </div>
            {showEmail && (
                <div className="emailDisplay">
                    <a href="mailto:frederic@agence-devcode.fr" className="linkMail" >frederic@agence-devcode.fr</a>
                </div>
            )}
        </div>
    );
}

export default Nav;









