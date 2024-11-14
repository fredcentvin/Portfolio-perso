import React, { useState } from "react";
import moncv from '../../assets/images/moncv.pdf';
import './nav.css'

function Nav() {
    const [showForm, setShowForm] = useState(false);

    const handleContactClick = () => {
        setShowForm(true);
    };

    const handleCloseClick = () => {
        setShowForm(false);
    };

    return (
        <div>
            <div className="navContainer">
                <a className="fixCv" href={moncv} target="_blank" rel="noopener noreferrer">CV</a>
                <p className="pNav"  onClick={handleContactClick}>CONTACT</p>
                <a href="#projects" >MES RÉALISATIONS</a> {/* Lien vers l'ID */}
            </div>
            {showForm && (
                <div className="modalOverlay">
                    <div className="modal">
                        <button className="closeButton" onClick={handleCloseClick}>X</button>
                        <form className="form">
                            <div className="formInput">
                                <label className="blockLabel">
                                    Nom:
                                    <input type="text" name="name" />
                                </label>
                            </div>
                            <div className="formInput">
                                <label className="blockLabel">
                                    Email:
                                    <input type="email" name="email" />
                                </label>
                            </div>
                            <div className="formInput">
                                <label className="blockLabel">
                                    Message:
                                    <textarea name="message"></textarea>
                                </label>
                            </div>
                            <button className="buttonValidForm" type="submit">Envoyer</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Nav;
