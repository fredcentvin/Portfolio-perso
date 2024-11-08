import React, { useState } from "react";

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
            <div className="navContainer" style={styles.navContainer}>
                <p style={styles.pNav}>CV</p>
                <p style={styles.pNav} onClick={handleContactClick}>CONTACT</p>
                <p style={styles.pNav}>MES REALISATIONS</p>
            </div>
            {showForm && (
                <div style={styles.modalOverlay}>
                    <div style={styles.modal}>
                        <button style={styles.closeButton} onClick={handleCloseClick}>X</button>
                        <form style={styles.form}>
                            <div className="formInput" style={styles.formInput} >
                                <label className="blockLabel" style={styles.blockLabel}>
                                    Nom:
                                    <input type="text" name="name" />
                                </label>
                            </div>
                            <div className="formInput" style={styles.formInput}>
                                <label className="blockLabel" style={styles.blockLabel}>
                                    Email:
                                    <input type="email" name="email" />
                                </label>
                            </div>
                            <div className="formInput" style={styles.formInput}>
                                <label className="blockLabel" style={styles.blockLabel}>
                                    Message:
                                    <textarea name="message"></textarea>
                                </label>
                            </div>
                            <button type="submit">Envoyer</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

const styles = {
    navContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: '20px',
        background: 'lightgrey',
        paddingLeft:'50px',
        paddingRight:'50px'
    },
    pNav: {
        fontSize: '14px',
        cursor: 'pointer'
    },
    modalOverlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000 
    },
    modal: {
        backgroundColor: 'white',
        padding: '40px',
        borderRadius: '8px',
        position: 'relative',
        zIndex: 1001 
    },
    closeButton: {
        position: 'absolute',
        top: '10px',
        right: '10px',
        background: 'none',
        border: 'none',
        fontSize: '16px',
        cursor: 'pointer'
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
    },
    formInput:{
        display:'flex',
        flexDirection:'column',
    },
    blockLabel:{
        display:'flex',
        flexDirection:'column'
    }
};

export default Nav;
