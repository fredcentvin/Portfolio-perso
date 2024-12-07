import React, { useState } from "react";
import { Link } from "react-router-dom";
import moncv from '../../assets/images/moncv.pdf';
import linkedin from '../../assets/logos/linkedin.png';
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
                <Link to="/projects" className="decoLink">PROJETS</Link>
                <Link to="/nosservices" className="decoLink">SERVICES</Link> 
            </div>
            <div className="socialLink">
            <a href="https://www.linkedin.com/in/frédéric-boniface-293076156" target="_blank" rel="noopener noreferrer">
            <img className="logoLink" src={linkedin} alt="logo linkedin lien vers profil de Frédéric Boniface" />
          </a>
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









