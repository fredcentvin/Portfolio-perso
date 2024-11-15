import React, { useState } from "react";
import moncv from '../../assets/images/moncv.pdf';
import './nav.css';

function Nav() {
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleContactClick = () => {
        setShowForm(true);
    };

    const handleCloseClick = () => {
        setShowForm(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('https://ton-backend-endpoint.com/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            alert('Votre message a été envoyé avec succès!');
            setShowForm(false);
        })
        .catch(error => {
            console.error('Erreur:', error);
            alert('Une erreur est survenue lors de l\'envoi de votre message.');
        });
    };

    return (
        <div>
            <div className="navContainer">
                <a className="fixCv" href={moncv} target="_blank" rel="noopener noreferrer">CV</a>
                <p className="pNav" onClick={handleContactClick}>CONTACT</p>
                <a href="#projects">MES RÉALISATIONS</a>
            </div>
            {showForm && (
                <div className="modalOverlay">
                    <div className="modal">
                        <button className="closeButton" onClick={handleCloseClick}>X</button>
                        <form className="form" onSubmit={handleSubmit}>
                            <div className="formInput">
                                <label className="blockLabel">
                                    Nom:
                                    <input type="text" name="name" value={formData.name} onChange={handleChange} />
                                </label>
                            </div>
                            <div className="formInput">
                                <label className="blockLabel">
                                    Email:
                                    <input type="email" name="email" value={formData.email} onChange={handleChange} />
                                </label>
                            </div>
                            <div className="formInput">
                                <label className="blockLabel">
                                    Message:
                                    <textarea name="message" value={formData.message} onChange={handleChange}></textarea>
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

